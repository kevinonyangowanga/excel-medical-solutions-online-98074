
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import MidlandsHero from "@/components/regions/MidlandsHero";
import MidlandsCoverageAreas from "@/components/regions/MidlandsCoverageAreas";
import MidlandsServices from "@/components/regions/MidlandsServices";
import MidlandsFAQ from "@/components/regions/MidlandsFAQ";
import MidlandsContact from "@/components/regions/MidlandsContact";
import MidlandsSEOContent from "@/components/regions/MidlandsSEOContent";

const Midlands = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Midlands Event Medical Services | First Aid Birmingham Nottingham Leicester | Ambulance Hire Derby Coventry"
        description="Professional event medical services across the Midlands. Event first aid Birmingham, Nottingham, Leicester, Derby, Coventry. Ambulance hire, paramedic services for festivals, sports events, corporate functions throughout East Midlands, West Midlands."
        keywords="midlands event medical, birmingham first aid, nottingham ambulance hire, leicester medical cover, derby event medical, coventry paramedic services, midlands medical services, wolverhampton first aid, stoke ambulance, worcester medical cover, northampton event medical, mansfield first aid, shrewsbury ambulance hire, telford medical services, hereford event medical, gloucester first aid, cheltenham ambulance hire, warwick medical cover, stratford event medical, rugby first aid, nuneaton ambulance hire, tamworth medical services, burton event medical, stafford first aid, cannock ambulance hire, kidderminster medical cover, redditch event medical, bromsgrove first aid, solihull ambulance hire, west bromwich medical cover, walsall event medical, dudley first aid, sutton coldfield ambulance hire, east midlands medical, west midlands first aid, peak district event medical"
        url="https://excelems.co.uk/regions/midlands"
        localBusinessSchema={{
          name: "Excel Medical Solutions - Midlands",
          description: "Event medical services covering Birmingham, Nottingham, Leicester and all of the Midlands",
          areaServed: ["Birmingham", "Nottingham", "Leicester", "Derby", "Coventry", "Wolverhampton", "Stoke-on-Trent", "Worcester", "Northampton", "Mansfield", "Shrewsbury", "Telford", "Hereford", "Gloucester", "Cheltenham", "Warwick", "Stratford-upon-Avon", "Rugby", "Nuneaton", "Tamworth", "Burton upon Trent", "Stafford", "Cannock", "Kidderminster", "Redditch", "Bromsgrove", "Solihull", "West Bromwich", "Walsall", "Dudley", "Sutton Coldfield"],
          telephone: "0333 339 4620",
          email: "midlands@excelems.com",
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
          { name: "Midlands", url: "https://excelems.co.uk/regions/midlands" }
        ]}
      />
      <Header />
      
      <MidlandsHero />
      <MidlandsCoverageAreas />
      <MidlandsServices />
      <MidlandsFAQ />
      <MidlandsSEOContent />
      <MidlandsContact />

      <Footer />
    </div>
  );
};

export default Midlands;
