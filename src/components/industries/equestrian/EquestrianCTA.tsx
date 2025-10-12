
import { Button } from "@/components/ui/button";

const EquestrianCTA = () => {
  return (
    <section className="py-16 text-white" style={{ backgroundColor: '#006400' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Ready to Secure Professional Medical Cover for Your Equestrian Event?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Trust Excel Medical Solutions for comprehensive equestrian event medical coverage across the UK. Our experienced paramedic teams understand the unique requirements and risks of horse riding events.
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
              Get Your Equestrian Medical Quote
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EquestrianCTA;
