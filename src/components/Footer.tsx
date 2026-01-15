import { MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <a 
          href="https://wa.me/916383638254" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-full font-medium text-sm transition-all duration-300 hover:scale-105 mb-4"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Chat on WhatsApp</span>
        </a>
        
        <p className="text-sm text-muted-foreground">
          © {currentYear} Vigneash M. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/60 mt-2">
          System Engineer • Growth Hacker • AI Enthusiast
        </p>
      </div>
    </footer>
  );
};

export default Footer;
