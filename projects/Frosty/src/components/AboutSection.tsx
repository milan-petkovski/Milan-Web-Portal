
import { Card, CardContent } from '@/components/ui/card';
import { Star, Heart, Award } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Premium Ingredients",
      description: "We source only the finest ingredients from trusted suppliers worldwide to ensure every scoop is exceptional."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Made with Love",
      description: "Every batch is handcrafted by our passionate ice cream artisans who take pride in their craft."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-500" />,
      title: "Award Winning",
      description: "Recognized as the 'Best Artisanal Ice Cream' for three consecutive years by the National Dairy Association."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-chocolate-600 to-strawberry-500 bg-clip-text text-transparent">
                Our Sweet Story
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Since 1995, Sweet Dreams has been crafting extraordinary ice cream experiences. 
              What started as a small family recipe has grown into a beloved local institution, 
              serving happiness one scoop at a time.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment to quality means we never compromise on ingredients. From farm-fresh 
              dairy to exotic flavor infusions, every element is carefully selected to create 
              the perfect frozen treat that brings joy to every customer.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-gray-800 mb-1">25+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-800 mb-1">2M+</div>
                <div className="text-gray-600">Scoops Served</div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="bg-gradient-to-br from-vanilla-100 via-strawberry-100 to-chocolate-100 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4 animate-float">🏪</div>
                <p className="text-lg font-semibold text-gray-700">Est. 1995</p>
                <p className="text-gray-600">Family Owned & Operated</p>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 gradient-strawberry rounded-full flex items-center justify-center text-2xl animate-bounce-gentle">
              🍓
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 gradient-chocolate rounded-full flex items-center justify-center text-2xl animate-float">
              🍫
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            What Makes Us Special
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
