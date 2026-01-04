import { Headphones, MapPin, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Headphones,
    title: "Podrška 24/7",
    description: "Neprekidna korisnička podrška za sve vaše logističke potrebe u bilo koje vreme.",
  },
  {
    icon: MapPin,
    title: "GPS Praćenje",
    description: "Praćenje vaših pošiljki u realnom vremenu sa naprednom GPS tehnologijom.",
  },
  {
    icon: ShieldCheck,
    title: "Sertifikovani vozači",
    description: "Profesionalni vozači sa ADR sertifikatom i višegodišnjim iskustvom.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              O kompaniji MIPEX
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Dve decenije{" "}
              <span className="text-gradient-orange">izvrsnosti</span> u logistici
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Osnovana 2004. godine, MIPEX je od lokalne transportne kompanije izrasla u 
              vodećeg evropskog logističkog provajdera. Sa modernom flotom od preko 150 vozila i 
              posvećenim timom od 300+ profesionalaca, bavimo se svime od standardnih pošiljki 
              do složenog kabastog tereta.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Naša posvećenost pouzdanosti, bezbednosti i zadovoljstvu klijenata donela nam je 
              poverenje Fortune 500 kompanija kao i malih preduzeća.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex gap-5 p-6 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-14 h-14 bg-orange-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
