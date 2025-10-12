
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import MedicalHero from "@/components/medical/MedicalHero";
import MedicalServices from "@/components/medical/MedicalServices";
import MedicalTrust from "@/components/medical/MedicalTrust";
import MedicalCTA from "@/components/medical/MedicalCTA";

const Medical = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Professional Event Medical Services | Excel Medical Solutions"
        description="Expert medical coverage for events across the UK. Professional paramedics, first aiders, and emergency response teams for your event safety needs."
        keywords="event medical services, paramedics, first aid, emergency response, event safety"
        url="https://excelems.co.uk/medical"
      />
      <Header />
      <MedicalHero />
      <MedicalServices />
      <MedicalTrust />
      <MedicalCTA />
      <Footer />
    </div>
  );
};

export default Medical;
