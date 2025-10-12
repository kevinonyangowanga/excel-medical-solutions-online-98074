
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const IndustriesHero = () => {
  return (
    <section className="text-white py-16 lg:py-20" style={{ backgroundColor: '#006400' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Industries We Support
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8">
            Excel Medical Solutions provides specialised medical coverage across diverse industries, 
            from intimate community gatherings to major international events.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="text-black border-white hover:opacity-90" 
            style={{ backgroundColor: '#d2f406' }}
          >
            <Link to="/contact">Discuss Your Industry Needs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesHero;
