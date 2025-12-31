import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Calendar, FileText, User, LogOut, Clock } from 'lucide-react';
import { format } from 'date-fns';

interface QuoteRequest {
  id: string;
  event_type: string;
  event_date: string | null;
  expected_attendees: number | null;
  status: string;
  estimated_quote: number | null;
  created_at: string;
}

interface CourseBooking {
  id: string;
  status: string;
  created_at: string;
  course_sessions: {
    session_date: string;
    location: string | null;
    training_courses: {
      title: string;
    };
  };
}

interface ContactSubmission {
  id: string;
  event_type: string | null;
  status: string;
  created_at: string;
  message: string | null;
}

const Portal = () => {
  const navigate = useNavigate();
  const { user, loading, signOut } = useAuth();
  const { toast } = useToast();
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [bookings, setBookings] = useState<CourseBooking[]>([]);
  const [inquiries, setInquiries] = useState<ContactSubmission[]>([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      fetchUserData();
    }
  }, [user]);

  const fetchUserData = async () => {
    try {
      const [quotesRes, bookingsRes, inquiriesRes] = await Promise.all([
        supabase
          .from('quote_requests')
          .select('*')
          .order('created_at', { ascending: false }),
        supabase
          .from('course_bookings')
          .select(`
            *,
            course_sessions (
              session_date,
              location,
              training_courses (
                title
              )
            )
          `)
          .order('created_at', { ascending: false }),
        supabase
          .from('contact_submissions')
          .select('*')
          .order('created_at', { ascending: false }),
      ]);

      if (quotesRes.data) setQuotes(quotesRes.data);
      if (bookingsRes.data) setBookings(bookingsRes.data as unknown as CourseBooking[]);
      if (inquiriesRes.data) setInquiries(inquiriesRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoadingData(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    toast({
      title: 'Signed Out',
      description: 'You have been successfully signed out.',
    });
    navigate('/');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'pending':
      case 'new':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Client Portal - Excel Medical Solutions"
        description="Manage your bookings, quotes, and account with Excel Medical Solutions."
      />
      <Header />
      <main className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Welcome back!</h1>
              <p className="text-muted-foreground">{user.email}</p>
            </div>
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>

          <Tabs defaultValue="quotes" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="quotes" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Quotes ({quotes.length})
              </TabsTrigger>
              <TabsTrigger value="bookings" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Course Bookings ({bookings.length})
              </TabsTrigger>
              <TabsTrigger value="inquiries" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Inquiries ({inquiries.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="quotes">
              {loadingData ? (
                <div className="text-center py-8">Loading...</div>
              ) : quotes.length === 0 ? (
                <Card>
                  <CardContent className="py-12 text-center">
                    <FileText className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No Quote Requests</h3>
                    <p className="text-muted-foreground mb-4">
                      You haven't requested any quotes yet.
                    </p>
                    <Button onClick={() => navigate('/quote')}>Get a Quote</Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-4">
                  {quotes.map((quote) => (
                    <Card key={quote.id}>
                      <CardContent className="py-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{quote.event_type}</h3>
                            <div className="text-sm text-muted-foreground flex items-center gap-4 mt-1">
                              {quote.event_date && (
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {format(new Date(quote.event_date), 'PPP')}
                                </span>
                              )}
                              {quote.expected_attendees && (
                                <span>{quote.expected_attendees} attendees</span>
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              Submitted {format(new Date(quote.created_at), 'PPP')}
                            </p>
                          </div>
                          <div className="text-right">
                            <Badge className={getStatusColor(quote.status)}>
                              {quote.status}
                            </Badge>
                            {quote.estimated_quote && (
                              <p className="text-lg font-bold mt-2">
                                £{quote.estimated_quote.toFixed(2)}
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="bookings">
              {loadingData ? (
                <div className="text-center py-8">Loading...</div>
              ) : bookings.length === 0 ? (
                <Card>
                  <CardContent className="py-12 text-center">
                    <Calendar className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No Course Bookings</h3>
                    <p className="text-muted-foreground mb-4">
                      You haven't booked any training courses yet.
                    </p>
                    <Button onClick={() => navigate('/training/book')}>Browse Courses</Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <Card key={booking.id}>
                      <CardContent className="py-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">
                              {booking.course_sessions?.training_courses?.title}
                            </h3>
                            <div className="text-sm text-muted-foreground mt-1">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {booking.course_sessions?.session_date && 
                                  format(new Date(booking.course_sessions.session_date), 'PPP')}
                              </span>
                              {booking.course_sessions?.location && (
                                <span className="mt-1 block">{booking.course_sessions.location}</span>
                              )}
                            </div>
                          </div>
                          <Badge className={getStatusColor(booking.status)}>
                            {booking.status}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="inquiries">
              {loadingData ? (
                <div className="text-center py-8">Loading...</div>
              ) : inquiries.length === 0 ? (
                <Card>
                  <CardContent className="py-12 text-center">
                    <User className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No Inquiries</h3>
                    <p className="text-muted-foreground mb-4">
                      You haven't submitted any inquiries yet.
                    </p>
                    <Button onClick={() => navigate('/contact')}>Contact Us</Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-4">
                  {inquiries.map((inquiry) => (
                    <Card key={inquiry.id}>
                      <CardContent className="py-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{inquiry.event_type || 'General Inquiry'}</h3>
                            {inquiry.message && (
                              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                                {inquiry.message}
                              </p>
                            )}
                            <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              Submitted {format(new Date(inquiry.created_at), 'PPP')}
                            </p>
                          </div>
                          <Badge className={getStatusColor(inquiry.status)}>
                            {inquiry.status}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portal;
