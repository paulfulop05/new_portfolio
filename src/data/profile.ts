import { Github, Linkedin, Mail, Database, Palette, Zap } from "lucide-react";

export interface SocialLink {
  href: string;
  icon: typeof Github;
  label: string;
}

export interface WhatIDoCard {
  title: string;
  description: string;
  icon: typeof Palette;
}

export const socialLinks: SocialLink[] = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:hello@example.com", icon: Mail, label: "Email" },
];

export const whatIDoCards: WhatIDoCard[] = [
  {
    title: "UI/UX Design",
    description:
      "Creating beautiful, intuitive interfaces that users love to interact with.",
    icon: Palette,
  },
  {
    title: "Database Design",
    description:
      "Architecting scalable database solutions for high-performance applications.",
    icon: Database,
  },
  {
    title: "Performance",
    description:
      "Optimizing applications for speed, efficiency, and better user experience.",
    icon: Zap,
  },
];
