
import { Suspense, lazy } from "react";
import EnhancedSEO from "@/components/EnhancedSEO";
import SkipLink from "@/components/SkipLink";

// Lazy load components for better performance
const Header = lazy(() => import("@/components/Header"));
const HeroCarousel = lazy(() => import("@/components/HeroCarousel"));
const ServicesOverview = lazy(() => import("@/components/ServicesOverview"));
const TrustSection = lazy(() => import("@/components/TrustSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const Footer = lazy(() => import("@/components/Footer"));

const ComponentLoader = () => (
  <div className="animate-pulse">
    <div className="h-16 bg-gray-200 mb-4"></div>
    <div className="h-96 bg-gray-200 mb-8"></div>
  </div>
);

const Index = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://excelems.co.uk" }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Event Medical Services & First Aid Cover",
    "description": "Professional event medical services, first aid cover, event ambulance hire and paramedic services for events across the UK. Qualified emergency medical technicians and paramedics available 24/7.",
    "provider": {
      "@id": "https://excelems.co.uk/#organization"
    },
    "serviceType": [
      "Event Medical Services",
      "First Aid Cover",
      "Event Ambulance Hire",
      "Event Paramedic Services", 
      "Emergency Medical Response",
      "Sports Event Medical Cover",
      "Festival Medical Services",
      "Corporate Event Medical Support"
    ],
    "areaServed": [
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "AdministrativeArea", "name": "England" },
      { "@type": "AdministrativeArea", "name": "Scotland" },
      { "@type": "AdministrativeArea", "name": "Wales" },
      { "@type": "AdministrativeArea", "name": "Northern Ireland" },
      { "@type": "City", "name": "London" },
      { "@type": "City", "name": "Birmingham" },
      { "@type": "City", "name": "Manchester" },
      { "@type": "City", "name": "Leeds" },
      { "@type": "City", "name": "Liverpool" },
      { "@type": "City", "name": "Newcastle" },
      { "@type": "City", "name": "Edinburgh" },
      { "@type": "City", "name": "Glasgow" },
      { "@type": "City", "name": "Cardiff" },
      { "@type": "City", "name": "Bristol" }
    ],
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "Contact for quote",
      "priceCurrency": "GBP",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "GBP",
        "valueAddedTaxIncluded": true
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Event Medical Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "First Aid Cover",
            "description": "Professional first aid cover for events with qualified first aiders"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Event Ambulance Hire",
            "description": "Private ambulance hire for events with qualified paramedics"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Event Paramedic Services",
            "description": "Professional paramedic services for sports events, festivals and corporate functions"
          }
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you provide first aid cover for events?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide professional first aid cover for all types of events across the UK with qualified first aiders and paramedics."
        }
      },
      {
        "@type": "Question", 
        "name": "Can I hire an ambulance for my event?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer event ambulance hire services with fully equipped vehicles and qualified paramedic crews for events of all sizes."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide paramedic services for sports events?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialise in providing qualified paramedic services for sports events, festivals, concerts and corporate functions nationwide."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you cover?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "We provide event medical services across the entire UK including England, Scotland, Wales and Northern Ireland. Major cities covered include London, Birmingham, Manchester, Leeds, Liverpool, Newcastle, Edinburgh, Glasgow, Cardiff and Bristol."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SkipLink />
      <EnhancedSEO
        title="Event Medical Services UK | First Aid Cover | Event Ambulance Hire | Excel EMS"
        description="Professional event medical services, first aid cover, event ambulance hire and paramedic services across the UK. Qualified emergency medical support for sports events, festivals, concerts and corporate functions. Available 24/7 nationwide - London, Birmingham, Manchester, Leeds, Newcastle, Edinburgh, Glasgow, Cardiff and more."
        keywords="event medical services, first aid cover, event ambulance hire, event paramedic services, sports event medical, festival medical cover, concert medical support, corporate event medical, emergency medical response, qualified paramedics, first aiders, event safety, medical cover London, medical cover Birmingham, medical cover Manchester, medical cover Leeds, medical cover Newcastle, medical cover Edinburgh, medical cover Glasgow, medical cover Cardiff, UK event medical"
        url="https://excelems.co.uk"
        type="website"
        structuredData={[serviceSchema, breadcrumbSchema, faqSchema]}
        preloadImages={[
          "/lovable-uploads/79b6e9f8-e9dc-45a9-807e-b50a03fae874.png",
          "/lovable-uploads/3e8186d2-1c99-4db7-a536-573f92e38d0d.png"
        ]}
        critical={true}
      />
      
      <Suspense fallback={<ComponentLoader />}>
        <Header />
      </Suspense>
      
      <main id="main-content">
        <Suspense fallback={<ComponentLoader />}>
          <HeroCarousel />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 animate-pulse bg-gray-200"></div>}>
          <ServicesOverview />
        </Suspense>
        
        <Suspense fallback={<div className="h-64 animate-pulse bg-gray-200"></div>}>
          <TrustSection />
        </Suspense>
        
        <Suspense fallback={<div className="h-48 animate-pulse bg-gray-200"></div>}>
          <CTASection />
        </Suspense>
      </main>
      
      <Suspense fallback={<div className="h-32 animate-pulse bg-gray-200"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
