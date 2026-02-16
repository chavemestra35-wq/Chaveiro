import { Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpg";

const WHATSAPP_URL = "https://wa.me/5534991003597?text=Olá! Preciso de um chaveiro.";
const PHONE_NUMBER = "tel:+5534991003597";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <img src={logo} alt="Chaveiro Chave Mestra" className="mx-auto h-14 mb-4" />
        <p className="text-muted-foreground mb-6">
          Atendimento rápido e especializado. Sua segurança é nossa prioridade.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
          <a
            href={PHONE_NUMBER}
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            <Phone className="w-5 h-5" />
            (34) 99100-3597
          </a>
        </div>

        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Chaveiro Chave Mestra. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
