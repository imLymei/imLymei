import Navbar from "./_components/Navbar";
import HeroSection from "./_sections/HeroSection";
import ProjectsSection from "./_sections/ProjectsSection";

export default function Home() {
  return (
    <div id="home" className="relative">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
    </div>
  );
}
