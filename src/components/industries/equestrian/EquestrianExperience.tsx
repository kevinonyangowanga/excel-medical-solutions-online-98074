
import { CheckCircle } from "lucide-react";

const EquestrianExperience = () => {
  return (
    <section className="py-16" style={{ backgroundColor: 'rgba(210, 244, 6, 0.1)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Equestrian Medical Experience Across the UK
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              From covering Pony Club events to hunter trials to British Eventing competitions, we have provided medical cover for a wide range of equestrian events across Britain. Our experience at each level means we're highly aware of medical rules and requirements.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5" style={{ color: '#006400' }} />
                <span className="font-medium">Pony Club Events & Competitions</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5" style={{ color: '#006400' }} />
                <span className="font-medium">Hunter Trials & Cross-Country Events</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5" style={{ color: '#006400' }} />
                <span className="font-medium">British Eventing Competitions</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5" style={{ color: '#006400' }} />
                <span className="font-medium">British Horse Racing Events</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5" style={{ color: '#006400' }} />
                <span className="font-medium">British Horse Society Events</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5" style={{ color: '#006400' }} />
                <span className="font-medium">Dressage & Showjumping Competitions</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/lovable-uploads/0233ea3f-22e4-4f74-a961-4f1d3606e18a.png"
              alt="Professional ambulance providing medical cover at scenic UK equestrian location"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquestrianExperience;
