
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const SouthWestFAQ = () => {
  const faqs = [
    {
      question: "Do you provide event medical cover across South West England?",
      answer: "Yes, we provide comprehensive event medical coverage across the entire South West region, from Bristol and Bath to Cornwall and Devon. Our teams are strategically positioned throughout the counties."
    },
    {
      question: "What types of events do you cover in the South West?",
      answer: "We cover all types of events including festivals, sports events, concerts, corporate functions, charity events, agricultural shows, and community gatherings. From Glastonbury Festival to coastal events in Cornwall."
    },
    {
      question: "Do you provide medical cover for events at Eden Project and other major venues?",
      answer: "Yes, we have extensive experience providing medical cover for events at major venues including the Eden Project, Plymouth Pavilions, and other large South West venues."
    },
    {
      question: "How far in advance should I book medical cover for my South West event?",
      answer: "We recommend booking at least 4-6 weeks in advance, especially during peak summer season and for events coinciding with major South West festivals and tourist periods."
    },
    {
      question: "Do you provide medical cover for events in remote South West locations?",
      answer: "Absolutely. We have extensive experience providing medical cover for events in remote locations across the South West, including Dartmoor, Exmoor, and coastal areas of Cornwall and Devon."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Frequently Asked Questions - South West Medical Services
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

export default SouthWestFAQ;
