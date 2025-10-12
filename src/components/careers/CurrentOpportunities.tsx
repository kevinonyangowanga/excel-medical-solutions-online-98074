
import { UserPlus, Award, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import JobCard from "./JobCard";

const CurrentOpportunities = () => {
  const newToMedical = [
    {
      title: "Trainee Medical Responder",
      location: "Various locations across the UK",
      type: "Part-time / Casual",
      description: "Our First Aid Responders provide the initial response to medical incidents at public events providing life saving assessment and treatment skills such as the use of a Defibrillator or Emergency Oxygen. First Aid Responders will also staff centres to provide treatment for minor injuries as well as working with our Ambulance crews, Paramedics and Doctors on more serious cases. FREE TRAINING PROVIDED"
    },
    {
      title: "Trainee Ambulance Care Assistant",
      location: "Various locations across the UK", 
      type: "Part-time / Casual",
      description: "As ambulance crew you will provide a high level of care, compassion and professionalism while responding to a variety non-emergency situations. FREE TRAINING PROVIDED"
    },
    {
      title: "Trainee Emergency Care Support Worker",
      location: "Various locations across the UK",
      type: "Part-time / Casual",
      description: "As an Event Emergency Care Support Worker you will provide a high level of care, compassion and professionalism while responding to a variety of emergency and non-emergency situations including medical emergencies. You will be responsible for assessing, transporting and attending to patients whilst ensuring that they receive high-quality care including driving ambulances in a safe and controlled way. FREE TRAINING PROVIDED"
    }
  ];

  const experiencedRoles = [
    {
      title: "Event Medical Responder",
      location: "Various locations across the UK",
      type: "Full-time / Part-time",
      description: "Our First Aid Responders provide the initial response to medical incidents at public events providing life saving assessment and treatment skills such as the use of a Defibrillator or Emergency Oxygen. First Aid Responders will also staff centres to provide treatment for minor injuries as well as working with our Ambulance crews, Paramedics and Doctors on more serious cases."
    },
    {
      title: "Ambulance Care Assistant",
      location: "Various locations across the UK",
      type: "Full-time / Part-time", 
      description: "As ambulance crew you will provide a high level of care, compassion and professionalism while responding to a variety non-emergency situations."
    },
    {
      title: "Emergency Ambulance Crew",
      location: "Various locations across the UK",
      type: "Full-time / Part-time",
      description: "You will be responsible for assessing, transporting and attending to patients whilst ensuring that they receive high-quality care including driving ambulances in a safe and controlled way."
    }
  ];

  const healthcareProfessionals = [
    {
      title: "Student Health Care Professionals",
      location: "Various locations across the UK", 
      type: "Part-time / Placement",
      description: "Our Student Health Care Professionals start their journey with us as First Responders, then provide the initial response to medical incidents at public events providing life saving assessment and treatment skills such as the use of a Defibrillator or Emergency Oxygen. First Responders will also staff centres to provide treatment for minor injuries as well as working with our Ambulance crews, Paramedics and Doctors on more serious cases. FREE TRAINING PROVIDED"
    },
    {
      title: "Event Paramedic (HCPC Registered)",
      location: "Various locations across the UK",
      type: "Full-time / Part-time",
      description: "There is often a need for Qualified Paramedics to be in attendance at high risk events, such as horse riding, pony club events, motor racing and music festivals. Event Paramedic jobs are available throughout the UK. Event Paramedics jobs and opportunities for employment increase significantly if they choose event first aid jobs which can include Film & TV Productions, Festivals and Mass Gatherings."
    },
    {
      title: "Event Nurse (NMC Registered)",
      location: "Various locations across the UK",
      type: "Full-time / Part-time",
      description: "We need healthcare professionals to provide clinical care, undertaking clinical assessments and attending to patients in pre-hospital situations. Our professional clinicians mainly work in mobile treatment centres, ambulances or temporary event medical centres. They attend events, such as music festivals and sports matches."
    },
    {
      title: "Event Doctor (GMC Registered)",
      location: "Various locations across the UK",
      type: "Part-time / Casual",
      description: "Are you a Qualified Doctor with the desire to pick up some extra work? We have employment opportunities for Event Doctors who are looking for more variety. There is often a need for Qualified Doctors to be in attendance at high risk events, such as horse riding, pony club events, motor racing and more."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-medical-darkGreen mb-4">
            Current Opportunities
          </h2>
          <p className="text-xl text-gray-600">
            Find the perfect role for your experience level and career goals
          </p>
        </div>

        {/* New to Event Medical */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <UserPlus className="h-8 w-8 mr-3" style={{ color: '#d2f406' }} />
            <h3 className="text-2xl font-bold text-medical-darkGreen">New to Event Medical?</h3>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            You don't need any previous experience or qualifications, we provide the training FREE of charge
          </p>
          <div className="space-y-4">
            {newToMedical.map((role, index) => (
              <JobCard key={index} {...role} buttonText="Join Our Recruitment Waitlist" />
            ))}
          </div>
        </div>

        {/* Got Previous Training or Experience */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Award className="h-8 w-8 mr-3" style={{ color: '#d2f406' }} />
            <h3 className="text-2xl font-bold text-medical-darkGreen">Got Previous Training or Experience?</h3>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            Worked in the event medical, first aid, pre hospital care or ambulance field before? Join our team today!
          </p>
          <div className="space-y-4">
            {experiencedRoles.map((role, index) => (
              <JobCard key={index} {...role} buttonText="Join Our Recruitment Waitlist" />
            ))}
          </div>
        </div>

        {/* Health Care Professionals and Students */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Stethoscope className="h-8 w-8 mr-3" style={{ color: '#d2f406' }} />
            <h3 className="text-2xl font-bold text-medical-darkGreen">Health Care Professionals and Students</h3>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            Are you studying or are a qualified Nurse, Paramedic or Doctor? Join our team today!
          </p>
          <div className="space-y-4">
            {healthcareProfessionals.map((role, index) => (
              <JobCard key={index} {...role} buttonText="Join Our Recruitment Waitlist" />
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16">
          <div className="bg-white p-6 rounded-lg border max-w-md mx-auto">
            <h3 className="text-xl font-bold text-medical-darkGreen mb-4">
              Need More Information?
            </h3>
            <p className="text-gray-600 mb-6">
              Our recruitment team is here to help you find the perfect role and answer any questions you may have.
            </p>
            <Button 
              asChild 
              variant="outline" 
              className="w-full border-medical-darkGreen text-black hover:bg-medical-darkGreen hover:text-white"
            >
              <a href="mailto:shared-services@excelems.com">
                Contact Our Recruitment Team
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentOpportunities;

