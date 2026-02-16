import { Zap, Settings, UserCheck, ShieldCheck, MapPin, Award } from "lucide-react";

const items = [
  { icon: Zap, title: "Atendimento Rápido", desc: "Chegamos em minutos na sua localização." },
  { icon: Settings, title: "Equipamentos Modernos", desc: "Ferramentas de última geração." },
  { icon: UserCheck, title: "Profissional Especializado", desc: "Anos de experiência no mercado." },
  { icon: ShieldCheck, title: "Serviço Seguro", desc: "Garantia total no trabalho realizado." },
  { icon: MapPin, title: "Agilidade no Local", desc: "Atendimento onde você estiver." },
  { icon: Award, title: "Confiança e Qualidade", desc: "Clientes satisfeitos é nossa prioridade." },
];

const Differentials = () => {
  return (
    <section className="py-20 bg-card" id="diferenciais">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase text-center mb-4">
          Por que escolher a <span className="text-gradient">Chave Mestra</span>?
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Compromisso com excelência em cada atendimento.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="flex items-start gap-4 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold uppercase mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
