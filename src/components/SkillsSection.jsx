import { useState } from "react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";

const skills = [
  { name: "Java / JEE", level: 95, category: "backend" },
  { name: "Spring Boot & Microservices", level: 95, category: "backend" },
  { name: "FastAPI", level: 75, category: "backend" },
  { name: "PostgreSQL, Oracle, MySQL", level: 90, category: "tools" },
  { name: "Cassandra, MongoDB, Redis", level: 80, category: "tools" },
  { name: "Kubernetes (K8s)", level: 90, category: "tools" },
  { name: "Jenkins, SonarQube, ArgoCD", level: 90, category: "tools" },
  { name: "AWS", level: 85, category: "tools" },
  { name: "Terraform", level: 80, category: "tools" },
  { name: "Git, GitHub, GitLab CI", level: 90, category: "tools" },
  { name: "JUnit, Mockito, JMeter", level: 90, category: "tools" },
  { name: "Python / Bash", level: 80, category: "tools" },
  { name: "Angular ", level: 90, category: "frontend" },
  { name: "React.js", level: 70, category: "frontend" },
  { name: "Tailwind", level: 70, category: "frontend" },
];

const categories = ["all", "backend", "frontend", "tools"];

const categoryLabels = {
  all: "All Skills",
  frontend: "Frontend",
  backend: "Backend",
  tools: "DevOps & DB",
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 bg-muted/30 -z-10" />
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          label="Expertise"
          title="My"
          highlight="Technical Skills"
        />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "glass text-muted-foreground hover:text-foreground"
              )}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="glass rounded-2xl p-5 text-left transition-all duration-300 hover:border-primary/30 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">{skill.name}</h3>
                <span className="text-sm font-bold text-primary">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-linear-to-r from-primary to-accent origin-left animate-[grow_1.2s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
