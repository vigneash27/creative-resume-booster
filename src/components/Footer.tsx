const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-foreground text-background flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="font-display font-bold text-foreground">Vigneash M</span>
        </div>
        
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
