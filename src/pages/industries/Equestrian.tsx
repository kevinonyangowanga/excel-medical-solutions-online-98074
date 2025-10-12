
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import EquestrianHero from "@/components/industries/equestrian/EquestrianHero";
import EquestrianFeatures from "@/components/industries/equestrian/EquestrianFeatures";
import EquestrianExperience from "@/components/industries/equestrian/EquestrianExperience";
import EquestrianEquipment from "@/components/industries/equestrian/EquestrianEquipment";
import EquestrianConsiderations from "@/components/industries/equestrian/EquestrianConsiderations";
import EquestrianCTA from "@/components/industries/equestrian/EquestrianCTA";

const Equestrian = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Equestrian Event Medical Cover UK - Professional Horse Riding Event Medical Services"
        description="Expert equestrian medical cover for British Eventing, Pony Club, and British Horse Society events. Professional paramedic teams with 4x4 ambulances across the UK. CQC registered medical services."
        keywords="equestrian medical cover UK, horse riding event medical services, British Eventing medical cover, pony club medical support, equestrian paramedic services, horse show medical cover, cross country medical support, dressage event medical, showjumping medical cover, hunter trial medical services, British Horse Society medical, equine event first aid, horse riding ambulance services, equestrian safety medical, event medical cover horses"
        url="https://excelems.co.uk/industries/equestrian"
      />
      <Header />
      
      <EquestrianHero />
      <EquestrianFeatures />
      <EquestrianExperience />
      <EquestrianEquipment />
      <EquestrianConsiderations />
      <EquestrianCTA />

      <Footer />
    </div>
  );
};

export default Equestrian;
