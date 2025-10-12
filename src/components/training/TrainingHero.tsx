
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Users } from "lucide-react";

const TrainingHero = () => {
  return (
    <section className="bg-gradient-to-br from-medical-darkGreen via-medical-darkGreen to-green-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Medical Training
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Advance your career with our comprehensive range of medical training courses. 
              From basic first aid to advanced emergency response, we provide the skills you need 
              to excel in event medical services.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-600">
              <div className="text-center">
                <GraduationCap className="h-8 w-8 text-[#d2f406] mx-auto mb-2" />
                <p className="text-2xl font-bold">500+</p>
                <p className="text-sm text-gray-300">Students Trained</p>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-[#d2f406] mx-auto mb-2" />
                <p className="text-2xl font-bold">15+</p>
                <p className="text-sm text-gray-300">Course Options</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-[#d2f406] mx-auto mb-2" />
                <p className="text-2xl font-bold">98%</p>
                <p className="text-sm text-gray-300">Pass Rate</p>
              </div>
            </div>
          </div>
          
          <div className="lg:text-center">
            <img 
              src="/lovable-uploads/541255b1-98bb-489a-97b2-e28bf10a0f07.png" 
              alt="Medical training in progress" 
              className="rounded-lg shadow-2xl w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingHero;
