import { useCountUp } from "@/hooks/use-count-up";
import { ScriptText, SlideTitle, Wordmark } from "./shared";

/* ---------------- SLIDE 12 — CONHEÇA O SEU TIME ---------------- */
const TEAM: [string, string, number][] = [
  ["📊", "Analista de conteúdo", 2235],
  ["🎨", "Designer", 1275],
  ["📈", "Analista de Tráfego Pago", 2500],
  ["🧠", "Estrategista", 3275],
  ["💻", "Web designer", 2400],
  ["🤝", "Suporte/CS", 2485],
  ["✍️", "Copywriter", 2100],
  ["🚀", "Analista de Growth", 5000],
  ["💼", "Analista comercial", 2196],
];

const fmt = (n: number) =>
  n.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export function Slide12({ active }: { active: boolean }) {
  const total = useCountUp(23466, active, 1800);
  return (
    <div className="flex h-full flex-col px-16 pt-14">
      <ScriptText className="script-in text-6xl">Conheça o seu Time</ScriptText>
      <p className="stagger-item mt-1 font-[Oswald] text-xl uppercase tracking-[0.3em] text-muted-foreground" style={{ animationDelay: "150ms" }}>
        Equipe de Especialistas
      </p>
      <div className="mt-6 grid flex-1 grid-cols-3 gap-4">
        {TEAM.map(([icon, role, value], i) => (
          <div
            key={role}
            className="stagger-item card-hover flex items-center gap-4 rounded-xl border border-line bg-surface p-4"
            style={{ animationDelay: `${200 + i * 80}ms` }}
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lime/15 text-2xl">
              {icon}
            </span>
            <div>
              <p className="font-semibold leading-tight">{role}</p>
              <p className="font-[Oswald] text-lg font-bold text-lime">R$ {fmt(value)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="stagger-item mb-4 mt-5 rounded-xl border border-lime/40 bg-lime/10 px-8 py-4 text-center" style={{ animationDelay: "950ms" }}>
        <span className="font-[Oswald] text-3xl font-bold text-lime">R$ {fmt(total)}</span>
        <span className="ml-3 text-lg text-foreground/85">
          — custo para internalizar uma equipe deste porte
        </span>
      </div>
    </div>
  );
}

/* ---------------- SLIDE 13 — MÉTRICAS ---------------- */
const FUNNEL = [
  { label: "Leads Captados", value: 30, width: 100 },
  { label: "Visitas Agendadas", value: 10, width: 70 },
  { label: "Orçamentos gerados", value: 5, width: 45 },
  { label: "Venda concretizada", value: 1, width: 24 },
];

function FunnelRow({
  value,
  label,
  width,
  active,
  delay,
}: {
  value: number;
  label: string;
  width: number;
  active: boolean;
  delay: number;
}) {
  const n = useCountUp(value, active, 1200);
  return (
    <div className="flex items-center gap-6">
      <div
        className={active ? "funnel-segment" : "opacity-0"}
        style={{
          width: `${width}%`,
          animationDelay: `${delay}ms`,
        }}
      >
        <div className="flex h-16 items-center justify-between rounded-md bg-gradient-to-r from-lime to-[#9CCB1F] px-6">
          <span className="font-[Oswald] text-2xl font-bold text-lime-foreground">{label}</span>
        </div>
      </div>
      <p className="font-[Oswald] text-5xl font-bold text-lime">
        {active ? n : 0}
      </p>
    </div>
  );
}

export function Slide13({ active }: { active: boolean }) {
  return (
    <div className="flex h-full flex-col px-16 pt-16">
      <SlideTitle className="text-center">
        Métricas <span className="text-lime">— Método FOCO</span>
      </SlideTitle>
      <div className="stagger-item mx-auto mt-5 rounded-full border border-line bg-surface px-8 py-2.5 text-base italic text-muted-foreground" style={{ animationDelay: "200ms" }}>
        Simulação considerando o canal de aquisição com público frio.
      </div>
      <div className="mx-auto mt-8 flex w-full max-w-3xl flex-1 flex-col justify-center gap-5 pb-14">
        {FUNNEL.map((row, i) => (
          <FunnelRow key={row.label} {...row} active={active} delay={250 + i * 220} />
        ))}
      </div>
    </div>
  );
}

/* ---------------- SLIDE 14 — TRANSIÇÃO ---------------- */
export function Slide14({ active }: { active: boolean }) {
  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(ellipse_at_bottom,oklch(0.945_0.227_117.6/0.22),transparent_70%)]" />
      {active && (
        <ScriptText className="script-in text-9xl">Nossa Proposta</ScriptText>
      )}
    </div>
  );
}

/* ---------------- SLIDES 15 & 16 — PROPOSTA COMERCIAL ---------------- */
const SETUP_ITEMS = [
  "Diagnóstico de Impacto;",
  "Infra-digital;",
  "Implementação e Otimização de sistema de atendimento;",
  "Análise SWOT;",
  "Análise BCG;",
  "Scripts de atendimento;",
  "Treinamento comercial;",
  "Certificado de conformidade;",
  "Garantia de venda em até 40 dias;",
  "🎁 Bônus - Criação do PMI;",
];

const PLANO_ITEMS: [string, string?][] = [
  ["Execução do Método FOCO;", "Fundação, Oportunidades, Conversão e Otimização"],
  ["Suporte dentro do horário comercial;", "WhatsApp ou Ligação"],
  ["Gestão completa de tráfego pago;", "Meta ou Google"],
  ["Atualização de performance semanal;"],
  ["Reunião de planejamento mensal;"],
  ["Gerenciamento de até R$3 mil em anúncios;"],
  ["Acompanhamento de vendas semanal;"],
  ["Produção dos criativos p/ anúncios;"],
  ["Relatório de performance mensal;"],
  ["Acesso à Faladores Academy;"],
  ["Acesso ao FaladoresBot;"],
  ["Capacitação do time de vendas;"],
];

function ProposalCards({ active, withPrices }: { active: boolean; withPrices: boolean }) {
  return (
    <div className="mt-5 grid flex-1 grid-cols-2 gap-8">
      <div className="card-hover stagger-item flex flex-col overflow-hidden rounded-xl border border-line bg-surface" style={{ animationDelay: "200ms" }}>
        <div className="rounded-t-xl bg-lime px-6 py-3 text-center font-[Oswald] text-2xl font-bold uppercase text-lime-foreground">
          Setup
        </div>
        <ul className="flex-1 space-y-1.5 p-6 text-[15px] leading-snug">
          {SETUP_ITEMS.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
              {item}
            </li>
          ))}
        </ul>
        {withPrices && (
          <div className="border-t border-line px-6 py-3 text-center">
            <p className="font-[Oswald] text-3xl font-bold text-lime">R$ 2.000,00</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">pagamento único</p>
          </div>
        )}
      </div>

      <div className="card-hover stagger-item flex flex-col overflow-hidden rounded-xl border border-line bg-surface" style={{ animationDelay: "320ms" }}>
        <div className="rounded-t-xl bg-foreground px-6 py-3 text-center font-[Oswald] text-2xl font-bold uppercase text-background">
          Plano Performance
        </div>
        <ul className="flex-1 space-y-1.5 p-6 text-[15px] leading-snug">
          {PLANO_ITEMS.map(([item, sub], i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
              <span>
                {item}
                {sub && (
                  <span className="block text-xs italic text-muted-foreground">{sub}</span>
                )}
              </span>
            </li>
          ))}
        </ul>
        {withPrices && (
          <div className="border-t border-line px-6 py-3 text-center">
            <p className="font-[Oswald] text-3xl font-bold text-lime">R$ 3.300,00</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">pagamento mensal</p>
          </div>
        )}
      </div>
    </div>
  );
}

export function Slide15({ active }: { active: boolean }) {
  return (
    <div className="flex h-full flex-col px-16 pb-5 pt-12">
      <div className="text-center">
        <ScriptText className="script-in text-5xl">Proposta Comercial</ScriptText>
        <p className="stagger-item font-[Oswald] text-lg uppercase tracking-[0.3em] text-muted-foreground" style={{ animationDelay: "120ms" }}>
          Entregáveis
        </p>
      </div>
      <ProposalCards active={active} withPrices={false} />
      <Wordmark className="stagger-item mt-4 text-center text-lg" />
    </div>
  );
}

export function Slide16({ active }: { active: boolean }) {
  return (
    <div className="flex h-full flex-col px-16 pb-4 pt-10">
      <div className="text-center">
        <ScriptText className="script-in text-5xl">Proposta Comercial</ScriptText>
        <p className="stagger-item font-[Oswald] text-lg uppercase tracking-[0.3em] text-muted-foreground" style={{ animationDelay: "120ms" }}>
          Entregáveis e Valores
        </p>
      </div>
      <ProposalCards active={active} withPrices />
      <div className="stagger-item mt-3 flex items-center justify-center gap-8 text-sm text-muted-foreground" style={{ animationDelay: "500ms" }}>
        <span>Validade de proposta: <strong className="text-foreground">3 dias</strong></span>
        <span>Pagamento do Plano: <strong className="text-foreground">pós-pago</strong></span>
        <span>Cobertura do plano: <strong className="text-foreground">30 dias</strong></span>
        <span>Forma de pagamento: <strong className="text-foreground">Pix ou cartão</strong></span>
      </div>
      <div className="stagger-item mb-10 mt-2 flex justify-center" style={{ animationDelay: "650ms" }}>
        <button className="cta-pulse rounded-full bg-lime px-10 py-3 font-[Oswald] text-lg font-bold uppercase tracking-wider text-lime-foreground transition-transform hover:scale-105">
          Quero vender mais
        </button>
      </div>
    </div>
  );
}
