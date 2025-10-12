
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import WalesHero from "@/components/regions/WalesHero";
import WalesCoverageAreas from "@/components/regions/WalesCoverageAreas";
import WalesServices from "@/components/regions/WalesServices";
import WalesFAQ from "@/components/regions/WalesFAQ";
import WalesContact from "@/components/regions/WalesContact";
import WalesSEOContent from "@/components/regions/WalesSEOContent";

const Wales = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Wales Event Medical Services | First Aid Cardiff Swansea Newport | Ambulance Hire Bangor Wrexham"
        description="Professional event medical services across Wales. Event first aid Cardiff, Swansea, Newport, Bangor, Wrexham. Ambulance hire, paramedic services for festivals, sports events, corporate functions throughout Wales including Snowdonia, Pembrokeshire, Brecon Beacons."
        keywords="wales event medical, cardiff first aid, swansea ambulance hire, newport medical cover, bangor event medical, wrexham paramedic services, wales medical services, llandudno first aid, aberystwyth ambulance, carmarthen medical cover, merthyr tydfil event medical, barry first aid, caerphilly ambulance hire, neath medical services, port talbot event medical, bridgend first aid, flint ambulance hire, rhyl medical cover, prestatyn event medical, colwyn bay first aid, conwy ambulance hire, pwllheli medical services, haverfordwest event medical, pembroke first aid, tenby ambulance hire, brecon medical cover, monmouth event medical, chepstow first aid, abergavenny ambulance hire, machynlleth medical services, dolgellau event medical, barmouth first aid, porthmadog ambulance hire, holyhead medical cover, snowdonia event medical, pembrokeshire medical services, brecon beacons first aid"
        url="https://excelems.co.uk/regions/wales"
        localBusinessSchema={{
          name: "Excel Medical Solutions - Wales",
          description: "Event medical services covering Cardiff, Swansea, Newport and all of Wales",
          areaServed: ["Cardiff", "Swansea", "Newport", "Bangor", "Wrexham", "Llandudno", "Aberystwyth", "Carmarthen", "Merthyr Tydfil", "Barry", "Caerphilly", "Neath", "Port Talbot", "Bridgend", "Flint", "Rhyl", "Prestatyn", "Colwyn Bay", "Conwy", "Pwllheli", "Haverfordwest", "Pembroke", "Tenby", "Brecon", "Monmouth", "Chepstow", "Abergavenny", "Machynlleth", "Dolgellau", "Barmouth", "Porthmadog", "Holyhead"],
          telephone: "0333 339 4620",
          email: "wales@excelems.com",
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
          { name: "Wales", url: "https://excelems.co.uk/regions/wales" }
        ]}
      />
      <Header />
      
      <WalesHero />
      <WalesCoverageAreas />

      {/* Event Images */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/lovable-uploads/8f2bf84b-b560-4ba6-89b7-ae4f1e4a5470.png"
                alt="Portmeirion, iconic Wales location"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/lovable-uploads/1df67c8f-0426-49e3-98e9-f1b20b108052.png"
                alt="Excel EMS medical jacket at stadium event"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <WalesServices />
      <WalesFAQ />
      <WalesSEOContent />
      <WalesContact />

      <Footer />
    </div>
  );
};

export default Wales;
