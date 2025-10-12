interface LocalBusinessSchemaProps {
  name: string;
  description: string;
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
  areaServed: string[];
  serviceType: string[];
  url?: string; // Made optional since it's passed as a separate parameter
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  areaServed: string[];
  provider: string;
  url: string;
}

interface ArticleSchemaProps {
  headline: string;
  datePublished: string;
  dateModified: string;
  author: string;
  url: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export const createDefaultLocalBusinessSchema = (description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://excelems.co.uk/#organisation",
  "name": "Excel Medical Solutions",
  "alternateName": "Excel EMS",
  "description": description,
  "url": url,
  "telephone": "0333 339 4620",
  "email": "hello@excelems.co.uk",
  "foundingDate": "2010",
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
    {
      "@type": "Country",
      "name": "United Kingdom"
    },
    {
      "@type": "AdministrativeArea",
      "name": "England"
    },
    {
      "@type": "AdministrativeArea", 
      "name": "Scotland"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Wales"
    }
  ],
  "serviceType": [
    "Event Medical Services",
    "Ambulance Services", 
    "Emergency Medical Response",
    "Healthcare Staffing",
    "First Aid Services",
    "Medical Equipment Rental",
    "Event Safety Planning"
  ],
  "openingHours": [
    "Mo 00:00-23:59",
    "Tu 00:00-23:59", 
    "We 00:00-23:59",
    "Th 00:00-23:59",
    "Fr 00:00-23:59",
    "Sa 00:00-23:59",
    "Su 00:00-23:59"
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "10:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification", 
      "dayOfWeek": ["Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59",
      "description": "Emergency services only"
    }
  ],
  "logo": {
    "@type": "ImageObject",
    "url": "https://excelems.co.uk/favicon.ico"
  },
  "image": [
    "/lovable-uploads/79b6e9f8-e9dc-45a9-807e-b50a03fae874.png"
  ],
  "sameAs": [
    "https://www.facebook.com/share/1A89zsXdJX/?mibextid=wwXIfr",
    "https://x.com/xlteamukmedical?s=21&t=bWiB7Lysu3T9F9zDo_kVXw",
    "https://www.linkedin.com/company/excel-ems/",
    "https://www.tiktok.com/@xlteamuk?_t=ZN-8wvsxyOwYAo&_r=1"
  ],
  "priceRange": "££",
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "name": "Professional Medical Certifications"
  }
});

export const createCustomLocalBusinessSchema = (localBusinessData: LocalBusinessSchemaProps, url: string) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": localBusinessData.name,
  "description": localBusinessData.description,
  "telephone": localBusinessData.telephone,
  "email": localBusinessData.email,
  "address": {
    "@type": "PostalAddress",
    ...localBusinessData.address
  },
  "geo": {
    "@type": "GeoCoordinates",
    ...localBusinessData.geo
  },
  "areaServed": localBusinessData.areaServed.map(area => ({
    "@type": "Place",
    "name": area
  })),
  "serviceType": localBusinessData.serviceType,
  "url": url
});

export const createServiceSchema = (serviceData: ServiceSchemaProps) => ({
  "@context": "https://schema.org/",
  "@type": "Service",
  "name": serviceData.name,
  "description": serviceData.description,
  "areaServed": serviceData.areaServed.map(area => ({
    "@type": "Place",
    "name": area
  })),
  "provider": {
    "@type": "Organisation",
    "name": serviceData.provider,
    "url": serviceData.url,
  },
  "serviceType": "Medical Services",
  "category": "Healthcare"
});

export const createBreadcrumbSchema = (breadcrumbs: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
});

export const createArticleSchema = (articleData: ArticleSchemaProps) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": articleData.headline,
  "datePublished": articleData.datePublished,
  "dateModified": articleData.dateModified,
  "author": {
    "@type": "Organization",
    "name": articleData.author
  },
  "publisher": {
    "@type": "Organization",
    "name": "Excel Medical Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://excelems.co.uk/favicon.ico"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": articleData.url
  }
});
