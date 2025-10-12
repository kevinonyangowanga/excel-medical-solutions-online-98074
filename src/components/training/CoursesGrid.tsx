import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Clock, Users, Award, ExternalLink, Phone, Calculator } from "lucide-react";

const CoursesGrid = () => {
  const courses = [
    {
      title: "Emergency First Aid at Work",
      description: "Essential first aid skills for workplace emergencies, covering basic life support and common injuries.",
      duration: "1 Day",
      maxStudents: "12",
      certification: "HSE Approved",
      level: "Beginner",
      price: "£75",
      cademyLink: "https://xl-team.cademy.io/"
    },
    {
      title: "First Aid at Work (3 Day)",
      description: "Comprehensive first aid training covering a wide range of emergency situations and medical conditions.",
      duration: "3 Days",
      maxStudents: "12",
      certification: "HSE Approved",
      level: "Intermediate",
      price: "£310",
      cademyLink: "https://xl-team.cademy.io/"
    },
    {
      title: "First Response Emergency Care - Level 3",
      description: "Advanced emergency care training for first responders, covering critical interventions and pre-hospital care protocols.",
      duration: "5 Days",
      maxStudents: "6",
      certification: "Industry Recognised",
      level: "Advanced",
      price: "£350",
      cademyLink: "https://xl-team.cademy.io/"
    },
    {
      title: "RCUK Immediate Life Support",
      description: "Resuscitation Council UK approved training focusing on immediate life support techniques and cardiac arrest management.",
      duration: "1 Day",
      maxStudents: "6",
      certification: "RCUK Approved",
      level: "Intermediate",
      price: "£155",
      cademyLink: "https://xl-team.cademy.io/"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-[#f8fef0] text-[#6a8802]";
      case "Advanced": return "bg-[#f8fef0] text-[#6a8802]";
      case "Expert": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-medical-darkGreen mb-4">
            Our Training Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose from our comprehensive range of medical training courses, designed to meet 
            industry standards and advance your professional development.
          </p>
          <div className="bg-[#d2f406] text-black p-4 rounded-lg inline-block">
            <p className="font-semibold mb-2">View All Available Courses & Book Online</p>
            <Button 
              className="bg-black text-[#d2f406] hover:bg-gray-800"
              onClick={() => window.open('https://xl-team.cademy.io/', '_blank')}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Visit Our Training Platform
            </Button>
          </div>
        </div>

        <div className="mb-16">
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {courses.map((course, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-[#d2f406]">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge className={getLevelColor(course.level)}>
                          {course.level}
                        </Badge>
                        <span className="text-2xl font-bold text-medical-darkGreen">{course.price}</span>
                      </div>
                      <CardTitle className="text-medical-darkGreen">{course.title}</CardTitle>
                      <CardDescription className="text-gray-600">
                        {course.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-2 text-[#d2f406]" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="h-4 w-4 mr-2 text-[#d2f406]" />
                          <span>Max {course.maxStudents} students</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Award className="h-4 w-4 mr-2 text-[#d2f406]" />
                          <span>{course.certification}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Button 
                          className="w-full bg-[#d2f406] text-black hover:bg-[#b8dc05]"
                          onClick={() => window.open(course.cademyLink, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Book Course
                        </Button>
                        <Button 
                          variant="outline" 
                          className="w-full"
                          onClick={() => window.open(course.cademyLink, '_blank')}
                        >
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Can't find what you're looking for section */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-medical-darkGreen mb-4">
              Can't find what you're looking for?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our friendly training team is here to help you find the perfect course for your needs. 
              Whether you need bespoke training or have specific requirements, we're ready to assist.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-[#d2f406] text-black hover:bg-[#b8dc05]"
              onClick={() => window.open('https://www.cognitoforms.com/XLTeam1/RequestCallBack', '_blank')}
            >
              <Phone className="h-4 w-4 mr-2" />
              Schedule a call with us
            </Button>
            <Button 
              variant="outline" 
              className="border-[#d2f406] text-medical-darkGreen hover:bg-[#f8fef0] h-auto py-3 px-4 text-center leading-tight"
              onClick={() => window.open('https://www.qualsafeawards.org/calculator/d5505773a10556e2619bef4aa7156129', '_blank')}
            >
              <Calculator className="h-4 w-4 mr-2 flex-shrink-0" />
              <span className="whitespace-normal">Online Workplace First Aid Needs Assessment Calculator</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesGrid;
