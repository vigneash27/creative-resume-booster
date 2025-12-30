import animeAvatar from "@/assets/anime-avatar.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Name watermark */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none">
        <h2 className="text-[12vw] font-display font-bold text-foreground/[0.03] whitespace-nowrap tracking-tight">
          Vigneash M
        </h2>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo/Icon */}
        <div className="mb-6 animate-fade-up opacity-0 stagger-1">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-foreground text-background">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
        </div>

        {/* Greeting */}
        <p className="text-lg md:text-xl text-muted-foreground mb-2 animate-fade-up opacity-0 stagger-2">
          Hey, I'm Vigneash 👋
        </p>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-8 animate-fade-up opacity-0 stagger-2">
          System Engineer &<br />
          <span className="text-gradient">Growth Hacker</span>
        </h1>

        {/* Avatar */}
        <div className="relative inline-block mb-10 animate-fade-up opacity-0 stagger-3">
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-110" />
          <div className="relative animate-float">
            <img
              src={animeAvatar}
              alt="Vigneash - Anime Avatar"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-soft border-4 border-card"
            />
            {/* Status indicator */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-card px-3 py-1.5 rounded-full shadow-soft border border-border">
              <span className="relative flex h-2.5 w-2.5">
                <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-foreground">Available</span>
            </div>
          </div>
        </div>

        {/* Navigation Pills */}
        <nav className="flex flex-wrap justify-center gap-3 animate-fade-up opacity-0 stagger-4">
          <a href="#about" className="nav-pill">
            <span className="text-lg">👤</span>
            <span>About</span>
          </a>
          <a href="#experience" className="nav-pill">
            <span className="text-lg">💼</span>
            <span>Experience</span>
          </a>
          <a href="#skills" className="nav-pill">
            <span className="text-lg">⚡</span>
            <span>Skills</span>
          </a>
          <a href="#contact" className="nav-pill">
            <span className="text-lg">📬</span>
            <span>Contact</span>
          </a>
        </nav>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up opacity-0 stagger-5">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs font-medium">Scroll to explore</span>
          <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
