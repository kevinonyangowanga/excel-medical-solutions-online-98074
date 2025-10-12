
import { MapPin } from "lucide-react";

const LondonHero = () => {
  return (
    <section className="py-16 lg:py-20 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Event Medical Services London | First Aid Cover & Ambulance Hire
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Professional event medical coverage, first aid cover, event ambulance hire and paramedic services across London and Greater London. 
            Serving the capital with qualified paramedics and state-of-the-art medical equipment for festivals, sports events, concerts and corporate functions.
          </p>
          <div className="flex items-center justify-center text-yellow-600 mb-8">
            <MapPin className="h-6 w-6 mr-2" />
            <span className="text-lg font-semibold">Covering All London Boroughs & Greater London</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LondonHero;
