import { Code, Brain, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

const AnimatedCounter = ({ end, suffix = "+", colorClass = "text-primary" }: { end: number; suffix?: string; colorClass?: string }) => {
  const { count, ref } = useCountUp({ end, duration: 2000 });
  return (
    <span ref={ref} className={`text-3xl font-bold ${colorClass} mb-2`}>
      {count}{suffix}
    </span>
  );
};

const skillCategories = [
  {
    title: "Core Skills",
    icon: Code,
    skills: ["Backend Development", "API Design", "RESTful APIs", "Server Optimization"],
    color: "primary",
  },
  {
    title: "AI & Growth",
    icon: Brain,
    skills: ["Artificial Intelligence", "Growth Hacking", "Workflow Automation", "Digital Marketing"],
    color: "accent",
  },
  {
    title: "Methodologies",
    icon: Rocket,
    skills: ["Agile Methodologies", "Cross-functional Collaboration", "System Monitoring", "Troubleshooting"],
    color: "primary",
  },
];


const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-background overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Expertise
          </span>
          <h2 className="section-title">
            Skills &<br />
            <span className="text-muted-foreground">Publications</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-soft border border-border card-hover"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${
                category.color === 'accent' ? 'bg-accent/10' : 'bg-primary/10'
              }`}>
                <category.icon className={`w-6 h-6 ${
                  category.color === 'accent' ? 'text-accent' : 'text-primary'
                }`} />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Things I've Built */}
        <motion.div 
          className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Rocket className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Things I've Built</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center p-6 bg-card rounded-xl border border-border text-center">
              <AnimatedCounter end={20} />
              <span className="font-medium text-foreground">Landing Pages</span>
              <span className="text-sm text-muted-foreground mt-1">High-converting designs</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-xl border border-border text-center">
              <AnimatedCounter end={9} colorClass="text-accent" />
              <span className="font-medium text-foreground">AI Automation Workflows</span>
              <span className="text-sm text-muted-foreground mt-1">Scalable systems</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-xl border border-border text-center">
              <AnimatedCounter end={20} />
              <span className="font-medium text-foreground">Content Edited</span>
              <span className="text-sm text-muted-foreground mt-1">Marketing & Sales focused</span>
            </div>
          </div>
        </motion.div>

        {/* Publication */}
        <motion.div 
          className="mt-8 bg-card rounded-2xl p-6 shadow-soft border border-border"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <span className="text-xs font-medium text-accent uppercase tracking-wider">Research Publication</span>
              <h4 className="text-lg font-semibold text-foreground mt-1">
                Production Rate of Coral Reefs using Ensemble Learning Methodologies
              </h4>
              <p className="text-sm text-muted-foreground mt-1">Published Research Paper</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
