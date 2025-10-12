import { Suspense, lazy } from "react";
import EnhancedSEO from "@/components/EnhancedSEO";

const Header = lazy(() => import("@/components/Header"));
const Footer = lazy(() => import("@/components/Footer"));

const Accessibility = () => {
  return (
    <div className="min-h-screen">
      <EnhancedSEO 
        title="Accessibility Statement | Excel Medical Solutions"
        description="Our commitment to web accessibility and compliance with UK accessibility laws including the Equality Act 2010 and WCAG 2.1 AA standards."
        url="https://excelems.co.uk/accessibility"
      />
      
      <Suspense fallback={<div className="h-16 animate-pulse bg-gray-200"></div>}>
        <Header />
      </Suspense>
      
      <main id="main-content" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Accessibility Statement</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              At Excel Medical Solutions we are committed to ensuring our website is accessible to everyone, including people with disabilities. We aim to meet or exceed the standards set out in the Equality Act 2010 and the Public Sector Bodies (Websites and Mobile Applications) Accessibility Regulations 2018, following the Web Content Accessibility Guidelines (WCAG) 2.1 AA.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Commitment</h2>
            <p className="text-gray-700 mb-4">We strive to make our online content:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Perceivable</strong> – information and user interface components are presented in ways all users can perceive.</li>
              <li><strong>Operable</strong> – website functions are accessible using a keyboard or assistive technology.</li>
              <li><strong>Understandable</strong> – content is clear, consistent, and easy to navigate.</li>
              <li><strong>Robust</strong> – compatible with current and future assistive technologies.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Accessibility Features</h2>
            <p className="text-gray-700 mb-4">Our website includes the following features:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Descriptive alternative text for images.</li>
              <li>Clear and consistent navigation across all pages.</li>
              <li>Sufficient text contrast for readability.</li>
              <li>Logical heading structure for screen readers.</li>
              <li>Keyboard-friendly navigation and form inputs.</li>
              <li>Avoidance of flashing content or animations that may cause harm.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Ongoing Improvements</h2>
            <p className="text-gray-700 mb-6">
              We continuously review and improve our website to enhance accessibility. We welcome feedback from users to help us identify and address any issues.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Feedback and Contact</h2>
            <p className="text-gray-700 mb-4">
              If you experience any difficulty accessing information on our site or would like to suggest improvements, please contact us:
            </p>
            <p className="text-gray-700 mb-6">
              📧 Email: <a href="mailto:hello@excelems.com" className="text-medical-blue hover:underline">hello@excelems.com</a>
            </p>
            <p className="text-gray-700">
              We aim to respond to all accessibility-related enquiries within 5 working days.
            </p>
          </div>
        </div>
      </main>
      
      <Suspense fallback={<div className="h-32 animate-pulse bg-gray-200"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Accessibility;
