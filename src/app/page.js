import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import CoolBackgroundWrapper from "@/components/CoolBackgroundWrapper";

import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <CoolBackgroundWrapper><ProjectsSection /></CoolBackgroundWrapper>
      <ContactSection />
      <Footer />
    </main>
  );
}
