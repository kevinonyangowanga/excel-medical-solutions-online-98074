
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
  attendees: string;
  message: string;
}

interface ContactFormFieldsProps {
  formData: FormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  disabled: boolean;
}

const ContactFormFields = ({ formData, onInputChange, disabled }: ContactFormFieldsProps) => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={onInputChange}
            required
            placeholder="Your full name"
            disabled={disabled}
          />
        </div>
        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={onInputChange}
            required
            placeholder="your@email.com"
            disabled={disabled}
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={onInputChange}
            required
            placeholder="07XXX XXX XXX"
            disabled={disabled}
          />
        </div>
        <div>
          <Label htmlFor="eventType">Event Type *</Label>
          <Input
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={onInputChange}
            required
            placeholder="e.g., Festival, Sports Event, Corporate"
            disabled={disabled}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="eventDate">Event Date</Label>
          <Input
            id="eventDate"
            name="eventDate"
            type="date"
            value={formData.eventDate}
            onChange={onInputChange}
            disabled={disabled}
          />
        </div>
        <div>
          <Label htmlFor="attendees">Expected Attendees</Label>
          <Input
            id="attendees"
            name="attendees"
            value={formData.attendees}
            onChange={onInputChange}
            placeholder="e.g., 500, 1000+"
            disabled={disabled}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="location">Event Location</Label>
        <Input
          id="location"
          name="location"
          value={formData.location}
          onChange={onInputChange}
          placeholder="City, venue, or region"
          disabled={disabled}
        />
      </div>

      <div>
        <Label htmlFor="message">Additional Information</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={onInputChange}
          placeholder="Tell us about your event, specific medical requirements, or any questions you have..."
          rows={4}
          disabled={disabled}
        />
      </div>
    </>
  );
};

export default ContactFormFields;
