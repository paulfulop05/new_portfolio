import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const allProjects = [
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
    },
    {
      title: "CloudDeploy",
      description: "Automated deployment tool for containerized applications with zero-downtime deployments and rollback support.",
      tags: ["python", "docker", "kubernetes", "aws"],
      stars: 445,
      link: "https://github.com"
    },
    {
      title: "DataViz Studio",
      description: "Interactive data visualization library with customizable charts, real-time updates, and export capabilities.",
      tags: ["javascript", "d3.js", "canvas", "webgl"],
      stars: 298,
      link: "https://github.com"
    },
    {
      title: "SecureVault",
      description: "End-to-end encrypted password manager with cross-platform sync and biometric authentication support.",
      tags: ["react-native", "encryption", "sqlite", "biometrics"],
      stars: 156,
      link: "https://github.com"
    },
    {
      title: "MLOps Pipeline",
      description: "Complete machine learning operations pipeline with model versioning, A/B testing, and monitoring dashboard.",
      tags: ["python", "tensorflow", "docker", "grafana"],
      stars: 423,
      link: "https://github.com"
    },
    {
      title: "E-Commerce Engine",
      description: "Headless e-commerce platform with payment processing, inventory management, and multi-vendor support.",
      tags: ["node.js", "postgres", "stripe", "graphql"],
      stars: 612,
      link: "https://github.com"
    },
    {
      title: "DevTools CLI",
      description: "Command-line toolset for developers with project scaffolding, code generation, and workflow automation.",
      tags: ["rust", "cli", "automation", "templates"],
      stars: 278,
      link: "https://github.com"
    },
    {
      title: "ChatBot Framework",
      description: "Extensible chatbot framework with NLP capabilities, multi-channel support, and conversation flow builder.",
      tags: ["python", "nlp", "api", "webhooks"],
      stars: 389,
      link: "https://github.com"
    },
    {
      title: "Performance Monitor",
      description: "Real-time application performance monitoring with error tracking, alerts, and detailed performance insights.",
      tags: ["javascript", "monitoring", "analytics", "alerts"],
      stars: 201,
      link: "https://github.com"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="animate-fade-in mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              My <span className="text-primary">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              A collection of projects I've built over the years. From full-stack applications 
              to open-source libraries, each project represents a unique challenge and learning opportunity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {allProjects.map((project, index) => (
              <div 
                key={index}
                className="opacity-0 animate-fade-in"
                style={{ 
                  animationDelay: `${0.05 * index}s`,
                  animationFillMode: "forwards"
                }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
