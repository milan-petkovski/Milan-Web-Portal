
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "Classic Vanilla Bean",
      description: "Rich Madagascar vanilla with real vanilla bean specks",
      price: "$4.99",
      rating: 4.9,
      gradient: "gradient-vanilla",
      image: "🍦"
    },
    {
      id: 2,
      name: "Strawberry Dreams",
      description: "Fresh strawberries blended into creamy perfection",
      price: "$5.49",
      rating: 4.8,
      gradient: "gradient-strawberry",
      image: "🍓"
    },
    {
      id: 3,
      name: "Chocolate Indulgence",
      description: "Double chocolate with premium cocoa and chocolate chips",
      price: "$5.99",
      rating: 4.9,
      gradient: "gradient-chocolate",
      image: "🍫"
    },
    {
      id: 4,
      name: "Mint Chocolate Chip",
      description: "Cool mint ice cream with dark chocolate chips",
      price: "$5.49",
      rating: 4.7,
      gradient: "gradient-mint",
      image: "🌿"
    },
    {
      id: 5,
      name: "Caramel Swirl",
      description: "Vanilla base with ribbons of salted caramel",
      price: "$5.99",
      rating: 4.8,
      gradient: "gradient-vanilla",
      image: "🍯"
    },
    {
      id: 6,
      name: "Rocky Road",
      description: "Chocolate with marshmallows and crunchy almonds",
      price: "$6.49",
      rating: 4.6,
      gradient: "gradient-chocolate",
      image: "🥜"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-strawberry-600 to-chocolate-500 bg-clip-text text-transparent">
              Our Signature Flavors
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each scoop is crafted with premium ingredients and made fresh daily in small batches
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-0 shadow-lg">
              <div className={`h-48 ${product.gradient} relative flex items-center justify-center`}>
                <div className="text-6xl animate-float group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold text-gray-800">{product.rating}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-800">{product.price}</span>
                  <Button className="bg-gradient-to-r from-strawberry-400 to-chocolate-400 hover:from-strawberry-500 hover:to-chocolate-500 text-white rounded-full">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-strawberry-300 text-strawberry-600 hover:bg-strawberry-50 px-8 py-4 rounded-full"
          >
            View All 50+ Flavors
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
