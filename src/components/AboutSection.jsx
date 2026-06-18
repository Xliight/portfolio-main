import { Briefcase, Code, Download, User } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const highlights = [
  {
    icon: Code,
    title: "Backend Development",
    description:
      "Building scalable APIs, microservices, and backend systems using Java, Spring Boot, and clean architecture principles.",
  },
  {
    icon: User,
    title: "DevOps & Automation",
    description:
      "Implementing CI/CD pipelines, containerizing apps, and deploying cloud-ready solutions using Docker, Kubernetes, and AWS.",
  },
  {
    icon: Briefcase,
    title: "System Design & Delivery",
    description:
      "Bringing ideas from concept to production with clear architecture, agile methodologies, and a strong engineering mindset.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader label="About" title="About" highlight="Me" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="glass rounded-3xl p-8 md:p-10 text-left space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              Backend Engineer & DevOps Enthusiast
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I'm a backend-focused developer who loves building reliable,
              scalable systems with Java, Spring Boot, and modern cloud-native
              tools. I enjoy crafting clean architectures, designing APIs, and
              making systems that are both powerful and easy to maintain.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Beyond development, I'm passionate about DevOps: automating
              workflows, setting up CI/CD pipelines, working with Docker and
              Kubernetes, and deploying cloud-ready applications—especially on
              AWS. I love turning complex workflows into simple, automated,
              reproducible solutions.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              At my core, I'm a problem-solver. I enjoy learning, experimenting,
              and pushing myself to grow both as a developer and as a human.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-4">
              <a href="#contact" className="btn-primary">
                Get In Touch
              </a>
              <a
                href="/ABDELFATTAH _MOSTAKIR_English.pdf"
                download="ABDELFATTAH _MOSTAKIR_English.pdf"
                className="btn-outline"
              >
                <Download className="h-4 w-4" />
                Download CV (EN)
              </a>
              <a
                href="/ABDELFATTAH _MOSTAKIR_French.pdf"
                download="ABDELFATTAH _MOSTAKIR_French.pdf"
                className="btn-outline"
              >
                <Download className="h-4 w-4" />
                Download CV (FR)
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group glass rounded-2xl p-6 text-left transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 p-3 rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
