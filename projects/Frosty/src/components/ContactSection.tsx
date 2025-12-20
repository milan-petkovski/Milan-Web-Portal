
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

const ContactSection = () => {
  const locations = [
    {
      name: "Downtown Flagship",
      address: "123 Sweet Street, City Center",
      phone: "(555) 123-4567",
      hours: "Mon-Sun: 10AM-10PM"
    },
    {
      name: "Mall Location",
      address: "456 Shopping Plaza, West Side",
      phone: "(555) 234-5678",
      hours: "Mon-Sun: 11AM-9PM"
    },
    {
      name: "Beachfront Store",
      address: "789 Ocean Drive, Coastal Area",
      phone: "(555) 345-6789",
      hours: "Mon-Sun: 9AM-11PM"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-strawberry-600 to-chocolate-500 bg-clip-text text-transparent">
              Visit Our Stores
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find us at one of our convenient locations or get in touch with any questions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Locations */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-800">Our Locations</h3>
            <div className="space-y-6">
              {locations.map((location, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-gray-800">{location.name}</h4>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-strawberry-500" />
                        <span>{location.address}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-strawberry-500" />
                        <span>{location.phone}</span>
                      </div>
                      <div className="text-sm text-gray-500">{location.hours}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-gray-800">Follow Us</h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="rounded-full border-strawberry-300 hover:bg-strawberry-50">
                  <Instagram className="w-5 h-5 text-strawberry-500" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-strawberry-300 hover:bg-strawberry-50">
                  <Facebook className="w-5 h-5 text-strawberry-500" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-strawberry-300 hover:bg-strawberry-50">
                  <Twitter className="w-5 h-5 text-strawberry-500" />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone (Optional)
                    </label>
                    <Input type="tel" placeholder="(555) 123-4567" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your favorite flavors or ask us anything!"
                      rows={4}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-strawberry-500 to-chocolate-500 hover:from-strawberry-600 hover:to-chocolate-600 text-white py-3 rounded-full text-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
