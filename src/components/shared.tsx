import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { Menu, X, Instagram, ArrowRight } from "lucide-react";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero4 from "@/assets/hero-4.jpg";

// ─── Navbar ────────────────────────────────────────────────

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Booking", path: "/booking" },
  { label: "About", path: "/about" },
];

export const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex flex-col items-start">
          <span className="text-display text-xl md:text-2xl font-bold tracking-wider gradient-gold">
            JULIET
          </span>
          <span className="text-editorial text-[10px] md:text-xs tracking-[0.3em] text-muted-foreground uppercase">
            Makeup Galore💋
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${
                location.pathname === item.path ? "text-primary" : "text-foreground/70"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-foreground/70 hover-gold"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/30 animate-fade-in">
          <div className="px-6 py-6 flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`nav-link text-base ${
                  location.pathname === item.path ? "text-primary" : "text-foreground/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// ─── HeroSlideshow ─────────────────────────────────────────

const slides = [hero1, hero2, hero4];

export const HeroSlideshow = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt={`Juliet Makeup portfolio ${i + 1}`}
            className={`w-full h-full object-cover ${
              i === current ? "animate-kenburns" : ""
            }`}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="absolute inset-0 bg-background/20" />

      <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 md:pb-32 px-6">
        <p className="text-editorial text-sm md:text-base tracking-[0.4em] uppercase text-primary/80 mb-4 animate-fade-in">
          Mixing Business With Pretty
        </p>
        <h1 className="vogue-heading text-5xl md:text-8xl lg:text-9xl text-foreground text-center animate-slide-up">
          JULIET
        </h1>
        <h2 className="text-editorial text-2xl md:text-4xl tracking-[0.15em] text-foreground/80 mt-2 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Makeup Galore
        </h2>

        <div className="flex gap-3 mt-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-[2px] transition-all duration-500 ${
                i === current ? "w-10 bg-primary" : "w-5 bg-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Footer ────────────────────────────────────────────────

export const Footer = () => {
  return (
    <footer className="border-t border-border/30 bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-display text-lg gradient-gold font-bold tracking-wider">JULIET</p>
            <p className="text-editorial text-xs tracking-[0.3em] text-muted-foreground">MAKEUP GALORE💋</p>
          </div>

          <div className="flex items-center gap-8">
            <Link to="/services" className="nav-link text-foreground/60">Services</Link>
            <Link to="/booking" className="nav-link text-foreground/60">Booking</Link>
            <Link to="/about" className="nav-link text-foreground/60">About</Link>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/JULIET_MAKEUP_GALORE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover-gold"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.tiktok.com/@JULIET_MAKEUP_GALORE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover-gold"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.16z"/>
              </svg>
            </a>
          </div>
        </div>
        <p className="text-center text-muted-foreground/50 text-xs mt-8">
          © {new Date().getFullYear()} Juliet Makeup Galore. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
