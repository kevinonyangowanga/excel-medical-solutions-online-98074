
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const EastMidlandsFAQ = () => {
  const faqs = [
    {
      question: "Do you provide event medical cover across all of East Midlands?",
      answer: "Yes, we provide comprehensive event medical coverage across the entire East Midlands including Nottingham, Leicester, Derby, Lincoln, and all surrounding areas. Our teams are strategically positioned throughout the region."
    },
    {
      question: "What types of events do you cover in East Midlands?",
      answer: "We cover all types of events including festivals, sports events, concerts, corporate functions, charity events, agricultural shows, and community gatherings across Nottinghamshire, Leicestershire, Derbyshire, Lincolnshire, and Northamptonshire."
    },
    {
      question: "Do you have experience with major East Midlands venues?",
      answer: "Yes, we have extensive experience providing medical cover for events at major venues across the East Midlands and have supported various types of events from city festivals to rural agricultural shows."
    },
    {
      question: "How far in advance should I book medical cover for my East Midlands event?",
      answer: "We recommend booking at least 4-6 weeks in advance, especially during peak summer season and for events coinciding with major regional festivals and agricultural shows."
    },
    {
      question: "Do you provide medical cover for outdoor events in rural East Midlands?",
      answer: "Absolutely. We have extensive experience providing medical cover for outdoor events in rural locations across the East Midlands, including agricultural shows, country fairs, and outdoor festivals."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Frequently Asked Questions - East Midlands Medical Services
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

export default EastMidlandsFAQ;
