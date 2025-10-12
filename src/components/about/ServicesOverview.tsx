
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Award } from "lucide-react";

const ServicesOverview = () => {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate gatherings to massive festivals, we provide complete medical coverage solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <div className="p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center" style={{
                backgroundColor: '#d2f406'
              }}>
                <Shield className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Event Welfare Services</h3>
              <p className="text-gray-600">Comprehensive welfare support including mental health first aid, welfare tents, and pastoral care for event attendees and staff.</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <div className="p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center" style={{
                backgroundColor: '#d2f406'
              }}>
                <Users className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ambulance Services</h3>
              <p className="text-gray-600">Fully equipped ambulances with qualified paramedics providing rapid emergency response and patient transport services.</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <div className="p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center" style={{
                backgroundColor: '#d2f406'
              }}>
                <Award className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Medical Cover for Venues</h3>
              <p className="text-gray-600">Dedicated medical coverage for permanent venues, sports facilities, and entertainment complexes with on-site medical teams.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
