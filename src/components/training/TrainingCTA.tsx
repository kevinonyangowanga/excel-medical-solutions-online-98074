
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Calendar } from "lucide-react";

const TrainingCTA = () => {
  return (
    <section className="py-20 bg-medical-darkGreen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Training Journey?
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Take the next step in your professional development. Contact us today to discuss 
            your training needs or book a course that's right for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center border-l-4 border-l-[#d2f406]">
            <CardHeader>
              <Phone className="h-12 w-12 text-[#d2f406] mx-auto mb-4" />
              <CardTitle className="text-medical-darkGreen">Call Us</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-4">
                Speak to our training team about course options and dates
              </CardDescription>
              <p className="font-semibold text-lg">0333 339 4620</p>
            </CardContent>
          </Card>

          <Card className="text-center border-l-4 border-l-[#d2f406]">
            <CardHeader>
              <Mail className="h-12 w-12 text-[#d2f406] mx-auto mb-4" />
              <CardTitle className="text-medical-darkGreen">Email Us</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-4">
                Get detailed information about our training programmes
              </CardDescription>
              <p className="font-semibold text-lg">training@excelems.co.uk</p>
            </CardContent>
          </Card>

          <Card className="text-center border-l-4 border-l-[#d2f406]">
            <CardHeader>
              <Calendar className="h-12 w-12 text-[#d2f406] mx-auto mb-4" />
              <CardTitle className="text-medical-darkGreen">Book Online</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-4">
                Browse available dates and secure your place instantly
              </CardDescription>
              <Button 
                className="bg-[#d2f406] text-black hover:bg-[#b8dc05] mt-2"
                onClick={() => window.open('https://xl-team.cademy.io/', '_blank')}
              >
                View Calendar
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="bg-[#d2f406] text-black p-6 rounded-lg inline-block">
            <h3 className="text-xl font-bold mb-2">Group Bookings & Corporate Training</h3>
            <p className="mb-4">Special rates available for organisations booking multiple places</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingCTA;
