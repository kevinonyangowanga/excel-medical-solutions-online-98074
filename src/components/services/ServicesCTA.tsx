
import { Button } from "@/components/ui/button";

const ServicesCTA = () => {
  return (
    <section className="py-16 bg-primary text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Need Medical Coverage for Your Event?
        </h2>
        <p className="text-xl text-black/80 mb-8 max-w-3xl mx-auto">
          Contact our expert team for a free consultation and customised quote 
          tailored to your specific event requirements.
        </p>
        <div className="flex justify-center">
          <Button asChild size="lg" variant="outline" className="bg-white text-black border-black hover:bg-gray-100">
            <a 
              href="https://www.cognitoforms.com/XLTeam1/EventMedicalResourceCalculator" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Request Quote
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
