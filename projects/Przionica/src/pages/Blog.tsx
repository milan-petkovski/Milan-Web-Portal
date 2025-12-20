import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import espressoImage from "@/assets/espresso-latte-art.jpg";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Veština pripreme savršenog V60 Pour Over-a",
      excerpt: "Otkrijte tajne vrhunske pripreme filter kafe kroz detaljno objašnjenje V60 tehnike, od odabira zrna do poslednje kapi.",
      content: "Detaljan vodič kroz sve korake pripreme...",
      author: "Marko Petrović",
      date: "10. februar 2024",
      category: "Tehnike pripreme",
      readTime: "5 min",
      image: espressoImage,
      featured: true
    },
    {
      id: 2,
      title: "Putovanje zrna: Od farme u Kolumbiji do vaše šolje", 
      excerpt: "Pratite fascinantan put kafe od plantaže u kolumbijskim planinama do našeg roaster-a u Beogradu.",
      content: "Duboko istraživanje supply chain-a...",
      author: "Ana Petrović",
      date: "5. februar 2024",
      category: "Priče o kafi",
      readTime: "8 min",
      image: espressoImage,
      featured: true
    },
    {
      id: 3,
      title: "Razlike između arabike i robuste: Šta treba da znate",
      excerpt: "Kompletna analiza dve glavne vrste kafe i kako one utiču na ukus vaše jutarnje šolje.",
      content: "Ozbiljan naučni pristup...",
      author: "Stefan Milosavljević",  
      date: "2. februar 2024",
      category: "Edukacija",
      readTime: "6 min",
      image: espressoImage,
      featured: false
    },
    {
      id: 4,
      title: "Održiva kafa: Zašto je etičko nabavljanje važno",
      excerpt: "Istraživanje uticaja etičkog nabavljanja kafe na proizvođače, životnu sredinu i konačni ukus.",
      content: "Duboka analiza održivosti...",
      author: "Milica Stojanović",
      date: "28. januar 2024", 
      category: "Održivost",
      readTime: "7 min",
      image: espressoImage,
      featured: false
    },
    {
      id: 5,
      title: "Latte Art za početnike: Prvi koraci ka lepoj šolji",
      excerpt: "Osnovne tehnike i saveti za kreiranje prelepih uzoraka u vašoj jutarnjoj kafi.",
      content: "Praktičan vodič za početnike...",
      author: "Jovana Nikolić",
      date: "25. januar 2024",
      category: "Tehnike pripreme", 
      readTime: "4 min",
      image: espressoImage,
      featured: false
    },
    {
      id: 6,
      title: "Istorija kafe u Srbiji: Od orijentalne tradicije do specialty scene",
      excerpt: "Fascinantan pregled razvoja kulture kafe u našoj zemlji kroz vekove do danas.",
      content: "Istorijski pregled...",
      author: "Dr. Miloš Radojević",
      date: "20. januar 2024",
      category: "Kultura kafe",
      readTime: "10 min", 
      image: espressoImage,
      featured: false
    }
  ];

  const categories = ["Sve", "Tehnike pripreme", "Priče o kafi", "Edukacija", "Održivost", "Kultura kafe"];
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Tehnike pripreme": return "bg-coffee-bean/10 text-coffee-bean border-coffee-bean/20";
      case "Priče o kafi": return "bg-forest-green/10 text-forest-green border-forest-green/20";
      case "Edukacija": return "bg-coffee-light/10 text-coffee-light border-coffee-light/20";
      case "Održivost": return "bg-forest-green/10 text-forest-green border-forest-green/20";
      case "Kultura kafe": return "bg-coffee-light/10 text-coffee-light border-coffee-light/20";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-coffee text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold mb-4">Blog Pržionice</h1>
          <p className="text-lg text-coffee-cream/90">
            Otkrijte svet kafe kroz naše priče, savete i edukativne članke. 
            Od tehnika pripreme do fascinantnih priča o poreklu zrna.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="cursor-pointer hover:bg-coffee-bean hover:text-white transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-coffee-bean mb-8">Istaknuti članci</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-warm transition-shadow">
                <div className="aspect-video bg-secondary/20">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getCategoryColor(post.category)}>
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-coffee-bean text-xl leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="text-coffee-bean">
                      Pročitaj više
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Posts */}
      <section className="py-12 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-coffee-bean mb-8">Najnoviji članci</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-warm transition-shadow">
                <div className="aspect-video bg-secondary/20">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getCategoryColor(post.category)}>
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-coffee-bean text-lg leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-coffee text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Pratite naš blog
          </h2>
          <p className="text-lg text-coffee-cream/90 mb-8">
            Budite obavešteni o novim člancima, savetima i zanimljivostima iz sveta kafe. 
            Prijavite se za naš newsletter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Vaša email adresa"
              className="flex-1 px-4 py-3 rounded-lg text-coffee-bean"
            />
            <Button className="bg-white text-coffee-bean hover:bg-coffee-cream font-medium px-6">
              Prijavite se
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;