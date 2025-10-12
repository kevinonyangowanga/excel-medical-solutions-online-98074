
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import NorthEastHero from "@/components/regions/NorthEastHero";
import NorthEastCoverageAreas from "@/components/regions/NorthEastCoverageAreas";
import NorthEastServices from "@/components/regions/NorthEastServices";
import NorthEastFAQ from "@/components/regions/NorthEastFAQ";
import NorthEastContact from "@/components/regions/NorthEastContact";
import NorthEastSEOContent from "@/components/regions/NorthEastSEOContent";

const NorthEastFirstAidMedicalCover = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="North East England Event Medical Services | First Aid Newcastle Durham Sunderland | Ambulance Hire"
        description="Professional event medical services across North East England. Event first aid Newcastle, Durham, Sunderland, Middlesbrough, Gateshead. Ambulance hire, paramedic services for festivals, sports events, corporate functions."
        keywords="event first aid newcastle, ambulance hire durham, sunderland medical cover, middlesbrough event medical, gateshead paramedic services, north east first aid, hartlepool ambulance hire, stockton medical cover, darlington event medical, hexham first aid, alnwick medical services, berwick upon tweed ambulance, south shields event medical, washington first aid, cramlington medical cover, blyth event medical, ashington ambulance hire, morpeth first aid, consett medical services, stanley event medical, chester le street first aid, seaham medical cover, peterlee ambulance hire, newton aycliffe event medical, spennymoor first aid, bishop auckland medical services"
        url="https://excelems.co.uk/north-east-first-aid-medical-cover"
        localBusinessSchema={{
          name: "Excel Medical Solutions - North East England",
          description: "Event medical services covering Newcastle, Durham, Sunderland and all North East England",
          areaServed: ["Newcastle upon Tyne", "Durham", "Sunderland", "Middlesbrough", "Gateshead", "South Shields", "Darlington", "Hartlepool", "Stockton-on-Tees", "Hexham", "Alnwick", "Berwick-upon-Tweed", "Washington", "Cramlington", "Blyth", "Ashington", "Morpeth", "Consett", "Stanley", "Chester-le-Street", "Seaham", "Peterlee", "Newton Aycliffe", "Spennymoor", "Bishop Auckland"],
          telephone: "0333 339 4620",
          email: "northeast@excelems.com",
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
          serviceType: ["Event Medical Services", "Ambulance Hire", "First Aid Services", "Paramedic Services", "Emergency Medical Response", "Sports Medical Cover", "Festival Medical Services"]
        }}
        serviceSchema={{
          name: "Event Medical Services - North East England",
          description: "Professional event medical coverage, ambulance hire and first aid services across North East England including Newcastle, Durham, Sunderland and surrounding areas",
          areaServed: ["Newcastle upon Tyne", "Durham", "Sunderland", "Middlesbrough", "Gateshead", "South Shields", "Darlington", "Hartlepool", "Stockton-on-Tees", "Hexham", "Alnwick", "Berwick-upon-Tweed"],
          provider: "Excel Medical Solutions",
          url: "https://excelems.co.uk"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://excelems.co.uk" },
          { name: "North East First Aid Medical Cover", url: "https://excelems.co.uk/north-east-first-aid-medical-cover" }
        ]}
      />
      <Header />
      
      <main>
        <NorthEastHero />
        <NorthEastSEOContent />

        {/* Event Images */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/lovable-uploads/a87522c9-ebb4-43e1-93fc-fbb6841c462b.png"
                  alt="Hadrian's Wall in North East England - event medical coverage area"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  width={800}
                  height={384}
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/lovable-uploads/2bba6c5a-b7df-45a1-bda1-0a76cbb7fd35.png"
                  alt="EMS staff providing medical support at North East England festival"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  width={800}
                  height={384}
                />
              </div>
            </div>
          </div>
        </section>

        <NorthEastCoverageAreas />
        <NorthEastServices />
        <NorthEastFAQ />
        <NorthEastContact />
      </main>

      <Footer />
    </div>
  );
};

export default NorthEastFirstAidMedicalCover;
