
import { useEffect } from 'react';

const PreloadCriticalResources = () => {
  useEffect(() => {
    // Preload critical images
    const criticalImages = [
      '/lovable-uploads/79b6e9f8-e9dc-45a9-807e-b50a03fae874.png',
      '/lovable-uploads/3e8186d2-1c99-4db7-a536-573f92e38d0d.png'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    // DNS prefetch for external domains
    const domains = [
      '//fonts.googleapis.com',
      '//fonts.gstatic.com',
      '//www.googletagmanager.com',
      '//www.cognitoforms.com'
    ];

    domains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });
  }, []);

  return null;
};

export default PreloadCriticalResources;
