
import { Heart, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full gradient-strawberry flex items-center justify-center">
                <IceCreamCone className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">Sweet Dreams</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Crafting happiness one scoop at a time since 1995. Premium artisanal ice cream made with love.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-strawberry-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-strawberry-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-strawberry-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors">Flavors</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Locations</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Catering</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Birthday Parties</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Corporate Events</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Delivery</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>123 Sweet Street</p>
              <p>City Center, State 12345</p>
              <p>(555) 123-4567</p>
              <p>hello@sweetdreams.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-1 text-gray-400 mb-4 md:mb-0">
              <span>© Copyright 2025 Milan Web Portal. All Rights reserved.</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Simple SVG icon component
const IceCreamCone = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.69 2 6 4.69 6 8C6 8.34 6.04 8.67 6.09 9H6C5.45 9 5 9.45 5 10S5.45 11 6 11H6.09C6.04 11.33 6 11.66 6 12C6 15.31 8.69 18 12 18S18 15.31 18 12C18 11.66 17.96 11.33 17.91 11H18C18.55 11 19 10.55 19 10S18.55 9 18  9H17.91C17.96 8.67 18 8.34 18 8C18 4.69 15.31 2 12 2M12 4C14.21 4 16 5.79 16 8S14.21 12 12 12S8 10.21 8 8S9.79 4 12 4M11 13V21.5C11 21.78 11.22 22 11.5 22S12 21.78 12 21.5V13C12 12.45 11.55 12 11 12S11 12.45 11 13Z"/>
  </svg>
);

export default Footer;
