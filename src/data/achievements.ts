export interface Achievement {
  title: string;
  description: string;
  year: string;
}

export const achievements: Achievement[] = [
  {
    title: "Open Source Contributor",
    description:
      "Active contributor to popular open-source projects with over 1000+ stars combined.",
    year: "2023",
  },
  {
    title: "Hackathon Winner",
    description:
      "First place at National Tech Hackathon for innovative AI-powered solution.",
    year: "2022",
  },
  {
    title: "Published Article",
    description:
      "Technical article on distributed systems published in major tech publication.",
    year: "2021",
  },
];
