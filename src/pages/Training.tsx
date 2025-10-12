
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import TrainingHero from "@/components/training/TrainingHero";
import TrainingOverview from "@/components/training/TrainingOverview";
import CoursesGrid from "@/components/training/CoursesGrid";
import TrainingBenefits from "@/components/training/TrainingBenefits";
import TrainingCTA from "@/components/training/TrainingCTA";

const Training = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Professional Medical Training - Excel Medical Solutions"
        description="Comprehensive medical training courses for event medical professionals. First aid, emergency response, and specialized medical training programs across the UK."
        keywords="medical training, first aid courses, emergency response training, event medical training, professional development, UK medical courses"
      />
      <Header />
      <main>
        <TrainingHero />
        <TrainingOverview />
        <CoursesGrid />
        <TrainingBenefits />
        <TrainingCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Training;
