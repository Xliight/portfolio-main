import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "abdelfattah.mostakir@gmail.com",
    href: "mailto:abdelfattah.mostakir@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+212 693 228 504",
    href: "tel:+212 693 228 504",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Casablanca, Morocco",
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-muted/30 -z-10" />
      <div className="container mx-auto max-w-4xl">
        <SectionHeader
          label="Contact"
          title="Get In"
          highlight="Touch"
          description="Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities."
        />

        <div className="glass rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-center mb-10">
            Contact Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-background/50 border border-border/50 transition-all duration-300 hover:border-primary/30 hover:-translate-y-1"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary mb-4">
                  <item.icon className="h-5 w-5" />
                </div>
                <h4 className="font-semibold mb-1">{item.label}</h4>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-sm text-muted-foreground">
                    {item.value}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="text-center pt-4 border-t border-border/50">
            <h4 className="font-semibold mb-5">Connect With Me</h4>
            <a
              href="https://www.linkedin.com/in/abdelfettah-mostakir/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-4 rounded-2xl glass hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:-translate-y-1"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
