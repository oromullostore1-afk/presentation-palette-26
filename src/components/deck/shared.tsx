import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const TOTAL_SLIDES = 16;
export const ACCENT = "#D4FF3F";

/** "F" logo mark — top-right of every slide. */
export function FLogo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-md bg-lime font-[Oswald] text-2xl font-bold text-lime-foreground",
        className,
      )}
      aria-hidden
    >
      F
    </div>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-[Oswald] font-bold uppercase tracking-[0.18em] text-foreground",
        className,
      )}
    >
      FALADORES
    </span>
  );
}

export function ScriptText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("font-[Great_Vibes] text-lime", className)}>
      {children}
    </span>
  );
}

/**
 * Circular 4-quadrant diagram — Método FOCO.
 * Order clockwise from top-right: FUNDAÇÃO, OPORTUNIDADES, CONVERSÃO, OTIMIZAÇÃO.
 * `highlight` = index of the glowing quadrant (0-3) or null for neutral.
 */
export function FocoDiagram({
  highlight,
  center,
  size = 380,
}: {
  highlight: number | null;
  center: ReactNode;
  size?: number;
}) {
  const labels = ["FUNDAÇÃO", "OPORTUNIDADES", "CONVERSÃO", "OTIMIZAÇÃO"];
  const cx = 200;
  const cy = 200;
  const r0 = 78;
  const r1 = 190;
  const rad = (deg: number) => (deg * Math.PI) / 180;

  const seg = (i: number) => {
    const gap = 3;
    const a0 = -45 + i * 90 + gap;
    const a1 = -45 + (i + 1) * 90 - gap;
    const p = (r: number, a: number) => [
      cx + r * Math.cos(rad(a)),
      cy + r * Math.sin(rad(a)),
    ];
    const [x0, y0] = p(r1, a0);
    const [x1, y1] = p(r1, a1);
    const [x2, y2] = p(r0, a1);
    const [x3, y3] = p(r0, a0);
    return `M ${x0} ${y0} A ${r1} ${r1} 0 0 1 ${x1} ${y1} L ${x2} ${y2} A ${r0} ${r0} 0 0 0 ${x3} ${y3} Z`;
  };

  const labelPos = (i: number) => {
    const a = rad(i * 90);
    const r = (r0 + r1) / 2;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  };

  const shades = ["#D4FF3F", "#B8E62E", "#9CCB1F", "#7FAF12"];

  return (
    <svg
      viewBox="0 0 400 400"
      width={size}
      height={size}
      className="shrink-0"
      role="img"
      aria-label="Diagrama Método FOCO"
    >
      {labels.map((label, i) => {
        const isActive = highlight === i;
        const dimmed = highlight !== null && !isActive;
        const { x, y } = labelPos(i);
        return (
          <g
            key={label}
            className={isActive ? "glow-active" : undefined}
            style={{ transition: "opacity 0.6s ease" }}
            opacity={dimmed ? 0.28 : 1}
          >
            <path d={seg(i)} fill={isActive ? ACCENT : dimmed ? "#3a3f33" : shades[i]} />
            <text
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={dimmed ? "#7c8272" : "#000"}
              fontSize={13}
              fontWeight={700}
              fontFamily="Oswald, sans-serif"
              transform={`rotate(${i * 90} ${x} ${y})`}
              style={{ textTransform: "uppercase", letterSpacing: 1 }}
            >
              {label}
            </text>
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r={r0 - 12} fill="#000" stroke="#3a3f33" />
      <foreignObject x={cx - 60} y={cy - 34} width={120} height={68}>
        <div className="flex h-full w-full flex-col items-center justify-center text-center">
          {center}
        </div>
      </foreignObject>
    </svg>
  );
}

/** Check icon (green) / X icon (red). */
export function CheckItem({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <li className="stagger-item flex items-start gap-3" style={{ animationDelay: `${delay}ms` }}>
      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime text-sm font-bold text-lime-foreground">
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}

export function XItem({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <li className="stagger-item flex items-start gap-3" style={{ animationDelay: `${delay}ms` }}>
      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive text-sm font-bold text-destructive-foreground">
        ✕
      </span>
      <span>{children}</span>
    </li>
  );
}

/** Shared bullet list with stagger. */
export function StaggerList({
  items,
  muted = false,
  baseDelay = 0,
  className,
}: {
  items: ReactNode[];
  muted?: boolean;
  baseDelay?: number;
  className?: string;
}) {
  return (
    <ul className={cn("space-y-3", muted && "opacity-30", className)}>
      {items.map((item, i) => (
        <li
          key={i}
          className="stagger-item flex items-start gap-3"
          style={{ animationDelay: `${baseDelay + i * 100}ms` }}
        >
          <span
            className={cn(
              "mt-2 h-2.5 w-2.5 shrink-0 rounded-full",
              muted ? "bg-muted-foreground" : "bg-lime",
            )}
          />
          <span className="text-lg leading-snug">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Bottom banner strip. */
export function BottomStrip({ children }: { children: ReactNode }) {
  return (
    <div className="absolute inset-x-0 bottom-14 flex justify-center px-16">
      <p className="stagger-item rounded-full border border-line bg-surface px-8 py-3 text-center text-base text-foreground/90" style={{ animationDelay: "600ms" }}>
        {children}
      </p>
    </div>
  );
}

export function SlideTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        "stagger-item font-[Oswald] text-5xl font-bold uppercase tracking-wide text-foreground",
        className,
      )}
      style={{ animationDelay: "80ms" }}
    >
      {children}
    </h2>
  );
}
