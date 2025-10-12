
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Industry Expertise",
      description: "Deep understanding of the specific medical requirements and challenges unique to each industry and event type."
    },
    {
      title: "Flexible Scaling",
      description: "From small community events to major festivals, we scale our services to match your event size and requirements."
    },
    {
      title: "Regulatory Compliance",
      description: "Full compliance with industry regulations, insurance requirements, and safety standards for each sector we serve."
    },
    {
      title: "Custom Risk Assessment",
      description: "Tailored risk assessments considering the specific hazards and medical requirements of your industry and event type."
    },
    {
      title: "Specialised Equipment",
      description: "Industry-appropriate medical equipment and resources designed for the specific challenges of your event environment."
    },
    {
      title: "Experienced Teams",
      description: "Medical professionals with specific training and experience in your industry sector for optimal care delivery."
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Event Organisers Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our industry-specific expertise ensures your event receives the most appropriate 
            medical coverage for its unique requirements and risk profile.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#006400' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
