
import { Helmet } from 'react-helmet-async';
import {
  createDefaultLocalBusinessSchema,
  createCustomLocalBusinessSchema,
  createServiceSchema,
  createBreadcrumbSchema,
  createArticleSchema
} from '@/utils/seoSchemas';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  robots?: string;
  serviceSchema?: {
    name: string;
    description: string;
    areaServed: string[];
    provider: string;
    url: string;
  }
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
  articleSchema?: {
    headline: string;
    datePublished: string;
    dateModified: string;
    author: string;
  };
  localBusinessSchema?: {
    name: string;
    description: string;
    areaServed: string[];
    telephone: string;
    email: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    geo: {
      latitude: number;
      longitude: number;
    };
    serviceType: string[];
  };
}

const SEO = ({
  title = "Excel Medical Solutions - Professional Event Medical Services UK",
  description = "Leading provider of event medical services across the UK. Professional ambulance transport, onsite treatment centres, and healthcare staffing for events, sports, festivals, and more.",
  keywords = "event medical services, ambulance transport, first aid, emergency response, healthcare staffing, UK medical cover, sports events medical, festival medical services",
  image = "/lovable-uploads/4ebea8ab-199d-47e6-b0ac-7a664e85526d.png",
  url = "https://excelems.co.uk",
  type = "website",
  robots = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  serviceSchema,
  breadcrumbs,
  articleSchema,
  localBusinessSchema
}: SEOProps) => {
  const fullTitle = title.includes("Excel Medical Solutions") ? title : `${title} | Excel Medical Solutions`;
  
  // Create schemas
  const schemas = [];
  
  // Business schema
  const businessSchema = localBusinessSchema 
    ? createCustomLocalBusinessSchema(localBusinessSchema, url)
    : createDefaultLocalBusinessSchema(description, url);
  schemas.push(businessSchema);

  // Service schema
  if (serviceSchema) {
    schemas.push(createServiceSchema(serviceSchema));
  }

  // Breadcrumb schema
  if (breadcrumbs) {
    schemas.push(createBreadcrumbSchema(breadcrumbs));
  }

  // Article schema
  if (articleSchema) {
    schemas.push(createArticleSchema({ ...articleSchema, url }));
  }

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={url} />
      
      {/* Preload critical resources */}
      <link rel="preload" as="image" href={image} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Excel Medical Solutions" />
      
      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO meta tags */}
      <meta name="theme-color" content="#eab308" />
      <meta name="msapplication-TileColor" content="#eab308" />
      
      {/* Structured data */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
