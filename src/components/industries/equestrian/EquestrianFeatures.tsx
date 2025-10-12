
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Shield } from "lucide-react";

const EquestrianFeatures = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Equestrian Medical Services?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our passion for equestrian safety drives us to deliver highly bespoke and incredibly safe medical services designed around each individual event across the UK.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Heart className="h-8 w-8 mb-2" style={{ color: '#006400' }} />
              <CardTitle>Passion for Equestrian Safety</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We have a genuine passion for equestrian eventing safety across the UK, ensuring our sole focus is on keeping your riders well looked after at every event.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-8 w-8 mb-2" style={{ color: '#006400' }} />
              <CardTitle>Experienced Medical Management</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Our management team has extensive experience in medical risk planning for equestrian events throughout Britain, ensuring our strategy at events is ratified and reasoned.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Shield className="h-8 w-8 mb-2" style={{ color: '#006400' }} />
              <CardTitle>High Risk Recognition</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We recognise the high risk of equestrian sports, whether dressage-only events or full trials including dressage, showjumping and cross-country disciplines.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EquestrianFeatures;
