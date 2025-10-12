
import { Card, CardContent } from "@/components/ui/card";
import { Car, Bike, Heart, HardHat, Truck, Users, MapPin, Shield, Trophy } from "lucide-react";

const AdditionalServicesSection = () => {
  const additionalServices = [
    { name: "VIP Medical Services", icon: Heart },
    { name: "4x4 Vehicles", icon: Truck },
    { name: "Sports Medical Services", icon: Trophy },
    { name: "Industrial Services", icon: HardHat },
    { name: "Cycle Responders", icon: Bike },
    { name: "Stage Pit Teams", icon: Users },
    { name: "Endurance Medics", icon: MapPin },
    { name: "Light Rescue Teams", icon: Shield }
  ];

  return (
    <section className="py-16 lg:py-20 bg-[#006400]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Additional Services
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Supporting services to ensure comprehensive medical coverage and safety management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalServices.map((service, index) => (
            <Card key={index} className="bg-white border-gray-200 relative">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <service.icon className="w-8 h-8 text-[#d2f406]" />
                </div>
                <h3 className="font-semibold text-gray-900">{service.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServicesSection;
