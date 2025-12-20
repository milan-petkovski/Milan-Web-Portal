import Hero from "@/components/Hero";
import InstagramFeed from "@/components/InstagramFeed";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Coffee, Users, Leaf, Award } from "lucide-react";

const Index = () => {
  return (
    <main>
      <Hero />
      
      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-coffee-bean mb-4">
              Zašto je Pržionica posebna?
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Svaki dan radimo sa strašću da vam pružimo nezaboravno iskustvo kafe. 
              Od pažljivog odabira zrna do poslednje kapi u vašoj šolji.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-warm transition-shadow">
              <CardContent className="pt-8">
                <div className="bg-coffee-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Coffee className="h-8 w-8 text-coffee-bean" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-coffee-bean">Kvalitet zrna</h3>
                <p className="text-muted-foreground text-sm">
                  Direktno od proizvođača, prženo svežim u našoj radnji
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-warm transition-shadow">
              <CardContent className="pt-8">
                <div className="bg-coffee-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-forest-green" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-coffee-bean">Održivost</h3>
                <p className="text-muted-foreground text-sm">
                  Etičko nabavljanje i podrška malih proizvođača
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-warm transition-shadow">
              <CardContent className="pt-8">
                <div className="bg-coffee-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-coffee-bean" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-coffee-bean">Zajednica</h3>
                <p className="text-muted-foreground text-sm">
                  Mesto susreta i razmene iskustava ljubitelja kafe
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-warm transition-shadow">
              <CardContent className="pt-8">
                <div className="bg-coffee-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-coffee-bean" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-coffee-bean">Iskustvo</h3>
                <p className="text-muted-foreground text-sm">
                  Stručnost barista i ljubav prema veštini kuvanja kafe
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-coffee text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Spremni za savršenu šolju kafe?
          </h2>
          <p className="text-lg mb-8 text-coffee-cream/90">
            Otkrijte naš pažljivo kreiran jelovnik sa specijalizovanim napicima 
            i pridružite se našoj zajednici ljubitelja kafe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-coffee-bean hover:bg-coffee-cream font-medium">
              <Link to="/jelovnik">Istražite jelovnik</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-coffee-bean hover:bg-coffee-cream font-medium">
              <Link to="/dogadjaji">Budući događaji</Link>
            </Button>
          </div>
        </div>
      </section>

      <InstagramFeed />
    </main>
  );
};

export default Index;
