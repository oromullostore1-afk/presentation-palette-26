import { BottomStrip, FocoDiagram, FLogo, SlideTitle, StaggerList } from "./shared";
import { CrmMockup } from "./slides-a";

const FASE_FUNDACAO = [
  "Estruturação do SETUP;",
  "Plano de Marketing Inteligente (PMI);",
  "Definição dos canais de aquisição;",
  "Benchmarking;",
  "Implementação/Otimização do CRM;",
  "Execução da estrutura;",
];

const FASE_OPORTUNIDADES = [
  "Execução do PMI;",
  "Implementação dos canais de vendas;",
  "Capacitação do time comercial;",
  "Acompanhamento de performance;",
];

const FASE_CONVERSAO = [
  "Consolidação do aumento de vendas;",
  "Validação do PMI;",
  "Diagnóstico de performance;",
  "Apresentação de Resultados;",
];

/* ---------------- SLIDE 7 — FUNCIONALIDADES DO SISTEMA ---------------- */
const CALLOUTS = [
  "Principais dados de contato do Lead",
  "Dado relevante de qualificação (adaptar ao segmento do cliente)",
  "Identificar o nível de consciência do lead",
  "Identificar a qualificação e potencial de compra",
  "Esteira completa e personalizada de controle dos leads",
];

const STATUSES = [
  "Novo Lead",
  "Em contato",
  "Em espera",
  "Financiamento",
  "Perdido",
  "Visita não realizada",
  "Follow up",
  "Vendido",
];

export function Slide7({ active }: { active: boolean }) {
  return (
    <div className="flex h-full flex-col px-16 pt-14">
      <SlideTitle className="text-center">
        Funcionalidades do <span className="text-lime">Sistema</span>
      </SlideTitle>
      <div className="mt-6 flex flex-1 items-start justify-center gap-10">
        {/* INSERIR IMAGEM REAL: print da tabela do CRM */}
        <div className="stagger-item relative w-[520px]" style={{ animationDelay: "150ms" }}>
          <CrmMockup />
          {active &&
            [0, 1, 2, 3, 4].map((n) => (
              <span
                key={n}
                className="stagger-item absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-lime font-[Oswald] text-sm font-bold text-lime-foreground shadow-lg"
                style={{ top: `${14 + n * 17}%`, animationDelay: `${400 + n * 150}ms` }}
              >
                {n + 1}
              </span>
            ))}
        </div>
        <ol className="w-[480px] space-y-3">
          {CALLOUTS.map((text, i) => (
            <li
              key={i}
              className="stagger-item flex items-start gap-3"
              style={{ animationDelay: `${400 + i * 150}ms` }}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime font-[Oswald] text-sm font-bold text-lime-foreground">
                {i + 1}
              </span>
              <span className="rounded-full border border-line bg-surface px-4 py-1.5 text-sm leading-snug">
                {text}
                {i === 4 && (
                  <span className="mt-2 flex flex-wrap gap-1.5">
                    {STATUSES.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-lime/15 px-2 py-0.5 text-[10px] font-semibold text-lime"
                      >
                        {s}
                      </span>
                    ))}
                  </span>
                )}
              </span>
            </li>
          ))}
        </ol>
      </div>
      <p className="stagger-item pb-6 text-center text-sm italic text-muted-foreground" style={{ animationDelay: "1200ms" }}>
        Personalizado de acordo com seu funil de vendas
      </p>
    </div>
  );
}

/* ------------- Phase slide layout (slides 8-10) ------------- */
function PhaseSlide({
  active,
  title,
  highlight,
  previous,
  current,
  extra,
}: {
  active: boolean;
  title: string;
  highlight: number;
  previous: { label: string; items: string[] }[];
  current: string[];
  extra?: string[];
}) {
  return (
    <div className="flex h-full flex-col px-16 pt-16">
      <SlideTitle>{title}</SlideTitle>
      <div className="mt-6 flex flex-1 items-center gap-12">
        <div className="stagger-item" style={{ animationDelay: "150ms" }}>
          <FocoDiagram
            highlight={highlight}
            size={330}
            center={
              <>
                <FLogo className="h-8 w-8 text-lg" />
                <span className="mt-1 font-[Oswald] text-xs font-bold tracking-widest text-foreground">MÉTODO</span>
              </>
            }
          />
        </div>
        <div className="flex flex-1 flex-col gap-5">
          {previous.map((phase, pi) => (
            <div key={phase.label} className="stagger-item opacity-35" style={{ animationDelay: `${200 + pi * 80}ms` }}>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{phase.label}</p>
              <ul className="mt-1 grid grid-cols-2 gap-x-6 text-sm text-muted-foreground">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <StaggerList baseDelay={350} items={current} />
          {extra && (
            <div className="stagger-item ml-auto mt-2 rounded-lg border border-line bg-surface p-4" style={{ animationDelay: "800ms" }}>
              <ul className="space-y-1.5 text-sm">
                {extra.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Slide8({ active }: { active: boolean }) {
  return (
    <PhaseSlide
      active={active}
      title="Implementação de Canais"
      highlight={1}
      previous={[{ label: "Fundação", items: FASE_FUNDACAO }]}
      current={FASE_OPORTUNIDADES}
    />
  );
}

export function Slide9({ active }: { active: boolean }) {
  return (
    <PhaseSlide
      active={active}
      title="Consolidação das Vendas"
      highlight={2}
      previous={[
        { label: "Fundação", items: FASE_FUNDACAO },
        { label: "Oportunidades", items: FASE_OPORTUNIDADES },
      ]}
      current={FASE_CONVERSAO}
    />
  );
}

export function Slide10({ active }: { active: boolean }) {
  return (
    <PhaseSlide
      active={active}
      title="Escala de Resultados!"
      highlight={3}
      previous={[
        { label: "Fundação", items: FASE_FUNDACAO },
        { label: "Oportunidades", items: FASE_OPORTUNIDADES },
        { label: "Conversão", items: FASE_CONVERSAO },
      ]}
      current={[
        "Otimização do canal de vendas;",
        "Avaliação de oportunidades;",
        "Definição de um novo canal de vendas;",
        "Checagem de viabilidade;",
      ]}
      extra={[
        "Execução do planejamento estratégico",
        "Múltiplos canais de vendas",
        "Capacitação",
        "Acompanhamento de performance",
      ]}
    />
  );
}

/* ---------------- SLIDE 11 — PROBLEMAS QUE O MÉTODO RESOLVE ---------------- */
export function Slide11({ active }: { active: boolean }) {
  return (
    <div className="flex h-full flex-col px-16 pt-14">
      <div className="stagger-item flex items-center gap-3" style={{ animationDelay: "80ms" }}>
        <span className="font-[Oswald] text-2xl font-bold uppercase">
          Método <span className="text-lime">FOCO</span>
        </span>
        <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Marketing e Vendas
        </span>
      </div>
      <SlideTitle className="mt-4">Problemas que nosso método resolve</SlideTitle>
      <div className="mt-6 flex flex-1 items-center gap-14">
        <ul className="flex-1 space-y-4 text-lg leading-snug">
          {[
            "Sua empresa sendo a primeira opção dos potenciais clientes;",
            "Demanda diária de novas oportunidades em múltiplos canais;",
            "Maior controle nas vendas da sua empresa;",
            "Reconhecimento que sua empresa merece;",
          ].map((item, i) => (
            <li key={i} className="stagger-item flex items-start gap-3" style={{ animationDelay: `${250 + i * 110}ms` }}>
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime text-sm font-bold text-lime-foreground">✓</span>
              <span>{item}</span>
            </li>
          ))}
          <li className="stagger-item flex items-start gap-3" style={{ animationDelay: "690ms" }}>
            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime text-sm font-bold text-lime-foreground">✓</span>
            <span>
              Melhorias nos processos comerciais para vender mais e melhor;
              <span className="block text-sm italic text-muted-foreground">
                atendimento, venda e pós-venda
              </span>
            </span>
          </li>
        </ul>
        <div className="stagger-item" style={{ animationDelay: "250ms" }}>
          <FocoDiagram
            highlight={null}
            size={340}
            center={
              <>
                <span className="font-[Oswald] text-base font-bold text-lime">Ciclo de</span>
                <span className="font-[Oswald] text-base font-bold text-lime">resultados</span>
              </>
            }
          />
        </div>
      </div>
      <BottomStrip>Tudo que sua empresa precisa para vender mais em até 45 dias!</BottomStrip>
    </div>
  );
}
