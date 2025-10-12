
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  "Youth-focused medical support for junior sports events",
  "Sports injury assessment and immediate treatment",
  "Heat exhaustion and dehydration management",
  "Concussion protocols and neurological assessment",
  "Family-friendly medical support and reassurance",
  "Tournament and multi-day event medical coverage",
  "Parent communication and injury reporting procedures"
];

const SportsFestivals = () => (
  <div className="min-h-screen flex flex-col">
    <SEO
      title="Sports Festival Medical Cover | Youth Sports Medical Support | Excel Medical Solutions"
      description="Professional medical coverage for youth sports festivals, community tournaments, and grassroots sporting events across the UK. Specialised care for young athletes."
      keywords="youth sports medical, sports festival medical cover, junior tournament medical, grassroots sports medical, community sports safety"
      url="https://excelems.co.uk/industries/sports-festivals"
    />
    <Header />

    {/* Hero Section */}
    <section className="py-0 relative" style={{ backgroundColor: 'rgba(210, 244, 6, 0.1)' }}>
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center justify-center">
        <img
          src="/lovable-uploads/517a92ae-d3e7-4fac-8630-d1d181242b08.png"
          alt="Youth sports festival medical support"
          className="w-full h-80 md:h-[420px] object-cover shadow-lg rounded-b-3xl"
          style={{ objectPosition: "center center" }}
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-white/90 via-white/40 to-transparent">
          <div className="p-6 md:p-10 text-center">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 drop-shadow mb-2">Sports Festival Medical Cover</h1>
            <span 
              className="inline-block text-black rounded-xl px-3 py-1 text-lg font-medium mb-3 shadow-sm"
              style={{ backgroundColor: '#d2f406' }}
            >
              Youth-Focused Medical Support for Community Sports
            </span>
            <p className="text-xl md:text-2xl font-medium text-gray-700 max-w-2xl mx-auto">
              Professional medical coverage for youth sports festivals, community tournaments, and grassroots sporting events across the UK.
              Keeping young athletes safe whilst they pursue their sporting dreams.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Features & About */}
    <section className="py-12" style={{ backgroundColor: 'rgba(210, 244, 6, 0.1)' }}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Choose Excel Medical for Sports Festivals?</h2>
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
          Our team specialises in youth sports medicine and understands the unique needs of young athletes, providing expert care whilst maintaining the fun and competitive spirit of community sports.
        </p>
      </div>
    </section>

    {/* Services Section */}
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Our Sports Festival Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(210, 244, 6, 0.1)' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#006400' }}>Sports Medicine</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Sports injury assessment and treatment</li>
              <li>• Concussion evaluation protocols</li>
              <li>• Heat illness prevention and management</li>
              <li>• Return-to-play decision support</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(210, 244, 6, 0.1)' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#006400' }}>Event Support</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Multi-day tournament coverage</li>
              <li>• Parent communication and updates</li>
              <li>• Emergency transport coordination</li>
              <li>• Preventive care and hydration stations</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* CTA section */}
    <section className="py-16 text-white" style={{ backgroundColor: '#006400' }}>
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-3">Ready to Support Young Athletes?</h3>
        <p className="text-xl mb-8 max-w-xl mx-auto">
          Contact our youth sports medical team for comprehensive coverage at your sports festival or tournament.
        </p>
        <div className="flex justify-center">
          <Button 
            asChild 
            size="lg" 
            className="text-black hover:opacity-90 shadow-lg"
            style={{ backgroundColor: '#d2f406' }}
          >
            <Link to="/contact">Get Sports Festival Quote</Link>
          </Button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default SportsFestivals;
