import { useEffect, useRef } from "react";

export function usePerformance() {
  const startTime = useRef<number>(Date.now());
  const imageLoadTimes = useRef<{ [key: string]: number }>({});

  useEffect(() => {
    // Track overall page performance
    const handleLoad = () => {
      const loadTime = Date.now() - startTime.current;
      console.log(`🚀 Page loaded in ${loadTime}ms`);

      // Send to analytics if available
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "page_load_time", {
          value: loadTime,
          custom_parameter: "hero_carousel",
        });
      }
    };

    // Track image performance
    const trackImageLoad = (src: string, loadTime: number) => {
      imageLoadTimes.current[src] = loadTime;
      console.log(`📷 Image ${src} loaded in ${loadTime}ms`);

      // Send to analytics if available
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "image_load_time", {
          value: loadTime,
          custom_parameter: src,
        });
      }
    };

    // Track carousel performance
    const trackCarouselSlide = (slideIndex: number, transitionTime: number) => {
      console.log(`🔄 Slide ${slideIndex} transitioned in ${transitionTime}ms`);

      // Send to analytics if available
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "carousel_slide", {
          value: slideIndex,
          custom_parameter: transitionTime,
        });
      }
    };

    // Expose tracking functions globally for components to use
    if (typeof window !== "undefined") {
      (window as any).trackImageLoad = trackImageLoad;
      (window as any).trackCarouselSlide = trackCarouselSlide;
    }

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
      if (typeof window !== "undefined") {
        delete (window as any).trackImageLoad;
        delete (window as any).trackCarouselSlide;
      }
    };
  }, []);

  return {
    getImageLoadTime: (src: string) => imageLoadTimes.current[src] || 0,
    getTotalLoadTime: () => Date.now() - startTime.current,
  };
}
