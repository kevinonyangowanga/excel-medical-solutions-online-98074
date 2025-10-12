
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import LondonHero from "@/components/regions/LondonHero";
import LondonFAQ from "@/components/regions/LondonFAQ";
import LondonSEOContent from "@/components/regions/LondonSEOContent";
import LondonServices from "@/components/regions/LondonServices";
import LondonContact from "@/components/regions/LondonContact";

const London = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Event Medical Services London | First Aid Cover Central London Westminster Camden | Ambulance Hire Greater London"
        description="Professional event medical services, first aid cover, event ambulance hire and paramedic services across London and Greater London. Qualified emergency medical support for festivals, sports events, concerts and corporate functions in Central London, Westminster, Camden, Islington, Hackney, Tower Hamlets, Greenwich, Croydon, Bromley and all London boroughs."
        keywords="event medical services london, first aid cover london, event ambulance hire london, event paramedic services london, first aid central london, ambulance hire westminster, medical cover camden, event medical islington, paramedic services hackney, first aid tower hamlets, ambulance hire greenwich, medical cover croydon, event medical bromley, first aid richmond, ambulance hire kingston, london event medical, greater london first aid, london ambulance hire, london medical cover, london paramedic services, london emergency response, london festival medical, london sports medical, london concert medical, london corporate medical, london first aid training"
        url="https://excelems.co.uk/regions/london"
        localBusinessSchema={{
          name: "Excel Medical Solutions - London",
          description: "Event medical services covering Central London, Westminster, Camden and all London boroughs",
          areaServed: ["Central London", "Westminster", "Camden", "Islington", "Hackney", "Tower Hamlets", "Greenwich", "Croydon", "Bromley", "Richmond", "Kingston", "Watford", "Dartford"],
          telephone: "0333 339 4620",
          email: "hello@excelems.co.uk",
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
          serviceType: ["Event Medical Services", "Ambulance Services", "Emergency Medical Response", "Healthcare Staffing", "First Aid Services"]
        }}
        serviceSchema={{
          name: "Event Medical Services - London",
          description: "Professional event medical coverage, ambulance hire and first aid services across London and Greater London",
          areaServed: ["Central London", "Westminster", "Camden", "Islington", "Hackney", "Tower Hamlets", "Greenwich", "Croydon", "Bromley", "Richmond", "Kingston", "Watford", "Dartford"],
          provider: "Excel Medical Solutions",
          url: "https://excelems.co.uk"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://excelems.co.uk" },
          { name: "Regions", url: "https://excelems.co.uk/regions" },
          { name: "London", url: "https://excelems.co.uk/regions/london" }
        ]}
      />
      <Header />
      
      <main>
        <LondonHero />
        <LondonFAQ />
        <LondonSEOContent />
        <LondonServices />
        <LondonContact />
      </main>

      <Footer />
    </div>
  );
};

export default London;
