
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import WestMidlandsHero from "@/components/regions/WestMidlandsHero";
import WestMidlandsFAQ from "@/components/regions/WestMidlandsFAQ";
import WestMidlandsSEOContent from "@/components/regions/WestMidlandsSEOContent";
import WestMidlandsServices from "@/components/regions/WestMidlandsServices";
import WestMidlandsContact from "@/components/regions/WestMidlandsContact";
import WestMidlandsCoverageAreas from "@/components/regions/WestMidlandsCoverageAreas";

const WestMidlands = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="West Midlands Medical Services | Event Medical Coverage Birmingham Wolverhampton Coventry"
        description="Professional event medical services across the West Midlands. Covering Birmingham, Wolverhampton, Coventry and surrounding areas with qualified paramedics and state-of-the-art medical equipment."
        keywords="west midlands medical services, birmingham event medical, wolverhampton medical cover, coventry ambulance services, west midlands first aid cover"
        url="https://excelems.co.uk/regions/west-midlands"
        localBusinessSchema={{
          name: "Excel Medical Solutions - West Midlands",
          description: "Event medical services covering Birmingham, Wolverhampton, Coventry and all West Midlands areas",
          areaServed: ["Birmingham", "Wolverhampton", "Coventry", "Dudley", "Walsall", "West Bromwich", "Solihull", "Sutton Coldfield", "Stoke-on-Trent", "Worcester"],
          telephone: "0333 339 4620",
          email: "westmids@excelems.com",
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
          name: "Event Medical Services - West Midlands",
          description: "Professional event medical coverage across the West Midlands region",
          areaServed: ["Birmingham", "Wolverhampton", "Coventry", "Dudley", "Walsall", "West Bromwich", "Solihull", "Sutton Coldfield", "Stoke-on-Trent", "Worcester"],
          provider: "Excel Medical Solutions",
          url: "https://excelems.co.uk"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://excelems.co.uk" },
          { name: "Regions", url: "https://excelems.co.uk/regions" },
          { name: "West Midlands", url: "https://excelems.co.uk/regions/west-midlands" }
        ]}
      />
      <Header />
      
      <main>
        <WestMidlandsHero />
        <WestMidlandsFAQ />
        <WestMidlandsSEOContent />
        <WestMidlandsCoverageAreas />
        <WestMidlandsServices />
        <WestMidlandsContact />
      </main>

      <Footer />
    </div>
  );
};

export default WestMidlands;
