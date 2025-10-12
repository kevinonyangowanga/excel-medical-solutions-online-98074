import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const ContactInfo = () => {
  const serviceAreas = [
    { name: "North East England", path: "/regions/north-east" },
    { name: "North West England", path: "/regions/north-west" },
    { name: "Yorkshire", path: "/regions/yorkshire" },
    { name: "East Midlands", path: "/regions/east-midlands" },
    { name: "West Midlands", path: "/regions/west-midlands" },
    { name: "London", path: "/regions/london" },
    { name: "South East England", path: "/regions/south-east" },
    { name: "South West England", path: "/regions/south-west" },
    { name: "Wales", path: "/regions/wales" },
    { name: "Scotland", path: "/regions/scotland" }
  ];

  return (
    <div className="space-y-6">
      <Card style={{ backgroundColor: '#d2f406' }} className="text-black">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">Why Choose Excel Medical Solutions?</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-black rounded-full mr-3" />
              75+ years of event medical experience
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-black rounded-full mr-3" />
              Fully qualified paramedics and medical staff
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-black rounded-full mr-3" />
              24/7 emergency response capability
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-black rounded-full mr-3" />
              Full regulatory compliance and insurance
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-black rounded-full mr-3" />
              Nationwide coverage across the UK
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MapPin className="mr-2 h-5 w-5" style={{ color: '#d2f406' }} />
            Service Areas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            We provide medical services across the entire UK. Click on any region below to learn more about our services in that area:
          </p>
          <div className="grid grid-cols-2 gap-2 text-center">
            {serviceAreas.map((area, index) => (
              <Link key={index} to={area.path}>
                <Badge 
                  variant="outline" 
                  className="justify-center py-1 transition-colors cursor-pointer w-full"
                  style={{ 
                    backgroundColor: '#d2f406',
                    borderColor: '#d2f406',
                    color: '#000000'
                  }}
                >
                  {area.name}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInfo;
