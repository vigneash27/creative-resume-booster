import { Card, CardContent } from "@/components/ui/card";
import { Bot, Shield, TrendingUp, Youtube, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      icon: Bot,
      title: "AI Content Engagement Agent",
      description: "Powering smarter content, stronger personal brands, and faster audience growth.",
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-500",
    },
    {
      icon: Shield,
      title: "AI Legal Document Reviewer",
      description: "Helping people detect risks in contracts and protect themselves from legal fraud.",
      gradient: "from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-500",
    },
  ];

  const socialPlatforms = [
    { icon: Youtube, name: "YouTube", href: "https://www.youtube.com/@VigneashM" },
    { icon: Instagram, name: "Instagram", href: "https://www.instagram.com/vigneashm" },
    { icon: Linkedin, name: "LinkedIn", href: "https://www.linkedin.com/in/vigneash-m" },
  ];

  return (
    <section id="building" className="py-24 px-4 md:px-8 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Currently Building
          </span>
          <h2 className="section-title">
            What I'm <span className="text-primary">Building</span>
          </h2>
        </motion.div>

        {/* Projects */}
        <div className="space-y-4 mb-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <Card className="overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 p-4 md:p-5">
                    <motion.div 
                      className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} shrink-0`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <project.icon size={24} className={project.iconColor} />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base md:text-lg font-semibold text-foreground mb-0.5">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <span className="hidden md:inline-flex px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 shrink-0">
                      In Progress
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Personal Brand */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -4 }}
          className="group"
        >
          <Card className="overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-4 md:p-5">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <motion.div 
                  className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 shrink-0"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <TrendingUp size={24} className="text-primary" />
                </motion.div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-base md:text-lg font-semibold text-foreground">
                      Personal Brand
                    </h3>
                    <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                      Building to 10K+
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Documenting growth, AI use-cases, and real-world problem solving.
                  </p>
                </div>

                <div className="flex items-center gap-2 md:ml-auto">
                  {socialPlatforms.map((platform, index) => (
                    <motion.a
                      key={index}
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-muted/60 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      aria-label={platform.name}
                      whileHover={{ scale: 1.15, y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <platform.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
