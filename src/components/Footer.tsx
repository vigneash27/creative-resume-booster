const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
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
