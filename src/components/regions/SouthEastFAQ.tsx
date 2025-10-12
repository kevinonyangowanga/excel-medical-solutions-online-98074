
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const SouthEastFAQ = () => {
  const faqs = [
    {
      question: "Do you provide event medical cover across South East England?",
      answer: "Yes, we provide comprehensive event medical coverage across the entire South East region, from Kent and Surrey to Sussex and Hampshire. Our teams are strategically positioned throughout the counties."
    },
    {
      question: "What types of events do you cover in the South East?",
      answer: "We cover all types of events including festivals, sports events, concerts, corporate functions, charity events, agricultural shows, and community gatherings. From Brighton festivals to Hampshire country shows."
    },
    {
      question: "Do you provide medical cover for events at major South East venues?",
      answer: "Yes, we have extensive experience providing medical cover for events at major venues including the Amex Stadium, Southampton venues, and other large South East locations."
    },
    {
      question: "How far in advance should I book medical cover for my South East event?",
      answer: "We recommend booking at least 4-6 weeks in advance, especially during peak summer season and for events coinciding with major South East festivals and tourist periods."
    },
    {
      question: "Do you provide medical cover for events in coastal South East locations?",
      answer: "Absolutely. We have extensive experience providing medical cover for events in coastal locations across the South East, including Brighton seafront, Kent coast, and Hampshire coastal areas."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Frequently Asked Questions - South East Medical Services
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-start">
                  <HelpCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                  {faq.question}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SouthEastFAQ;
