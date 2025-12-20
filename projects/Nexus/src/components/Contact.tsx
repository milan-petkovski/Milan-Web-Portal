import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="relative py-24 px-4 md:px-8 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="mb-4 text-4xl font-bold tracking-wider text-foreground md:text-5xl lg:text-6xl">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
            Visit our showroom or reach out to schedule your test drive today.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    First Name
                  </label>
                  <Input 
                    placeholder="John"
                    className="border-border bg-card/50 backdrop-blur focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Doe"
                    className="border-border bg-card/50 backdrop-blur focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Email
                </label>
                <Input 
                  type="email"
                  placeholder="john.doe@example.com"
                  className="border-border bg-card/50 backdrop-blur focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Phone
                </label>
                <Input 
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="border-border bg-card/50 backdrop-blur focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your interests..."
                  rows={5}
                  className="border-border bg-card/50 backdrop-blur focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-blue transition-all duration-300 hover:scale-105 text-lg py-6 rounded-xl font-orbitron font-semibold"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="animate-fade-in-up space-y-8" style={{ animationDelay: '150ms' }}>
            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-orbitron font-semibold text-foreground">
                      Showroom Location
                    </h3>
                    <p className="text-muted-foreground">
                      123 Innovation Drive<br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-orbitron font-semibold text-foreground">
                      Phone
                    </h3>
                    <p className="text-muted-foreground">
                      +1 (555) 123-4567<br />
                      Mon-Sat: 9AM - 7PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-orbitron font-semibold text-foreground">
                      Email
                    </h3>
                    <p className="text-muted-foreground">
                      info@nexusmotors.com<br />
                      support@nexusmotors.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative h-64 overflow-hidden rounded-xl border border-border bg-card/50">
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin className="h-16 w-16 text-primary/30" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Accent */}
      <div className="absolute right-0 top-1/2 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[150px]"></div>
    </section>
  );
};

export default Contact;
