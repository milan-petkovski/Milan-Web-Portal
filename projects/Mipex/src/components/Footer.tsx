import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Truck, MapPin, Phone, Mail, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-navy-deep text-primary-foreground">
      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-orange-gradient rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">
                MI<span className="text-gradient-orange">PEX</span>
              </span>
            </div>
            <p className="text-slate-light text-lg mb-8 max-w-md">
              Vaš pouzdani partner za sigurna transportna i logistička rešenja širom Evrope.
              Kontaktirajte nas danas za prilagođenu ponudu.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-navy-medium rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-slate-light text-sm">Adresa</p>
                  <p className="font-medium">Transportna ulica 42, 11000 Beograd, Srbija</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-navy-medium rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-slate-light text-sm">Telefon</p>
                  <p className="font-medium">+381 11 123 45 67</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-navy-medium rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-slate-light text-sm">Email</p>
                  <p className="font-medium">kontakt@mipex.rs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-navy-medium/50 p-6 md:p-8 rounded-2xl border border-slate-dark/30">
            <h3 className="text-2xl font-bold mb-6">Zatražite ponudu</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Vaše ime"
                  className="bg-navy-deep border-slate-dark/50 text-primary-foreground placeholder:text-slate-medium focus:border-accent h-12"
                />
                <Input
                  type="email"
                  placeholder="Email adresa"
                  className="bg-navy-deep border-slate-dark/50 text-primary-foreground placeholder:text-slate-medium focus:border-accent h-12"
                />
              </div>
              <Input
                placeholder="Predmet"
                className="bg-navy-deep border-slate-dark/50 text-primary-foreground placeholder:text-slate-medium focus:border-accent h-12"
              />
              <Textarea
                placeholder="Opišite nam vaše transportne potrebe..."
                className="bg-navy-deep border-slate-dark/50 text-primary-foreground placeholder:text-slate-medium focus:border-accent min-h-[120px] resize-none"
              />
              <Button variant="hero" size="lg" className="w-full">
                Pošaljite poruku
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-dark/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-medium text-sm">
              © 2026 MIPEX Transport i Logistika. Sva prava zadržana.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-light hover:text-accent transition-colors text-sm">
                Politika privatnosti
              </a>
              <a href="#" className="text-slate-light hover:text-accent transition-colors text-sm">
                Uslovi korišćenja
              </a>
              <a href="#" className="text-slate-light hover:text-accent transition-colors text-sm">
                Kolačići
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
