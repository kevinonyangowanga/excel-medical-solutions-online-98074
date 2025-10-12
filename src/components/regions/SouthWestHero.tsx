
import { MapPin } from "lucide-react";

const SouthWestHero = () => {
  return (
    <section className="py-16 lg:py-20 text-white" style={{ backgroundColor: '#006400' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            South West England Event Medical Services | Professional First Aid & Ambulance Hire
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Professional event medical coverage across South West England, from Bristol to Cornwall and beyond. 
            Serving the region with qualified paramedics and state-of-the-art medical equipment for festivals, sports events, and corporate functions.
          </p>
          <div className="flex items-center justify-center text-white mb-8">
            <MapPin className="h-6 w-6 mr-2" />
            <span className="text-lg font-semibold">Covering Bristol, Bath, Exeter, Plymouth, Gloucester & South West Counties</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SouthWestHero;
