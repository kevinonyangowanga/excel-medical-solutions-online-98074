
import { MapPin } from "lucide-react";

const NorthWestHero = () => {
  return (
    <section className="py-16 lg:py-20 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            North West England and Cumbria Event Medical Services | Professional First Aid & Ambulance Hire
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Professional event medical coverage across North West England and Cumbria, from Manchester to the Lake District and beyond. 
            Serving the region with qualified paramedics and state-of-the-art medical equipment for festivals, sports events, and corporate functions.
          </p>
          <div className="flex items-center justify-center text-yellow-600 mb-8">
            <MapPin className="h-6 w-6 mr-2" />
            <span className="text-lg font-semibold">Covering Manchester, Liverpool, Preston, Cumbria & Surrounding Areas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NorthWestHero;
