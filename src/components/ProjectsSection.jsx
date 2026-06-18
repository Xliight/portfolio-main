import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const projects = [
  {
    id: 1,
    title: "Insurance Sector Applications",
    company: "Diot Sciaci Technology (07/2025 - Now)",
    description:
      " Development and enhancement of applications for the insurance sector. Involved in the conception and implementation of new business features , performance optimization, and bug fixing. Contributed to a project integrating Artificial Intelligence for marketing campaigns and established CI/CD pipelines",
    image: "/projects/download.jpeg",
    tags: [
      "Java 21",
      "Spring Boot",
      "Angular 19",
      "FastAPI",
      "K8S",
      "PostgreSQL",
      "GitLab CI",
      "AI Integration",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "High-Performance Insurance Management Platform",
    company: "EASYPEASY (HORIZON GROUP) (02/2025-06/2025)",
    description:
      "Contributed to the development and enhancement of a large-scale insurance management platform. Participated in the implementation of a high-performance with microservices architecture and deployment/monitoring of services on AWS.",
    image: "/projects/pizi.png",
    tags: [
      "Java 21",
      "Spring Boot",
      "Microservices",
      "PostgreSQL",
      "AWS",
      "CI/CD",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Backend Architecture Optimization",
    company: "EAMBITION (Internship) (09/2024-01/2025)",
    description:
      "Developed robust Java backend applications and focused on optimizing backend architectures. Successfully improved application performance and software quality by +40% through unit and integration testing. Integrated CI/CD pipelines (Jenkins) and collaborated on environment management and deployment monitoring (Kubernetes/ArgoCD).",
    image: "/projects/eambition.jpeg",
    tags: [
      "Java 17",
      "Spring Boot",
      "PostgreSQL",
      "Kubernetes",
      "Jenkins",
      "SonarQube",
      "ArgoCD",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "FullStack Electronic Health Platform",
    company: "OFFZONE AGENCY (Internship) (02/2024-08/2024)",
    description:
      "Developed a complete electronic health platform. Handled full-stack development, implementing backend features with Spring Boot and front-end interfaces with ReactJS. Managed patient records, appointments, and secure communication. Contributed to integration and deployment using Docker.",
    image: "/projects/offzone.jpeg",
    tags: ["Spring Boot", "ReactJS", "MySQL", "Docker"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Freelance SaaS Property Management Platform",
    company: "SMART-M (Freelance) (10/2023-01/2024)",
    description:
      "Contributed to the development of an online SaaS platform for property management. Responsibilities included implementing backend features with Spring Boot and developing front-end interfaces. Key contribution to cloud architecture and deployments on AWS using Terraform.",
    image: "/projects/syndicat.jpeg",
    tags: [
      "Spring Boot",
      "ReactJS",
      "PostgreSQL",
      "AWS",
      "Terraform"
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          label="Work"
          title="Featured"
          highlight="Professional Projects"
          description={
            <>
              Showcasing key achievements focused on{" "}
              <strong className="text-foreground font-semibold">
                Java Backend, Microservices, and DevOps
              </strong>{" "}
              from my professional experience, including my final engineering
              project.
            </>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group glass rounded-3xl overflow-hidden text-left transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent opacity-80" />
              </div>

              <div className="p-6 md:p-7 flex flex-col flex-1">
                <p className="text-primary text-sm font-semibold mb-2">
                  {project.company}
                </p>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl glass hover:bg-primary/10 hover:text-primary transition-colors"
                    aria-label="View demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl glass hover:bg-primary/10 hover:text-primary transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Xliight"
          >
            Check My Github
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
