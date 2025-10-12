import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SpecialisedServicesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      id: 1,
      title: "Pride Event Medical Cover",
      description: "LGBTQ+ friendly medical support for Pride events across the UK",
      image: "/lovable-uploads/093412a1-81d1-4575-9869-12a7e5f91009.png",
      link: "/industries/pride",
      badge: "Inclusive Team"
    },
    {
      id: 2,
      title: "Remembrance Day Services",
      description: "Respectful medical coverage for commemorative events and ceremonies",
      image: "/lovable-uploads/e5af63f5-ecd7-4d19-9f86-2d6b47a15b1a.png",
      link: "/industries/remembrance",
      badge: "Respectful Care"
    },
    {
      id: 3,
      title: "Fireworks Display Cover",
      description: "Specialised safety support for bonfire nights and pyrotechnic events",
      image: "/lovable-uploads/2e56e00f-cfcf-4728-9094-6b3029b95748.png",
      link: "/industries/fireworks",
      badge: "Safety First"
    },
    {
      id: 4,
      title: "Stadium Medical Services",
      description: "Professional medical coverage for large venue sporting events",
      image: "/lovable-uploads/ccb2e6b0-7acd-428c-a78c-3488cd6cfa0f.png",
      link: "/industries/stadium",
      badge: "Large Scale"
    },
    {
      id: 5,
      title: "Sports Festival Coverage",
      description: "Comprehensive medical support for youth and community sports events",
      image: "/lovable-uploads/517a92ae-d3e7-4fac-8630-d1d181242b08.png",
      link: "/industries/sports-festivals",
      badge: "Community Focus"
    },
    {
      id: 6,
      title: "Charity Event Support",
      description: "Affordable medical coverage for fundraising and community events",
      image: "/lovable-uploads/71ba258f-87e4-4efb-9033-885f57a8d0f5.png",
      link: "/industries/charity",
      badge: "Good Causes"
    },
    {
      id: 7,
      title: "Equestrian Event Medical Cover",
      description: "Specialist medical support for horse riding events and competitions",
      image: "/lovable-uploads/889c3c8c-9b1a-424b-b909-4c4c3fad4e2a.png",
      link: "/industries/equestrian",
      badge: "Expert Care"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const getVisibleSlides = () => {
    // Mobile: 1 slide, Tablet: 2 slides, Desktop: 3 slides
    return window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  };

  const visibleSlides = getVisibleSlides();
  const slideWidth = 100 / visibleSlides;

  return (
    <section className="py-16" style={{ backgroundColor: 'rgba(210, 244, 6, 0.1)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Specialised Medical Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our expert medical coverage tailored for specific event types and communities
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * slideWidth}%)` }}
            >
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  className="flex-shrink-0 px-2 md:px-4"
                  style={{ width: `${slideWidth}%` }}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                    <div className="relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-48 object-cover"
                      />
                      <span 
                        className="absolute top-2 right-2 text-black text-xs font-bold px-2 py-1 rounded"
                        style={{ backgroundColor: '#d2f406' }}
                      >
                        {service.badge}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <Link to={service.link}>
                        <Button 
                          className="w-full text-white hover:opacity-90"
                          style={{ backgroundColor: '#006400' }}
                        >
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 z-10"
            aria-label="Previous services"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 z-10"
            aria-label="Next services"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Slide indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(services.length / visibleSlides) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index * visibleSlides)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  Math.floor(currentSlide / visibleSlides) === index ? "bg-gray-700" : "bg-gray-300"
                }`}
                aria-label={`Go to service group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialisedServicesCarousel;
