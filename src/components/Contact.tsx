import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="section-title">
            Let's Work<br />
            <span className="text-muted-foreground">Together</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            I'm always open to discussing new opportunities, innovative projects, 
            or ways to help your business grow with AI and automation.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
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
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="mailto:vigneash2019@gmail.com?subject=Let's%20Work%20Together"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-xl font-semibold text-lg shadow-soft hover:shadow-hover hover:-translate-y-0.5 transition-all"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
