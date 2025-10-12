
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const MidlandsFAQ = () => {
  const faqs = [
    {
      question: "Do you provide event medical cover across the Midlands?",
      answer: "Yes, we provide comprehensive event medical coverage across the entire Midlands region, from Birmingham and Coventry to Nottingham and Leicester. Our teams are strategically positioned throughout the East and West Midlands."
    },
    {
      question: "What types of events do you cover in the Midlands?",
      answer: "We cover all types of events including festivals, sports events, concerts, corporate functions, charity events, agricultural shows, and community gatherings across the Midlands. From major Birmingham events to village fetes in rural Leicestershire."
    },
    {
      question: "Do you provide medical cover for events at the NEC Birmingham?",
      answer: "Yes, we have extensive experience providing medical cover for events at major venues including the NEC Birmingham, Resorts World Arena, and other large Midlands venues."
    },
    {
      question: "How far in advance should I book medical cover for my Midlands event?",
      answer: "We recommend booking at least 4-6 weeks in advance, especially during peak season and for events coinciding with major Midlands festivals and sporting events."
    },
    {
      question: "Do you provide medical cover for events in rural Midlands locations?",
      answer: "Absolutely. We have extensive experience providing medical cover for events in rural locations across the Midlands, including the Peak District, Cannock Chase, and other countryside venues."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Frequently Asked Questions - Midlands Medical Services
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

export default MidlandsFAQ;
