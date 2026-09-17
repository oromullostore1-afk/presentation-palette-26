import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { FLogo, TOTAL_SLIDES } from "@/components/deck/shared";
import { Slide1, Slide2, Slide3, Slide4, Slide5, Slide6 } from "@/components/deck/slides-a";
import { Slide7, Slide8, Slide9, Slide10, Slide11 } from "@/components/deck/slides-b";
import { Slide12, Slide13, Slide14, Slide15, Slide16 } from "@/components/deck/slides-c";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Faladores — Proposta Comercial | Método FOCO" },
      {
        name: "description",
        content:
          "Proposta comercial Faladores: sua empresa vendendo mais em até 45 dias com o Método FOCO de Marketing e Vendas.",
      },
      { property: "og:title", content: "Faladores — Proposta Comercial" },
      {
        property: "og:description",
        content:
          "Sua empresa vendendo mais em até 45 dias com o Método FOCO de Marketing e Vendas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SLIDES = [
  Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8,
  Slide9, Slide10, Slide11, Slide12, Slide13, Slide14, Slide15, Slide16,
];

const pad = (n: number) => String(n).padStart(2, "0");

function Index() {
  const [current, setCurrent] = useState(0);

  const go = useCallback(
    (dir: 1 | -1) => {
      setCurrent((c) => Math.min(TOTAL_SLIDES - 1, Math.max(0, c + dir)));
    },
    [],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") go(1);
      if (e.key === "ArrowLeft" || e.key === "PageUp") go(-1);
      if (e.key === "Home") setCurrent(0);
      if (e.key === "End") setCurrent(TOTAL_SLIDES - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  return (
    <div className="relative h-screen w-screen select-none overflow-hidden bg-background text-foreground">
      {/* Subtle background texture / gradient map effect */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,oklch(0.16_0.04_117.6/0.35),transparent_55%),radial-gradient(ellipse_at_85%_90%,oklch(0.13_0.05_117.6/0.3),transparent_55%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, oklch(0.95 0.23 117.6) 1px, transparent 0)",
          backgroundSize: "42px 42px",
        }}
      />

      {/* Logo "F" top-right on every slide */}
      <FLogo className="absolute right-6 top-6 z-30" />

      {/* Slides — horizontal slide + fade transition */}
      {SLIDES.map((Slide, i) => {
        const offset = i - current;
        const isActive = i === current;
        return (
          <section
            key={i}
            aria-hidden={!isActive}
            className="absolute inset-0"
            style={{
              transform: `translateX(${offset * 100}%)`,
              opacity: isActive ? 1 : 0,
              transition: "transform 450ms ease-in-out, opacity 450ms ease-in-out",
              pointerEvents: isActive ? "auto" : "none",
            }}
          >
            {Math.abs(offset) <= 1 && <Slide active={isActive} />}
          </section>
        );
      })}

      {/* Arrow navigation */}
      <button
        onClick={() => go(-1)}
        disabled={current === 0}
        aria-label="Slide anterior"
        className="absolute left-5 top-1/2 z-30 -translate-y-1/2 rounded-full border border-line bg-surface/80 p-2.5 text-muted-foreground transition hover:border-lime hover:text-lime disabled:opacity-25"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={() => go(1)}
        disabled={current === TOTAL_SLIDES - 1}
        aria-label="Próximo slide"
        className="absolute right-5 top-1/2 z-30 -translate-y-1/2 rounded-full border border-line bg-surface/80 p-2.5 text-muted-foreground transition hover:border-lime hover:text-lime disabled:opacity-25"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Footer: dots + numbering + progress bar */}
      <footer className="absolute inset-x-0 bottom-0 z-30">
        <div className="flex items-center justify-between px-8 pb-4">
          <span className="font-[Oswald] text-sm font-semibold tracking-widest text-muted-foreground">
            {pad(current + 1)}/{pad(TOTAL_SLIDES)}
          </span>
          <div className="flex items-center gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Ir para o slide ${i + 1}`}
                className={cn(
                  "h-2 w-2 rounded-full bg-muted-foreground/40 transition-all duration-300 hover:bg-lime/70",
                  i === current && "dot-active",
                )}
              />
            ))}
          </div>
          <span className="w-12" />
        </div>
        <div className="h-[3px] w-full bg-line">
          <div
            className="h-full bg-lime transition-all duration-500 ease-in-out"
            style={{ width: `${((current + 1) / TOTAL_SLIDES) * 100}%` }}
          />
        </div>
      </footer>
    </div>
  );
}
