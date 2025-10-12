
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Network, Calendar, MapPin, ExternalLink, Star } from "lucide-react";

const TrainingBenefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Career Advancement",
      description: "Enhance your professional credentials and open doors to new opportunities in the medical field."
    },
    {
      icon: Network,
      title: "Industry Networking",
      description: "Connect with like-minded professionals and build valuable relationships within the medical community."
    },
    {
      icon: Calendar,
      title: "Ongoing Support",
      description: "Access to refresher courses, updates on best practices, and continuous professional development."
    },
    {
      icon: MapPin,
      title: "Nationwide Locations",
      description: "Training centres across the UK, with options for on-site training at your organisation."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-medical-darkGreen mb-6">
              Invest in Your Future
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our training programmes don't just teach skills – they transform careers. Join thousands 
              of professionals who have advanced their careers through our comprehensive medical 
              training courses.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#d2f406] rounded-lg flex items-center justify-center">
                      <benefit.icon className="h-6 w-6 text-black" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-medical-darkGreen mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <Card className="bg-white shadow-xl border-l-4 border-l-[#d2f406]">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-medical-darkGreen">
                  5 Star Course Feedback
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-[#d2f406] flex items-center justify-center">
                    <Star className="h-12 w-12 text-black fill-current" />
                  </div>
                  <blockquote className="text-lg text-gray-600 italic mb-4">
                    "The training was very informative whilst also being engaging. The real life stories/ scenarios shared by the instructors during the training made it a lot easier to understand everything especially for someone who doesn't have much medical experience"
                  </blockquote>
                  <Button 
                    className="bg-[#d2f406] text-black hover:bg-[#b8dc05]"
                    onClick={() => window.open('https://xl-team.cademy.io/reviews', '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    See all reviews
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingBenefits;
