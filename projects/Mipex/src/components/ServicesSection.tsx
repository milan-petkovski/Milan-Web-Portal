import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Warehouse, Truck, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Međunarodni transport",
    description:
      "Puni i delimični kamionski tovari širom Evrope sa efikasnim planiranjem ruta i podrškom za carinjenje. Isporučujemo u više od 30 zemalja.",
    features: ["FTL i LTL rešenja", "Carinska dokumentacija", "Ekspresna dostava"],
  },
  {
    icon: Warehouse,
    title: "Logistika i skladištenje",
    description:
      "Sigurni skladišni objekti sa upravljanjem zalihama, cross-docking i distributivnim uslugama prilagođenim vašim potrebama.",
    features: ["Kontrola klime", "Upravljanje zalihama", "Just-in-Time isporuka"],
  },
  {
    icon: Truck,
    title: "Kabasti teret",
    description:
      "Specijalizovani transport za teške i kabaste terete sa stručnim pregledima ruta, dozvolama i uslugama pratnje.",
    features: ["Teška oprema", "Industrijske mašine", "Specijalne dozvole"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-navy-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Naše usluge
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mt-3 mb-6">
            Sveobuhvatna{" "}
            <span className="text-gradient-orange">transportna</span> rešenja
          </h2>
          <p className="text-slate-light text-lg">
            Od standardnog tereta do specijalizovane logistike, nudimo rešenja od početka do kraja 
            dizajnirana da održe vaše poslovanje u pokretu.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="bg-navy-medium/50 border-slate-dark/30 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-orange-gradient rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl text-primary-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-light mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-slate-light">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="heroOutline" className="w-full group/btn">
                  Saznajte više
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
