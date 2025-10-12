
import { industries } from "@/data/industriesData";
import IndustryCard from "./IndustryCard";

const IndustriesGrid = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Specialised Medical Coverage by Industry
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our expert teams understand the unique medical requirements and risks 
            associated with different types of events and industries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <IndustryCard key={index} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesGrid;
