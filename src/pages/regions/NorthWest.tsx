
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import NorthWestHero from "@/components/regions/NorthWestHero";
import NorthWestCoverageAreas from "@/components/regions/NorthWestCoverageAreas";
import NorthWestServices from "@/components/regions/NorthWestServices";
import NorthWestFAQ from "@/components/regions/NorthWestFAQ";
import NorthWestContact from "@/components/regions/NorthWestContact";
import NorthWestSEOContent from "@/components/regions/NorthWestSEOContent";

const NorthWest = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="North West England Event Medical Services | First Aid Manchester Liverpool Preston | Ambulance Hire Cumbria"
        description="Professional event medical services across North West England and Cumbria. Event first aid Manchester, Liverpool, Preston, Blackpool, Bolton. Ambulance hire, paramedic services for festivals, sports events, corporate functions in Cumbria, Lake District."
        keywords="event first aid manchester, ambulance hire liverpool, preston medical cover, blackpool event medical, bolton paramedic services, north west first aid, wigan ambulance hire, oldham medical cover, rochdale event medical, salford first aid, stockport medical services, warrington event medical, chester first aid, crewe medical cover, lancaster ambulance hire, blackburn event medical, burnley first aid, accrington medical services, cumbria event medical, lake district first aid, carlisle ambulance hire, penrith medical cover, kendal event medical, windermere first aid, ambleside medical services, keswick event medical, cockermouth first aid, workington medical cover, whitehaven ambulance hire, barrow medical services"
        url="https://excelems.co.uk/regions/north-west"
        localBusinessSchema={{
          name: "Excel Medical Solutions - North West England & Cumbria",
          description: "Event medical services covering Manchester, Liverpool, Preston, Cumbria and all North West England",
          areaServed: ["Manchester", "Liverpool", "Preston", "Blackpool", "Bolton", "Wigan", "Oldham", "Rochdale", "Salford", "Stockport", "Warrington", "Chester", "Crewe", "Lancaster", "Blackburn", "Burnley", "Accrington", "Nelson", "Colne", "Clitheroe", "Rawtenstall", "Bacup", "Haslingden", "Ramsbottom", "Bury", "Heywood", "Middleton", "Chadderton", "Shaw", "Royton", "Failsworth", "Cumbria", "Lake District", "Carlisle", "Penrith", "Kendal", "Windermere", "Ambleside", "Keswick", "Cockermouth", "Workington", "Whitehaven", "Barrow-in-Furness"],
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
          name: "Event Medical Services - North West England & Cumbria",
          description: "Professional event medical coverage, ambulance hire and first aid services across North West England and Cumbria including Manchester, Liverpool, Preston and Lake District",
          areaServed: ["Manchester", "Liverpool", "Preston", "Blackpool", "Bolton", "Wigan", "Oldham", "Rochdale", "Salford", "Stockport", "Warrington", "Chester", "Crewe", "Lancaster", "Blackburn", "Cumbria", "Lake District"],
          provider: "Excel Medical Solutions",
          url: "https://excelems.co.uk"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://excelems.co.uk" },
          { name: "Regions", url: "https://excelems.co.uk/regions" },
          { name: "North West England", url: "https://excelems.co.uk/regions/north-west" }
        ]}
      />
      <Header />
      
      <main>
        <NorthWestHero />

        {/* SEO Hidden Cities List */}
        <div className="sr-only">
          <h2>Event Medical Services Coverage Areas</h2>
          <p>We provide event first aid, ambulance hire and medical cover in: Manchester, Liverpool, Preston, Blackpool, Bolton, Wigan, Oldham, Rochdale, Salford, Stockport, Warrington, Chester, Crewe, Lancaster, Blackburn, Burnley, Accrington, Nelson, Colne, Clitheroe, Rawtenstall, Bacup, Haslingden, Ramsbottom, Bury, Heywood, Middleton, Chadderton, Shaw, Royton, Failsworth, Cumbria, Lake District, Carlisle, Penrith, Kendal, Windermere, Ambleside, Keswick, Cockermouth, Workington, Whitehaven, Barrow-in-Furness.</p>
        </div>

        {/* Event Images */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/lovable-uploads/4a59f87b-2326-4b00-89e2-230bb89728ce.png"
                  alt="Liverpool waterfront - North West England event medical coverage area"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  width={800}
                  height={384}
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/lovable-uploads/517a92ae-d3e7-4fac-8630-d1d181242b08.png"
                  alt="Charity event medical support in North West England"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  width={800}
                  height={384}
                />
              </div>
            </div>
          </div>
        </section>

        <NorthWestCoverageAreas />
        <NorthWestServices />
        <NorthWestFAQ />
        <NorthWestSEOContent />
        <NorthWestContact />
      </main>

      <Footer />
    </div>
  );
};

export default NorthWest;
