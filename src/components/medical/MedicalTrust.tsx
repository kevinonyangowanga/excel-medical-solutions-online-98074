
const MedicalTrust = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-medical-darkGreen mb-6">
              Trusted by Event Organisers Nationwide
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                <strong>✓ Fully Qualified Teams:</strong> All our medical staff are professionally trained 
                and certified to the highest standards.
              </p>
              <p>
                <strong>✓ Nationwide Coverage:</strong> We provide medical services across all regions 
                of the UK, from small local events to major festivals.
              </p>
              <p>
                <strong>✓ Tailored Solutions:</strong> Every event is unique. We work with you to create 
                a medical plan that fits your specific needs and budget.
              </p>
              <p>
                <strong>✓ Regulatory Compliance:</strong> We ensure your event meets all health and safety 
                requirements and licensing conditions.
              </p>
            </div>
          </div>
          <div className="lg:text-center">
            <img 
              src="/lovable-uploads/044886ca-cdd9-4d42-ba32-a5db42e67847.png" 
              alt="Professional medical team at event with crowd in background" 
              className="rounded-lg shadow-2xl w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalTrust;
