
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Star, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full gradient-strawberry flex items-center justify-center">
              <IceCreamCone className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-strawberry-500 to-chocolate-500 bg-clip-text text-transparent">
              Sweet Dreams
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-strawberry-500 transition-colors">Home</a>
            <a href="#products" className="text-gray-700 hover:text-strawberry-500 transition-colors">Flavors</a>
            <a href="#about" className="text-gray-700 hover:text-strawberry-500 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-strawberry-500 transition-colors">Contact</a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-strawberry-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </Button>
            <Button className="hidden md:inline-flex bg-gradient-to-r from-strawberry-400 to-chocolate-400 hover:from-strawberry-500 hover:to-chocolate-500 text-white">
              Order Now
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#home" className="text-gray-700 hover:text-strawberry-500 transition-colors">Home</a>
              <a href="#products" className="text-gray-700 hover:text-strawberry-500 transition-colors">Flavors</a>
              <a href="#about" className="text-gray-700 hover:text-strawberry-500 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-strawberry-500 transition-colors">Contact</a>
              <Button className="bg-gradient-to-r from-strawberry-400 to-chocolate-400 hover:from-strawberry-500 hover:to-chocolate-500 text-white">
                Order Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Simple SVG icon component
const IceCreamCone = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.69 2 6 4.69 6 8C6 8.34 6.04 8.67 6.09 9H6C5.45 9 5 9.45 5 10S5.45 11 6 11H6.09C6.04 11.33 6 11.66 6 12C6 15.31 8.69 18 12 18S18 15.31 18 12C18 11.66 17.96 11.33 17.91 11H18C18.55 11 19 10.55 19 10S18.55 9 18 9H17.91C17.96 8.67 18 8.34 18 8C18 4.69 15.31 2 12 2M12 4C14.21 4 16 5.79 16 8S14.21 12 12 12S8 10.21 8 8S9.79 4 12 4M11 13V21.5C11 21.78 11.22 22 11.5 22S12 21.78 12 21.5V13C12 12.45 11.55 12 11 12S11 12.45 11 13Z"/>
  </svg>
);

export default Header;
