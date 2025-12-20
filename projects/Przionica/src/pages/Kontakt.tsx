import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const Kontakt = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-coffee text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold mb-4">Kontakt</h1>
          <p className="text-lg text-coffee-cream/90">
            Posetite nas ili se javite - uvek smo tu za vas!
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-coffee-bean mb-8">
                Informacije o kontaktu
              </h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="bg-coffee-cream rounded-full p-3">
                      <MapPin className="h-6 w-6 text-coffee-bean" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-coffee-bean mb-1">Adresa</h3>
                      <p className="text-muted-foreground">
                        Knez Mihailova 15<br />
                        11000 Beograd, Srbija
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="bg-coffee-cream rounded-full p-3">
                      <Phone className="h-6 w-6 text-coffee-bean" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-coffee-bean mb-1">Telefon</h3>
                      <p className="text-muted-foreground">+381 11 123 4567</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Pozovite nas za rezervacije ili bilo kakva pitanja
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="bg-coffee-cream rounded-full p-3">
                      <Mail className="h-6 w-6 text-coffee-bean" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-coffee-bean mb-1">Email</h3>
                      <p className="text-muted-foreground">info@przionica.rs</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Odgovorićemo u roku od 24 sata
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="bg-coffee-cream rounded-full p-3">
                      <Clock className="h-6 w-6 text-coffee-bean" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-coffee-bean mb-1">Radno vreme</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Ponedeljak - Petak: 07:00 - 22:00</p>
                        <p>Subota: 08:00 - 23:00</p>
                        <p>Nedelja: 09:00 - 21:00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-semibold text-coffee-bean mb-4">Pratite nas</h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/przionica_kafic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-coffee-cream p-3 rounded-full hover:bg-coffee-light transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-coffee-bean" />
                  </a>
                  <a
                    href="https://facebook.com/przionica.kafic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-coffee-cream p-3 rounded-full hover:bg-coffee-light transition-colors"
                  >
                    <Facebook className="h-5 w-5 text-coffee-bean" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-coffee-bean">Pošaljite nam poruku</CardTitle>
                  <p className="text-muted-foreground">
                    Imate pitanja ili želite da rezervišete mesto za događaj? Javite nam se!
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-coffee-bean mb-2 block">
                        Ime
                      </label>
                      <Input placeholder="Vaše ime" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-coffee-bean mb-2 block">
                        Prezime
                      </label>
                      <Input placeholder="Vaše prezime" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-coffee-bean mb-2 block">
                      Email adresa
                    </label>
                    <Input type="email" placeholder="vasa@email.com" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-coffee-bean mb-2 block">
                      Telefon (opciono)
                    </label>
                    <Input type="tel" placeholder="+381 xx xxx xxxx" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-coffee-bean mb-2 block">
                      Tema
                    </label>
                    <Input placeholder="O čemu želite da razgovarate?" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-coffee-bean mb-2 block">
                      Poruka
                    </label>
                    <Textarea 
                      placeholder="Opišite detaljno vaš zahtev ili pitanje..."
                      rows={5}
                    />
                  </div>
                  
                  <Button className="w-full bg-coffee-bean hover:bg-coffee-light">
                    Pošaljite poruku
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    Odgovorićemo na vašu poruku u najkraćem mogućem roku, 
                    obično u roku od 24 sata.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif font-bold text-coffee-bean mb-4">
              Kako do nas
            </h2>
            <p className="text-muted-foreground">
              Nalazimo se u srcu Beograda, na Knez Mihailovoj ulici
            </p>
          </div>
          
          {/* Map Placeholder */}
          <div className="bg-secondary/40 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-coffee-light mx-auto mb-4" />
              <p className="text-muted-foreground">
                Interaktivna mapa će biti implementirana ovde
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Knez Mihailova 15, Beograd
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="bg-coffee-cream rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-6 w-6 text-coffee-bean" />
                </div>
                <h3 className="font-semibold text-coffee-bean mb-2">Metro</h3>
                <p className="text-sm text-muted-foreground">
                  Stanica "Trg Republike" - 2 min hoda
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="bg-coffee-cream rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-6 w-6 text-coffee-bean" />
                </div>
                <h3 className="font-semibold text-coffee-bean mb-2">Parking</h3>
                <p className="text-sm text-muted-foreground">
                  Javni parking "Knez Mihailova" - 50m
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="bg-coffee-cream rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-6 w-6 text-coffee-bean" />
                </div>
                <h3 className="font-semibold text-coffee-bean mb-2">Javni prevoz</h3>
                <p className="text-sm text-muted-foreground">
                  Autobuske linije 2, 5, 7, 9, 21, 22
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Kontakt;