
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ScotlandHero from "@/components/regions/ScotlandHero";
import ScotlandCoverageAreas from "@/components/regions/ScotlandCoverageAreas";
import ScotlandServices from "@/components/regions/ScotlandServices";
import ScotlandFAQ from "@/components/regions/ScotlandFAQ";
import ScotlandContact from "@/components/regions/ScotlandContact";
import ScotlandSEOContent from "@/components/regions/ScotlandSEOContent";

const Scotland = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Scotland Event Medical Cover & Ambulance Hire | UK Paramedic Services"
        description="Event medical cover for Scotland: ambulance hire, sports medical teams, UK paramedic services for festivals, stadiums and corporate events in Edinburgh, Glasgow and more."
        keywords="event medical cover scotland, ambulance hire scotland, sports medical teams, UK event paramedic services, scotland medical cover"
        url="https://excelems.co.uk/regions/scotland"
        robots="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        serviceSchema={{
          name: "Event Medical Cover & Ambulance Hire - Scotland",
          description: "Event paramedic services and private ambulance hire for sports, festivals, stadiums and corporate events throughout Scotland.",
          areaServed: ["Scotland", "Edinburgh", "Glasgow", "Aberdeen", "Dundee", "Stirling", "Perth", "Inverness", "Kirkcaldy", "Dunfermline", "Ayr", "Paisley", "East Kilbride", "Livingston", "Hamilton", "Cumbernauld", "Kilmarnock", "Coatbridge", "Greenock", "Glenrothes", "Airdrie", "Falkirk", "Motherwell", "Wishaw", "Rutherglen", "Cambuslang", "Bearsden", "Newton Mearns", "Bishopbriggs", "Musselburgh", "Arbroath", "Elgin", "Dumfries", "Bathgate", "Renfrew", "Alloa", "Bellshill", "Blantyre", "Dumbarton", "Grangemouth", "Larkhall", "Johnstone", "Port Glasgow", "Penicuik", "Easterhouse", "St Andrews", "Montrose", "Forfar", "Inverurie", "Nairn", "Prestonpans", "Dalgety Bay", "Carnoustie", "Erskine", "Linlithgow", "Bonnyrigg", "Broxburn", "Kelso", "Galashiels", "Peebles", "Hawick", "Selkirk", "Jedburgh", "Melrose", "Eyemouth", "Duns", "Coldstream", "Lauder", "Oban", "Fort William", "Mallaig", "Portree", "Stornoway", "Lerwick", "Kirkwall & All Scottish Regions"],
          provider: "Excel Medical Solutions",
          url: "https://excelems.co.uk"
        }}
        localBusinessSchema={{
          name: "Excel Medical Solutions - Scotland",
          description: "Event medical services covering Edinburgh, Glasgow, Aberdeen and all of Scotland",
          areaServed: ["Edinburgh", "Glasgow", "Aberdeen", "Dundee", "Stirling", "Perth", "Inverness", "Kirkcaldy", "Dunfermline", "Ayr", "Paisley", "East Kilbride", "Livingston", "Hamilton"],
          telephone: "0333 339 4620",
          email: "scotland@excelems.com",
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
          { name: "Scotland", url: "https://excelems.co.uk/regions/scotland" }
        ]}
      />
      <Header />
      
      <main>
        <ScotlandHero />
        <ScotlandSEOContent />

        {/* Event Images */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/lovable-uploads/087234d2-9a7a-43e9-8ca8-aa0b5b7aa797.png"
                  alt="The Kelpies sculpture in Scotland"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  width={800}
                  height={384}
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/lovable-uploads/a5e78a61-d5cf-4480-bea6-29d9fc2a908c.png"
                  alt="On-scene EMS ambulance at regional event"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  width={800}
                  height={384}
                />
              </div>
            </div>
          </div>
        </section>

        <ScotlandCoverageAreas />
        <ScotlandServices />
        <ScotlandFAQ />
        <ScotlandContact />
      </main>

      <Footer />
    </div>
  );
};

export default Scotland;
