import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, MapPin } from "lucide-react";

const Dogadjaji = () => {
  const events = [
    {
      id: 1,
      title: "Radionica degustacije kafe",
      date: "15. februar 2024",
      time: "19:00 - 21:00",
      capacity: "12 mesta",
      price: "2500 din",
      description: "Pridružite nam se u otkrivanju tajni savršene šolje kafe. Naučićete o različitim methodama pripreme, profiling ukusa i tehnikama degustacije.",
      type: "Radionica",
      status: "Dostupno"
    },
    {
      id: 2,
      title: "Večer otvorenog mikrofona",
      date: "22. februar 2024", 
      time: "20:00 - 23:00",
      capacity: "40 mesta",
      price: "Besplatno",
      description: "Pokažite svoj talenat ili uživajte u nastupima lokalnih umetnika. Poezija, muzika, stand-up - svi su dobrodošli!",
      type: "Kulturni događaj",
      status: "Dostupno"
    },
    {
      id: 3,
      title: "Izložba fotografija: 'Putovanje zrna'",
      date: "1-28. mart 2024",
      time: "Tokom radnog vremena",
      capacity: "Neograničeno",
      price: "Besplatno",
      description: "Fotografska izložba koja prikazuje put kafe od plantaže do vaše šolje. Radovi fotografkinje Milice Stojanović.",
      type: "Izložba",
      status: "Uskoro"
    },
    {
      id: 4,
      title: "Latte Art takmičenje",
      date: "10. mart 2024",
      time: "14:00 - 17:00", 
      capacity: "20 učesnika",
      price: "1500 din",
      description: "Testirajte svoje veštine u kreiranju latte art-a. Pobedniku čeka profesionalni set alata i priznanje!",
      type: "Takmičenje",
      status: "Dostupno"
    },
    {
      id: 5,
      title: "Susret sa proizvođačem iz Etiopije",
      date: "18. mart 2024",
      time: "18:00 - 20:00",
      capacity: "25 mesta",
      price: "3000 din",
      description: "Ekskluzivna prilika da čujete priču direktno od etiopskog proizvođača kafe. Degustacija autentičnih etiopskih kafa uključena.",
      type: "Degustacija",
      status: "Dostupno"
    },
    {
      id: 6,
      title: "Filmska večer: 'A Film About Coffee'",
      date: "25. mart 2024",
      time: "19:30 - 21:30",
      capacity: "30 mesta", 
      price: "800 din",
      description: "Gledanje dokumentarca o kulturi kafe uz specialno pripremljen coffee pairing meni.",
      type: "Film",
      status: "Dostupno"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Dostupno": return "bg-forest-green text-white";
      case "Uskoro": return "bg-coffee-light text-white";
      case "Popunjeno": return "bg-destructive text-white";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Radionica": return "bg-coffee-bean/10 text-coffee-bean border-coffee-bean/20";
      case "Kulturni događaj": return "bg-forest-green/10 text-forest-green border-forest-green/20";
      case "Izložba": return "bg-coffee-light/10 text-coffee-light border-coffee-light/20";
      case "Takmičenje": return "bg-destructive/10 text-destructive border-destructive/20";
      case "Degustacija": return "bg-coffee-bean/10 text-coffee-bean border-coffee-bean/20";
      case "Film": return "bg-coffee-light/10 text-coffee-light border-coffee-light/20";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-coffee text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold mb-4">Događaji i zajednica</h1>
          <p className="text-lg text-coffee-cream/90">
            Pridružite se našim događajima i postanite deo Pržionica zajednice. 
            Od radionica do kulturnih večeri - uvek se nešto interesantno dešava!
          </p>
        </div>
      </section>

      {/* Community Message */}
      <section className="py-12 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-coffee-bean mb-4">
            Više od kafića - centar zajednice
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Pržionica je mesto gde se stvaraju veze, dele iskustva i grade prijateljstva. 
            Naši eventi su osmišljeni da okupe ljude različitih interesovanja oko 
            zajedničke ljubavi prema kafi i kulturi.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card key={event.id} className="flex flex-col hover:shadow-warm transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getTypeColor(event.type)}>
                      {event.type}
                    </Badge>
                    <Badge className={getStatusColor(event.status)}>
                      {event.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-coffee-bean text-lg leading-tight">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      {event.capacity}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {event.price}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {event.description}
                  </p>
                  
                  <Button 
                    className="w-full mt-auto"
                    disabled={event.status === "Popunjeno"}
                  >
                    {event.status === "Popunjeno" ? "Popunjeno" : 
                     event.status === "Uskoro" ? "Obavesti me" : "Rezerviši mesto"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-coffee text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Ne propustite naše događaje
          </h2>
          <p className="text-lg text-coffee-cream/90 mb-8">
            Prijavite se za naš newsletter i budite prvi koji će saznati za nove događaje, 
            radionice i specijalne ponude.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Vaša email adresa"
              className="flex-1 px-4 py-3 rounded-lg text-coffee-bean"
            />
            <Button className="bg-white text-coffee-bean hover:bg-coffee-cream font-medium px-6">
              Prijavite se
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dogadjaji;