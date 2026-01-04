import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import truckTarpaulin from "@/assets/truck-tarpaulin.jpg";
import truckMega from "@/assets/truck-mega.jpg";
import truckFrigo from "@/assets/truck-frigo.jpg";

const fleetItems = [
  {
    name: "Kamioni sa ceradom",
    description: "Svestrane prikolice sa ceradom za opšti teret. Lako utovarivanje sa svih strana.",
    capacity: "24 tone",
    count: "75+ jedinica",
    image: truckTarpaulin,
  },
  {
    name: "Mega prikolice",
    description: "Prikolice produžene visine za obimne pošiljke. Maksimalni kapacitet nosivosti.",
    capacity: "24 tone",
    count: "45+ jedinica",
    image: truckMega,
  },
  {
    name: "Hladnjače",
    description: "Transport sa kontrolisanom temperaturom za kvarljivu robu. ATP sertifikovano od -25°C do +25°C.",
    capacity: "22 tone",
    count: "30+ jedinica",
    image: truckFrigo,
  },
];

const FleetSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % fleetItems.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + fleetItems.length) % fleetItems.length);
  };

  return (
    <section id="fleet" className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Naša flota
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
              Moderna i <span className="text-gradient-orange">pouzdana</span> vozila
            </h2>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-border hover:border-accent hover:bg-accent hover:text-accent-foreground"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-border hover:border-accent hover:bg-accent hover:text-accent-foreground"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Fleet Slider */}
        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {fleetItems.map((item, index) => (
              <div
                key={item.name}
                className="w-full flex-shrink-0 px-2"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Image */}
                  <div className="relative rounded-2xl overflow-hidden shadow-card-hover group">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-[300px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="inline-block bg-orange-gradient text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
                        {item.count}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:pl-8">
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground text-lg mb-6">
                      {item.description}
                    </p>
                    <div className="flex gap-8 mb-8">
                      <div>
                        <span className="text-muted-foreground text-sm">Maks. kapacitet</span>
                        <p className="text-2xl font-bold text-foreground">{item.capacity}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground text-sm">Veličina flote</span>
                        <p className="text-2xl font-bold text-accent">{item.count}</p>
                      </div>
                    </div>
                    <Button variant="accent" size="lg">
                      Pogledajte specifikacije
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {fleetItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-accent w-8"
                    : "bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
