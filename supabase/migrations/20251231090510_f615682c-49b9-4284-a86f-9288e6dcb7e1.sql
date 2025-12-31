-- Create profiles table for client portal
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  full_name TEXT,
  company_name TEXT,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create contact_submissions table
CREATE TABLE public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  event_type TEXT,
  event_date DATE,
  attendees TEXT,
  message TEXT,
  status TEXT DEFAULT 'new' NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form" ON public.contact_submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can view own submissions" ON public.contact_submissions
  FOR SELECT USING (auth.uid() = user_id);

-- Create training_courses table
CREATE TABLE public.training_courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  duration TEXT,
  price DECIMAL(10,2),
  max_participants INTEGER DEFAULT 12,
  category TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

ALTER TABLE public.training_courses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active courses" ON public.training_courses
  FOR SELECT USING (is_active = true);

-- Create course_sessions table (available dates)
CREATE TABLE public.course_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID REFERENCES public.training_courses(id) ON DELETE CASCADE NOT NULL,
  session_date DATE NOT NULL,
  start_time TIME NOT NULL,
  location TEXT,
  available_spots INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

ALTER TABLE public.course_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view sessions" ON public.course_sessions
  FOR SELECT USING (true);

-- Create course_bookings table
CREATE TABLE public.course_bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  session_id UUID REFERENCES public.course_sessions(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  participants INTEGER DEFAULT 1,
  status TEXT DEFAULT 'pending' NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

ALTER TABLE public.course_bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create booking" ON public.course_bookings
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can view own bookings" ON public.course_bookings
  FOR SELECT USING (auth.uid() = user_id);

-- Create quote_requests table
CREATE TABLE public.quote_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  event_type TEXT NOT NULL,
  event_date DATE,
  event_duration_hours INTEGER,
  expected_attendees INTEGER,
  location TEXT,
  service_level TEXT,
  additional_requirements TEXT,
  estimated_quote DECIMAL(10,2),
  status TEXT DEFAULT 'new' NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit quote request" ON public.quote_requests
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can view own quotes" ON public.quote_requests
  FOR SELECT USING (auth.uid() = user_id);

-- Create function to handle new user profiles
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name)
  VALUES (NEW.id, NEW.raw_user_meta_data ->> 'full_name');
  RETURN NEW;
END;
$$;

-- Trigger to create profile on signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample training courses
INSERT INTO public.training_courses (title, description, duration, price, category) VALUES
('First Aid at Work', 'Comprehensive 3-day course covering all aspects of workplace first aid. HSE approved.', '3 days', 299.00, 'First Aid'),
('Emergency First Aid at Work', 'Essential 1-day course for basic first aid skills in the workplace.', '1 day', 99.00, 'First Aid'),
('Paediatric First Aid', '2-day course focused on first aid for infants and children. Ofsted approved.', '2 days', 189.00, 'First Aid'),
('First Aid Refresher', 'Annual refresher course to maintain your first aid certification.', '1 day', 79.00, 'First Aid'),
('AED Training', 'Learn to use Automated External Defibrillators effectively.', '4 hours', 59.00, 'Specialist'),
('Mental Health First Aid', '2-day course teaching skills to support mental health in the workplace.', '2 days', 249.00, 'Specialist');

-- Insert sample sessions
INSERT INTO public.course_sessions (course_id, session_date, start_time, location, available_spots)
SELECT 
  id,
  CURRENT_DATE + (n * 7),
  '09:00',
  'London Training Centre',
  12
FROM public.training_courses, generate_series(1, 4) AS n
WHERE is_active = true;