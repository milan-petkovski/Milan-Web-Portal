import { Coffee, Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-coffee-espresso text-coffee-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-coffee-cream" />
              <span className="font-serif font-bold text-xl text-coffee-cream">Pržionica</span>
            </div>
            <p className="text-coffee-cream/80 text-sm leading-relaxed mb-4">
              S ljubavlju stvoreno, za vas prženo. Specijalizovani kafić u srcu Beograda 
              sa posvećenošću kvalitetu, održivosti i zajednici.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/przionica_kafic"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-coffee-light/20 p-2 rounded-full hover:bg-coffee-light/30 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com/przionica.kafic"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-coffee-light/20 p-2 rounded-full hover:bg-coffee-light/30 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-coffee-cream mb-4">Brze veze</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/jelovnik" className="text-coffee-cream/80 hover:text-coffee-cream transition-colors">
                  Jelovnik
                </Link>
              </li>
              <li>
                <Link to="/o-nama" className="text-coffee-cream/80 hover:text-coffee-cream transition-colors">
                  O nama
                </Link>
              </li>
              <li>
                <Link to="/dogadjaji" className="text-coffee-cream/80 hover:text-coffee-cream transition-colors">
                  Događaji
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-coffee-cream/80 hover:text-coffee-cream transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-coffee-cream/80 hover:text-coffee-cream transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-coffee-cream mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-coffee-cream/60 mt-0.5 flex-shrink-0" />
                <span className="text-coffee-cream/80">
                  Knez Mihailova 15<br />
                  11000 Beograd
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-coffee-cream/60 flex-shrink-0" />
                <span className="text-coffee-cream/80">+381 11 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-coffee-cream/60 flex-shrink-0" />
                <span className="text-coffee-cream/80">info@przionica.rs</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="font-semibold text-coffee-cream mb-4">Radno vreme</h3>
            <ul className="space-y-1 text-sm text-coffee-cream/80">
              <li className="flex justify-between">
                <span>Pon - Pet</span>
                <span>07:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Subota</span>
                <span>08:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Nedelja</span>
                <span>09:00 - 21:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-coffee-light/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-coffee-cream/60">
          <p>&copy; 2024 Pržionica. Sva prava zadržana.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-coffee-cream transition-colors">Privatnost</a>
            <a href="#" className="hover:text-coffee-cream transition-colors">Uslovi korišćenja</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;