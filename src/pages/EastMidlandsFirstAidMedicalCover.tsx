
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import EastMidlandsHero from "@/components/regions/EastMidlandsHero";
import EastMidlandsFAQ from "@/components/regions/EastMidlandsFAQ";
import EastMidlandsSEOContent from "@/components/regions/EastMidlandsSEOContent";
import EastMidlandsServices from "@/components/regions/EastMidlandsServices";
import EastMidlandsContact from "@/components/regions/EastMidlandsContact";
import EastMidlandsCoverageAreas from "@/components/regions/EastMidlandsCoverageAreas";

const EastMidlandsFirstAidMedicalCover = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="East Midlands Medical Services | Event Medical Coverage Nottingham Leicester Derby"
        description="Professional event medical services across the East Midlands. Covering Nottingham, Leicester, Derby, Lincoln and surrounding areas with qualified paramedics and state-of-the-art medical equipment."
        keywords="east midlands medical services, nottingham event medical, leicester medical cover, derby ambulance services, lincoln first aid cover"
        url="https://excelems.co.uk/east-midlands-first-aid-medical-cover"
        localBusinessSchema={{
          name: "Excel Medical Solutions - East Midlands",
          description: "Event medical services covering Nottingham, Leicester, Derby, Lincoln and all East Midlands areas",
          areaServed: ["Nottingham", "Leicester", "Derby", "Lincoln", "Loughborough", "Mansfield", "Chesterfield", "Newark", "Grantham", "Boston"],
          telephone: "0333 339 4620",
          email: "eastmids@excelems.com",
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
          name: "Event Medical Services - East Midlands",
          description: "Professional event medical coverage across the East Midlands region",
          areaServed: ["Nottingham", "Leicester", "Derby", "Lincoln", "Loughborough", "Mansfield", "Chesterfield", "Newark", "Grantham", "Boston"],
          provider: "Excel Medical Solutions",
          url: "https://excelems.co.uk"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://excelems.co.uk" },
          { name: "East Midlands First Aid Medical Cover", url: "https://excelems.co.uk/east-midlands-first-aid-medical-cover" }
        ]}
      />
      <Header />
      
      <main>
        <EastMidlandsHero />
        <EastMidlandsFAQ />
        <EastMidlandsSEOContent />
        <EastMidlandsCoverageAreas />
        <EastMidlandsServices />
        <EastMidlandsContact />
      </main>

      <Footer />
    </div>
  );
};

export default EastMidlandsFirstAidMedicalCover;
