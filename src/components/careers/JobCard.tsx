
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin } from "lucide-react";

interface JobCardProps {
  title: string;
  location: string;
  type: string;
  description: string;
  buttonText?: string;
}

const JobCard = ({ title, location, type, description, buttonText = "Join Our Recruitment Waitlist" }: JobCardProps) => {
  const handleButtonClick = () => {
    if (buttonText === "Apply Now") {
      window.open('https://www.cognitoforms.com/XLTeam1/Application', '_blank');
    } else if (buttonText === "Join Our Recruitment Waitlist") {
      window.open('https://www.cognitoforms.com/XLTeam1/JoinWaitingList', '_blank');
    } else {
      window.location.href = 'mailto:joinus@excelems.com';
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow border-l-4" style={{ borderLeftColor: '#d2f406' }}>
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <CardTitle className="text-xl text-medical-green mb-2">{title}</CardTitle>
            <CardDescription className="text-gray-600 mb-4">
              {description}
            </CardDescription>
          </div>
          <Button 
            style={{ backgroundColor: '#d2f406' }} 
            className="text-black hover:opacity-90 md:ml-4"
            onClick={handleButtonClick}
          >
            {buttonText}
          </Button>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            {location}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {type}
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default JobCard;
