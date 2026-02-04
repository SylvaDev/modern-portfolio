import HeroSection from "./components/HeroSection";
import MiniFeatureSection from "./components/MiniFeatureSection";
import ServicesSection from "./components/ServicesSection";
import TechStackSection from "./components/TechStackSection";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";

export const metadata = {
  title: "SylvaDev – Web Developer",
  description:
    "Portfolio of Irving (SylvaDev), a full-stack web developer building fast, modern websites and web applications.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <Header />

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-24 md:pt-28">
        <HeroSection />
        <MiniFeatureSection />
        <ServicesSection />
        <TechStackSection />
        <ProjectsSection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
