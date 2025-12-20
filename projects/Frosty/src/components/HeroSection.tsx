
import { Button } from '@/components/ui/button';
import { Star, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-8 h-8 rounded-full bg-white/30 animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 rounded-full bg-white/20 animate-bounce-gentle"></div>
        <div className="absolute bottom-32 left-20 w-10 h-10 rounded-full bg-white/25 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 right-10 w-4 h-4 rounded-full bg-white/30 animate-bounce-gentle" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium text-gray-700">Premium Ice Cream Since 1995</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-strawberry-600 via-chocolate-500 to-vanilla-600 bg-clip-text text-transparent">
              Sweet Dreams
            </span>
            <span className="block text-gray-800 text-4xl md:text-5xl mt-2">
              Come True Here
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Handcrafted with love, served with joy. Experience the finest artisanal ice cream 
            made from premium ingredients and time-honored recipes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-strawberry-500 to-chocolate-500 hover:from-strawberry-600 hover:to-chocolate-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Explore Flavors
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white/50 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-gray-800 px-8 py-4 text-lg rounded-full"
            >
              Find Locations
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 mb-1">50+</div>
              <div className="text-gray-600">Unique Flavors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 mb-1">25+</div>
              <div className="text-gray-600">Store Locations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 mb-1">100K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
