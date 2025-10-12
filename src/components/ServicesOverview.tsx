
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stethoscope, Truck, Users, Clock, Shield, MapPin } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: <Stethoscope className="h-8 w-8 text-medical-blue" />,
      title: "Event Medical Cover",
      description: "Professional medical coverage for events of all sizes, from intimate gatherings to major festivals.",
      features: ["Qualified paramedics", "First aid stations", "Emergency response"]
    },
    {
      icon: <Truck className="h-8 w-8 text-medical-blue" />,
      title: "Ambulance Services",
      description: "Rapid response ambulance services with fully equipped vehicles and trained medical professionals.",
      features: ["24/7 availability", "Advanced life support", "Hospital transfers"]
    },
    {
      icon: <Users className="h-8 w-8 text-medical-blue" />,
      title: "Healthcare Staffing",
      description: "Experienced medical professionals including paramedics, nurses, and emergency medical technicians.",
      features: ["Certified professionals", "Flexible staffing", "Specialized training"]
    }
  ];

  const features = [
    {
      icon: <Clock className="h-6 w-6 text-medical-green" />,
      title: "24/7 Response",
      description: "Round-the-clock emergency medical response"
    },
    {
      icon: <Shield className="h-6 w-6 text-medical-green" />,
      title: "Fully Insured",
      description: "Comprehensive insurance coverage for peace of mind"
    },
    {
      icon: <MapPin className="h-6 w-6 text-medical-green" />,
      title: "UK-Wide Coverage",
      description: "Services available across all regions of the UK"
    }
  ];

  return (
    <section aria-labelledby="services-heading" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Professional Medical Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive event medical solutions tailored to your specific needs. 
            From small private gatherings to large-scale public events, we ensure the safety and wellbeing of all attendees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-t-4 border-t-medical-blue">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4" aria-hidden="true">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-medical-green rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-medical-blue hover:bg-medical-blue/90 text-white" asChild>
              <a href="/contact">Get Your Free Quote</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
