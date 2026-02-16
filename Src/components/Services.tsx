import { DoorOpen, Key, Car, AlertTriangle, Home, Wrench } from "lucide-react";

const services = [
  { icon: DoorOpen, title: "Abertura de Portas", desc: "Residencial e comercial, sem danificar a fechadura." },
  { icon: Key, title: "Cópia de Chaves", desc: "Chaves comuns e especiais com precisão." },
  { icon: Car, title: "Chaves Codificadas", desc: "Chaves automotivas com programação eletrônica." },
  { icon: AlertTriangle, title: "Atendimento Emergencial", desc: "Disponível para urgências, rápido no local." },
  { icon: Home, title: "Serviços Residenciais", desc: "Troca de fechaduras, instalação e manutenção." },
  { icon: Wrench, title: "Serviços Automotivos", desc: "Abertura, cópia e codificação veicular." },
];

const Services = () => {
  return (
    <section className="py-20 bg-background" id="servicos">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase text-center mb-4">
          Nossos <span className="text-gradient">Serviços</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Soluções completas para residências e veículos.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:glow-primary-sm transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
