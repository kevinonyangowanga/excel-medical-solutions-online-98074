
const ApplicationProcess = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-medical-darkGreen mb-4">
            Application Process
          </h2>
          <p className="text-xl text-gray-600">
            Simple steps to join our team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#d2f406' }}>
              <span className="text-black font-bold text-lg">1</span>
            </div>
            <h3 className="text-xl font-semibold text-medical-darkGreen mb-2">Apply Online</h3>
            <p className="text-gray-600">
              Submit your application through our online portal with your CV and cover letter.
            </p>
          </div>

          <div className="text-center">
            <div className="rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#d2f406' }}>
              <span className="text-black font-bold text-lg">2</span>
            </div>
            <h3 className="text-xl font-semibold text-medical-darkGreen mb-2">Interview Process</h3>
            <p className="text-gray-600">
              Attend an interview where we'll discuss your experience and career aspirations.
            </p>
          </div>

          <div className="text-center">
            <div className="rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#d2f406' }}>
              <span className="text-black font-bold text-lg">3</span>
            </div>
            <h3 className="text-xl font-semibold text-medical-darkGreen mb-2">Welcome & Training</h3>
            <p className="text-gray-600">
              Complete our comprehensive onboarding and training program to get started.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
