
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WestMidlandsContact = () => {
  return (
    <section className="py-16 text-black" style={{ backgroundColor: '#d2f406' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* SEO Hidden Cities List */}
        <div className="sr-only">
          <h2>West Midlands Event Medical Services Coverage Areas</h2>
          <p>We provide comprehensive event medical services across Birmingham, Wolverhampton, Coventry, Dudley, Walsall, West Bromwich, Solihull, Sutton Coldfield, Stoke-on-Trent, Worcester and all West Midlands areas.</p>
        </div>

        <h2 className="text-3xl font-bold mb-4">
          Ready to Secure Medical Cover in the West Midlands?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact our team today for professional event medical services across the West Midlands region.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800">
            <Link to="/contact">Get Your Quote</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white">
            <a href="https://www.cognitoforms.com/XLTeam1/RequestCallBack" target="_blank" rel="noopener noreferrer">Schedule a Call</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WestMidlandsContact;
