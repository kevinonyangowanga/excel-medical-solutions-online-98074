
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import LondonSouthEastHero from "@/components/regions/LondonSouthEastHero";
import LondonSouthEastSEOContent from "@/components/regions/LondonSouthEastSEOContent";
import LondonSouthEastServices from "@/components/regions/LondonSouthEastServices";
import LondonSouthEastContact from "@/components/regions/LondonSouthEastContact";

const LondonSouthEast = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="London & South East Medical Services - Event Medical Coverage"
        description="Professional event medical services across London and South East England. Covering major venues and events with qualified paramedics and state-of-the-art medical equipment."
        keywords="london medical services, south east event medical, wembley medical cover, o2 arena ambulance services"
        url="https://excelems.co.uk/regions/london-south-east"
      />
      <Header />
      
      <main>
        <LondonSouthEastHero />
        <LondonSouthEastSEOContent />
        <LondonSouthEastServices />
        <LondonSouthEastContact />
      </main>

      <Footer />
    </div>
  );
};

export default LondonSouthEast;
