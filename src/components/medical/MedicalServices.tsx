
import { Heart, Shield, Users, Clock } from "lucide-react";

const MedicalServices = () => {
  const services = [
    {
      icon: Heart,
      title: "Emergency Medical Care",
      description: "Qualified paramedics and first aiders on-site for immediate response to medical emergencies."
    },
    {
      icon: Shield,
      title: "Risk Assessment & Planning",
      description: "Comprehensive medical risk assessments tailored to your specific event requirements."
    },
    {
      icon: Users,
      title: "Crowd Medical Management",
      description: "Experienced teams managing medical coverage for events of all sizes across the UK."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock medical coverage and support throughout your entire event duration."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-medical-darkGreen mb-4">
            Why Choose Excel Medical Solutions?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With years of experience in event medical services, we understand what it takes 
            to keep your event safe and compliant with health and safety regulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center border-l-4" style={{ borderLeftColor: '#d2f406' }}>
              <service.icon className="h-12 w-12 mx-auto mb-4" style={{ color: '#d2f406' }} />
              <h3 className="text-xl font-bold text-medical-darkGreen mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalServices;
