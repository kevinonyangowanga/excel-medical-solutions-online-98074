
import { Button } from "@/components/ui/button";
import { Calculator, Phone } from "lucide-react";

const MedicalCTA = () => {
  return (
    <section className="py-16 text-white" style={{ backgroundColor: '#006400' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Secure Medical Coverage for Your Event?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Don't leave your event's safety to chance. Get a free quote today or speak with our 
          expert team about your medical coverage requirements.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-black hover:bg-gray-100 hover:text-black shadow-lg text-lg px-8 py-4"
          >
            <a 
              href="https://www.cognitoforms.com/XLTeam1/EventMedicalResourceCalculator" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Calculator className="h-5 w-5" />
              Get Your Free Quote
            </a>
          </Button>
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-black hover:bg-gray-200 hover:text-black border border-white text-lg px-8 py-4"
          >
            <a 
              href="https://www.cognitoforms.com/XLTeam1/RequestCallBack" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Phone className="h-5 w-5" />
              Schedule a Call
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MedicalCTA;
