
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const NorthWestFAQ = () => {
  const faqs = [
    {
      question: "Do you provide event medical cover across North West England and Cumbria?",
      answer: "Yes, we provide comprehensive event medical coverage across the entire North West region and Cumbria, from Manchester and Liverpool to the Lake District. Our teams are strategically positioned throughout the counties."
    },
    {
      question: "What types of events do you cover in the North West?",
      answer: "We cover all types of events including festivals, sports events, concerts, corporate functions, charity events, agricultural shows, and community gatherings. From Manchester music festivals to Lake District outdoor events."
    },
    {
      question: "Do you provide medical cover for events at major North West venues?",
      answer: "Yes, we have extensive experience providing medical cover for events at major venues including Manchester Arena, Liverpool Echo Arena, and other large North West locations."
    },
    {
      question: "How far in advance should I book medical cover for my North West event?",
      answer: "We recommend booking at least 4-6 weeks in advance, especially during peak summer season and for events coinciding with major North West festivals and tourist periods in the Lake District."
    },
    {
      question: "Do you provide medical cover for events in remote Cumbrian locations?",
      answer: "Absolutely. We have extensive experience providing medical cover for events in remote locations across Cumbria and the Lake District, including fell walking events, outdoor festivals, and agricultural shows."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Frequently Asked Questions - North West Medical Services
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

export default NorthWestFAQ;
