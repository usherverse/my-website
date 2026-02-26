import { Navbar, Footer } from "@/components/shared";
import { useSearchParams } from "react-router-dom";
import { Instagram, Mail, MessageCircle } from "lucide-react";

const serviceLabels: Record<string, string> = {
  "full-face-glam": "Full Face Glam",
  "lash-extensions": "Lash Extensions",
  "body-piercings": "Body Piercings",
  "eyebrow-shaping": "Eyebrow Shaping & Tinting",
  "sfx-makeup": "Special Effects (SFX) Makeup",
};

const whatsappNumber = "254798153264";

const Booking = () => {
  const [searchParams] = useSearchParams();
  const selectedService = searchParams.get("service") || "";
  const serviceLabel = serviceLabels[selectedService] || "";

  const whatsappMessage = serviceLabel
    ? `Hi Juliet! I'd like to book a session for ${serviceLabel}. Could you share availability and pricing?`
    : "Hi Juliet! I'd like to make a booking. Could you share availability and pricing?";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-editorial text-sm tracking-[0.4em] uppercase text-primary/70 mb-4">
            Let's Create Magic
          </p>
          <h1 className="text-display text-4xl md:text-6xl font-light text-foreground mb-6">
            Book Your Session
          </h1>
          {serviceLabel && (
            <p className="text-primary text-sm tracking-[0.2em] uppercase font-body">
              Selected: {serviceLabel}
            </p>
          )}
        </div>
      </section>

      <section className="px-6 pb-12">
        <div className="max-w-xl mx-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-card rounded-lg p-8 flex items-center gap-6 transition-all duration-300 hover:border-primary/30 block"
          >
            <div className="w-14 h-14 rounded-full gradient-gold-bg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
              <MessageCircle size={24} className="text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-display text-lg font-semibold text-foreground mb-1">
                Book via WhatsApp
              </h3>
              <p className="text-muted-foreground text-sm">
                Fastest way to reach us — tap to start chatting
              </p>
              <p className="text-primary text-xs mt-1 tracking-wider">0798 153 264</p>
            </div>
          </a>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-xl mx-auto">
          <p className="text-editorial text-sm tracking-[0.3em] uppercase text-muted-foreground text-center mb-8">
            Other ways to connect
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href="mailto:julietmakeupgalore@gmail.com"
              className="group glass-card rounded-lg p-6 text-center transition-all duration-300 hover:border-primary/30"
            >
              <Mail size={22} className="mx-auto mb-3 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
              <p className="text-foreground text-sm font-medium">Email</p>
              <p className="text-muted-foreground text-xs mt-1">Send inquiry</p>
            </a>

            <a
              href="https://www.instagram.com/julietmakeupgalore"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card rounded-lg p-6 text-center transition-all duration-300 hover:border-primary/30"
            >
              <Instagram size={22} className="mx-auto mb-3 text-muted-foreground transition-colors duration-300 group-hover:text-pink" />
              <p className="text-foreground text-sm font-medium">Instagram</p>
              <p className="text-muted-foreground text-xs mt-1">@JULIET_MAKEUP GALORE</p>
            </a>

            <a
              href="https://www.tiktok.com/@juliet_makeupgalore"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card rounded-lg p-6 text-center transition-all duration-300 hover:border-primary/30"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="mx-auto mb-3 text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.16z"/>
              </svg>
              <p className="text-foreground text-sm font-medium">TikTok</p>
              <p className="text-muted-foreground text-xs mt-1">@JULIET_MAKEUP GALORE</p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;
