
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Award } from "lucide-react";

const EquestrianEquipment = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Specialised Equestrian Medical Equipment & Vehicles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our medical teams and vehicles are fully equipped to NHS ambulance service standards, with additional specialised equipment for equestrian and remote events across the UK.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Truck className="h-8 w-8 mb-2" style={{ color: '#006400' }} />
              <CardTitle>Versatile Medical Fleet</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                We have the ability to supply both 4x4 vehicles and road ambulances, ensuring we can cover your equestrian event entirely regardless of the terrain or type of eventing across Britain.
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">4x4 Ambulances</Badge>
                <Badge variant="outline">Road Ambulances</Badge>
                <Badge variant="outline">Remote Access Capability</Badge>
                <Badge variant="outline">Cross-Country Access</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Award className="h-8 w-8 mb-2" style={{ color: '#006400' }} />
              <CardTitle>Advanced Medical Equipment</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                On our equestrian and remote events, we carry additional specialised equipment that other medical providers are unlikely to have, ensuring comprehensive care.
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">NHS Standard Equipment</Badge>
                <Badge variant="outline">Specialised Trauma Kit</Badge>
                <Badge variant="outline">Remote Event Equipment</Badge>
                <Badge variant="outline">Advanced Life Support</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EquestrianEquipment;
