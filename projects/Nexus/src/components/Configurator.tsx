import { useState } from "react";
import { Button } from "@/components/ui/button";

const Configurator = () => {
  const [selectedColor, setSelectedColor] = useState("midnight");
  const [selectedWheel, setSelectedWheel] = useState("sport");

  const colors = [
    { id: "midnight", name: "Midnight Black", class: "bg-[#0a0a0a]" },
    { id: "arctic", name: "Arctic White", class: "bg-[#f0f0f0]" },
    { id: "neon", name: "Neon Blue", class: "bg-primary" },
    { id: "crimson", name: "Crimson Red", class: "bg-secondary" },
  ];

  const wheels = [
    { id: "sport", name: "Sport 20\"", price: "Included" },
    { id: "performance", name: "Performance 21\"", price: "+$2,500" },
    { id: "racing", name: "Racing 22\"", price: "+$4,500" },
  ];

  return (
    <section className="relative py-24 px-4 md:px-8 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="mb-4 text-4xl font-bold tracking-wider text-foreground md:text-5xl lg:text-6xl">
            <span className="gradient-text">Configure</span> Your NEXUS
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
            Customize every detail to match your vision. Your perfect car, your way.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Preview Area */}
          <div className="animate-fade-in-up">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div 
                    className="mx-auto mb-4 h-48 w-48 rounded-full border-8 border-border transition-colors duration-500"
                    style={{ 
                      backgroundColor: colors.find(c => c.id === selectedColor)?.class.replace('bg-', '') 
                    }}
                  ></div>
                  <p className="font-orbitron text-2xl font-bold text-foreground">
                    {colors.find(c => c.id === selectedColor)?.name}
                  </p>
                  <p className="text-muted-foreground">
                    with {wheels.find(w => w.id === selectedWheel)?.name} wheels
                  </p>
                </div>
              </div>

              {/* Ambient Glow */}
              <div 
                className={`absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full ${colors.find(c => c.id === selectedColor)?.class} opacity-20 blur-[100px]`}
              ></div>
            </div>
          </div>

          {/* Configuration Options */}
          <div className="animate-fade-in-up space-y-8" style={{ animationDelay: '150ms' }}>
            {/* Color Selection */}
            <div>
              <h3 className="mb-4 font-orbitron text-2xl font-bold text-foreground">
                Exterior Color
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`group relative overflow-hidden rounded-xl border-2 p-4 transition-all duration-300 ${
                      selectedColor === color.id
                        ? 'border-primary shadow-[0_0_20px_hsl(var(--primary)/0.5)]'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`h-12 w-12 rounded-full border-2 border-border ${color.class}`}></div>
                      <span className="font-medium text-foreground">{color.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Wheel Selection */}
            <div>
              <h3 className="mb-4 font-orbitron text-2xl font-bold text-foreground">
                Wheel Package
              </h3>
              <div className="space-y-3">
                {wheels.map((wheel) => (
                  <button
                    key={wheel.id}
                    onClick={() => setSelectedWheel(wheel.id)}
                    className={`w-full rounded-xl border-2 p-4 text-left transition-all duration-300 ${
                      selectedWheel === wheel.id
                        ? 'border-primary bg-primary/5 shadow-[0_0_20px_hsl(var(--primary)/0.3)]'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-foreground">{wheel.name}</div>
                        <div className="text-sm text-muted-foreground">{wheel.price}</div>
                      </div>
                      {selectedWheel === wheel.id && (
                        <div className="h-6 w-6 rounded-full bg-primary animate-glow-pulse"></div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Button 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-blue transition-all duration-300 hover:scale-105 text-lg py-6 rounded-xl font-orbitron font-semibold"
            >
              Save Configuration
            </Button>
          </div>
        </div>
      </div>

      {/* Background Accent */}
      <div className="absolute right-0 bottom-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-secondary/10 blur-[150px]"></div>
    </section>
  );
};

export default Configurator;
