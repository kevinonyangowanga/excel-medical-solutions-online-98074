import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Calculator, CheckCircle } from 'lucide-react';

const eventTypes = [
  'Festival',
  'Sporting Event',
  'Concert',
  'Corporate Event',
  'Wedding',
  'Private Party',
  'Marathon/Running Event',
  'Equestrian Event',
  'Charity Event',
  'Other',
];

const serviceLevels = [
  { value: 'basic', label: 'Basic First Aid', multiplier: 1 },
  { value: 'standard', label: 'Standard Medical Cover', multiplier: 1.5 },
  { value: 'enhanced', label: 'Enhanced Medical Cover', multiplier: 2 },
  { value: 'comprehensive', label: 'Comprehensive (with Ambulance)', multiplier: 3 },
];

const Quote = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [estimatedQuote, setEstimatedQuote] = useState<number | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    eventType: '',
    eventDate: '',
    eventDurationHours: '',
    expectedAttendees: '',
    location: '',
    serviceLevel: '',
    additionalRequirements: '',
  });

  const calculateEstimate = () => {
    const attendees = parseInt(formData.expectedAttendees) || 0;
    const hours = parseInt(formData.eventDurationHours) || 4;
    const serviceMultiplier = serviceLevels.find(s => s.value === formData.serviceLevel)?.multiplier || 1;
    
    // Base rate calculation
    let baseRate = 150; // Minimum charge
    
    if (attendees <= 100) {
      baseRate = 250;
    } else if (attendees <= 500) {
      baseRate = 450;
    } else if (attendees <= 1000) {
      baseRate = 750;
    } else if (attendees <= 5000) {
      baseRate = 1500;
    } else {
      baseRate = 2500;
    }
    
    // Apply duration factor (base is 4 hours)
    const durationFactor = Math.max(1, hours / 4);
    
    // Calculate estimate
    const estimate = baseRate * serviceMultiplier * durationFactor;
    setEstimatedQuote(Math.round(estimate));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('quote_requests').insert({
        user_id: user?.id || null,
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        company: formData.company || null,
        event_type: formData.eventType,
        event_date: formData.eventDate || null,
        event_duration_hours: parseInt(formData.eventDurationHours) || null,
        expected_attendees: parseInt(formData.expectedAttendees) || null,
        location: formData.location || null,
        service_level: formData.serviceLevel || null,
        additional_requirements: formData.additionalRequirements || null,
        estimated_quote: estimatedQuote,
      });

      if (error) throw error;

      setSubmitted(true);
      toast({
        title: 'Quote Request Submitted!',
        description: 'We\'ll get back to you within 2 hours during business hours.',
      });
    } catch (error) {
      console.error('Error submitting quote:', error);
      toast({
        title: 'Error',
        description: 'Failed to submit quote request. Please try again.',
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
          title="Quote Submitted - Excel Medical Solutions"
          description="Your quote request has been submitted successfully."
        />
        <Header />
        <main className="py-16">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4">Quote Request Submitted!</h1>
            <p className="text-lg text-muted-foreground mb-4">
              Thank you for your interest in Excel Medical Solutions.
            </p>
            {estimatedQuote && (
              <Card className="mb-6">
                <CardContent className="py-6">
                  <p className="text-muted-foreground">Estimated Quote</p>
                  <p className="text-4xl font-bold text-primary">
                    From £{estimatedQuote.toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Final quote may vary based on specific requirements
                  </p>
                </CardContent>
              </Card>
            )}
            <p className="text-muted-foreground mb-8">
              Our team will review your requirements and contact you within 2 hours during business hours with a detailed quote.
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => navigate('/')}>Return Home</Button>
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
        title="Get an Instant Quote - Excel Medical Solutions"
        description="Get an instant estimate for event medical cover. Enter your event details and receive a quote in seconds."
      />
      <Header />
      <main className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Get Your Instant Quote</h1>
            <p className="text-muted-foreground">
              Enter your event details below for an instant estimate
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Event Details</CardTitle>
                  <CardDescription>
                    Tell us about your event to get an accurate quote
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name *</Label>
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
                      <Label htmlFor="eventType">Event Type *</Label>
                      <Select
                        value={formData.eventType}
                        onValueChange={(value) => setFormData({ ...formData, eventType: value })}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          {eventTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="eventDate">Event Date</Label>
                        <Input
                          id="eventDate"
                          type="date"
                          value={formData.eventDate}
                          onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="duration">Duration (hours)</Label>
                        <Input
                          id="duration"
                          type="number"
                          min="1"
                          max="72"
                          value={formData.eventDurationHours}
                          onChange={(e) => setFormData({ ...formData, eventDurationHours: e.target.value })}
                          placeholder="e.g., 8"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="attendees">Expected Attendees *</Label>
                        <Input
                          id="attendees"
                          type="number"
                          min="1"
                          value={formData.expectedAttendees}
                          onChange={(e) => setFormData({ ...formData, expectedAttendees: e.target.value })}
                          placeholder="e.g., 500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Event Location</Label>
                        <Input
                          id="location"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="e.g., London"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="serviceLevel">Service Level</Label>
                      <Select
                        value={formData.serviceLevel}
                        onValueChange={(value) => setFormData({ ...formData, serviceLevel: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select service level" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceLevels.map((level) => (
                            <SelectItem key={level.value} value={level.value}>
                              {level.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="requirements">Additional Requirements</Label>
                      <Textarea
                        id="requirements"
                        value={formData.additionalRequirements}
                        onChange={(e) => setFormData({ ...formData, additionalRequirements: e.target.value })}
                        placeholder="Any specific requirements or questions..."
                        rows={4}
                      />
                    </div>

                    <div className="flex gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={calculateEstimate}
                        disabled={!formData.expectedAttendees}
                        className="flex-1"
                      >
                        <Calculator className="w-4 h-4 mr-2" />
                        Calculate Estimate
                      </Button>
                      <Button type="submit" disabled={isSubmitting} className="flex-1">
                        {isSubmitting ? 'Submitting...' : 'Submit Request'}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    Your Estimate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {estimatedQuote ? (
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Starting from</p>
                      <p className="text-4xl font-bold text-primary">
                        £{estimatedQuote.toLocaleString()}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        *Indicative price. Final quote based on specific requirements.
                      </p>
                    </div>
                  ) : (
                    <p className="text-center text-muted-foreground">
                      Enter event details and click "Calculate Estimate" to see your quote
                    </p>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">What's Included</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>✓ Qualified medical professionals</p>
                  <p>✓ All necessary medical equipment</p>
                  <p>✓ Event risk assessment</p>
                  <p>✓ Post-event report</p>
                  <p>✓ Full insurance coverage</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Quote;
