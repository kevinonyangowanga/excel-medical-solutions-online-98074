
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="py-16 bg-primary text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Ready to Work With the Best?
        </h2>
        <p className="text-xl text-black font-semibold mb-8 max-w-3xl mx-auto">
          Join thousands of event organisers who trust Excel Medical Solutions 
          for their medical coverage needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild size="lg" variant="outline" className="bg-white text-black border-black hover:bg-gray-100">
            <a href="https://www.cognitoforms.com/ExcelEMS/EventMedicalResourceCalculator" target="_blank" rel="noopener noreferrer">Get Your Quote</a>
          </Button>
          <Button asChild size="lg" className="bg-medical-darkGreen text-white hover:bg-green-700">
            <Link to="/services">View Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
