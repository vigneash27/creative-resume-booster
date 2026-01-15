import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past hero
      const heroHeight = window.innerHeight * 0.3;
      setIsVisible(window.scrollY > heroHeight);

      // Detect active section
      const sections = ["about", "building", "experience", "skills", "contact"];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "about", label: "About", icon: "👤" },
    { id: "building", label: "In Progress", isSpecial: true },
    { id: "experience", label: "Experience", icon: "💼" },
    { id: "skills", label: "Skills", icon: "⚡" },
    { id: "contact", label: "Contact", icon: "📬" },
  ];

  return (
    <nav
      className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-2 px-2 py-2 bg-card/90 backdrop-blur-xl border border-border rounded-full shadow-lg">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`group flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              item.isSpecial
                ? activeSection === item.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 text-primary hover:from-primary/20 hover:to-accent/20"
                : activeSection === item.id
                ? "bg-foreground text-background shadow-md"
                : "text-foreground hover:bg-muted"
            }`}
          >
            {item.isSpecial ? (
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
            ) : (
              <span className="text-base group-hover:scale-110 transition-transform">{item.icon}</span>
            )}
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center w-12 h-12 bg-card/90 backdrop-blur-xl border border-border rounded-full shadow-lg"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 text-foreground" />
          ) : (
            <Menu className="w-5 h-5 text-foreground" />
          )}
        </button>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-14 left-1/2 -translate-x-1/2 min-w-[200px] bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-lg p-2 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  item.isSpecial
                    ? activeSection === item.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-gradient-to-r from-primary/10 to-accent/10 text-primary"
                    : activeSection === item.id
                    ? "bg-foreground text-background"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {item.isSpecial ? (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                ) : (
                  <span className="text-base">{item.icon}</span>
                )}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
