import { MapPin, Mail, Linkedin, Globe } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="section-title">
            Building Digital Solutions<br />
            <span className="text-muted-foreground">with AI & Innovation</span>
          </h2>
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-10 shadow-soft border border-border card-hover">
          <p className="text-2xl text-foreground leading-relaxed mb-6 font-medium">
            I'm Vigneash, a <span className="text-primary">growth hacker</span> building real-world solutions with AI.
          </p>
          
          <p className="text-lg text-foreground leading-relaxed mb-6">
            At <span className="font-semibold text-primary">TCS</span>, I work as a Solution Engineer, designing optimized systems that power high-performance applications.
          </p>
          
          <p className="text-lg text-foreground leading-relaxed mb-6">
            I've helped <span className="font-semibold text-primary">49+ businesses</span> scale their digital presence and automate workflows using AI-driven solutions.
          </p>
          
          <p className="text-muted-foreground leading-relaxed mb-8">
            With a background in Mechanical Engineering (SRM Group) and experience as a technical trainer, I combine engineering thinking, communication, and execution to build solutions that scale.
          </p>

          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium text-foreground">Chennai, Tamil Nadu, India</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium text-foreground">vigneash2019@gmail.com</p>
              </div>
            </div>

            <a 
              href="https://www.linkedin.com/in/vigneash-m" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="font-medium text-foreground">vigneash-m</p>
              </div>
            </a>

            <a 
              href="https://vigneash27.github.io/resumetechanical/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Website</p>
                <p className="font-medium text-foreground">Personal Portfolio</p>
              </div>
            </a>
          </div>
        </div>

        {/* Languages */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <span className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground">
            🇬🇧 English (Professional)
          </span>
          <span className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground">
            🇮🇳 Tamil (Native)
          </span>
          <span className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground">
            🇮🇳 Kannada (Working)
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
