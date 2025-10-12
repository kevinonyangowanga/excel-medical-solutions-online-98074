
import { useEffect } from "react";

// Extend Window interface to include gtagLoaded
declare global {
  interface Window {
    gtagLoaded?: boolean;
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

// REPLACE these with your real Tracking IDs or provide them in a follow-up.
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";
const GSC_SITE_VERIFICATION = "XXXXXXXXX"; // e.g., from HTML meta provided by Google Search Console

const Analytics = () => {
  useEffect(() => {
    // Load Google Analytics asynchronously to avoid blocking
    const loadGoogleAnalytics = () => {
      if (GA_MEASUREMENT_ID && !window.gtagLoaded) {
        // Create and load gtag script
        const script = document.createElement("script");
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        script.onload = () => {
          // Initialize gtag after script loads
          window.dataLayer = window.dataLayer || [];
          window.gtag = function() { window.dataLayer!.push(arguments); };
          window.gtag('js', new Date());
          window.gtag('config', GA_MEASUREMENT_ID, {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true,
            anonymize_ip: true, // GDPR compliance
            cookie_flags: 'SameSite=None;Secure' // Modern cookie settings
          });
          
          // Track Core Web Vitals
          window.gtag('config', GA_MEASUREMENT_ID, {
            custom_map: {
              'metric1': 'LCP',
              'metric2': 'FID', 
              'metric3': 'CLS'
            }
          });
        };
        document.head.appendChild(script);
        window.gtagLoaded = true;
      }
    };

    // Load analytics after a brief delay to prioritize critical rendering
    const timeoutId = setTimeout(loadGoogleAnalytics, 100);

    // Google Search Console Verification
    if (GSC_SITE_VERIFICATION && !document.getElementById("gsc-meta")) {
      const meta = document.createElement("meta");
      meta.name = "google-site-verification";
      meta.content = GSC_SITE_VERIFICATION;
      meta.id = "gsc-meta";
      document.head.appendChild(meta);
    }

    return () => clearTimeout(timeoutId);
  }, []);

  // Track page views on route changes
  useEffect(() => {
    const trackPageView = () => {
      if (window.gtag) {
        window.gtag('config', GA_MEASUREMENT_ID, {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname,
        });
      }
    };

    // Listen for navigation changes (for SPA routing)
    const handleRouteChange = () => {
      setTimeout(trackPageView, 100); // Small delay to ensure title is updated
    };

    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return null;
};

export default Analytics;
