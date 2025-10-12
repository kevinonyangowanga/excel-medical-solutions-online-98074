
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const ScotlandFAQ = () => {
  const faqs = [
    {
      question: "Do you provide event medical cover across all of Scotland?",
      answer: "Yes, we provide comprehensive event medical coverage across the entire Scotland including Edinburgh, Glasgow, Aberdeen, the Highlands, Islands, and all Scottish regions. Our teams are strategically positioned throughout the country."
    },
    {
      question: "What types of events do you cover in Scotland?",
      answer: "We cover all types of events including festivals, sports events, concerts, corporate functions, charity events, Highland games, and community gatherings. From Edinburgh festivals to Highland outdoor events and island celebrations."
    },
    {
      question: "Do you provide medical cover for events in remote Scottish locations?",
      answer: "Absolutely. We have extensive experience providing medical cover for events in remote locations across the Highlands, Islands, and rural Scotland, including outdoor festivals, Highland games, and sporting events."
    },
    {
      question: "How far in advance should I book medical cover for my Scottish event?",
      answer: "We recommend booking at least 4-6 weeks in advance, especially during peak summer season and for events coinciding with major Scottish festivals like Edinburgh Festival Fringe."
    },
    {
      question: "Do you have experience with major Scottish venues and events?",
      answer: "Yes, we have extensive experience providing medical cover for events at major Scottish venues and have supported various types of events from city festivals to Highland gatherings across all Scottish regions."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Frequently Asked Questions - Scotland Medical Services
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-start">
                  <HelpCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
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

export default ScotlandFAQ;
