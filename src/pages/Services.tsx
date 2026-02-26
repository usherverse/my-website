import { Navbar, Footer } from "@/components/shared";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import serviceLash from "@/assets/service-lash.jpg";
import serviceSfx from "@/assets/service-sfx.jpg";
import serviceBrows from "@/assets/service-brows.jpg";
import serviceGlam from "@/assets/service-glam.jpg";
import servicePiercing from "@/assets/service-piercing.jpg";
import serviceNails from "@/assets/service-nails.jpg";

const services = [
  {
    title: "Full Face Glam",
    description: "Complete makeup artistry for any occasion — bridal, editorial, red carpet, or a night out. Flawless from primer to setting spray.",
    image: serviceGlam,
    slug: "full-face-glam",
  },
  {
    title: "Lash Extensions",
    description: "Custom lash extensions tailored to your eye shape. Classic, volume, or mega volume — wake up gorgeous every day.",
    image: serviceLash,
    slug: "lash-extensions",
  },
  {
    title: "All Body Piercings",
    description: "Professional body piercings performed with precision and care. From classic ear piercings to bold body statements.",
    image: servicePiercing,
    slug: "body-piercings",
  },
  {
    title: "Eyebrow Shaping & Tinting",
    description: "Perfectly sculpted brows that frame your face. Expert shaping combined with professional tinting for lasting definition.",
    image: serviceBrows,
    slug: "eyebrow-shaping",
  },
  {
    title: "Special Effects (SFX) Makeup",
    description: "Transform into anything imaginable. Film-quality SFX makeup for productions, Halloween, cosplay, and creative projects.",
    image: serviceSfx,
    slug: "sfx-makeup",
  },
  {
title: "Nail Art & Luxury Manicures",
description: "Express your style with custom nail art. From classic gels to intricate 3D designs, we provide flawless application and long-lasting wear for hands and feet.",
image: serviceNails,
slug: "nail-art",
},
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-editorial text-sm tracking-[0.4em] uppercase text-primary/70 mb-4">
            Our Expertise
          </p>
          <h1 className="text-display text-4xl md:text-6xl font-light text-foreground">
            Services
          </h1>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.slug}
              className={`glass-card group rounded-lg overflow-hidden animate-fade-in ${
                i === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-display text-xl md:text-2xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-md">
                    {service.description}
                  </p>
                  <Link
                    to={`/booking?service=${service.slug}`}
                    className="inline-flex items-center gap-2 text-primary text-sm tracking-[0.15em] uppercase font-body transition-all duration-300 hover:gap-3"
                  >
                    Book Now <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
