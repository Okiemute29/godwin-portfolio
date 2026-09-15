import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import SelectedWork from "@/components/portfolio/SelectedWork";
import Capabilities from "@/components/portfolio/Capabilities";
import Process from "@/components/portfolio/Process";
import Journey from "@/components/portfolio/Journey";
import AdditionalWork from "@/components/portfolio/AdditionalWork";
import ContactCTA from "@/components/portfolio/ContactCTA";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    // Wait a tick for layout so scrollIntoView lands on the right offset.
    const raf = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => cancelAnimationFrame(raf);
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SelectedWork />
        <Capabilities />
        <Process />
        <Journey />
        <AdditionalWork />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
