
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Privacy Policy - Excel Medical Solutions"
        description="Privacy policy for Excel Medical Solutions, outlining how we collect, use, and protect your personal information in accordance with UK data protection laws."
        keywords="privacy policy, data protection, GDPR, UK privacy law, personal information"
        url="https://excelems.co.uk/privacy"
        robots="noindex, nofollow"
      />
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: {new Date().toLocaleDateString('en-GB')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              Excel Medical Solutions ("we", "our", or "us") is committed to protecting and respecting your privacy. 
              This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit 
              our website or use our services.
            </p>
            <p className="text-gray-700 mb-4">
              This policy complies with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 mb-4">We may collect and process the following types of personal information:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Contact information (name, email address, phone number, postal address)</li>
              <li>Event details and requirements when you request a quote</li>
              <li>Website usage data through cookies and analytics</li>
              <li>Communication records when you contact us</li>
              <li>Emergency contact information for event personnel</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use your personal information for the following purposes:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Providing medical services and event coverage</li>
              <li>Processing and responding to enquiries and quote requests</li>
              <li>Communicating about our services and events</li>
              <li>Improving our website and services</li>
              <li>Complying with legal and regulatory requirements</li>
              <li>Emergency response and medical care during events</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Legal Basis for Processing</h2>
            <p className="text-gray-700 mb-4">
              We process your personal information based on the following legal grounds:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Consent: When you provide explicit consent for specific processing activities</li>
              <li>Contract: To fulfil our contractual obligations to provide medical services</li>
              <li>Legitimate interests: For business development and service improvement</li>
              <li>Vital interests: For emergency medical care and life-saving treatment</li>
              <li>Legal obligation: To comply with healthcare regulations and safety requirements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">
              We may share your personal information with:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Medical professionals and emergency services as required for patient care</li>
              <li>Event organisers for coordination and safety purposes</li>
              <li>Regulatory bodies and authorities as legally required</li>
              <li>Our trusted service providers who assist in delivering our services</li>
              <li>Insurance companies for claims processing</li>
            </ul>
            <p className="text-gray-700 mb-4">
              We do not sell, rent, or trade your personal information to third parties for marketing purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organisational measures to protect your personal information 
              against unauthorised access, alteration, disclosure, or destruction. This includes:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Secure data transmission and storage systems</li>
              <li>Access controls and authentication procedures</li>
              <li>Regular security assessments and updates</li>
              <li>Staff training on data protection principles</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
            <p className="text-gray-700 mb-4">
              We retain your personal information only for as long as necessary to fulfil the purposes for which 
              it was collected, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Medical records: In accordance with NHS and healthcare regulatory requirements</li>
              <li>Business records: For up to 7 years for accounting and legal purposes</li>
              <li>Marketing communications: Until you unsubscribe or withdraw consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights</h2>
            <p className="text-gray-700 mb-4">Under UK data protection law, you have the following rights:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Right of access: Request copies of your personal information</li>
              <li>Right to rectification: Request correction of inaccurate information</li>
              <li>Right to erasure: Request deletion of your personal information</li>
              <li>Right to restrict processing: Limit how we use your information</li>
              <li>Right to data portability: Receive your data in a portable format</li>
              <li>Right to object: Object to certain types of processing</li>
              <li>Right to withdraw consent: Withdraw consent for consent-based processing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Cookies and Website Analytics</h2>
            <p className="text-gray-700 mb-4">
              Our website uses cookies to improve your browsing experience and analyse website usage. 
              You can control cookie settings through your browser preferences. For more information about 
              the cookies we use, please see our Cookie Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or wish to exercise your data protection rights, 
              please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Excel Medical Solutions</strong></p>
              <p className="text-gray-700 mb-2">Team Valley Trading Estate</p>
              <p className="text-gray-700 mb-2">Gateshead, NE11 0BQ</p>
              <p className="text-gray-700 mb-2">Email: hello@excelems.co.uk</p>
              <p className="text-gray-700 mb-2">Phone: 0333 339 4620</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Complaints</h2>
            <p className="text-gray-700 mb-4">
              If you believe we have not handled your personal information in accordance with data protection law, 
              you have the right to lodge a complaint with the Information Commissioner's Office (ICO):
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Information Commissioner's Office</strong></p>
              <p className="text-gray-700 mb-2">Wycliffe House, Water Lane</p>
              <p className="text-gray-700 mb-2">Wilmslow, Cheshire, SK9 5AF</p>
              <p className="text-gray-700 mb-2">Phone: 0303 123 1113</p>
              <p className="text-gray-700">Website: www.ico.org.uk</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or 
              applicable laws. We will notify you of any material changes by posting the updated policy on 
              our website with a new effective date.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
