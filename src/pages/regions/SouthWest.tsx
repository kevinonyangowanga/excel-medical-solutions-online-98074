
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SouthWestHero from "@/components/regions/SouthWestHero";
import SouthWestCoverageAreas from "@/components/regions/SouthWestCoverageAreas";
import SouthWestServices from "@/components/regions/SouthWestServices";
import SouthWestFAQ from "@/components/regions/SouthWestFAQ";
import SouthWestContact from "@/components/regions/SouthWestContact";
import SouthWestSEOContent from "@/components/regions/SouthWestSEOContent";

const SouthWest = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="South West England Event Medical Services | First Aid Bristol Bath Exeter | Ambulance Hire Plymouth Cornwall Devon"
        description="Professional event medical services across South West England. Event first aid Bristol, Bath, Exeter, Plymouth, Cornwall, Devon. Ambulance hire, paramedic services for festivals, sports events, corporate functions throughout South West counties."
        keywords="south west medical services, bristol event medical, bath first aid, exeter ambulance hire, plymouth medical cover, cornwall event medical, devon first aid, gloucester ambulance hire, cheltenham medical cover, taunton event medical, truro first aid, penzance ambulance hire, newquay medical cover, south west first aid, west country ambulance hire, dartmoor medical cover, exmoor event medical, cotswolds first aid, glastonbury festival medical, eden project ambulance hire, bristol harbourside medical cover"
        url="https://excelems.co.uk/regions/south-west"
        localBusinessSchema={{
          name: "Excel Medical Solutions - South West",
          description: "Event medical services covering Bristol, Bath, Exeter, Plymouth, Cornwall, Devon and all South West England",
          areaServed: ["Bristol", "Bath", "Exeter", "Plymouth", "Gloucester", "Cheltenham", "Taunton", "Bridgwater", "Yeovil", "Truro", "Penzance", "St Austell", "Falmouth", "Newquay", "Bodmin", "Launceston", "Torquay", "Paignton", "Newton Abbot", "Barnstaple", "Bideford", "Weston-super-Mare", "Stroud", "Glastonbury", "Wells", "Frome"],
          telephone: "0333 339 4620",
          email: "southwest@excelems.com",
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
          { name: "South West", url: "https://excelems.co.uk/regions/south-west" }
        ]}
      />
      <Header />
      
      <SouthWestHero />

      {/* Event Images */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/lovable-uploads/7c4e6ac4-21d4-4781-b9da-7618cae451ef.png"
                alt="Cornish harbour and village, South West England"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/lovable-uploads/a5e78a61-d5cf-4480-bea6-29d9fc2a908c.png"
                alt="EMS vehicle in town centre at South West event"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <SouthWestCoverageAreas />
      <SouthWestServices />
      <SouthWestFAQ />
      <SouthWestSEOContent />
      <SouthWestContact />

      <Footer />
    </div>
  );
};

export default SouthWest;
