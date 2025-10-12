
import { useEffect } from 'react';

const CriticalCSS = () => {
  useEffect(() => {
    // Load non-critical CSS after page load
    const loadNonCriticalCSS = () => {
      const links = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
      ];

      links.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.media = 'print';
        link.onload = () => {
          link.media = 'all';
        };
        document.head.appendChild(link);
      });
    };

    // Load after initial render
    setTimeout(loadNonCriticalCSS, 100);
  }, []);

  return null;
};

export default CriticalCSS;
