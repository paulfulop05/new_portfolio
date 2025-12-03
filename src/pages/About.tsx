import Navigation from "@/components/Navigation";
import {
  Code2,
  Database,
  Palette,
  Zap,
  Lightbulb,
  Wrench,
  Trophy,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import profileImage from "../assets/avatar.jpg";
import profileImageGlasses from "../assets/avatar_with_glasses.jpg";
import PixelTransition from "@/components/ui/pixel_transition";
import CardSwap, { Card } from "@/components/ui/card-swap";
import { motion } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const achievementsRef = useRef<HTMLDivElement>(null);

  const skills = [
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
      icon: Code2,
    },
    {
      category: "Frameworks",
      items: ["React", "Next.js", "Vue.js", "Node.js", "Express"],
      icon: Zap,
    },
    {
      category: "Concepts",
      items: ["REST APIs", "GraphQL", "Microservices", "CI/CD", "Agile"],
      icon: Lightbulb,
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "VS Code", "Figma", "Postman"],
      icon: Wrench,
    },
  ];

  const achievements = [
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

  const cardData = [
    {
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces that users love to interact with.",
      icon: Palette,
    },
    {
      title: "Database Design",
      description: "Architecting scalable database solutions for high-performance applications.",
      icon: Database,
    },
    {
      title: "Performance",
      description: "Optimizing applications for speed, efficiency, and better user experience.",
      icon: Zap,
    },
  ];

  const scrollAchievements = (direction: "left" | "right") => {
    if (achievementsRef.current) {
      const scrollAmount = 320;
      achievementsRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-12">
              About <span className="text-primary">Me</span>
            </h1>

            <div className="grid md:grid-cols-[1fr,300px] gap-12 mb-16">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I'm a passionate developer with over 5 years of experience
                  building web applications. I love working with modern
                  technologies and creating elegant solutions to complex
                  problems.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you can find me contributing to
                  open-source projects, writing technical blog posts, or
                  exploring new frameworks and tools. I believe in continuous
                  learning and sharing knowledge with the community.
                </p>
              </div>

              <PixelTransition
                firstContent={
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                }
                secondContent={
                  <img
                    src={profileImageGlasses}
                    alt="Profile with glasses"
                    className="w-full h-full object-cover"
                  />
                }
                gridSize={21}
                pixelColor="hsl(var(--background))"
                once={false}
                animationStepDuration={0.4}
                aspectRatio="100%"
                className="w-full max-w-[300px] rounded-xl border-2 border-primary/30 shadow-lg shadow-primary/10 bg-background"
              />
            </div>

            {/* What I Do Section */}
            <section className="mb-32">
              <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                <Lightbulb className="w-8 h-8 text-primary" />
                What I Do
              </h2>

              <div className="relative h-[380px] md:h-[350px] flex items-center justify-center">
                <CardSwap
                  width={380}
                  height={220}
                  cardDistance={50}
                  verticalDistance={45}
                  delay={4000}
                  pauseOnHover={true}
                  skewAmount={4}
                  easing="elastic"
                >
                  {cardData.map((card, index) => {
                    const Icon = card.icon;
                    return (
                      <Card key={index}>
                        <div className="h-full w-full rounded-xl bg-secondary border border-border overflow-hidden">
                          <div className="p-6 h-full flex flex-col">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-foreground">{card.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {card.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </CardSwap>
              </div>
            </section>

            {/* Skills Section */}
            <section className="mb-24">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-10 flex items-center gap-3"
              >
                <Wrench className="w-8 h-8 text-primary" />
                Skills & Technologies
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-4">
                {skills.map((skillGroup, index) => {
                  const Icon = skillGroup.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-5 rounded-xl bg-secondary border border-border hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <h3 className="text-base font-bold text-primary">
                          {skillGroup.category}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-md text-xs font-medium border border-border bg-background text-muted-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </section>

            {/* Achievements Section */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold flex items-center gap-3"
                >
                  <Trophy className="w-8 h-8 text-primary" />
                  Achievements
                </motion.h2>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => scrollAchievements("left")}
                    className="p-2 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-200"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => scrollAchievements("right")}
                    className="p-2 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-200"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div 
                ref={achievementsRef}
                className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin snap-x snap-mandatory"
                style={{ scrollbarWidth: "thin" }}
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="min-w-[280px] max-w-[280px] snap-start"
                  >
                    <div className="h-full p-5 rounded-xl bg-secondary border border-border hover:border-primary/30 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-xs text-muted-foreground font-medium">
                          {achievement.year}
                        </span>
                      </div>
                      <h3 className="text-base font-bold mb-2 text-foreground">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default About;
