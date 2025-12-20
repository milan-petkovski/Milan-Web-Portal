import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-coffee-roasting.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-coffee-espresso/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          S ljubavlju stvoreno,
          <br />
          <span className="text-coffee-cream">za vas prženo</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-coffee-cream/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Dobrodošli u Pržionicu - mesto gde se susreću tradicionalna veština i moderna strast prema kafi. 
          Svaki dan kreiramo nezaboravna iskustva kroz pažljivo odabrana zrna i toplinu zajednice.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="bg-coffee-bean hover:bg-coffee-light text-white font-medium px-8 py-3 text-lg shadow-warm">
            <Link to="/jelovnik">Pogledajte jelovnik</Link>
          </Button>
          
          <Button asChild size="lg" className="bg-white text-coffee-bean hover:bg-coffee-light text-coffee-bean font-medium px-8 py-3 text-lg shadow-warm">
            <Link to="/o-nama">Naša priča</Link>
          </Button>
        </div>
      </div>
      
      {/* Decorative scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;