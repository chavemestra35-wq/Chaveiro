import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.jpg";
import { Phone, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5534991003597?text=Olá! Preciso de um chaveiro.";
const PHONE_NUMBER = "tel:+5534991003597";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-20">
        <img
          src={logo}
          alt="Chaveiro Chave Mestra"
          className="mx-auto h-20 md:h-28 mb-8 animate-fade-up"
        />
        
        <h1
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight mb-4 animate-fade-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          Chaveiro <span className="text-gradient">Chave Mestra</span>
        </h1>

        <p
          className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          Atendimento rápido, seguro e profissional.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-heading text-lg md:text-xl font-bold uppercase px-8 py-4 rounded-lg glow-primary hover:scale-105 transition-transform duration-200"
          >
            <MessageCircle className="w-6 h-6" />
            Chamar no WhatsApp
          </a>

          <a
            href={PHONE_NUMBER}
            className="inline-flex items-center gap-3 border-2 border-primary text-primary font-heading text-lg md:text-xl font-bold uppercase px-8 py-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
          >
            <Phone className="w-6 h-6" />
            (34) 99100-3597
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
