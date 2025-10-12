
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const WalesFAQ = () => {
  const faqs = [
    {
      question: "Do you provide event medical cover across all of Wales?",
      answer: "Yes, we provide comprehensive event medical coverage across all of Wales, from Cardiff and Swansea to rural areas in Snowdonia and Pembrokeshire. Our teams are strategically positioned to respond quickly to events throughout Wales."
    },
    {
      question: "What types of events do you cover in Wales?",
      answer: "We cover all types of events including festivals, sports events, concerts, corporate functions, charity events, agricultural shows, and community gatherings across Wales. From the Eisteddfod to local village fetes."
    },
    {
      question: "Do you have Welsh-speaking medical staff?",
      answer: "Yes, we have Welsh-speaking medical professionals available for events where bilingual support is required, ensuring effective communication with all attendees."
    },
    {
      question: "How far in advance should I book medical cover for my Welsh event?",
      answer: "We recommend booking at least 4-6 weeks in advance, especially during peak season (summer months) and for events coinciding with major Welsh festivals and rugby matches."
    },
    {
      question: "Do you provide medical cover for events in remote Welsh locations?",
      answer: "Absolutely. We have extensive experience providing medical cover for events in remote locations across Wales, including the Brecon Beacons, Snowdonia, and Pembrokeshire Coast."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Frequently Asked Questions - Wales Medical Services
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

export default WalesFAQ;
