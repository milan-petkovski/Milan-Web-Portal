import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import espressoImage from "@/assets/espresso-latte-art.jpg";

const Jelovnik = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const menuItems = [
    {
      category: "Espresso napici",
      items: [
        {
          name: "Espresso",
          description: "Klasičan crni espresso od pažljivo odabranih zrna",
          price: "180 din",
          image: espressoImage,
          tags: ["Intenzivan", "Klasičan"]
        },
        {
          name: "Cappuccino",
          description: "Savršena kombinacija espressa i kremaste mlečne pene",
          price: "250 din",
          image: espressoImage,
          tags: ["Kremast", "Popularno"]
        },
        {
          name: "Latte",
          description: "Milji ukus sa više mleka i lepom latte art decoracijom",
          price: "280 din",
          image: espressoImage,
          tags: ["Mlek", "Art"]
        },
        {
          name: "Flat White",
          description: "Australijski stil sa mikropenastim mlekom",
          price: "290 din",
          image: espressoImage,
          tags: ["Kremast", "Jak"]
        }
      ]
    },
    {
      category: "Filter kafa",
      items: [
        {
          name: "V60 Pour Over",
          description: "Ručno pripremljena filter kafa sa izraženim aromama",
          price: "320 din",
          image: espressoImage,
          tags: ["Ručno", "Aromatična"]
        },
        {
          name: "French Press",
          description: "Bogat ukus sa punim telom, priprema 4 minuta",
          price: "300 din",
          image: espressoImage,
          tags: ["Bogat", "Tradicionalno"]
        },
        {
          name: "Chemex",
          description: "Čist i svetao ukus kroz poseban filter",
          price: "350 din",
          image: espressoImage,
          tags: ["Čist", "Elegantan"]
        }
      ]
    },
    {
      category: "Hladni napici",
      items: [
        {
          name: "Cold Brew",
          description: "Hladno ekstraktovana kafa tokom 12 sati",
          price: "280 din",
          image: espressoImage,
          tags: ["Hladno", "Umiljato"]
        },
        {
          name: "Iced Latte",
          description: "Osvežavajući latte sa ledom i mlekom",
          price: "300 din",
          image: espressoImage,
          tags: ["Osvežavajuće", "Mlečno"]
        },
        {
          name: "Espresso Tonic",
          description: "Neobična kombinacija espressa i tonik vode",
          price: "320 din",
          image: espressoImage,
          tags: ["Neobično", "Osvežavajuće"]
        }
      ]
    },
    {
      category: "Grickalice",
      items: [
        {
          name: "Croissant",
          description: "Svež maslac croissant, idealan uz jutarnju kafu",
          price: "220 din",
          image: espressoImage,
          tags: ["Svež", "Doručak"]
        },
        {
          name: "Cheesecake",
          description: "Kremastan cheesecake sa šumskim bobicama",
          price: "380 din",
          image: espressoImage,
          tags: ["Dezert", "Kremastan"]
        },
        {
          name: "Brownie",
          description: "Bogat čokoladni brownie sa orasima",
          price: "320 din",
          image: espressoImage,
          tags: ["Čokolada", "Sladak"]
        }
      ]
    }
  ];

  const filteredItems = menuItems.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  })).filter(category => category.items.length > 0);

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-coffee text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold mb-4">Naš jelovnik</h1>
          <p className="text-lg text-coffee-cream/90">
            Otkrijte našu kolekciju pažljivo odabranih napitaka i grickalica, 
            pripremljenih sa ljubavlju i stručnošću.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Pretražite jelovnik..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.map((category) => (
            <div key={category.category} className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-coffee-bean mb-8 text-center">
                {category.category}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <Card key={item.name} className="overflow-hidden hover:shadow-warm transition-shadow">
                    <div className="aspect-video bg-secondary/20">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-coffee-bean">{item.name}</CardTitle>
                        <span className="text-lg font-bold text-coffee-light">{item.price}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3 text-sm">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Jelovnik;