import { Navbar } from "@/components/shared";
import aboutOwner from "@/assets/about-owner.webp";

const About = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navbar />

      {/* Full-screen about section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={aboutOwner}
            alt="Juliet — Makeup Artist"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/40" />
        </div>

        {/* Vogue-style typography overlay */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24">
          <div className="max-w-lg">
            {/* Large display text */}
            <p className="text-editorial text-sm tracking-[0.5em] uppercase text-primary/80 mb-6 animate-fade-in">
              The Artist Behind The Art
            </p>

            <h1
              className="vogue-heading text-6xl md:text-8xl lg:text-9xl text-foreground mb-8 animate-slide-up"
              style={{ lineHeight: "0.9" }}
            >
              JULIET
            </h1>

            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <p className="text-editorial text-xl md:text-2xl text-foreground/80 italic mb-6">
                "Mixing Business With Pretty"
              </p>
              <div className="w-12 h-px bg-primary mb-6" />
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-4">
                A passionate makeup artist transforming faces and redefining beauty standards — one brushstroke at a time. Specializing in full glam, lash artistry, and creative SFX looks.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                Every face tells a story. Juliet's mission is to bring out the confidence, power, and beauty that already lives within you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
