import Navbar from "./_components/Navbar";
import AboutMeSection from "./_sections/AboutMeSection";
import Footer from "./_sections/Footer";
import HeroSection from "./_sections/HeroSection";
import ProjectsSection from "./_sections/ProjectsSection";

export default function Home() {
  return (
    <div id="home" className="relative flex flex-col gap-32">
      <div className="bg-stars animate-bg-move absolute inset-0 -z-20" />
      <Navbar />
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
