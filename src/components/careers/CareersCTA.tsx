
import { Button } from "@/components/ui/button";

const CareersCTA = () => {
  return (
    <section className="py-16 bg-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Make a Difference?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Join our team of dedicated professionals and help us provide exceptional medical care across the UK.
        </p>
        <div className="flex justify-center">
          <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-black">
            Contact HR Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CareersCTA;
