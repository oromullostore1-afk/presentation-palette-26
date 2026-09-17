import { useCountUp } from "@/hooks/use-count-up";
import {
  BottomStrip,
  CheckItem,
  FocoDiagram,
  FLogo,
  ScriptText,
  SlideTitle,
  StaggerList,
  Wordmark,
  XItem,
} from "./shared";

function Stat({
  value,
  suffix,
  label,
  active,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
  delay: number;
}) {
  const n = useCountUp(value, active);
  return (
    <div className="stagger-item text-center" style={{ animationDelay: `${delay}ms` }}>
      <p className="font-[Oswald] text-6xl font-bold text-lime">
        +{suffix === "M" ? `${n}M` : n}
      </p>
      <p className="mt-1 text-sm uppercase tracking-wider text-muted-foreground">{label}</p>
    </div>
  );
}

/* ---------------- SLIDE 1 — CAPA ---------------- */
export function Slide1({ active }: { active: boolean }) {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      {active && (
        <>
          <ScriptText className="script-in text-7xl">Bem-vindo!</ScriptText>
          <Wordmark className="stagger-item mt-6 text-8xl" />
          <p
            className="stagger-item mt-6 text-2xl text-foreground/80"
            style={{ animationDelay: "350ms" }}
          >
            Sua empresa vendendo mais em até{" "}
            <span className="font-bold text-lime">45 dias!</span>
          </p>
        </>
      )}
    </div>
  );
}

/* ---------------- SLIDE 2 — SOBRE A FALADORES ---------------- */
export function Slide2({ active }: { active: boolean }) {
  return (
    <div className="flex h-full flex-col px-16 pt-20">
      <ScriptText className="script-in text-6xl">Sobre a Faladores</ScriptText>

      <div className="mt-6 flex flex-1 gap-10">
        <div className="flex-1">
          {/* INSERIR IMAGEM REAL: foto da equipe (fundo deste bloco) */}
          <div className="stagger-item relative h-56 overflow-hidden rounded-xl border border-line bg-surface" style={{ animationDelay: "150ms" }}>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.2_0.03_120),oklch(0.08_0.02_120))]" />
            <p className="absolute inset-0 flex items-center justify-center text-sm uppercase tracking-widest text-muted-foreground">
              Foto da equipe
            </p>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              ["F", "Foco"],
              ["A", "Aceleração"],
              ["L", "Liderança"],
            ].map(([letter, word], i) => (
              <div
                key={letter}
                className="stagger-item rounded-lg border border-line bg-surface-2 p-4 text-center"
                style={{ animationDelay: `${250 + i * 100}ms` }}
              >
                <span className="font-[Oswald] text-4xl font-bold text-lime">{letter}</span>
                <p className="mt-1 text-sm uppercase tracking-wider">{word}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-4 gap-3">
            <Stat value={200} suffix="" label="Empresas Atendidas" active={active} delay={450} />
            <Stat value={4} suffix="" label="Anos no Mercado" active={active} delay={550} />
            <Stat value={20} suffix="" label="Segmentos Atendidos" active={active} delay={650} />
            <Stat value={2} suffix="M" label="Em Resultados Entregues" active={active} delay={750} />
          </div>
        </div>

        <div className="w-80 shrink-0">
          {/* INSERIR IMAGEM REAL: mapa do Brasil com estados destacados */}
          <div className="stagger-item relative h-72 overflow-hidden rounded-xl border border-line bg-surface" style={{ animationDelay: "300ms" }}>
            <svg viewBox="0 0 100 110" className="absolute inset-0 h-full w-full p-4">
              <path
                d="M38 8 L55 5 L66 10 L78 14 L88 24 L84 34 L90 42 L80 52 L74 64 L66 76 L56 88 L46 82 L38 88 L30 78 L22 70 L14 60 L10 46 L18 36 L26 28 L30 16 Z"
                fill="none"
                stroke="#D4FF3F"
                strokeWidth="1.5"
                opacity="0.7"
              />
              {[
                [30, 16], [46, 20], [62, 18], [74, 28],
                [66, 44], [52, 56], [40, 66], [58, 74],
              ].map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="2.6" fill="#D4FF3F" />
              ))}
            </svg>
            <p className="absolute bottom-2 w-full text-center text-xs uppercase tracking-widest text-muted-foreground">
              Mapa do Brasil — estados atendidos
            </p>
          </div>

          <div className="stagger-item mt-4 rounded-lg border border-line bg-surface-2 p-4" style={{ animationDelay: "450ms" }}>
            <p className="font-[Oswald] text-3xl font-bold text-lime">
              <CountUp n={8} active={active} /> Estados Atendidos
            </p>
            <p className="mt-2 font-[Oswald] text-2xl font-bold">
              <CountUp n={3} active={active} /> Países Atendidos{" "}
              <span className="text-xl" aria-label="Brasil, Irlanda, Portugal">🇧🇷 🇮🇪 🇵🇹</span>
            </p>
          </div>
        </div>
      </div>

      <BottomStrip>
        Somos um ecossistema com uma cultura de resultados! Respiramos venda 24h por dia.
      </BottomStrip>
    </div>
  );
}

function CountUp({ n, active }: { n: number; active: boolean }) {
  return <>{useCountUp(n, active)}</>;
}

/* ---------------- SLIDE 3 — ALINHAMENTO DE EXPECTATIVAS ---------------- */
export function Slide3({ active }: { active: boolean }) {
  return (
    <div className="flex h-full flex-col pt-16">
      <SlideTitle className="px-16 text-center">Alinhamento de Expectativas</SlideTitle>
      <div className="mt-8 grid flex-1 grid-cols-2">
        {/* INSERIR IMAGEM REAL: foto de escritório (fundo desta coluna) */}
        <div className="relative flex flex-col justify-center border-r border-line bg-surface px-14 py-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(0.17_0.03_120),oklch(0.06_0.01_120))]" />
          <div className="relative">
            <h3 className="stagger-item font-[Oswald] text-3xl font-bold uppercase text-lime" style={{ animationDelay: "150ms" }}>
              O que fazemos
            </h3>
            <ul className="mt-6 space-y-4 text-lg leading-snug">
              <CheckItem delay={250}>
                Aceleramos as vendas de empresas como a sua em até 45 dias através do nosso{" "}
                <strong className="text-lime">Método FOCO</strong> de Marketing e Vendas.
              </CheckItem>
              <li className="stagger-item pl-9 text-sm italic text-muted-foreground" style={{ animationDelay: "350ms" }}>
                Processos de atendimento e vendas, estratégias de marketing, ações comerciais,
                tráfego pago, implementação de CRM, automação, criação de conteúdo, treinamentos,
                entre outros, são alguns dos serviços que prestamos.
              </li>
              <CheckItem delay={450}>
                Único Foco: <strong>Aumentar de forma efetiva as vendas da sua empresa.</strong>
              </CheckItem>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center px-14 py-10">
          <h3 className="stagger-item font-[Oswald] text-3xl font-bold uppercase text-destructive" style={{ animationDelay: "200ms" }}>
            O que não fazemos
          </h3>
          <ul className="mt-6 space-y-4 text-lg leading-snug">
            <XItem delay={300}>
              Não focamos em fazer identidade visual ou logotipo, nosso trabalho é 100% voltado
              para aceleração de vendas. Mas temos parceiros para te ajudar.
            </XItem>
            <XItem delay={400}>
              Não fazemos nada que vá prejudicar as vendas de sua empresa.
            </XItem>
            <XItem delay={500}>
              Nunca te deixaremos na mão, por isso precisamos caminhar sempre juntos.
            </XItem>
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ---------------- SLIDE 4 — MÉTODO FOCO ---------------- */
export function Slide4({ active }: { active: boolean }) {
  return (
    <div className="flex h-full items-center gap-16 px-16">
      <div className="flex-1">
        {/* INSERIR IMAGEM REAL: notebook/celular */}
        <div className="stagger-item flex h-56 items-center justify-center rounded-xl border border-line bg-surface text-sm uppercase tracking-widest text-muted-foreground" style={{ animationDelay: "150ms" }}>
          Imagem — notebook / celular
        </div>
        <h2 className="stagger-item mt-6 font-[Oswald] text-6xl font-bold uppercase" style={{ animationDelay: "250ms" }}>
          Método <span className="text-lime">FOCO</span>
        </h2>
        <p className="stagger-item mt-2 text-2xl uppercase tracking-[0.3em] text-muted-foreground" style={{ animationDelay: "350ms" }}>
          Marketing e Vendas
        </p>
      </div>
      <div className="stagger-item" style={{ animationDelay: "200ms" }}>
        <FocoDiagram
          highlight={null}
          center={
            <>
              <span className="font-[Oswald] text-lg font-bold text-lime">Ciclo de</span>
              <span className="font-[Oswald] text-lg font-bold text-lime">resultados</span>
            </>
          }
        />
      </div>
      <BottomStrip>Tudo que sua empresa precisa para vender mais em até 45 dias!</BottomStrip>
    </div>
  );
}

/* ---------------- SLIDE 5 — FUNDAÇÃO ---------------- */
export function Slide5({ active }: { active: boolean }) {
  return (
    <div className="flex h-full flex-col px-16 pt-16">
      <SlideTitle>Estruturação de Performance</SlideTitle>
      <div className="mt-8 flex flex-1 items-center gap-14">
        <div className="stagger-item" style={{ animationDelay: "150ms" }}>
          <FocoDiagram
            highlight={0}
            center={
              <>
                <FLogo className="h-8 w-8 text-lg" />
                <span className="mt-1 font-[Oswald] text-xs font-bold tracking-widest text-foreground">MÉTODO</span>
              </>
            }
          />
        </div>
        <div className="flex-1">
          <StaggerList
            baseDelay={250}
            items={[
              "Estruturação do SETUP;",
              "Plano de Marketing Inteligente (PMI);",
              "Definição dos canais de aquisição;",
              "Benchmarking;",
              "Implementação/Otimização do CRM;",
              "Execução da estrutura;",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

/* ---------------- SLIDE 6 — SISTEMA COMPLETO PARA GERIR LEADS ---------------- */
export function Slide6({ active }: { active: boolean }) {
  return (
    <div className="flex h-full flex-col px-16 pt-16">
      <SlideTitle className="text-center">
        Sistema Completo <span className="text-lime">para Gerir os Leads</span>
      </SlideTitle>
      <div className="mt-8 flex flex-1 items-end justify-center gap-12 pb-8">
        {/* INSERIR IMAGEM REAL: print do CRM no celular */}
        <div className="stagger-item w-52" style={{ animationDelay: "200ms" }}>
          <CrmMockup compact />
          <p className="mt-2 text-center text-xs italic text-muted-foreground">
            Imagem real retirada do sistema
          </p>
        </div>
        {/* INSERIR IMAGEM REAL: print do CRM no notebook */}
        <div className="stagger-item w-[560px]" style={{ animationDelay: "350ms" }}>
          <CrmMockup />
          <p className="mt-2 text-center text-xs italic text-muted-foreground">
            Imagem real retirada do sistema
          </p>
        </div>
      </div>
      <BottomStrip>
        Receba as informações dos leads direto no seu celular com nosso CRM Inteligente.
      </BottomStrip>
    </div>
  );
}

export const CRM_ROWS = [
  ["Ana Souza", "(11) 98888-1234", "São Paulo", "Quente"],
  ["Carlos Lima", "(21) 97777-5678", "Rio de Janeiro", "Morno"],
  ["Fernanda Reis", "(31) 96666-9012", "Belo Horizonte", "Quente"],
  ["João Pedro", "(41) 95555-3456", "Curitiba", "Frio"],
];

export function CrmMockup({ compact = false }: { compact?: boolean }) {
  return (
    <div className="overflow-hidden rounded-lg border border-line bg-surface shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-line bg-surface-2 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-destructive/70" />
        <span className="h-2 w-2 rounded-full bg-lime/60" />
        <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
        <span className="ml-2 text-[10px] uppercase tracking-wider text-muted-foreground">
          CRM Faladores
        </span>
      </div>
      <table className="w-full text-left text-[11px]">
        <thead>
          <tr className="border-b border-line bg-surface-2 text-muted-foreground">
            <th className="px-3 py-1.5 font-medium">Nome</th>
            {!compact && <th className="px-3 py-1.5 font-medium">WhatsApp</th>}
            <th className="px-3 py-1.5 font-medium">Cidade</th>
            <th className="px-3 py-1.5 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {CRM_ROWS.map((row, i) => (
            <tr key={i} className="border-b border-line/50">
              <td className="px-3 py-1.5">{row[0]}</td>
              {!compact && <td className="px-3 py-1.5">{row[1]}</td>}
              <td className="px-3 py-1.5">{row[2]}</td>
              <td className="px-3 py-1.5">
                <span className="rounded-full bg-lime/15 px-2 py-0.5 text-[10px] font-semibold text-lime">
                  {row[3]}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
