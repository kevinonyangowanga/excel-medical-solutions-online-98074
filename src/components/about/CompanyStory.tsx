
import { Badge } from "@/components/ui/badge";

const CompanyStory = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Story & Mission
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Excel Medical Solutions was founded with a simple mission: to provide the highest 
              standard of medical care for events across the UK. What started as a small team 
              of dedicated paramedics has grown into the UK's most trusted event medical service provider.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We understand that every event is unique, which is why we work closely with organisers 
              to develop tailored medical plans that ensure the safety and wellbeing of all attendees. 
              Our comprehensive services include event welfare services, ambulance services, and 
              medical cover for venues of all sizes.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our commitment to excellence has earned us accreditations from leading industry bodies 
              and the trust of major event organisers nationwide.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Badge variant="outline" className="justify-center py-2" style={{
                backgroundColor: '#d2f406',
                borderColor: '#d2f406',
                color: '#000000'
              }}>BIBA Registered</Badge>
              <Badge variant="outline" className="justify-center py-2" style={{
                backgroundColor: '#d2f406',
                borderColor: '#d2f406',
                color: '#000000'
              }}>CQC Compliant</Badge>
              <Badge variant="outline" className="justify-center py-2" style={{
                backgroundColor: '#d2f406',
                borderColor: '#d2f406',
                color: '#000000'
              }}>England Boxing</Badge>
              <Badge variant="outline" className="justify-center py-2" style={{
                backgroundColor: '#d2f406',
                borderColor: '#d2f406',
                color: '#000000'
              }}>RIDDOR Compliant</Badge>
              <Badge variant="outline" className="justify-center py-2" style={{
                backgroundColor: '#d2f406',
                borderColor: '#d2f406',
                color: '#000000'
              }}>ICO Registered</Badge>
              <Badge variant="outline" className="justify-center py-2" style={{
                backgroundColor: '#d2f406',
                borderColor: '#d2f406',
                color: '#000000'
              }}>Green Guide Compliant</Badge>
              <Badge variant="outline" className="justify-center py-2" style={{
                backgroundColor: '#d2f406',
                borderColor: '#d2f406',
                color: '#000000'
              }}>Purple Guide Compliant</Badge>
              <Badge variant="outline" className="justify-center py-2" style={{
                backgroundColor: '#d2f406',
                borderColor: '#d2f406',
                color: '#000000'
              }}>HSE Compliant</Badge>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src="/lovable-uploads/3e8186d2-1c99-4db7-a536-573f92e38d0d.png" alt="Our Values" className="w-full h-auto max-w-lg rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
