import { Navbar, HeroSlideshow, Footer } from "@/components/shared";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSlideshow />

      <section className="py-20 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-editorial text-sm tracking-[0.4em] uppercase text-primary/70 mb-6">
            Beauty Redefined
          </p>
          <h2 className="text-display text-3xl md:text-5xl font-light text-foreground mb-8 leading-tight">
            Where Art Meets <span className="italic gradient-gold">Elegance</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
            From full face glam to special effects artistry — every look is a masterpiece crafted with precision, passion, and a touch of magic.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/services"
              className="group flex items-center gap-2 px-8 py-3 gradient-gold-bg text-primary-foreground font-body text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:opacity-90"
            >
              Explore Services
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/booking"
              className="flex items-center gap-2 px-8 py-3 border border-primary/30 text-primary font-body text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:bg-primary/5"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
