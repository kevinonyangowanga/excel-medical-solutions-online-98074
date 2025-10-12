
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Industry } from "@/data/industriesData";

interface IndustryCardProps {
  industry: Industry;
}

const IndustryCard = ({ industry }: IndustryCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 bg-white border-gray-200">
      <CardHeader className="pb-4">
        <div className="flex items-start space-x-4">
          <div className="text-black p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: '#d2f406' }}>
            <industry.icon className="h-6 w-6" />
          </div>
          <div>
            <CardTitle className="text-xl mb-2">{industry.title}</CardTitle>
            <CardDescription className="text-gray-600">
              {industry.description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <h4 className="font-semibold mb-2" style={{ color: '#006400' }}>Our Services Include:</h4>
          <ul className="space-y-1">
            {industry.services.map((service, idx) => (
              <li key={idx} className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 rounded-full mr-2 flex-shrink-0" style={{ backgroundColor: '#d2f406' }} />
                {service}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mb-4">
          <h4 className="font-semibold mb-2" style={{ color: '#006400' }}>Event Types:</h4>
          <div className="flex flex-wrap gap-2">
            {industry.events.map((event, idx) => (
              <Badge key={idx} variant="outline" className="text-xs">
                {event}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-2" style={{ color: '#006400' }}>Certifications:</h4>
          <div className="flex flex-wrap gap-2">
            {industry.certifications.map((cert, idx) => (
              <Badge key={idx} className="text-white text-xs" style={{ backgroundColor: '#006400' }}>
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IndustryCard;
