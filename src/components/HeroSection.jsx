import { ArrowDown, ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24"
    >
      <div className="container max-w-5xl mx-auto z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1]">
            <span className="block opacity-0 animate-fade-in-delay-1 text-muted-foreground text-3xl sm:text-4xl md:text-5xl font-semibold mb-2">
              Hi, I'm
            </span>
            <span className="block opacity-0 animate-fade-in-delay-2 text-primary">
              Abdelfettah
            </span>
            <span className="block opacity-0 animate-fade-in-delay-3 gradient-text">
              Mostakir
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed opacity-0 animate-fade-in-delay-3">
            I build scalable backend systems with Java and Spring Boot, design microservice{" "}
            <br className="hidden sm:inline" />
            architectures tailored for growth & apply DevOps practices to{" "}
            <br className="hidden sm:inline" />
            deliver secure, automated, cloud-ready solutions.
          </p>

          <div className="pt-2 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="btn-primary">
              View My Work
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in-delay-4">
        <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
          Scroll
        </span>
        <div className="p-2 rounded-full glass animate-bounce">
          <ArrowDown className="h-4 w-4 text-primary" />
        </div>
      </div>
    </section>
  );
};
