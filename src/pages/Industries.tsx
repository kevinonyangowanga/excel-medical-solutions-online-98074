
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesGrid from "@/components/industries/IndustriesGrid";
import SpecialisedServicesCarousel from "@/components/industries/SpecialisedServicesCarousel";
import WhyChooseUs from "@/components/industries/WhyChooseUs";
import IndustriesCTA from "@/components/industries/IndustriesCTA";

const Industries = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Industries We Serve - Event Medical Coverage"
        description="Excel Medical Solutions provides specialised medical coverage for sports events, festivals, corporate events, film productions, and more across the UK."
        keywords="sports event medical cover, festival medical services, corporate event healthcare, film production medical, concert medical support, marathon medical services"
        url="https://excelems.co.uk/industries"
      />
      <Header />
      <IndustriesHero />
      <IndustriesGrid />
      <SpecialisedServicesCarousel />
      <WhyChooseUs />
      <IndustriesCTA />
      <Footer />
    </div>
  );
};

export default Industries;
