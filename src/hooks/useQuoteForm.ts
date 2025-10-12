
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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

export const useQuoteForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    location: "",
    attendees: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      location: "",
      attendees: "",
      message: ""
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    setIsSubmitting(true);
    
    try {
      // Create mailto link
      const subject = encodeURIComponent(`Quote Request - ${formData.eventType}`);
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Event Type: ${formData.eventType}
Event Date: ${formData.eventDate}
Location: ${formData.location}
Expected Attendees: ${formData.attendees}
Additional Information: ${formData.message}
      `);
      
      const mailtoLink = `mailto:events@excelems.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      toast({
        title: "Quote Request Prepared",
        description: "Your email client will open with the quote request ready to send.",
      });

      resetForm();
      
    } catch (error) {
      console.error("Error preparing email:", error);
      
      toast({
        title: "Error",
        description: "There was an issue preparing your quote request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    handleInputChange,
    handleSubmit
  };
};
