export type TechType = "language" | "framework" | "tool" | "concept";

// Color classes matching the About page section colors
export const techTypeColors: Record<TechType, string> = {
  language:
    "bg-[hsl(var(--tech-language-bg))] text-[hsl(var(--tech-language-text))] border-[hsl(var(--tech-language-border))]",
  framework:
    "bg-[hsl(var(--tech-framework-bg))] text-[hsl(var(--tech-framework-text))] border-[hsl(var(--tech-framework-border))]",
  tool: "bg-[hsl(var(--tech-tool-bg))] text-[hsl(var(--tech-tool-text))] border-[hsl(var(--tech-tool-border))]",
  concept:
    "bg-[hsl(var(--tech-concept-bg))] text-[hsl(var(--tech-concept-text))] border-[hsl(var(--tech-concept-border))]",
};

// Languages from About page
const languages = [
  "c",
  "c++",
  "c#",
  "python",
  "java",
  "lua",
  "javascript",
  "typescript",
  "assemblyscript",
  "golang",
  "go",
  "rust",
  "ruby",
  "php",
  "swift",
  "kotlin",
];

// Frameworks from About page
const frameworks = [
  "qt",
  "react",
  "tailwind",
  "tailwind css",
  ".net",
  "dotnet",
  "next.js",
  "nextjs",
  "vue",
  "vue.js",
  "vuejs",
  "node.js",
  "nodejs",
  "express",
  "django",
  "flask",
  "angular",
  "svelte",
  "spring",
  "laravel",
];

// Tools from About page
const tools = [
  "sql server",
  "github",
  "git",
  "vite",
  "docker",
  "postgresql",
  "postgres",
  "mongodb",
  "mongo",
  "redis",
  "aws",
  "kubernetes",
  "elasticsearch",
  "kafka",
  "rabbitmq",
  "prometheus",
  "grafana",
  "figma",
  "vs code",
  "vscode",
];

// Auto-detect tech type based on name
export const getTechType = (tech: string): TechType => {
  const techLower = tech.toLowerCase();

  if (
    languages.some((lang) => techLower === lang || techLower.includes(lang))
  ) {
    return "language";
  }
  if (frameworks.some((fw) => techLower === fw || techLower.includes(fw))) {
    return "framework";
  }
  if (tools.some((tool) => techLower === tool || techLower.includes(tool))) {
    return "tool";
  }
  // Default to concept (same as About page default)
  return "concept";
};

export const getTechColorClasses = (tech: string, type?: TechType): string => {
  const techType = type || getTechType(tech);
  return techTypeColors[techType];
};
