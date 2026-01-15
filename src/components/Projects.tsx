import { Card, CardContent } from "@/components/ui/card";
import { Bot, FileText, Users, Youtube, Instagram, Linkedin } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Bot,
      title: "Content Engagement Agent",
      status: "In progress",
      description: "Generates and optimizes content for audience growth in marketing personalized branding strategies.",
    },
    {
      icon: FileText,
      title: "Legal Document Reviewer",
      status: "In progress",
      description: "Analyzes contracts for risks in legal/compliance workflows. Addressing common people suffering with litigation on fake documents.",
    },
  ];

  const socialPlatforms = [
    { icon: Youtube, name: "YouTube", color: "hover:text-red-500" },
    { icon: Instagram, name: "Instagram", color: "hover:text-pink-500" },
    { icon: Linkedin, name: "LinkedIn", color: "hover:text-blue-500" },
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What I'm <span className="text-primary">Building</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Current projects and initiatives I'm working on
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <project.icon size={28} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary animate-pulse">
                        {project.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Personal Brand Section */}
        <Card className="card-hover border-border bg-card">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20">
                <Users size={40} className="text-primary" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
                  <h3 className="text-2xl font-semibold text-foreground">
                    Building My Personal Brand
                  </h3>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary animate-pulse w-fit mx-auto md:mx-0">
                    In progress to 10k followers
                  </span>
                </div>
                <p className="text-muted-foreground mb-6">
                  Sharing insights on AI, growth hacking, and building solutions that scale.
                </p>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  {socialPlatforms.map((platform, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`p-3 rounded-xl bg-muted/50 text-muted-foreground transition-all duration-300 ${platform.color} hover:scale-110`}
                      aria-label={platform.name}
                    >
                      <platform.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
