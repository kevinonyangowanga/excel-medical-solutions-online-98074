
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SouthEastHero from "@/components/regions/SouthEastHero";
import SouthEastCoverageAreas from "@/components/regions/SouthEastCoverageAreas";
import SouthEastServices from "@/components/regions/SouthEastServices";
import SouthEastFAQ from "@/components/regions/SouthEastFAQ";
import SouthEastContact from "@/components/regions/SouthEastContact";
import SouthEastSEOContent from "@/components/regions/SouthEastSEOContent";

const SouthEast = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="South East England Event Medical Services | First Aid Kent Surrey Sussex | Ambulance Hire Brighton Southampton"
        description="Professional event medical services across South East England. Event first aid Kent, Surrey, Sussex, Hampshire. Ambulance hire, paramedic services for festivals, sports events, corporate functions throughout South East counties."
        keywords="south east medical services, kent event medical, surrey first aid, sussex ambulance hire, hampshire medical cover, brighton event medical, canterbury first aid, dover ambulance hire, guildford medical cover, southampton event medical, portsmouth first aid, winchester ambulance hire, brighton medical cover, south east first aid, southeast ambulance hire, kent coast medical cover, surrey hills event medical, sussex downs first aid, amex stadium medical cover"
        url="https://excelems.co.uk/regions/south-east"
        localBusinessSchema={{
          name: "Excel Medical Solutions - South East",
          description: "Event medical services covering Kent, Surrey, Sussex, Hampshire and all South East England",
          areaServed: ["Canterbury", "Dover", "Folkestone", "Maidstone", "Ashford", "Dartford", "Gravesend", "Chatham", "Guildford", "Woking", "Epsom", "Kingston upon Thames", "Brighton", "Hove", "Crawley", "Worthing", "Eastbourne", "Southampton", "Portsmouth", "Winchester", "Basingstoke"],
          telephone: "0333 339 4620",
          email: "southeast@excelems.com",
          address: {
            streetAddress: "Team Valley Trading Estate",
            addressLocality: "Gateshead",
            addressRegion: "Tyne and Wear",
            postalCode: "NE11 0BQ",
            addressCountry: "GB"
          },
          geo: {
            latitude: 54.9783,
            longitude: -1.6178
          },
          serviceType: ["Event Medical Services", "Ambulance Hire", "First Aid Services", "Paramedic Services", "Emergency Medical Response"]
        }}
        breadcrumbs={[
          { name: "Home", url: "https://excelems.co.uk" },
          { name: "Regions", url: "https://excelems.co.uk/regions" },
          { name: "South East", url: "https://excelems.co.uk/regions/south-east" }
        ]}
      />
      <Header />
      
      <SouthEastHero />
      <SouthEastCoverageAreas />
      <SouthEastServices />
      <SouthEastFAQ />
      <SouthEastSEOContent />
      <SouthEastContact />

      <Footer />
    </div>
  );
};

export default SouthEast;
