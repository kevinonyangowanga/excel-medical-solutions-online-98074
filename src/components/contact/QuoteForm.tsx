
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useQuoteForm } from "@/hooks/useQuoteForm";
import ContactFormFields from "./ContactFormFields";

const QuoteForm = () => {
  const {
    formData,
    isSubmitting,
    handleInputChange,
    handleSubmit
  } = useQuoteForm();

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-2xl">Request Your Free Quote</CardTitle>
        <CardDescription>
          Complete the form below and we'll get back to you within 2 hours during business hours.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <ContactFormFields
            formData={formData}
            onInputChange={handleInputChange}
            disabled={isSubmitting}
          />

          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            <Mail className="mr-2 h-5 w-5" />
            {isSubmitting ? "Sending..." : "Send Quote Request"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default QuoteForm;
