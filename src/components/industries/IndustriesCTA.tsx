
import { Button } from "@/components/ui/button";

const IndustriesCTA = () => {
  return (
    <section className="py-16 text-white" style={{ backgroundColor: '#006400' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Ready to Discuss Your Industry-Specific Needs?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Our expert team will work with you to understand your unique requirements 
          and develop a tailored medical coverage plan for your industry and event type.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button 
            asChild 
            size="lg" 
            className="text-black hover:opacity-90" 
            style={{ backgroundColor: '#d2f406' }}
          >
            <a 
              href="https://www.cognitoforms.com/XLTeam1/EventMedicalResourceCalculator" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Get Industry-Specific Quote
            </a>
          </Button>
          <Button 
            asChild 
            size="lg" 
            variant="outline" 
            className="border-white text-black bg-white hover:bg-gray-100"
            style={{ color: '#000000' }}
          >
            <a 
              href="https://www.cognitoforms.com/XLTeam1/EventMedicalResourceCalculator" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Schedule Consultation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesCTA;
