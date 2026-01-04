import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-truck.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Moderni kamion na autoputu u sumrak"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-accent text-sm font-medium">
              Više od 500 kompanija nam veruje širom Evrope
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            MIPEX: Pokrećemo{" "}
            <span className="text-gradient-orange">logistiku</span>{" "}
            napred
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-light max-w-xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Pouzdana transportna rešenja širom Evrope. Od punih kamionskih tovarnih do 
            specijalizovanog tereta, isporučujemo izvrsnost na svakom putovanju.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Zatražite ponudu
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play className="w-5 h-5" />
              Pogledajte našu priču
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-slate-dark/30 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-slate-medium text-sm mb-4">Pouzdani partneri:</p>
            <div className="flex flex-wrap items-center gap-8">
              {["ISO 9001", "SQAS Sertifikat", "GDP Usklađeno", "ADR Licenca"].map((cert) => (
                <div
                  key={cert}
                  className="text-slate-light/70 font-medium text-sm px-4 py-2 border border-slate-dark/40 rounded-lg"
                >
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-slate-light/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-accent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
