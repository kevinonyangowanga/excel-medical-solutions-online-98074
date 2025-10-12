
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Ambulance, Clock, Shield, Users, Award } from "lucide-react";

const AmbulanceHireLondon = () => {
  const services = [
    {
      icon: Ambulance,
      title: "Event Ambulance Hire",
      description: "Fully equipped ambulances with qualified paramedic crews for events across London.",
      features: [
        "Fully Equipped Ambulances",
        "Qualified Paramedic Crews",
        "Advanced Life Support",
        "Emergency Transport",
        "Medical Equipment",
        "Rapid Response Capability"
      ]
    },
    {
      icon: Users,
      title: "Festival Ambulance Services",
      description: "Specialised ambulance coverage for festivals, concerts and large events throughout London.",
      features: [
        "Multiple Ambulance Units",
        "Strategic Positioning",
        "Crowd Management Support",
        "Extended Hours Coverage",
        "Weather Protected Services",
        "Coordination with Event Teams"
      ]
    },
    {
      icon: Shield,
      title: "Corporate Ambulance Cover",
      description: "Professional ambulance hire for corporate events, conferences and business functions.",
      features: [
        "Discreet Professional Service",
        "Corporate Event Expertise",
        "Flexible Deployment",
        "Risk Assessment",
        "Insurance Compliance",
        "Emergency Planning"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Ambulance Hire London | Event Ambulance Services Central London Westminster Camden | Private Ambulance Hire"
        description="Professional event ambulance hire services across London. Fully equipped ambulances with qualified paramedic crews for festivals, sports events, corporate functions in Central London, Westminster, Camden, Islington, Hackney and all London boroughs."
        keywords="ambulance hire london, event ambulance london, private ambulance london, ambulance services london, event ambulance hire london, ambulance hire central london, ambulance hire westminster, ambulance hire camden, ambulance hire islington, ambulance hire hackney, ambulance hire tower hamlets, ambulance hire greenwich, ambulance hire croydon, ambulance hire bromley, ambulance hire richmond, ambulance hire kingston, london ambulance hire, greater london ambulance, event ambulance services london, festival ambulance london, sports ambulance london, corporate ambulance london"
        url="https://excelems.co.uk/services/ambulance-hire-london"
        localBusinessSchema={{
          name: "Excel Medical Solutions - Ambulance Hire London",
          description: "Professional event ambulance hire services with qualified paramedic crews across London",
          areaServed: ["Central London", "Westminster", "Camden", "Islington", "Hackney", "Tower Hamlets", "Greenwich", "Croydon", "Bromley", "Richmond", "Kingston"],
          telephone: "0333 339 4620",
          email: "hello@excelems.co.uk",
          address: {
            streetAddress: "Team Valley Trading Estate",
            addressLocality: "Gateshead",
            addressRegion: "Tyne and Wear",
            postalCode: "NE11 0BQ",
            addressCountry: "GB"
          },
          geo: {
            latitude: 54.9783,
            longitude: -1.6178
          },
          serviceType: ["Ambulance Hire", "Event Ambulance Services", "Emergency Medical Transport"]
        }}
        breadcrumbs={[
          { name: "Home", url: "https://excelems.co.uk" },
          { name: "Services", url: "https://excelems.co.uk/services" },
          { name: "Ambulance Hire London", url: "https://excelems.co.uk/services/ambulance-hire-london" }
        ]}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ambulance Hire London | Professional Event Ambulance Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Professional ambulance hire services for events across London and Greater London. 
              Our fully equipped ambulances with qualified paramedic crews provide comprehensive emergency medical transport for festivals, sports events, corporate functions and community events.
            </p>
            <div className="flex items-center justify-center text-yellow-600 mb-8">
              <MapPin className="h-6 w-6 mr-2" />
              <span className="text-lg font-semibold">Serving All London Boroughs & Greater London</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Ambulance Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Our London Ambulance Hire Services?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Qualified Paramedic Crews</h3>
              <p className="text-gray-600">All our ambulances are staffed with qualified paramedics and emergency medical technicians with extensive experience.</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Rapid Deployment</h3>
              <p className="text-gray-600">Strategic positioning across London ensures rapid response times for emergency medical transport.</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Fully Equipped Vehicles</h3>
              <p className="text-gray-600">State-of-the-art ambulances with advanced life support equipment and emergency medical supplies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Ambulance Hire Services in London
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-yellow-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-yellow-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Service Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Capabilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Ambulance Equipment & Capabilities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Medical Equipment</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
                  Defibrillator & Cardiac Monitor
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
                  Oxygen Therapy Equipment
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
                  Spinal Immobilisation Boards
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
                  Emergency Medications
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
                  Trauma & Wound Care Supplies
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Operational Capabilities</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
                  Emergency Transport to Hospital
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
                  Advanced Life Support
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
                  Patient Stabilisation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
                  Radio Communication
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
                  GPS Navigation Systems
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Hidden Content */}
      <div className="sr-only">
        <h2>Ambulance Hire London - Complete Coverage</h2>
        <p>Excel Medical Solutions provides professional ambulance hire, event ambulance services and emergency medical transport across London including:</p>
        <p>Ambulance hire Central London, ambulance hire Westminster, ambulance hire Camden, ambulance hire Islington, ambulance hire Hackney, ambulance hire Tower Hamlets, ambulance hire Greenwich, ambulance hire Southwark, ambulance hire Lambeth, ambulance hire Wandsworth, ambulance hire Hammersmith, ambulance hire Fulham, ambulance hire Kensington, ambulance hire Chelsea, ambulance hire Brent, ambulance hire Ealing, ambulance hire Hounslow, ambulance hire Richmond, ambulance hire Kingston, ambulance hire Merton, ambulance hire Sutton, ambulance hire Croydon, ambulance hire Bromley, ambulance hire Lewisham, ambulance hire Bexley, ambulance hire Havering, ambulance hire Barking, ambulance hire Dagenham, ambulance hire Redbridge, ambulance hire Newham, ambulance hire Waltham Forest, ambulance hire Haringey, ambulance hire Enfield, ambulance hire Barnet, ambulance hire Harrow, ambulance hire Hillingdon.</p>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-400 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Ambulance Hire in London?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for professional ambulance hire services across London and Greater London.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800">
              <Link to="/contact">Get Your Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white">
              <a href="https://www.cognitoforms.com/XLTeam1/RequestCallBack" target="_blank" rel="noopener noreferrer">Schedule a Call</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AmbulanceHireLondon;
