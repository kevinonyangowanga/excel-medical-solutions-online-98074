
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageSquare, Instagram } from "lucide-react";
const Footer = () => {
  return <footer className="bg-medical-darkGreen text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/lovable-uploads/209a189c-f0a9-4e14-9848-809e6bb8fbe5.png" alt="Excel Medical Solutions Logo" className="h-10 w-auto filter brightness-0 invert" />
            </div>
            <p className="text-gray-300 mb-4">
              Leading provider of professional event medical services across the UK. 
              Trusted by thousands of events nationwide.
            </p>
            <p className="font-semibold mb-4 text-sm" style={{
            color: '#d2f406'
          }}>
              "Protecting Lives, Supporting Communities"
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1A89zsXdJX/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full flex items-center justify-center transition-colors" style={{
              backgroundColor: '#d2f406'
            }} aria-label="Follow us on Facebook (opens in new window)">
                <span className="text-sm font-bold text-black" aria-hidden="true">f</span>
              </a>
              <a href="https://x.com/xlteamukmedical?s=21&t=bWiB7Lysu3T9F9zDo_kVXw" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full flex items-center justify-center transition-colors" style={{
              backgroundColor: '#d2f406'
            }} aria-label="Follow us on X (Twitter) (opens in new window)">
                <span className="text-sm font-bold text-black" aria-hidden="true">t</span>
              </a>
              <a href="https://www.tiktok.com/@xlteamuk?_t=ZN-8wvsxyOwYAo&_r=1" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full flex items-center justify-center transition-colors" style={{
              backgroundColor: '#d2f406'
            }} aria-label="Follow us on TikTok (opens in new window)">
                <span className="text-sm font-bold text-black" aria-hidden="true">tk</span>
              </a>
              <a href="https://www.instagram.com/xlteamuk/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full flex items-center justify-center transition-colors" style={{
              backgroundColor: '#d2f406'
            }} aria-label="Follow us on Instagram (opens in new window)">
                <Instagram className="h-4 w-4 text-black" aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/company/excel-ems/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full flex items-center justify-center transition-colors" style={{
              backgroundColor: '#d2f406'
            }} aria-label="Follow us on LinkedIn (opens in new window)">
                <span className="text-sm font-bold text-black" aria-hidden="true">in</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/industries" className="text-gray-300 hover:text-white transition-colors">Industries</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/accessibility" className="text-gray-300 hover:text-white transition-colors">Accessibility</Link></li>
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Our services">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/industries" className="text-gray-300 hover:text-white transition-colors">Event Medical Services</Link></li>
              <li><a href="https://eventwelfareservices.co.uk" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Event Welfare Services<span className="sr-only"> (opens in new window)</span></a></li>
              <li><a href="https://ambulance.excelems.co.uk" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Ambulance Services<span className="sr-only"> (opens in new window)</span></a></li>
              <li><Link to="/industries/stadium" className="text-gray-300 hover:text-white transition-colors">Medical Cover for Venues</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Treatment Centres</Link></li>
              <li><span className="text-gray-300">First Aid Response</span></li>
              <li><a href="https://xlhealth.org" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Healthcare Staffing<span className="sr-only"> (opens in new window)</span></a></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Risk Assessment</Link></li>
            </ul>
          </nav>

          {/* Contact Info */}
          <section aria-labelledby="contact-heading">
            <h3 id="contact-heading" className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" style={{
                color: '#d2f406'
              }} aria-hidden="true" />
                <div>
                  <a href="tel:03333394620" className="text-white font-semibold hover:underline">0333 339 4620</a>
                  <p className="text-gray-300 text-sm">For urgent requirements</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" style={{
                color: '#d2f406'
              }} aria-hidden="true" />
                <div>
                  <a href="mailto:hello@excelems.co.uk" className="text-white hover:underline">hello@excelems.co.uk</a>
                  <p className="text-gray-300 text-sm">General Enquiries</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MessageSquare className="h-5 w-5" style={{
                color: '#d2f406'
              }} aria-hidden="true" />
                <div>
                  <a href="https://www.cognitoforms.com/XLTeam1/PatientFeedback" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors">
                    Patient Feedback<span className="sr-only"> (opens in new window)</span>
                  </a>
                  <p className="text-gray-300 text-sm">Your feedback is important to us</p>
                </div>
              </div>
            </div>
            
            {/* Accreditation Logos */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-gray-300">Accreditations</h4>
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg flex items-center justify-center" style={{
                backgroundColor: '#d2f406'
              }}>
                  <img src="/lovable-uploads/4620393e-b63c-4936-93d7-d7cdbdb71d5b.png" alt="Accredited by Care Quality Commission - CQC registered and regulated healthcare provider" className="h-6 w-auto" />
                </div>
                <div className="p-2 rounded-lg flex items-center justify-center" style={{
                backgroundColor: '#d2f406'
              }}>
                  <img src="/lovable-uploads/c44ab26c-6c4a-4394-be3a-02b7523aadf4.png" alt="Proud signatory of the Armed Forces Covenant - supporting military personnel and veterans" className="h-6 w-auto" />
                </div>
                <div className="p-2 rounded-lg flex items-center justify-center" style={{
                backgroundColor: '#d2f406'
              }}>
                  <img src="/lovable-uploads/c0188624-0755-405b-8566-09cefe498332.png" alt="Disability Confident Committed employer - committed to inclusive hiring practices" className="h-6 w-auto" />
                </div>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="mt-6">
              <div className="bg-red-600 border border-red-500 rounded-lg p-3" role="alert">
                <p className="text-white text-xs font-thin">
                  EMERGENCY NOTICE - We do not respond to 999 emergency calls directly. In an emergency, call 999 immediately.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="border-t border-gray-600 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Excel Medical Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
