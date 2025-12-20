import { Instagram } from "lucide-react";
import { Card } from "@/components/ui/card";
import espressoImage from "@/assets/espresso-latte-art.jpg";

const InstagramFeed = () => {
  // Mock Instagram posts - u stvarnosti bi se koristio Instagram API
  const posts = [
    {
      id: 1,
      image: espressoImage,
      caption: "Jutarnji ritual perfektnog espressa ☕ #przionica #coffee",
      likes: 124,
    },
    {
      id: 2,
      image: espressoImage,
      caption: "Nova dostava etičkih zrna iz Kolumbije 🌱 #sustainablecoffee",
      likes: 89,
    },
    {
      id: 3,
      image: espressoImage,
      caption: "Radionica degustacije večeras u 19h! #cupping #coffeeWorkshop",
      likes: 156,
    },
    {
      id: 4,
      image: espressoImage,
      caption: "Naš tim priprema nešto posebno za vas 👥 #coffeeTeam",
      likes: 98,
    },
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Instagram className="h-6 w-6 text-coffee-bean" />
            <h2 className="text-3xl font-serif font-bold text-coffee-bean">@przionica_kafic</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pratite naše svakodnevne trenutke i ostanite u toku sa najnovijim vestima iz našeg kafića
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden group cursor-pointer hover:shadow-warm transition-shadow">
              <div className="relative aspect-square">
                <img
                  src={post.image}
                  alt="Instagram post"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-coffee-espresso/0 group-hover:bg-coffee-espresso/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
                    <p className="text-sm mb-2">{post.caption}</p>
                    <p className="text-xs">❤️ {post.likes}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://instagram.com/przionica_kafic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-coffee-bean hover:text-coffee-light font-medium transition-colors"
          >
            <Instagram className="h-5 w-5" />
            Pratite nas na Instagramu
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;