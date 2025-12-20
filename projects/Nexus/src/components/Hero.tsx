import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";

const Hero = () => {
  const scrollToModels = () => {
    document.getElementById('models')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Futuristic NEXUS car in motion"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-6 animate-fade-in-up text-5xl font-bold tracking-wider text-foreground md:text-7xl lg:text-8xl">
          <span className="gradient-text text-glow-blue">NEXUS</span>
        </h1>
        
        <p className="mb-8 max-w-2xl animate-fade-in text-xl font-light text-muted-foreground md:text-2xl lg:text-3xl">
          The Future of Automotive Excellence
        </p>
        
        <Button 
          size="lg"
          className="animate-scale-in bg-primary text-primary-foreground hover:bg-primary/90 glow-blue transition-all duration-300 hover:scale-105 text-lg px-8 py-6 rounded-full font-orbitron font-semibold"
          onClick={scrollToModels}
        >
          Explore the Future
        </Button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-primary animate-glow-pulse" />
        </div>
      </div>

      {/* Ambient Light Effect */}
      <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 translate-y-1/2 rounded-full bg-primary/20 blur-[120px]"></div>
    </section>
  );
};

export default Hero;
