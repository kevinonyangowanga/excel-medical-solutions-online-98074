import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const prideImages = [
  {
    src: "/lovable-uploads/093412a1-81d1-4575-9869-12a7e5f91009.png",
    alt: "EMS rainbow vehicle with Responding With PRIDE branding at outdoor event",
  },
  {
    src: "/lovable-uploads/b6a6d65c-612d-46c4-9b05-d0891931e39f.png",
    alt: "EMS staff with Rainbow ambulance on green grass at Pride",
  },
  {
    src: "/lovable-uploads/9909405a-db3d-4b3d-9818-b4e7d49d1ea1.png",
    alt: "EMS Pride event group photo in front of ambulance",
  },
  {
    src: "/lovable-uploads/4776f496-b8ca-4c7c-9e3d-e7c1131a628b.png",
    alt: "EMS rainbow ambulance leading a Pride parade",
  },
  {
    src: "/lovable-uploads/9f7e55ce-3df9-40eb-a6a4-dc29345300ba.png",
    alt: "EMS rainbow ambulance and ambulance van at event",
  },
  {
    src: "/lovable-uploads/5e0cc578-8bbb-49ab-87a9-350fc0aac707.png",
    alt: "EMS rainbow ambulance at Pride with blue tents",
  },
  {
    src: "/lovable-uploads/4b4e6f61-51d6-4b95-bb4a-9bc0a80aa32b.png",
    alt: "EMS rainbow ambulance near First Aid tent at Pride",
  },
  {
    src: "/lovable-uploads/c1be7c43-1cdf-4ba2-94c5-c9925669dc40.png",
    alt: "EMS rainbow ambulance and bike with Pride flag",
  }
];

const features = [
  "LGBTQ+ owned and friendly, inclusive team",
  "Medical cover for Pride marches, festivals, parties and celebrations across the UK",
  "State-of-the-art ambulance vehicles – including our Rainbow Responder ambulance!",
  "Experienced, friendly paramedics and first aiders",
  "Minor and major medical support for all event sizes",
  "Risk assessment and event planning guidance",
  "Fast response for emergencies and crowd safety management"
];

const Pride = () => (
  <div className="min-h-screen flex flex-col">
    <SEO
      title="Pride Event Medical Cover | Inclusive Ambulance Team | Excel Medical Solutions"
      description="LGBTQ+ friendly, professional Pride event medical services across the UK. Book our rainbow ambulance and paramedic team for your Pride celebration with Excel Medical Solutions."
      keywords="Pride event medical, LGBTQ+ ambulance, Pride medical cover, event medical UK, rainbow ambulance"
      url="https://excelems.co.uk/industries/pride"
    />
    <Header />

    {/* Hero Section */}
    <section className="py-0 relative" style={{ backgroundColor: 'rgba(210, 244, 6, 0.1)' }}>
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center justify-center">
        <img
          src="/lovable-uploads/093412a1-81d1-4575-9869-12a7e5f91009.png"
          alt="EMS rainbow vehicle with Responding With PRIDE branding at outdoor event"
          className="w-full h-80 md:h-[420px] object-cover shadow-lg rounded-b-3xl"
          style={{ objectPosition: "center 60%" }}
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-white/90 via-white/40 to-transparent">
          <div className="p-6 md:p-10 text-center">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 drop-shadow mb-2">Pride Event Medical Services</h1>
            <span 
              className="inline-block text-black rounded-xl px-3 py-1 text-lg font-medium mb-3 shadow-sm"
              style={{ backgroundColor: '#d2f406' }}
            >
              LGBTQ+ Inclusive Team Covering Pride Events Across The UK
            </span>
            <p className="text-xl md:text-2xl font-medium text-gray-700 max-w-2xl mx-auto">
              Professional, visible & friendly medical cover at Pride parades, marches and celebrations nationwide.
              Book your event's rainbow ambulance and expert crew today!
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Image Carousel */}
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <Carousel>
          <CarouselContent>
            {prideImages.map((img, i) => (
              <CarouselItem key={i} className="flex justify-center">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="max-h-72 w-auto rounded-xl shadow-md object-cover object-center border-4"
                  style={{ borderColor: '#d2f406' }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>

    {/* Features & About */}
    <section className="py-12" style={{ backgroundColor: 'rgba(210, 244, 6, 0.1)' }}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Choose Excel Medical for Your Pride?</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 mb-8 text-left">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-3">
              <span 
                className="w-4 h-4 mt-1 inline-block rounded-full flex-shrink-0" 
                style={{ backgroundColor: '#006400' }}
              />
              <span className="font-medium text-gray-800">{f}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg mt-2 mb-8 font-semibold max-w-prose mx-auto" style={{ color: '#006400' }}>
          We celebrate diversity, ensure everyone feels included, and are passionate about providing a welcoming medical experience for Pride organisers and attendees alike.
        </p>
      </div>
    </section>

    {/* CTA section */}
    <section className="py-16 text-black" style={{ backgroundColor: '#d2f406' }}>
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-3">Ready for Safe & Proud Events?</h3>
        <p className="text-xl mb-8 max-w-xl mx-auto">
          Contact our rainbow team for a custom Pride event medical quote – nationwide coverage, 7 days a week!
        </p>
        <div className="flex justify-center">
          <Button 
            asChild 
            size="lg" 
            className="text-white hover:opacity-90 shadow-lg" 
            style={{ backgroundColor: '#006400' }}
          >
            <a 
              href="https://www.cognitoforms.com/XLTeam1/EventMedicalResourceCalculator" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Get a Pride Event Quote
            </a>
          </Button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Pride;
