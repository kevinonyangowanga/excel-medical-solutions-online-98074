
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import CareersHero from "@/components/careers/CareersHero";
import WhyJoinUs from "@/components/careers/WhyJoinUs";
import CurrentOpportunities from "@/components/careers/CurrentOpportunities";
import ApplicationProcess from "@/components/careers/ApplicationProcess";
import CareersCTA from "@/components/careers/CareersCTA";

const Careers = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Careers - Join Our Medical Team"
        description="Join Excel Medical Solutions and build a rewarding career in event medical services. We're looking for qualified paramedics, EMTs, and medical professionals across the UK."
        keywords="medical careers UK, paramedic jobs, EMT careers, event medical jobs, ambulance service careers, healthcare jobs, medical professional opportunities"
        url="https://excelems.co.uk/careers"
      />
      <Header />
      <CareersHero />
      <WhyJoinUs />
      <CurrentOpportunities />
      <ApplicationProcess />
      <CareersCTA />
      <Footer />
    </div>
  );
};

export default Careers;
