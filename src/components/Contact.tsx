import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="section-title">
            Let's Work,<br />
            <span className="text-muted-foreground">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-xl mx-auto italic">
            "Growth isn't luck. It's engineered."
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="mailto:vigneash2019@gmail.com"
            className="group bg-card rounded-2xl p-6 shadow-soft border border-border card-hover text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Email</h3>
            <p className="text-sm text-muted-foreground">vigneash2019@gmail.com</p>
            <div className="mt-3 inline-flex items-center gap-1 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Send email <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/vigneash-m"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card rounded-2xl p-6 shadow-soft border border-border card-hover text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#0077B5]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0077B5]/20 transition-colors">
              <Linkedin className="w-6 h-6 text-[#0077B5]" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
            <p className="text-sm text-muted-foreground">@vigneash-m</p>
            <div className="mt-3 inline-flex items-center gap-1 text-sm text-[#0077B5] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Connect <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>

          <a
            href="https://vigneash27.github.io/resumetechanical/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card rounded-2xl p-6 shadow-soft border border-border card-hover text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-foreground/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-foreground/20 transition-colors">
              <Github className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Portfolio</h3>
            <p className="text-sm text-muted-foreground">View Projects</p>
            <div className="mt-3 inline-flex items-center gap-1 text-sm text-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Visit <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="mailto:vigneash2019@gmail.com?subject=Let's%20Work%20Together"
            className="group relative inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium text-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-foreground/20 hover:scale-105"
          >
            <span className="relative z-10">Start a Conversation</span>
            <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
