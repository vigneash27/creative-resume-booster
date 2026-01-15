import { Card, CardContent } from "@/components/ui/card";
import { Bot, Shield, TrendingUp, Youtube, Instagram, Linkedin } from "lucide-react";

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
    { icon: Youtube, name: "YouTube", href: "#" },
    { icon: Instagram, name: "Instagram", href: "#" },
    { icon: Linkedin, name: "LinkedIn", href: "#" },
  ];

  return (
    <section id="building" className="py-24 px-4 md:px-8 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Currently Building
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            What I'm <span className="text-primary">Building</span>
          </h2>
        </div>

        {/* Projects */}
        <div className="space-y-6 mb-10">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-border bg-card/50 backdrop-blur-sm card-hover group">
              <CardContent className="p-0">
                <div className="flex items-center gap-6 p-6 md:p-8">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.gradient} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon size={32} className={project.iconColor} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <span className="hidden md:inline-flex px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 shrink-0">
                    In Progress
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Personal Brand */}
        <Card className="overflow-hidden border-border bg-gradient-to-br from-card to-muted/50 card-hover">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 shrink-0">
                <TrendingUp size={32} className="text-primary" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                    Personal Brand
                  </h3>
                  <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                    Building to 10K+
                  </span>
                </div>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Documenting growth, AI use-cases, and real-world problem solving.
                </p>
              </div>

              <div className="flex items-center gap-3 md:ml-auto">
                {socialPlatforms.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.href}
                    className="p-3 rounded-xl bg-muted/80 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                    aria-label={platform.name}
                  >
                    <platform.icon size={22} />
                  </a>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
