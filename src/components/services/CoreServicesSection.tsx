
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ambulance, Users, Clock, Contact, Heart, Shield, Coffee, Video, Building2, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const CoreServicesSection = () => {
  const mainServices = [
    {
      icon: Ambulance,
      title: "Event Medical Services",
      description: "Comprehensive medical coverage for events of all sizes with qualified paramedics and emergency response teams.",
      image: "/lovable-uploads/aa2f29c4-dd06-47f4-af64-801aefbe148d.png",
      features: [
        "Qualified Paramedics & EMTs",
        "Mobile Medical Units",
        "Emergency Response Teams",
        "Risk Assessment & Planning",
        "Medical Equipment Supply",
        "Crowd Safety Management"
      ],
      suitable: ["Festivals", "Sports Events", "Concerts", "Corporate Events"]
    },
    {
      icon: Contact,
      title: "Ambulance Transport",
      description: "24/7 ambulance services with rapid response times and fully equipped vehicles for emergency situations.",
      image: "/lovable-uploads/57988b7c-3cce-4b97-9017-a94a689e310f.png",
      features: [
        "24/7 Emergency Response",
        "Advanced Life Support",
        "Land Based Repatriation",
        "Fully Equipped Vehicles",
        "Trained Paramedic Crew",
        "Hospital Transfer Service"
      ],
      suitable: ["Emergency Transport", "Hospital Transfers", "Event Standby", "Private Healthcare"]
    },
    {
      icon: Users,
      title: "Onsite Treatment Centres",
      description: "Mobile medical facilities equipped with advanced treatment capabilities for comprehensive patient care.",
      image: "/lovable-uploads/da2627a7-9de7-4794-94e9-611e5bd31fff.png",
      features: [
        "Mobile Treatment Units",
        "Advanced Medical Equipment",
        "Qualified Medical Staff",
        "Minor Injury Treatment",
        "Emergency Stabilisation",
        "Patient Monitoring"
      ],
      suitable: ["Large Events", "Remote Locations", "Multi-day Events", "High-Risk Activities"]
    },
    {
      icon: Clock,
      title: "First Aid & Emergency Response",
      description: "Professional first aid teams and emergency response services for immediate medical intervention.",
      image: "/lovable-uploads/a8bab1e2-f7de-4b17-8670-c0be7febe970.png",
      features: [
        "Certified First Aiders",
        "Emergency Response Plans",
        "Incident Management",
        "Basic Life Support",
        "Wound Care & Treatment",
        "Medical Emergency Training"
      ],
      suitable: ["Small Events", "Workplace Safety", "Community Events", "Educational Institutions"]
    },
    {
      icon: Building2,
      title: "Stadium Medical Services",
      description: "Professional medical coverage for stadiums and large sporting venues with dedicated on-site medical teams.",
      image: "/lovable-uploads/stadium-medical-services.jpg",
      features: [
        "Stadium Medical Teams",
        "Match Day Coverage",
        "VIP Medical Support",
        "Emergency Response",
        "Crowd Medical Management",
        "Liaison with Local Hospitals"
      ],
      suitable: ["Football Stadiums", "Rugby Venues", "Cricket Grounds", "Athletics Stadiums"]
    },
    {
      icon: Trophy,
      title: "Sports Medical Services",
      description: "Specialised medical support for sporting events with qualified sports medicine professionals and rapid response capabilities.",
      image: "/lovable-uploads/508219bd-11a0-4f7b-b330-37d1090713ed.png",
      features: [
        "Sports Medicine Specialists",
        "Injury Assessment",
        "Pitch-side Treatment",
        "Player Safety",
        "Team Medical Support",
        "Competition Medical Coverage"
      ],
      suitable: ["Football Matches", "Rugby Games", "Athletics Events", "Multi-sport Events"]
    },
    {
      icon: Heart,
      title: "Healthcare Staffing",
      description: "Qualified medical professionals including doctors, paramedics, and first responders for your event needs.",
      image: "/lovable-uploads/3721faa8-6740-4cce-a771-3dbf6b97d2f1.png",
      features: [
        "Qualified Doctors",
        "Registered Paramedics",
        "Emergency Medical Technicians",
        "Registered Nurses",
        "First Aid Responders",
        "Medical Supervisors"
      ],
      suitable: ["High-Risk Events", "Contact Sports", "TV/Film Productions", "Industrial Sites"]
    },
    {
      icon: Shield,
      title: "Risk Assessment & Consultation",
      description: "Professional medical risk assessment and safety consultation to ensure comprehensive event planning.",
      image: "/lovable-uploads/167064ec-2551-4de1-ad06-3763535f0ebe.png",
      features: [
        "Medical Risk Assessment",
        "Safety Planning",
        "Regulatory Compliance",
        "Emergency Procedures",
        "Staff Training",
        "Documentation Support"
      ],
      suitable: ["Event Planning", "Venue Assessment", "Safety Compliance", "Insurance Requirements"]
    },
    {
      icon: Coffee,
      title: "Event Welfare Services",
      description: "Comprehensive welfare support services to ensure attendee comfort and well-being throughout your event.",
      image: "/lovable-uploads/d65de54d-d5cd-4939-a4a4-242c2d015ed9.png",
      features: [
        "Welfare Coordination",
        "Support Services",
        "Mental Health Support",
        "Accessibility Assistance",
        "Comfort Facilities",
        "Emergency Welfare Response"
      ],
      suitable: ["Festivals", "Large Events", "Multi-day Events", "Public Gatherings"]
    },
    {
      icon: Video,
      title: "Film & TV Medics",
      description: "Specialised medical support for film, television, and media productions with industry-specific expertise.",
      image: "/lovable-uploads/c42c472f-d201-4e61-a301-b492583d27dd.png",
      features: [
        "On-set Medical Support",
        "Stunt Safety Coverage",
        "Production Medical Planning",
        "Cast & Crew Health",
        "Location Medical Services",
        "Emergency Response Planning"
      ],
      suitable: ["Film Productions", "TV Shows", "Commercial Shoots", "Theatre Productions"]
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Core Medical Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional medical coverage tailored to your specific event requirements and risk profile.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {mainServices.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white border-gray-200 overflow-hidden">
              <div className="aspect-video relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/95 p-3 rounded-lg">
                    <service.icon className="h-8 w-8 text-[#006400]" />
                  </div>
                </div>
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4">
                  <div>
                    <CardTitle className="text-xl mb-2">
                      {service.title === "Event Medical Services" || service.title === "First Aid & Emergency Response" ? (
                        <Link to="/industries" className="hover:text-blue-600 transition-colors">
                          {service.title}
                        </Link>
                      ) : service.title === "Ambulance Transport" ? (
                        <a href="https://ambulance.excelems.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                          {service.title}
                        </a>
                      ) : service.title === "Onsite Treatment Centres" || service.title === "Film & TV Medics" ? (
                        <Link to="/contact" className="hover:text-blue-600 transition-colors">
                          {service.title}
                        </Link>
                      ) : service.title === "Healthcare Staffing" ? (
                        <a href="https://xlhealth.org" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                          {service.title}
                        </a>
                      ) : service.title === "Risk Assessment & Consultation" ? (
                        <Link to="/services#service-process" className="hover:text-blue-600 transition-colors">
                          {service.title}
                        </Link>
                      ) : service.title === "Event Welfare Services" ? (
                        <a href="https://eventwelfareservices.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                          {service.title}
                        </a>
                      ) : (
                        service.title
                      )}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Service Features:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-accent rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Suitable For:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.suitable.map((item, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs bg-[#d2f406] text-black border-[#d2f406] hover:bg-[#d2f406]/80">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServicesSection;
