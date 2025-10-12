
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  "Specialised safety protocols for pyrotechnic events and displays",
  "Burn injury treatment and emergency response capabilities",
  "Crowd safety management for bonfire nights and firework displays",
  "Strategic positioning of medical teams near launch areas",
  "Emergency evacuation planning for outdoor events",
  "First aid support for all ages at family-friendly displays",
  "Weather contingency planning for outdoor celebrations"
];

const Fireworks = () => (
  <div className="min-h-screen flex flex-col">
    <SEO
      title="Fireworks Display Medical Cover | Bonfire Night Safety | Excel Medical Solutions"
      description="Professional medical coverage for fireworks displays, bonfire nights, and pyrotechnic events across the UK. Specialised safety support for Guy Fawkes celebrations."
      keywords="fireworks medical cover, bonfire night medical, pyrotechnic event safety, Guy Fawkes medical support, firework display safety"
      url="https://excelems.co.uk/industries/fireworks"
    />
    <Header />

    {/* Hero Section */}
    <section className="py-0 relative" style={{ backgroundColor: 'rgba(210, 244, 6, 0.1)' }}>
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center justify-center">
        <img
          src="/lovable-uploads/2e56e00f-cfcf-4728-9094-6b3029b95748.png"
          alt="Fireworks display medical safety support"
          className="w-full h-80 md:h-[420px] object-cover shadow-lg rounded-b-3xl"
          style={{ objectPosition: "center center" }}
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-white/90 via-white/40 to-transparent">
          <div className="p-6 md:p-10 text-center">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 drop-shadow mb-2">Fireworks Display Medical Cover</h1>
            <span 
              className="inline-block text-black rounded-xl px-3 py-1 text-lg font-medium mb-3 shadow-sm"
              style={{ backgroundColor: '#d2f406' }}
            >
              Specialised Safety Support for Pyrotechnic Events
            </span>
            <p className="text-xl md:text-2xl font-medium text-gray-700 max-w-2xl mx-auto">
              Professional medical coverage for fireworks displays, bonfire nights, and Guy Fawkes celebrations across the UK.
              Ensuring spectacular events remain safe for all attendees.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Features & About */}
    <section className="py-12" style={{ backgroundColor: 'rgba(210, 244, 6, 0.1)' }}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Choose Excel Medical for Fireworks Events?</h2>
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
          Our experienced team understands the unique risks associated with pyrotechnic displays and provides comprehensive safety coverage for organisers and spectators alike.
        </p>
      </div>
    </section>

    {/* Services Section */}
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Our Fireworks Event Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(210, 244, 6, 0.1)' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#006400' }}>Safety & Emergency Response</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Burn injury treatment and care</li>
              <li>• Emergency response near launch areas</li>
              <li>• Crowd safety and evacuation planning</li>
              <li>• Fire safety and medical coordination</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(210, 244, 6, 0.1)' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#006400' }}>Event Support</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Family-friendly first aid stations</li>
              <li>• Weather-related medical support</li>
              <li>• Lost child protocols and assistance</li>
              <li>• Accessibility support for all attendees</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* CTA section */}
    <section className="py-16 text-white" style={{ backgroundColor: '#006400' }}>
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-3">Ready for Safe Spectacular Events?</h3>
        <p className="text-xl mb-8 max-w-xl mx-auto">
          Contact our specialist team for comprehensive medical coverage at your fireworks display or bonfire night event.
        </p>
        <div className="flex justify-center">
          <Button 
            asChild 
            size="lg" 
            className="text-black hover:opacity-90 shadow-lg"
            style={{ backgroundColor: '#d2f406' }}
          >
            <Link to="/contact">Get Fireworks Event Quote</Link>
          </Button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Fireworks;
