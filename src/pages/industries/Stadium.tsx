
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  "Large-scale medical coverage for stadium and arena events",
  "Rapid response teams positioned throughout venue",
  "Advanced life support capabilities for serious incidents",
  "Cardiac emergency response and defibrillation equipment",
  "Crowd safety and emergency evacuation protocols",
  "Multiple treatment areas and medical stations",
  "Coordination with local emergency services and hospitals"
];

const Stadium = () => (
  <div className="min-h-screen flex flex-col">
    <SEO
      title="Stadium Medical Services | Large Venue Medical Cover | Excel Medical Solutions"
      description="Professional medical coverage for stadium events, arena concerts, and large venue sporting events across the UK. Comprehensive emergency response capabilities."
      keywords="stadium medical cover, arena medical services, large venue medical, football stadium medical, concert venue medical"
      url="https://excelems.co.uk/industries/stadium"
    />
    <Header />

    {/* Hero Section */}
    <section className="py-0 relative" style={{ backgroundColor: 'rgba(210, 244, 6, 0.1)' }}>
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center justify-center">
        <img
          src="/lovable-uploads/ccb2e6b0-7acd-428c-a78c-3488cd6cfa0f.png"
          alt="Stadium medical services coverage"
          className="w-full h-80 md:h-[420px] object-cover shadow-lg rounded-b-3xl"
          style={{ objectPosition: "center center" }}
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-white/90 via-white/40 to-transparent">
          <div className="p-6 md:p-10 text-center">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 drop-shadow mb-2">Stadium Medical Services</h1>
            <span 
              className="inline-block text-black rounded-xl px-3 py-1 text-lg font-medium mb-3 shadow-sm"
              style={{ backgroundColor: '#d2f406' }}
            >
              Large-Scale Medical Coverage for Major Venues
            </span>
            <p className="text-xl md:text-2xl font-medium text-gray-700 max-w-2xl mx-auto">
              Professional medical coverage for stadium events, arena concerts, and large sporting venues across the UK.
              Comprehensive emergency response for thousands of attendees.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Features & About */}
    <section className="py-12" style={{ backgroundColor: 'rgba(210, 244, 6, 0.1)' }}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Choose Excel Medical for Stadium Events?</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 mb-8 text-left">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-3">
              <span 
                className="w-4 h-4 mt-1 inline-block rounded-full flex-shrink-0" 
                style={{ backgroundColor: '#006400' }}
              />
              <span className="font-medium text-gray-800">{f}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg mt-2 mb-8 font-semibold max-w-prose mx-auto" style={{ color: '#006400' }}>
          Our experienced team specialises in large-scale medical operations, providing comprehensive coverage that scales with your venue size and event requirements.
        </p>
      </div>
    </section>

    {/* Services Section */}
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Our Stadium Medical Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(210, 244, 6, 0.1)' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#006400' }}>Emergency Response</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Advanced life support teams</li>
              <li>• Cardiac emergency response</li>
              <li>• Trauma and injury management</li>
              <li>• Hospital transfer coordination</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(210, 244, 6, 0.1)' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#006400' }}>Venue Coverage</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Multiple medical stations</li>
              <li>• Rapid response teams</li>
              <li>• Crowd safety management</li>
              <li>• VIP and hospitality medical support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* CTA section */}
    <section className="py-16 text-white" style={{ backgroundColor: '#006400' }}>
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-3">Ready for Large-Scale Medical Coverage?</h3>
        <p className="text-xl mb-8 max-w-xl mx-auto">
          Contact our specialist team for comprehensive medical support at your stadium or large venue event.
        </p>
        <div className="flex justify-center">
          <Button 
            asChild 
            size="lg" 
            className="text-black hover:opacity-90 shadow-lg"
            style={{ backgroundColor: '#d2f406' }}
          >
            <Link to="/contact">Get Stadium Event Quote</Link>
          </Button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Stadium;
