import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5534991003597?text=Olá! Preciso de um chaveiro urgente!";
const PHONE_NUMBER = "tel:+5534991003597";

const UrgencyCTA = () => {
  return (
    <section className="py-16 bg-primary" id="urgencia">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase text-primary-foreground mb-4">
          🚨 Precisando de um chaveiro agora?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg mx-auto">
          Não espere. Fale com a gente e resolva seu problema em minutos.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary-foreground text-primary font-heading text-lg md:text-xl font-bold uppercase px-8 py-4 rounded-lg hover:scale-105 transition-transform duration-200 shadow-lg"
          >
            <MessageCircle className="w-6 h-6" />
            Falar no WhatsApp Agora
          </a>

          <a
            href={PHONE_NUMBER}
            className="inline-flex items-center gap-3 border-2 border-primary-foreground text-primary-foreground font-heading text-lg md:text-xl font-bold uppercase px-8 py-4 rounded-lg hover:bg-primary-foreground hover:text-primary transition-colors duration-200"
          >
            <Phone className="w-6 h-6" />
            (34) 99100-3597
          </a>
        </div>
      </div>
    </section>
  );
};

export default UrgencyCTA;
