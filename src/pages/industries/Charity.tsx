
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  "Affordable medical coverage tailored for charity and fundraising events",
  "Flexible pricing to support good causes and community initiatives",
  "Professional medical support for sponsored challenges and marathons",
  "Risk assessment and safety planning for unique charity activities",
  "First aid coverage for community fetes and family fun days",
  "Emergency response for outdoor fundraising events",
  "Dedicated support for LGBTQ+ and diversity charity events"
];

const Charity = () => (
  <div className="min-h-screen flex flex-col">
    <SEO
      title="Charity Event Medical Cover | Fundraising Event Medical Support | Excel Medical Solutions"
      description="Affordable medical coverage for charity events, fundraising activities, and community initiatives across the UK. Supporting good causes with professional medical care."
      keywords="charity event medical, fundraising medical cover, community event medical, sponsored event medical, charity run medical support"
      url="https://excelems.co.uk/industries/charity"
    />
    <Header />

    {/* Hero Section */}
    <section className="py-0 relative" style={{ backgroundColor: 'rgba(210, 244, 6, 0.1)' }}>
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center justify-center">
        <img
          src="/lovable-uploads/71ba258f-87e4-4efb-9033-885f57a8d0f5.png"
          alt="Charity event medical support team"
          className="w-full h-80 md:h-[420px] object-cover shadow-lg rounded-b-3xl"
          style={{ objectPosition: "center center" }}
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-white/90 via-white/40 to-transparent">
          <div className="p-6 md:p-10 text-center">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 drop-shadow mb-2">Charity Event Medical Support</h1>
            <span 
              className="inline-block text-black rounded-xl px-3 py-1 text-lg font-medium mb-3 shadow-sm"
              style={{ backgroundColor: '#d2f406' }}
            >
              Affordable Medical Coverage for Good Causes
            </span>
            <p className="text-xl md:text-2xl font-medium text-gray-700 max-w-2xl mx-auto">
              Professional, affordable medical coverage for charity events, fundraising activities, and community initiatives across the UK.
              Supporting good causes whilst ensuring everyone stays safe.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Features & About */}
    <section className="py-12" style={{ backgroundColor: 'rgba(210, 244, 6, 0.1)' }}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Choose Excel Medical for Charity Events?</h2>
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
          We believe in supporting good causes and offer flexible, affordable medical coverage to help charities and community organisations run safe, successful events whilst maximising funds raised.
        </p>
      </div>
    </section>

    {/* Services Section */}
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Our Charity Event Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(210, 244, 6, 0.1)' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#006400' }}>Fundraising Support</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Sponsored challenge medical coverage</li>
              <li>• Marathon and fun run support</li>
              <li>• Community fete and fair coverage</li>
              <li>• Outdoor fundraising event safety</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(210, 244, 6, 0.1)' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#006400' }}>Flexible Options</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Affordable pricing for good causes</li>
              <li>• Scaled coverage based on event size</li>
              <li>• Risk assessment and planning support</li>
              <li>• Volunteer coordination assistance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* CTA section */}
    <section className="py-16 text-white" style={{ backgroundColor: '#006400' }}>
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-3">Ready to Support Your Good Cause?</h3>
        <p className="text-xl mb-8 max-w-xl mx-auto">
          Contact our charity event specialists for affordable medical coverage that helps you focus on raising funds for your cause.
        </p>
        <div className="flex justify-center">
          <Button 
            asChild 
            size="lg" 
            className="text-black hover:opacity-90 shadow-lg"
            style={{ backgroundColor: '#d2f406' }}
          >
            <Link to="/contact">Get Charity Event Quote</Link>
          </Button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Charity;
