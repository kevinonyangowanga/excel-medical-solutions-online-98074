
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Shield, Clock, Target, Heart, Handshake } from "lucide-react";

const CompanyValues = () => {
  const values = [{
    icon: Handshake,
    title: "Safety First",
    description: "We prioritise the safety and wellbeing of everyone at your event with comprehensive risk assessment and emergency preparedness."
  }, {
    icon: Award,
    title: "Professional Excellence",
    description: "Our team of qualified paramedics and medical professionals maintain the highest standards of care and professionalism."
  }, {
    icon: Heart,
    title: "Compassionate Care",
    description: "We provide medical care with empathy and understanding, ensuring patients feel supported during stressful situations."
  }, {
    icon: Clock,
    title: "Rapid Response",
    description: "Our 24/7 emergency response capability ensures immediate medical intervention when every second counts."
  }, {
    icon: Users,
    title: "Team Expertise",
    description: "With over 75 years of combined experience, our team brings unmatched knowledge to event medical services."
  }, {
    icon: Target,
    title: "Tailored Solutions",
    description: "We customise our medical services to meet the specific needs and risks of your event type and size."
  }];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Commitment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These core values guide everything we do and ensure we deliver the highest 
            standard of medical care for every event.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center" style={{
                  backgroundColor: '#d2f406'
                }}>
                  <value.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;
