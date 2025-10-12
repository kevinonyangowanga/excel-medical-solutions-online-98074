
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import YorkshireHero from "@/components/regions/YorkshireHero";
import YorkshireFAQ from "@/components/regions/YorkshireFAQ";
import YorkshireSEOContent from "@/components/regions/YorkshireSEOContent";
import YorkshireServices from "@/components/regions/YorkshireServices";
import YorkshireContact from "@/components/regions/YorkshireContact";
import YorkshireCoverageAreas from "@/components/regions/YorkshireCoverageAreas";

const Yorkshire = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Yorkshire Medical Services | Event Medical Coverage Leeds Sheffield York | Ambulance Hire Bradford"
        description="Professional event medical services across Yorkshire. Covering Leeds, Sheffield, York, Bradford and surrounding areas with qualified paramedics and state-of-the-art medical equipment."
        keywords="yorkshire medical services, leeds event medical, sheffield medical cover, york ambulance services, bradford first aid cover, yorkshire event medical, huddersfield first aid, halifax ambulance hire, harrogate medical cover, scarborough event medical, hull first aid, doncaster ambulance, rotherham medical services, barnsley event medical, wakefield first aid, yorkshire dales medical cover"
        url="https://excelems.co.uk/regions/yorkshire"
        localBusinessSchema={{
          name: "Excel Medical Solutions - Yorkshire",
          description: "Event medical services covering Leeds, Sheffield, York, Bradford and all Yorkshire areas",
          areaServed: ["Leeds", "Sheffield", "York", "Bradford", "Kingston upon Hull", "Doncaster", "Rotherham", "Barnsley", "Wakefield", "Huddersfield", "Halifax", "Harrogate", "Scarborough", "Castleford", "Pontefract"],
          telephone: "0333 339 4620",
          email: "yorkshire@excelems.com",
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
          name: "Event Medical Services - Yorkshire",
          description: "Professional event medical coverage across the Yorkshire region",
          areaServed: ["Leeds", "Sheffield", "York", "Bradford", "Kingston upon Hull", "Doncaster", "Rotherham", "Barnsley", "Wakefield", "Huddersfield", "Halifax", "Harrogate", "Scarborough"],
          provider: "Excel Medical Solutions",
          url: "https://excelems.co.uk"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://excelems.co.uk" },
          { name: "Regions", url: "https://excelems.co.uk/regions" },
          { name: "Yorkshire", url: "https://excelems.co.uk/regions/yorkshire" }
        ]}
      />
      <Header />
      
      <main>
        <YorkshireHero />
        <YorkshireFAQ />
        <YorkshireSEOContent />
        <YorkshireCoverageAreas />
        <YorkshireServices />
        <YorkshireContact />
      </main>

      <Footer />
    </div>
  );
};

export default Yorkshire;
