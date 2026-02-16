import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5534991003597?text=Olá! Preciso de um chaveiro.";

const WhatsAppFloat = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 animate-pulse-glow"
    >
      <MessageCircle className="w-8 h-8 text-foreground" />
    </a>
  );
};

export default WhatsAppFloat;
