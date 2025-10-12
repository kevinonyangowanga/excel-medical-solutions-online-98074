
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Ambulance, Users, Clock } from "lucide-react";

const LondonServices = () => {
  const services = [
    {
      icon: Ambulance,
      title: "Event Medical Services",
      description: "Comprehensive medical coverage for events of all sizes with qualified paramedics and emergency response teams.",
      features: [
        "Qualified Paramedics & EMTs",
        "Mobile Medical Units",
        "Emergency Response Teams",
        "Risk Assessment & Planning",
        "Medical Equipment Supply",
        "Crowd Safety Management"
      ],
      suitableFor: ["Festivals", "Sports Events", "Concerts", "Corporate Events"]
    },
    {
      icon: Users,
      title: "Onsite Treatment Centres",
      description: "Mobile medical facilities equipped with advanced treatment capabilities for comprehensive patient care.",
      features: [
        "Mobile Treatment Units",
        "Advanced Medical Equipment",
        "Qualified Medical Staff",
        "Minor Injury Treatment",
        "Emergency Stabilisation",
        "Patient Monitoring"
      ],
      suitableFor: ["Large Events", "Remote Locations", "Multi-day Events", "High-Risk Activities"]
    },
    {
      icon: Clock,
      title: "First Aid & Emergency Response",
      description: "Professional first aid teams and emergency response services for immediate medical intervention.",
      features: [
        "Qualified Medical Teams",
        "Emergency Response Plans",
        "Incident Management",
        "Basic Life Support",
        "Wound Care & Treatment",
        "Health Care Professionals"
      ],
      suitableFor: ["Festivals", "Sports Events", "Community Events", "Small Events"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our Event Medical Services in London
        </h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-yellow-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Service Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Suitable For:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.suitableFor.map((item, idx) => (
                      <span key={idx} className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LondonServices;
