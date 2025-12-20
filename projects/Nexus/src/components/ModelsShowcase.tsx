import { Button } from "@/components/ui/button";
import { ArrowRight, Gauge, Zap, Trophy } from "lucide-react";
import model1 from "@/assets/model-1.jpg";
import model2 from "@/assets/model-2.jpg";
import model3 from "@/assets/model-3.jpg";

const ModelsShowcase = () => {
  const models = [
    {
      name: "NEXUS S",
      tagline: "Luxury Redefined",
      price: "$79,990",
      image: model1,
      specs: [
        { icon: Gauge, label: "0-60 mph", value: "2.8s" },
        { icon: Zap, label: "Range", value: "420 mi" },
        { icon: Trophy, label: "Top Speed", value: "155 mph" }
      ]
    },
    {
      name: "NEXUS R",
      tagline: "Performance Unleashed",
      price: "$129,990",
      image: model2,
      specs: [
        { icon: Gauge, label: "0-60 mph", value: "1.9s" },
        { icon: Zap, label: "Range", value: "380 mi" },
        { icon: Trophy, label: "Top Speed", value: "200 mph" }
      ]
    },
    {
      name: "NEXUS X",
      tagline: "Future of SUVs",
      price: "$94,990",
      image: model3,
      specs: [
        { icon: Gauge, label: "0-60 mph", value: "3.5s" },
        { icon: Zap, label: "Range", value: "450 mi" },
        { icon: Trophy, label: "Top Speed", value: "140 mph" }
      ]
    }
  ];

  return (
    <section id="models" className="relative py-24 px-4 md:px-8 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="mb-4 text-4xl font-bold tracking-wider text-foreground md:text-5xl lg:text-6xl">
            Our <span className="gradient-text">Models</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
            Choose your perfect electric companion. Each model engineered for excellence.
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {models.map((model, index) => (
            <div 
              key={index}
              className="group relative animate-fade-in-up overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Model Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={model.image} 
                  alt={model.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
              </div>

              {/* Model Details */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="mb-1 font-orbitron text-3xl font-bold text-foreground">
                    {model.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{model.tagline}</p>
                </div>

                {/* Specs */}
                <div className="mb-6 grid grid-cols-3 gap-4">
                  {model.specs.map((spec, idx) => {
                    const Icon = spec.icon;
                    return (
                      <div key={idx} className="text-center">
                        <Icon className="mx-auto mb-1 h-5 w-5 text-primary" />
                        <div className="text-xs text-muted-foreground">{spec.label}</div>
                        <div className="font-semibold text-foreground">{spec.value}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <span className="font-orbitron text-2xl font-bold text-primary">
                    {model.price}
                  </span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="group/btn text-primary hover:text-primary hover:bg-primary/10"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Accent */}
      <div className="absolute left-0 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[150px]"></div>
    </section>
  );
};

export default ModelsShowcase;
