import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Clock, MapPin, Users, CheckCircle } from 'lucide-react';
import { format } from 'date-fns';

interface Course {
  id: string;
  title: string;
  description: string | null;
  duration: string | null;
  price: number | null;
  category: string | null;
}

interface Session {
  id: string;
  course_id: string;
  session_date: string;
  start_time: string;
  location: string | null;
  available_spots: number;
}

const TrainingBook = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const [courses, setCourses] = useState<Course[]>([]);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    participants: '1',
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    if (selectedCourse) {
      fetchSessions(selectedCourse.id);
    }
  }, [selectedCourse]);

  const fetchCourses = async () => {
    const { data, error } = await supabase
      .from('training_courses')
      .select('*')
      .eq('is_active', true)
      .order('title');

    if (data) setCourses(data);
    setLoading(false);
  };

  const fetchSessions = async (courseId: string) => {
    const { data, error } = await supabase
      .from('course_sessions')
      .select('*')
      .eq('course_id', courseId)
      .gte('session_date', new Date().toISOString().split('T')[0])
      .gt('available_spots', 0)
      .order('session_date');

    if (data) setSessions(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSession) return;
    
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('course_bookings').insert({
        user_id: user?.id || null,
        session_id: selectedSession.id,
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        company: formData.company || null,
        participants: parseInt(formData.participants),
      });

      if (error) throw error;

      setSubmitted(true);
      toast({
        title: 'Booking Submitted!',
        description: 'We\'ll send you a confirmation email shortly.',
      });
    } catch (error) {
      console.error('Error submitting booking:', error);
      toast({
        title: 'Error',
        description: 'Failed to submit booking. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <SEO 
          title="Booking Confirmed - Excel Medical Solutions"
          description="Your training course booking has been submitted."
        />
        <Header />
        <main className="py-16">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4">Booking Submitted!</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Thank you for booking with Excel Medical Solutions.
            </p>
            {selectedCourse && selectedSession && (
              <Card className="mb-6 text-left">
                <CardContent className="py-6">
                  <h3 className="font-semibold text-lg mb-2">{selectedCourse.title}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {format(new Date(selectedSession.session_date), 'PPPP')}
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {selectedSession.start_time}
                    </p>
                    {selectedSession.location && (
                      <p className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {selectedSession.location}
                      </p>
                    )}
                  </div>
                  {selectedCourse.price && (
                    <p className="text-2xl font-bold mt-4">
                      £{(selectedCourse.price * parseInt(formData.participants)).toFixed(2)}
                    </p>
                  )}
                </CardContent>
              </Card>
            )}
            <p className="text-muted-foreground mb-8">
              A confirmation email will be sent to {formData.email} with payment details and joining instructions.
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => navigate('/training')}>View More Courses</Button>
              {user && (
                <Button variant="outline" onClick={() => navigate('/portal')}>
                  View in Portal
                </Button>
              )}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Book Training Course - Excel Medical Solutions"
        description="Book your first aid or medical training course with Excel Medical Solutions. HSE approved courses available across the UK."
      />
      <Header />
      <main className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Book a Training Course</h1>
            <p className="text-muted-foreground">
              Choose your course and preferred date below
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">Loading courses...</div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                {/* Step 1: Select Course */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">1</span>
                      Select a Course
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {courses.map((course) => (
                        <div
                          key={course.id}
                          className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                            selectedCourse?.id === course.id
                              ? 'border-primary bg-primary/5'
                              : 'hover:border-primary/50'
                          }`}
                          onClick={() => {
                            setSelectedCourse(course);
                            setSelectedSession(null);
                          }}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold">{course.title}</h3>
                              <p className="text-sm text-muted-foreground mt-1">
                                {course.description}
                              </p>
                              <div className="flex gap-4 mt-2 text-sm">
                                {course.duration && (
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {course.duration}
                                  </span>
                                )}
                                {course.category && (
                                  <Badge variant="secondary">{course.category}</Badge>
                                )}
                              </div>
                            </div>
                            {course.price && (
                              <span className="text-lg font-bold">
                                £{course.price.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Step 2: Select Date */}
                {selectedCourse && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">2</span>
                        Select a Date
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {sessions.length === 0 ? (
                        <p className="text-muted-foreground text-center py-4">
                          No upcoming sessions available. Please contact us to arrange a date.
                        </p>
                      ) : (
                        <div className="grid sm:grid-cols-2 gap-4">
                          {sessions.map((session) => (
                            <div
                              key={session.id}
                              className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                                selectedSession?.id === session.id
                                  ? 'border-primary bg-primary/5'
                                  : 'hover:border-primary/50'
                              }`}
                              onClick={() => setSelectedSession(session)}
                            >
                              <p className="font-semibold">
                                {format(new Date(session.session_date), 'EEEE, d MMMM yyyy')}
                              </p>
                              <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {session.start_time}
                              </p>
                              {session.location && (
                                <p className="text-sm text-muted-foreground flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  {session.location}
                                </p>
                              )}
                              <p className="text-sm text-muted-foreground flex items-center gap-1 mt-2">
                                <Users className="w-4 h-4" />
                                {session.available_spots} spots left
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}

                {/* Step 3: Your Details */}
                {selectedSession && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">3</span>
                        Your Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              required
                            />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="company">Company/Organisation</Label>
                            <Input
                              id="company"
                              value={formData.company}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="participants">Number of Participants</Label>
                          <Input
                            id="participants"
                            type="number"
                            min="1"
                            max={selectedSession.available_spots}
                            value={formData.participants}
                            onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
                          />
                        </div>
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? 'Submitting...' : 'Book Now'}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Summary Sidebar */}
              <div>
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle>Booking Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {selectedCourse ? (
                      <>
                        <div>
                          <p className="font-semibold">{selectedCourse.title}</p>
                          {selectedCourse.duration && (
                            <p className="text-sm text-muted-foreground">{selectedCourse.duration}</p>
                          )}
                        </div>
                        {selectedSession && (
                          <div className="pt-4 border-t">
                            <p className="text-sm font-medium">Selected Date</p>
                            <p>{format(new Date(selectedSession.session_date), 'PPP')}</p>
                            <p className="text-sm text-muted-foreground">{selectedSession.start_time}</p>
                            {selectedSession.location && (
                              <p className="text-sm text-muted-foreground">{selectedSession.location}</p>
                            )}
                          </div>
                        )}
                        {selectedCourse.price && (
                          <div className="pt-4 border-t">
                            <div className="flex justify-between">
                              <span>Price per person</span>
                              <span>£{selectedCourse.price.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between font-bold text-lg mt-2">
                              <span>Total</span>
                              <span>£{(selectedCourse.price * parseInt(formData.participants || '1')).toFixed(2)}</span>
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <p className="text-muted-foreground">
                        Select a course to see booking details
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrainingBook;
