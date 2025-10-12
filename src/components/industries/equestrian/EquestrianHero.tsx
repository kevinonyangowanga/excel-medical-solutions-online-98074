
import { Button } from "@/components/ui/button";

const EquestrianHero = () => {
  return (
    <section className="text-white py-16 lg:py-20" style={{ backgroundColor: '#006400' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Professional Equestrian Event Medical Cover
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Expert medical support for British Eventing, British Horse Racing, Pony Club and British Horse Society equestrian fixtures. Our highly skilled paramedic teams use state-of-the-art road and 4x4 ambulances to provide the best possible pre-hospital care.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
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
                  Get Equestrian Medical Quote
                </a>
              </Button>
            </div>
          </div>
          <div className="lg:order-first">
            <img
              src="/lovable-uploads/889c3c8c-9b1a-424b-b909-4c4c3fad4e2a.png"
              alt="Professional EMS ambulance providing medical cover at UK equestrian event"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquestrianHero;
