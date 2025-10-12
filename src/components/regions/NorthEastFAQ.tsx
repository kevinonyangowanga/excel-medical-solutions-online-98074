
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const NorthEastFAQ = () => {
  const faqs = [
    {
      question: "Do you provide event medical cover across North East England and Scottish Borders?",
      answer: "Yes, we provide comprehensive event medical coverage across the entire North East region including Newcastle, Durham, Sunderland, Northumberland, and extending to the Scottish Borders. Our teams are strategically positioned throughout the counties."
    },
    {
      question: "What types of events do you cover in North East England?",
      answer: "We cover all types of events including festivals, sports events, concerts, corporate functions, charity events, agricultural shows, and community gatherings. From Newcastle music festivals to Northumberland outdoor events."
    },
    {
      question: "Do you provide medical cover for events at major North East venues?",
      answer: "Yes, we have extensive experience providing medical cover for events at major venues including Newcastle Arena, Stadium of Light, and other large North East locations."
    },
    {
      question: "How far in advance should I book medical cover for my North East event?",
      answer: "We recommend booking at least 4-6 weeks in advance, especially during peak summer season and for events coinciding with major North East festivals and sporting events."
    },
    {
      question: "Do you provide medical cover for events in remote Northumberland locations?",
      answer: "Absolutely. We have extensive experience providing medical cover for events in remote locations across Northumberland and the Scottish Borders, including outdoor festivals, agricultural shows, and sporting events."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Frequently Asked Questions - North East Medical Services
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

export default NorthEastFAQ;
