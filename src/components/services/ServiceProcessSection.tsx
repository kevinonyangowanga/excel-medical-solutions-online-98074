
const ServiceProcessSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Service Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to post-event support, we ensure seamless medical coverage.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "1", title: "Consultation", description: "Initial discussion about your event requirements and medical needs assessment." },
            { step: "2", title: "Risk Assessment", description: "Comprehensive evaluation of potential medical risks and safety considerations." },
            { step: "3", title: "Custom Planning", description: "Development of tailored medical coverage plan with appropriate staffing and equipment." },
            { step: "4", title: "Service Delivery", description: "Professional medical coverage during your event with 24/7 emergency response capability." }
          ].map((process, index) => (
            <div key={index} className="text-center">
              <div className="bg-[#006400] text-white rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center font-bold text-lg">
                {process.step}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
              <p className="text-gray-600">{process.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcessSection;
