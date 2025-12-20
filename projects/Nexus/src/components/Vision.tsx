import { Zap, Leaf, Shield } from "lucide-react";

const Vision = () => {
  const values = [
    {
      icon: Zap,
      title: "Innovation",
      description: "Pushing boundaries with AI-powered autonomous driving and cutting-edge electric propulsion."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Zero emissions, maximum impact. Building a cleaner future one vehicle at a time."
    },
    {
      icon: Shield,
      title: "Design Excellence",
      description: "Where aerodynamic perfection meets futuristic aesthetics in every curve and line."
    }
  ];

  return (
    <section className="relative py-24 px-4 md:px-8 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="mb-4 text-4xl font-bold tracking-wider text-foreground md:text-5xl lg:text-6xl">
            Our <span className="gradient-text">Vision</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
            We don't just build cars. We engineer the future of mobility—where innovation, 
            sustainability, and design converge to create the ultimate driving experience.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="group relative animate-fade-in-up rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-6 inline-flex rounded-xl bg-primary/10 p-4">
                  <Icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:animate-glow-pulse" />
                </div>
                <h3 className="mb-3 font-orbitron text-2xl font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Background Accent */}
      <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-secondary/10 blur-[150px]"></div>
    </section>
  );
};

export default Vision;
