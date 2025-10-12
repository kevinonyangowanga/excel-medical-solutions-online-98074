
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, BookOpen, Clock } from "lucide-react";

const TrainingOverview = () => {
  const features = [
    {
      icon: Heart,
      title: "Life-Saving Skills",
      description: "Learn essential emergency response and first aid techniques that can save lives in critical situations."
    },
    {
      icon: Shield,
      title: "Industry Certified",
      description: "All our courses are accredited and recognised by leading medical and safety organisations."
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "From basic first aid to advanced trauma care, our courses cover all aspects of event medical services."
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description: "Choose from intensive weekend courses, evening sessions, or bespoke training programmes."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-medical-darkGreen mb-4">
            Why Choose Our Training?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our training programmes are designed by experienced medical professionals who understand 
            the unique challenges of event medical services. We combine theoretical knowledge with 
            practical, hands-on experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-l-4 border-l-[#d2f406] hover:shadow-lg transition-shadow">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-[#d2f406] mx-auto mb-4" />
                <CardTitle className="text-medical-darkGreen">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingOverview;
