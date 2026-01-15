import { Building2, GraduationCap, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "System Engineer",
    company: "Tata Consultancy Services",
    period: "June 2023 - Present",
    location: "Chennai, Tamil Nadu, India",
    description: [
      "Spearhead backend development projects, handling logs, monitoring business transactions, and enhancing API and server connectivity",
      "Collaborate with cross-functional teams to design, develop, and maintain high-performance software applications",
      "Implement efficient logging mechanisms for real-time error detection and troubleshooting",
      "Develop and maintain RESTful APIs for seamless communication between software components",
    ],
    current: true,
  },
  {
    title: "Technical Trainer",
    company: "Six Phrase",
    period: "May 2023 - July 2023",
    location: "Chennai, Tamil Nadu, India",
    description: [
      "Delivered engaging and insightful training to students of all levels",
      "Specialized in programming and effective communication training",
    ],
    current: false,
  },
  {
    title: "Technical Trainer",
    company: "TALENTELY Innovative Solutions",
    period: "February 2023 - May 2023",
    location: "Chennai, Tamil Nadu, India",
    description: [
      "Worked with diverse range of students from beginners to advanced learners",
      "Provided personalized one-on-one and group training sessions",
    ],
    current: false,
  },
  {
    title: "Growth Hacker & Consultant",
    company: "Genik Research Institute",
    period: "October 2021 - November 2022",
    location: "Chennai, Tamil Nadu, India",
    description: [
      "Uncovered new clients and business opportunities",
      "Developed marketing content and sales scripts with strategic messaging",
      "Acquired 100+ new customers within the first three months",
    ],
    current: false,
  },
  {
    title: "Front End Associate",
    company: "Genik Research Institute",
    period: "April 2021 - August 2021",
    location: "Chennai, Tamil Nadu, India",
    description: [
      "Implemented web design and development principles to build stable software",
      "Built responsive and usable websites using HTML, CSS, and JavaScript",
    ],
    current: false,
  },
];

const education = {
  degree: "B.E, Mechanical Engineering",
  school: "Easwari Engineering College (SRM Group)",
  period: "August 2019 - June 2023",
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-secondary/30 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Career Journey
          </span>
          <h2 className="section-title">
            Work Experience &<br />
            <span className="text-muted-foreground">Education</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-border" />

          {/* Experience items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className="relative pl-12 md:pl-20"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-2 md:left-6 w-4 h-4 rounded-full border-2 ${
                  exp.current 
                    ? 'bg-primary border-primary' 
                    : 'bg-card border-border'
                }`} />

                <div className="bg-card rounded-2xl p-6 shadow-soft border border-border card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-primary">
                        <Building2 className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    {exp.current && (
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                    <span className="text-border">•</span>
                    <span>{exp.location}</span>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            {/* Education */}
            <motion.div 
              className="relative pl-12 md:pl-20"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute left-2 md:left-6 w-4 h-4 rounded-full bg-accent border-2 border-accent" />

              <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-6 shadow-soft border border-accent/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{education.degree}</h3>
                    <p className="text-primary font-medium">{education.school}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{education.period}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
