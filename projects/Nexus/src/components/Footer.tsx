import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const footerLinks = [
    {
      title: "Company",
      links: ["About Us", "Careers", "Press", "Investors"]
    },
    {
      title: "Support",
      links: ["Contact", "FAQs", "Warranty", "Service Centers"]
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy"]
    }
  ];

  return (
    <footer className="relative border-t border-border bg-card/50 backdrop-blur">
      <div className="container mx-auto max-w-7xl px-4 py-16 md:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div>
            <h3 className="mb-4 font-orbitron text-3xl font-bold gradient-text text-glow-blue">
              NEXUS
            </h3>
            <p className="mb-6 text-muted-foreground">
              Engineering tomorrow's automotive excellence today.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="group rounded-lg border border-border bg-card p-2 transition-all duration-300 hover:border-primary hover:bg-primary/10"
                  >
                    <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="mb-4 font-orbitron font-semibold text-foreground">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-border"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 Milan Web Portal. All rights reserved.
          </p>
          <p className="font-orbitron text-sm font-semibold gradient-text">
            Drive Tomorrow.
          </p>
        </div>
      </div>

      {/* Background Accent */}
      <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-primary/5 blur-[120px]"></div>
    </footer>
  );
};

export default Footer;
