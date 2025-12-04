import ubb_icon from "../assets/UBB.png";
import cnlr_icon from "../assets/CNLR.png";

export interface Experience {
  key: string;
  name: string;
  role: string;
  description: string;
  period: string;
  website: string;
  icon: string;
  isPast: boolean;
}

export const workExperience: Experience[] = [
  {
    key: "ubb",
    name: "UBB",
    role: "CTO",
    description:
      "As CTO, I led the development of StorageBox, an innovative startup revolutionizing eco-friendly Shopify fulfillment with edge based sustainable warehousing technology and seamless logistics integrations.",
    period: "September 2024 - June 2025",
    website: "https://www.cs.ubbcluj.ro/",
    icon: ubb_icon,
    isPast: false,
  },
  {
    key: "cnlr",
    name: "CNLR",
    role: "Software Engineer",
    description:
      "Worked on cutting-edge projects involving distributed systems and cloud infrastructure, contributing to solutions that served millions of users worldwide.",
    period: "January 2023 - August 2024",
    website: "https://www.cnlr.ro/",
    icon: cnlr_icon,
    isPast: true,
  },
];

export const education: Experience[] = [
  {
    key: "ubb-edu",
    name: "UBB",
    role: "Bachelor's in Computer Science",
    description:
      "Focused on software engineering, algorithms, and distributed systems. Graduated with honors and completed multiple research projects in AI and machine learning.",
    period: "September 2020 - June 2024",
    website: "https://www.cs.ubbcluj.ro/",
    icon: ubb_icon,
    isPast: true,
  },
];

export const getOrganizations = (): Record<string, Experience> => {
  const orgs: Record<string, Experience> = {};
  workExperience.forEach((exp) => {
    orgs[exp.key] = exp;
  });
  education.forEach((edu) => {
    orgs[edu.key] = edu;
  });
  return orgs;
};
