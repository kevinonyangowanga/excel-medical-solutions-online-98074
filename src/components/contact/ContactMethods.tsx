import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactMethods = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "24/7 Contact Line",
      primary: "0333 339 4620",
      secondary: "",
      description: "For urgent requirements or to speak to our friendly team."
    },
    {
      icon: Mail,
      title: "General Enquiries",
      primary: "hello@excelems.co.uk",
      secondary: "",
      description: "For quotes, general information, and non-urgent enquiries."
    },
    {
      icon: MapPin,
      title: "Head Office",
      primary: "Gateshead, North East UK",
      secondary: "",
      description: "Our main operations centre covering the whole of the UK."
    },
    {
      icon: Clock,
      title: "Office Hours",
      primary: "Mon-Thur 10am-4pm",
      secondary: "",
      description: "Services available around the clock, every day of the year."
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multiple ways to reach our expert team for all your event medical service needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="bg-medical-blue text-black p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <method.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-lg">{method.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-gray-900 mb-1">{method.primary}</p>
                {method.secondary && (
                  <p 
                    className="text-sm font-medium mb-2"
                    style={{ color: index === 0 || index === 1 || index === 2 ? '#006400' : '#d2f406' }}
                  >
                    {method.secondary}
                  </p>
                )}
                <p className="text-sm text-gray-600">{method.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;
