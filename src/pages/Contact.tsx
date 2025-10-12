
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ContactHero from "@/components/contact/ContactHero";
import ContactMethods from "@/components/contact/ContactMethods";
import QuoteForm from "@/components/contact/QuoteForm";
import ContactInfo from "@/components/contact/ContactInfo";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Contact Us - Get Your Event Medical Quote"
        description="Contact Excel Medical Solutions for professional event medical services. Get your free quote today. 24/7 emergency line: 0333 339 4620. Email: hello@excelems.co.uk"
        keywords="contact excel medical solutions, event medical quote, emergency medical services contact, ambulance services quote, medical coverage enquiry"
        url="https://excelems.co.uk/contact"
      />
      <Header />
      
      <ContactHero />
      
      <ContactMethods />

      {/* Quote Form Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <QuoteForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
