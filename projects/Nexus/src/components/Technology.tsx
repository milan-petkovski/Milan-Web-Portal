import { Brain, Battery, Wifi, ShieldCheck } from "lucide-react";
import techAI from "@/assets/tech-ai.jpg";
import techBattery from "@/assets/tech-battery.jpg";

const Technology = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Autonomous Driving",
      description: "Level 4 self-driving capability with neural network processing and real-time environment mapping.",
      image: techAI,
    },
    {
      icon: Battery,
      title: "Advanced Battery Tech",
      description: "Next-gen solid-state battery with 500+ mile range and 15-minute fast charging capability.",
      image: techBattery,
    },
    {
      icon: Wifi,
      title: "Hyper Connectivity",
      description: "5G-enabled seamless integration with your digital life. Over-the-air updates and remote diagnostics.",
      image: null,
    },
    {
      icon: ShieldCheck,
      title: "360° Safety Suite",
      description: "Advanced collision avoidance, blind-spot monitoring, and predictive safety systems for ultimate protection.",
      image: null,
    },
  ];

  return (
    <section className="relative py-24 px-4 md:px-8 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="mb-4 text-4xl font-bold tracking-wider text-foreground md:text-5xl lg:text-6xl">
            Cutting-Edge <span className="gradient-text">Technology</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
            Innovation that drives the future. Every NEXUS is packed with revolutionary tech.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative animate-fade-in-up overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Feature Image or Gradient Background */}
                {feature.image ? (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
                  </div>
                ) : (
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20">
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                  </div>
                )}

                {/* Feature Content */}
                <div className="p-8">
                  <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                    <Icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:animate-glow-pulse" />
                  </div>
                  <h3 className="mb-3 font-orbitron text-2xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-primary/0 blur-[80px] transition-all duration-500 group-hover:bg-primary/30"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Background Accent */}
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[150px]"></div>
    </section>
  );
};

export default Technology;
