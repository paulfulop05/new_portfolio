import ProjectCard from "./ProjectCard";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "TaskMaster Pro",
      description: "A comprehensive task management application with team collaboration features, real-time updates, and advanced analytics.",
      tags: ["react", "typescript", "firebase", "tailwind"],
      stars: 342,
      link: "https://github.com"
    },
    {
      title: "CodeShare",
      description: "Real-time code collaboration platform with syntax highlighting, multiple language support, and live cursor tracking.",
      tags: ["react", "websocket", "node.js", "monaco-editor"],
      stars: 189,
      link: "https://github.com"
    },
    {
      title: "API Gateway",
      description: "Lightweight API gateway with rate limiting, authentication, caching, and request transformation capabilities.",
      tags: ["go", "redis", "docker", "kubernetes"],
      stars: 567,
      link: "https://github.com"
    },
    {
      title: "Design System",
      description: "Comprehensive React component library with accessibility features, theming support, and detailed documentation.",
      tags: ["react", "storybook", "typescript", "css"],
      stars: 234,
      link: "https://github.com"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <span className="text-primary">⭐</span>
            Featured Projects
          </h2>
          <a 
            href="/projects" 
            className="flex items-center gap-2 text-primary hover:gap-3 transition-all text-sm font-semibold"
          >
            View all
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="opacity-0 animate-fade-in"
              style={{ 
                animationDelay: `${0.1 * index}s`,
                animationFillMode: "forwards"
              }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
