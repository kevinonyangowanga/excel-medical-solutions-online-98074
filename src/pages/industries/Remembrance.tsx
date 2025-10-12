
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  "Respectful and dignified medical support for commemorative events",
  "Discreet medical coverage that honours the solemnity of ceremonies",
  "Experienced team familiar with military and ceremonial protocols",
  "Specialised support for veteran and military community events",
  "First aid stations positioned strategically to avoid disruption",
  "Emergency response planning for large gatherings and parades",
  "Medical support for outdoor ceremonies in all weather conditions"
];

const Remembrance = () => (
  <div className="min-h-screen flex flex-col">
    <SEO
      title="Remembrance Day Medical Services | Military Event Medical Cover | Excel Medical Solutions"
      description="Respectful and professional medical coverage for Remembrance Day ceremonies, military events, and commemorative services across the UK. Dignified care that honours the occasion."
      keywords="Remembrance Day medical, military event medical cover, ceremonial medical services, veteran event support, commemorative service medical"
      url="https://excelems.co.uk/industries/remembrance"
    />
    <Header />

    {/* Hero Section */}
    <section className="py-0 relative" style={{ backgroundColor: 'rgba(210, 244, 6, 0.1)' }}>
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center justify-center">
        <img
          src="/lovable-uploads/e5af63f5-ecd7-4d19-9f86-2d6b47a15b1a.png"
          alt="Remembrance Day ceremony medical support"
          className="w-full h-80 md:h-[420px] object-cover shadow-lg rounded-b-3xl"
          style={{ objectPosition: "center center" }}
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-white/90 via-white/40 to-transparent">
          <div className="p-6 md:p-10 text-center">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 drop-shadow mb-2">Remembrance Day Medical Services</h1>
            <span 
              className="inline-block text-black rounded-xl px-3 py-1 text-lg font-medium mb-3 shadow-sm"
              style={{ backgroundColor: '#d2f406' }}
            >
              Respectful Medical Support for Commemorative Events
            </span>
            <p className="text-xl md:text-2xl font-medium text-gray-700 max-w-2xl mx-auto">
              Professional, dignified medical coverage for Remembrance ceremonies, military events, and commemorative services throughout the UK.
              Honouring those who served whilst ensuring the safety of all attendees.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Features & About */}
    <section className="py-12" style={{ backgroundColor: 'rgba(210, 244, 6, 0.1)' }}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Choose Excel Medical for Remembrance Events?</h2>
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
          We understand the importance of maintaining the dignity and respect that Remembrance events deserve, whilst providing essential medical support for attendees of all ages.
        </p>
      </div>
    </section>

    {/* Services Section */}
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Our Remembrance Event Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(210, 244, 6, 0.1)' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#006400' }}>Ceremonial Support</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Discreet medical presence during services</li>
              <li>• First aid support for parade participants</li>
              <li>• Emergency response for large crowds</li>
              <li>• Weather-related medical support</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(210, 244, 6, 0.1)' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#006400' }}>Specialist Care</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Veteran-focused medical support</li>
              <li>• Mobility assistance for elderly attendees</li>
              <li>• Cardiac and respiratory emergency care</li>
              <li>• Mental health first aid awareness</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* CTA section */}
    <section className="py-16 text-white" style={{ backgroundColor: '#006400' }}>
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-3">Ready to Honour and Protect?</h3>
        <p className="text-xl mb-8 max-w-xl mx-auto">
          Contact our respectful team for dignified medical support at your Remembrance or commemorative event.
        </p>
        <div className="flex justify-center">
          <Button 
            asChild 
            size="lg" 
            className="text-black hover:opacity-90 shadow-lg"
            style={{ backgroundColor: '#d2f406' }}
          >
            <Link to="/contact">Get Remembrance Event Quote</Link>
          </Button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Remembrance;
