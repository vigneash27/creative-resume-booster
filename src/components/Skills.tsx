import { Code, Brain, Rocket, Award } from "lucide-react";

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

const certifications = [
  "Machine Learning with R Studio",
  "Python Machine Learning",
  "Fundamentals of Digital Marketing",
  "Advanced Python Course",
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Expertise
          </span>
          <h2 className="section-title">
            Skills &<br />
            <span className="text-muted-foreground">Certifications</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-soft border border-border card-hover"
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
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Certifications</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border"
              >
                <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Publication */}
        <div className="mt-8 bg-card rounded-2xl p-6 shadow-soft border border-border">
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
        </div>
      </div>
    </section>
  );
};

export default Skills;
