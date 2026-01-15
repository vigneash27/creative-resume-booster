import { Linkedin, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-background overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="section-title">
            Building Digital Solutions<br />
            <span className="text-muted-foreground">with AI & Innovation</span>
          </h2>
        </motion.div>

        <motion.div 
          className="bg-card rounded-2xl p-8 md:p-10 shadow-soft border border-border card-hover"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
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

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://www.linkedin.com/in/vigneash-m/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-secondary/50 rounded-full hover:bg-secondary transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">LinkedIn</span>
            </a>

            <a 
              href="https://www.instagram.com/vigneashm/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-secondary/50 rounded-full hover:bg-secondary transition-all duration-300 hover:scale-105"
            >
              <Instagram className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">Instagram</span>
            </a>

            <a 
              href="https://www.youtube.com/@VigneashM" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-secondary/50 rounded-full hover:bg-secondary transition-all duration-300 hover:scale-105"
            >
              <Youtube className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">YouTube</span>
            </a>
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div 
          className="mt-8 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground">
            🇬🇧 English (Professional)
          </span>
          <span className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground">
            🇮🇳 Tamil (Native)
          </span>
          <span className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground">
            🇮🇳 Kannada (Working)
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
