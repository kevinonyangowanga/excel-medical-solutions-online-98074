
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Heart, Users, Clock, Shield, Award } from "lucide-react";

const FirstAidLondon = () => {
  const services = [
    {
      icon: Heart,
      title: "Event First Aid Cover",
      description: "Professional first aid teams for events across London with qualified first aiders and emergency medical technicians.",
      features: [
        "Qualified First Aiders",
        "Emergency Medical Technicians",
        "Basic Life Support",
        "Wound Care & Treatment",
        "Incident Management",
        "Emergency Response Plans"
      ]
    },
    {
      icon: Users,
      title: "Corporate First Aid",
      description: "First aid coverage for corporate events, conferences, and business functions throughout London.",
      features: [
        "Corporate Event Cover",
        "Conference Medical Support",
        "Business Function First Aid",
        "Office Event Coverage",
        "Training Session Support",
        "Professional Presentation"
      ]
    },
    {
      icon: Shield,
      title: "Festival First Aid",
      description: "Specialised first aid services for festivals, concerts, and large gatherings across London boroughs.",
      features: [
        "Festival Medical Teams",
        "Crowd Safety Management",
        "Multiple First Aid Points",
        "Rapid Response Capability",
        "Weather Protection",
        "Extended Hours Coverage"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="First Aid Cover London | Professional Event First Aid Services Central London Westminster Camden"
        description="Professional first aid cover for events across London. Qualified first aiders and emergency medical technicians for festivals, sports events, corporate functions in Central London, Westminster, Camden, Islington, Hackney and all London boroughs."
        keywords="first aid cover london, event first aid london, first aid services london, first aiders london, emergency first aid london, first aid central london, first aid westminster, first aid camden, first aid islington, first aid hackney, first aid tower hamlets, first aid greenwich, first aid croydon, first aid bromley, first aid richmond, first aid kingston, london first aid, greater london first aid, qualified first aiders london, emergency medical technician london, first aid training london, first aid course london, first aid certification london"
        url="https://excelems.co.uk/services/first-aid-london"
        localBusinessSchema={{
          name: "Excel Medical Solutions - First Aid Services London",
          description: "Professional first aid cover and qualified first aiders for events across London",
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
          serviceType: ["First Aid Services", "Emergency Medical Response", "Event First Aid Cover"]
        }}
        breadcrumbs={[
          { name: "Home", url: "https://excelems.co.uk" },
          { name: "Services", url: "https://excelems.co.uk/services" },
          { name: "First Aid London", url: "https://excelems.co.uk/services/first-aid-london" }
        ]}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              First Aid Cover London | Professional Event First Aid Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Professional first aid cover for events across London and Greater London. 
              Our qualified first aiders and emergency medical technicians provide comprehensive first aid services for festivals, sports events, corporate functions and community gatherings.
            </p>
            <div className="flex items-center justify-center text-yellow-600 mb-8">
              <MapPin className="h-6 w-6 mr-2" />
              <span className="text-lg font-semibold">Serving All London Boroughs & Greater London</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our First Aid Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Our London First Aid Services?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Qualified First Aiders</h3>
              <p className="text-gray-600">All our first aiders are fully qualified and certified, with regular training updates and emergency response experience.</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Rapid Response</h3>
              <p className="text-gray-600">Quick deployment across London with strategically positioned teams for immediate emergency response.</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Comprehensive Cover</h3>
              <p className="text-gray-600">Complete first aid coverage from small corporate events to large festivals across all London boroughs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our First Aid Services in London
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

      {/* London Areas Coverage */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            First Aid Coverage Across London
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Central London</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Westminster</li>
                <li>Camden</li>
                <li>Islington</li>
                <li>City of London</li>
                <li>Southwark</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">East London</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Hackney</li>
                <li>Tower Hamlets</li>
                <li>Newham</li>
                <li>Waltham Forest</li>
                <li>Redbridge</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">South London</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Croydon</li>
                <li>Bromley</li>
                <li>Greenwich</li>
                <li>Lewisham</li>
                <li>Sutton</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">West London</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Richmond</li>
                <li>Kingston</li>
                <li>Hammersmith</li>
                <li>Ealing</li>
                <li>Hounslow</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Hidden Content */}
      <div className="sr-only">
        <h2>First Aid Services London - Complete Coverage</h2>
        <p>Excel Medical Solutions provides professional first aid cover, qualified first aiders and emergency medical technicians across London including:</p>
        <p>First aid cover Central London, first aid Westminster, first aid Camden, first aid Islington, first aid Hackney, first aid Tower Hamlets, first aid Greenwich, first aid Southwark, first aid Lambeth, first aid Wandsworth, first aid Hammersmith, first aid Fulham, first aid Kensington, first aid Chelsea, first aid Brent, first aid Ealing, first aid Hounslow, first aid Richmond, first aid Kingston, first aid Merton, first aid Sutton, first aid Croydon, first aid Bromley, first aid Lewisham, first aid Bexley, first aid Havering, first aid Barking, first aid Dagenham, first aid Redbridge, first aid Newham, first aid Waltham Forest, first aid Haringey, first aid Enfield, first aid Barnet, first aid Harrow, first aid Hillingdon.</p>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-400 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need First Aid Cover in London?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for professional first aid services across London and Greater London.
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

export default FirstAidLondon;
