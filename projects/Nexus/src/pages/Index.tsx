import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import ModelsShowcase from "@/components/ModelsShowcase";
import Configurator from "@/components/Configurator";
import Technology from "@/components/Technology";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Hero />
      <Vision />
      <ModelsShowcase />
      <Configurator />
      <Technology />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
