
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  robots?: string;
  canonicalUrl?: string;
  hreflang?: Array<{ lang: string; url: string }>;
  structuredData?: object[];
  preloadImages?: string[];
  critical?: boolean;
}

const EnhancedSEO = ({
  title = "Excel Medical Solutions - Professional Event Medical Services UK",
  description = "Leading provider of event medical services across the UK. Professional ambulance transport, onsite treatment centres, and healthcare staffing for events, sports, festivals, and more.",
  keywords = "event medical services, ambulance transport, first aid, emergency response, healthcare staffing, UK medical cover, sports events medical, festival medical services",
  image = "/lovable-uploads/4ebea8ab-199d-47e6-b0ac-7a664e85526d.png",
  url = "https://excelems.co.uk",
  type = "website",
  robots = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  canonicalUrl,
  hreflang = [],
  structuredData = [],
  preloadImages = [],
  critical = false
}: EnhancedSEOProps) => {
  const fullTitle = title.includes("Excel Medical Solutions") ? title : `${title} | Excel Medical Solutions`;
  const canonical = canonicalUrl || url;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://excelems.co.uk/#organization",
    "name": "Excel Medical Solutions",
    "alternateName": "Excel EMS",
    "url": "https://excelems.co.uk",
    "logo": {
      "@type": "ImageObject",
      "url": "https://excelems.co.uk/lovable-uploads/4ebea8ab-199d-47e6-b0ac-7a664e85526d.png",
      "width": 1200,
      "height": 630
    },
    "description": description,
    "telephone": "0333 339 4620",
    "email": "hello@excelems.co.uk",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Team Valley Trading Estate",
      "addressLocality": "Gateshead",
      "addressRegion": "Tyne and Wear",
      "postalCode": "NE11 0BQ",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 54.9783,
      "longitude": -1.6178
    },
    "areaServed": [
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "AdministrativeArea", "name": "England" },
      { "@type": "AdministrativeArea", "name": "Scotland" },
      { "@type": "AdministrativeArea", "name": "Wales" },
      { "@type": "AdministrativeArea", "name": "Northern Ireland" }
    ],
    "serviceType": [
      "Event Medical Services",
      "Ambulance Services",
      "Emergency Medical Response",
      "Healthcare Staffing",
      "First Aid Services"
    ],
    "sameAs": [
      "https://www.facebook.com/share/1A89zsXdJX/?mibextid=wwXIfr",
      "https://x.com/xlteamukmedical?s=21&t=bWiB7Lysu3T9F9zDo_kVXw",
      "https://www.linkedin.com/company/excel-ems/",
      "https://www.tiktok.com/@xlteamuk?_t=ZN-8wvsxyOwYAo&_r=1"
    ]
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://excelems.co.uk/#website",
    "url": "https://excelems.co.uk",
    "name": "Excel Medical Solutions",
    "description": description,
    "publisher": {
      "@id": "https://excelems.co.uk/#organization"
    },
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://excelems.co.uk/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    ]
  };

  const allStructuredData = [organizationSchema, webSiteSchema, ...structuredData];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />
      
      {/* Preload critical resources */}
      {critical && (
        <>
          <link rel="preload" as="image" href={image} />
          <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" as="style" />
        </>
      )}
      
      {preloadImages.map((img, index) => (
        <link key={index} rel="preload" as="image" href={img} />
      ))}
      
      {/* Hreflang tags */}
      {hreflang.map((lang, index) => (
        <link key={index} rel="alternate" hrefLang={lang.lang} href={lang.url} />
      ))}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Excel Medical Solutions" />
      <meta property="og:locale" content="en_GB" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@xlteamukmedical" />
      <meta name="twitter:creator" content="@xlteamukmedical" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Performance hints */}
      <meta name="theme-color" content="#d2f406" />
      <meta name="msapplication-TileColor" content="#d2f406" />
      
      {/* Structured Data */}
      {allStructuredData.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default EnhancedSEO;
