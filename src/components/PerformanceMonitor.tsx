
import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Measure Core Web Vitals
    const measureWebVitals = () => {
      // Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log('LCP:', Math.round(lastEntry.startTime), 'ms');
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          entries.forEach((entry) => {
            // Type assertion for PerformanceEventTiming
            const eventEntry = entry as any;
            if (eventEntry.processingStart && eventEntry.startTime) {
              console.log('FID:', Math.round(eventEntry.processingStart - eventEntry.startTime), 'ms');
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            // Type assertion for layout shift entries
            const layoutEntry = entry as any;
            if (!layoutEntry.hadRecentInput && layoutEntry.value) {
              clsValue += layoutEntry.value;
            }
          }
          console.log('CLS:', clsValue.toFixed(4));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }

      // Page load metrics
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          
          console.log('Performance Metrics:', {
            'DNS Lookup': Math.round(navigation.domainLookupEnd - navigation.domainLookupStart),
            'TCP Connection': Math.round(navigation.connectEnd - navigation.connectStart),
            'Server Response': Math.round(navigation.responseStart - navigation.requestStart),
            'DOM Content Loaded': Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart),
            'Load Complete': Math.round(navigation.loadEventEnd - navigation.fetchStart),
          });
        }, 0);
      });
    };

    measureWebVitals();
  }, []);

  return null;
};

export default PerformanceMonitor;
