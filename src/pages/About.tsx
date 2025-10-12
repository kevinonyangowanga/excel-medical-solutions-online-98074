
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import AboutHero from "@/components/about/AboutHero";
import CompanyStory from "@/components/about/CompanyStory";
import ServicesOverview from "@/components/about/ServicesOverview";
import CompanyValues from "@/components/about/CompanyValues";
import AboutCTA from "@/components/about/AboutCTA";

const About = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="About Us - Excel Medical Solutions" 
        description="Learn about Excel Medical Solutions, the UK's leading event medical service provider with over 75 years of combined experience and thousands of successful events." 
        keywords="about excel medical solutions, event medical company UK, professional medical services, healthcare experience, medical team credentials" 
        url="https://excelems.co.uk/about" 
      />
      <Header />
      
      <AboutHero />
      <CompanyStory />
      <ServicesOverview />
      <CompanyValues />
      <AboutCTA />

      <Footer />
    </div>
  );
};

export default About;
