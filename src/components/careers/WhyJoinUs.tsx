
import { Heart, Users, GraduationCap, MapPin, Coins, Clock } from "lucide-react";

const WhyJoinUs = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Make a Real Difference",
      description: "Provide critical medical care and support at events, ensuring the safety and wellbeing of thousands of people."
    },
    {
      icon: Users,
      title: "Join Our Family",
      description: "Become part of a close-knit team of dedicated professionals who support each other and work together seamlessly."
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Access ongoing training opportunities and professional development to advance your medical career."
    },
    {
      icon: MapPin,
      title: "Travel Opportunities",
      description: "Work at exciting events across the UK, from music festivals to sporting events and corporate gatherings."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-medical-darkGreen mb-4">
            Why Join Excel Medical Solutions?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes our team special and why medical professionals choose to build their careers with us.
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-medical-darkGreen mb-4">
                  Join Emily & Elle
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Enjoying their nightshift at a music festival!
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <Coins className="h-5 w-5 mr-3" style={{ color: '#d2f406' }} />
                    <span>Weekly pay</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="h-5 w-5 mr-3" style={{ color: '#d2f406' }} />
                    <span>Travel and Accommodation</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Users className="h-5 w-5 mr-3" style={{ color: '#d2f406' }} />
                    <span>Friendly positive people</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <GraduationCap className="h-5 w-5 mr-3" style={{ color: '#d2f406' }} />
                    <span>Great continuing education programme</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/85eenwQLJHw"
                    title="Join Emily & Elle - Night shift at music festival"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 text-medical-darkGreen rounded-full mb-6" style={{ backgroundColor: '#d2f406' }}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-medical-darkGreen mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-medical-darkGreen text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-lg mb-6">
              Join hundreds of medical professionals who have chosen Excel Medical Solutions for their career growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
