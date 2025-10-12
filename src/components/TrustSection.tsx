
import { Card, CardContent } from "@/components/ui/card";
import { Star, Shield, Award, Users, CheckCircle, Medal, FileCheck, GraduationCap } from "lucide-react";

const TrustSection = () => {
  const stats = [
    { number: "10,000+", label: "Events Covered", icon: Users },
    { number: "75+", label: "Years Experience", icon: Award },
    { number: "24/7", label: "Emergency Response", icon: Shield },
    { number: "5★", label: "Safety Rating", icon: Star }
  ];

  const accreditations = [
    { text: "BIBA Registered", icon: FileCheck },
    { text: "England Boxing Approved", icon: Medal },
    { text: "CQC Registered and Regulated", icon: CheckCircle },
    { text: "Regulated Training Provider", icon: GraduationCap }
  ];

  const testimonials = [
    {
      quote: "Excel Medical Solutions provided outstanding medical coverage for our festival. Their professionalism and rapid response capabilities were exceptional.",
      position: "Event Director, Manchester Music Festival"
    },
    {
      quote: "We've used Excel Medical for multiple boxing events. Their expertise in contact sports medical care is unmatched.",
      position: "Boxing Promoter, North West Boxing"
    },
    {
      quote: "Professional, reliable, and always prepared. Excel Medical Solutions is our go-to partner for all medical requirements. As an event organiser for a variety of events across the U.K. they have never let us down!",
      position: "Series Operations Manager, National Events Team, London"
    }
  ];

  return (
    <section aria-labelledby="trust-heading" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <h2 id="trust-heading" className="sr-only">Why Trust Excel Medical Solutions</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center" aria-hidden="true">
                <stat.icon className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust and Quality */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Trusted by Industry Leaders
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Excel Medical Solutions is a leading provider of event medical services across the UK. 
              Our commitment to excellence and professional standards has earned us recognition 
              from industry bodies and repeat business from major event organisers.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {accreditations.map((accreditation, index) => (
                <div key={index} className="bg-green-600 text-white text-center py-3 px-4 rounded border border-green-600 text-sm font-medium flex items-center justify-center min-h-[3rem] gap-2">
                  <accreditation.icon className="h-4 w-4" aria-hidden="true" />
                  {accreditation.text}
                </div>
              ))}
            </div>
            <div className="bg-green-600 text-white text-center py-3 px-4 rounded-lg font-semibold flex items-center justify-center min-h-[3rem] gap-2">
              <Shield className="h-4 w-4" aria-hidden="true" />
              Clinical Governance and Excellence
            </div>
          </div>
          <div className="bg-yellow-50 p-8 rounded-lg border-2 border-yellow-200">
            <div className="text-center">
              <Shield className="h-16 w-16 text-yellow-600 mx-auto mb-4" aria-hidden="true" />
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Quality Assurance
              </h4>
              <p className="text-gray-600 mb-6">
                All our medical professionals are fully qualified, experienced, and regularly 
                trained to ensure the highest standards of care at every event.
              </p>
              <div className="flex justify-center space-x-1" aria-label="5 star rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-2">4.9-star service rating</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-50 border-gray-200">
                <CardContent className="p-6">
                  <div className="flex mb-4" aria-label="5 star rating">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="text-sm text-gray-600 font-bold">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
