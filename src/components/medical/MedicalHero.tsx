
import { Button } from "@/components/ui/button";
import { Calculator, Phone, Settings, Building } from "lucide-react";
import { Link } from "react-router-dom";

const MedicalHero = () => {
  return (
    <section className="bg-gradient-to-br from-medical-darkGreen via-medical-darkGreen to-green-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Professional Event Medical Services
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
          Keep your event attendees safe with our expert medical teams. From festivals to corporate events, 
          we provide comprehensive medical coverage across the UK.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
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
              Request a Quote
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
              Request a Call Back
            </a>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          <Button 
            asChild 
            size="lg" 
            className="text-lg px-8 py-4"
            style={{ backgroundColor: '#d2f406', color: '#000000', border: '1px solid #d2f406' }}
          >
            <Link to="/services" className="flex items-center gap-3 hover:opacity-90">
              <Settings className="h-5 w-5" />
              Our Services
            </Link>
          </Button>
          <Button 
            asChild 
            size="lg" 
            className="text-lg px-8 py-4"
            style={{ backgroundColor: '#d2f406', color: '#000000', border: '1px solid #d2f406' }}
          >
            <Link to="/industries" className="flex items-center gap-3 hover:opacity-90">
              <Building className="h-5 w-5" />
              Industries
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MedicalHero;
