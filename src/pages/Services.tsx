
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ServicesHero from "@/components/services/ServicesHero";
import CoreServicesSection from "@/components/services/CoreServicesSection";
import AdditionalServicesSection from "@/components/services/AdditionalServicesSection";
import ServiceProcessSection from "@/components/services/ServiceProcessSection";
import ServicesCTA from "@/components/services/ServicesCTA";

const Services = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Our Services - Professional Event Medical Coverage Including Stadium & Sports Medicine"
        description="Comprehensive event medical services including ambulance transport, onsite treatment centres, stadium medical coverage, sports medicine specialists, first aid response, and healthcare staffing across the UK."
        keywords="event medical services, ambulance services UK, stadium medical services, sports medical coverage, football stadium medical, sports medicine specialists, first aid response, healthcare staffing, medical equipment rental, emergency response, treatment centres"
        url="https://excelems.co.uk/services"
      />
      <Header />
      
      <ServicesHero />
      <CoreServicesSection />
      <AdditionalServicesSection />
      <ServiceProcessSection />
      <ServicesCTA />

      <Footer />
    </div>
  );
};

export default Services;
