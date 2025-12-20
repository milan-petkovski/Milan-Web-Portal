import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Leaf, Coffee } from "lucide-react";
import interiorImage from "@/assets/coffee-shop-interior.jpg";
import teamImage from "@/assets/coffee-team.jpg";

const ONama = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-coffee text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold mb-4">Naša priča</h1>
          <p className="text-lg text-coffee-cream/90">
            Otkrijte kako je nastala Pržionica i što nas pokreće svaki dan
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-coffee-bean mb-6">
                Kako je sve počelo
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Pržionica je nastala iz strasti prema kafi koju dele osnivači Marko i Ana Petrović. 
                  Nakon godina rada u tech industriji, odlučili su da prate svoju strast i otvore 
                  mesto gde će moći da dele ljubav prema kvalitetnoj kafi sa drugima.
                </p>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Naše putovanje je počelo 2020. godine kada smo prvi put posetili plantaže kafe 
                  u Kolumbiji. Upoznali smo malu porodicu proizvođača čija je posvećenost kvalitetu 
                  i održivosti nas duboko inspirisala. Taj trenutak je oblikovao našu viziju.
                </p>
                
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Danas, Pržionica nije samo kafić - to je zajednica. Mesto gde se susreću različite 
                  priče, gde se stvaraju prijateljstva i gde svaka šolja kafe nosi priču o 
                  strasti, kvalitetu i poštovanju prema svima koji učestvuju u ovom čudesnom putovanju.
                </p>
              </div>
              
              <div className="relative">
                <img
                  src={interiorImage}
                  alt="Unutrašnjost Pržionice"
                  className="rounded-lg shadow-warm w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-espresso/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-coffee-bean mb-4">
              Naše vrednosti
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sve što radimo rukovodi se ovim principima koji čine srce Pržionice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="bg-coffee-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Coffee className="h-8 w-8 text-coffee-bean" />
                </div>
                <h3 className="font-semibold text-lg mb-3 text-coffee-bean">Kvalitet</h3>
                <p className="text-muted-foreground text-sm">
                  Svaki detalj je važan - od odabira zrna do poslednje kapi u vašoj šolji
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="bg-coffee-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-forest-green" />
                </div>
                <h3 className="font-semibold text-lg mb-3 text-coffee-bean">Održivost</h3>
                <p className="text-muted-foreground text-sm">
                  Etičko nabavljanje i podrška malim proizvođačima širom sveta
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="bg-coffee-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-coffee-bean" />
                </div>
                <h3 className="font-semibold text-lg mb-3 text-coffee-bean">Zajednica</h3>
                <p className="text-muted-foreground text-sm">
                  Stvaramo prostor gde se ljudi povezuju preko zajedničke ljubavi prema kafi
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="bg-coffee-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-coffee-bean" />
                </div>
                <h3 className="font-semibold text-lg mb-3 text-coffee-bean">Strast</h3>
                <p className="text-muted-foreground text-sm">
                  Sve što radimo radimo sa srcem i posvećenošću maksimalnom iskustvu
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-coffee-bean mb-4">
              Naš tim
            </h2>
            <p className="text-muted-foreground">
              Upoznajte ljude koji svaki dan stvaraju magiju Pržionice
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={teamImage}
                alt="Tim Pržionice"
                className="rounded-lg shadow-warm w-full"
              />
            </div>
            
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Naš tim čine strastveni profesionalci koji dele istu viziju - pružiti nezaboravno 
                iskustvo kafe svakom gostu. Od naših barista do roastmaster-a, svako donosi 
                jedinstvenu ekspertizu i nepokolebljivu posvećenost kvalitetu.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Continually učimo i usavršavamo svoj zanat kroz radionice, degustacije i 
                direktnu saradnju sa proizvođačima. Naš cilj je da svaki dan budemo bolji 
                od prethodnog.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                Kada dođete u Pržionicu, ne samo da dobijate odličnu kafu - postajete deo 
                naše porodice. Volimo da upoznamo naše goste i čujemo njihove priče.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ONama;