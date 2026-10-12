import type { CSSProperties, ReactNode } from "react";
import { MARK_PATH, MARK_VIEWBOX } from "./mark-path";

export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox={MARK_VIEWBOX} aria-hidden="true" className={className}>
      <path fill="currentColor" fillRule="evenodd" d={MARK_PATH} />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Mark className="h-[22px] w-auto text-navy" />
      <span className="text-[15px] font-semibold tracking-[-0.01em] text-ink">BharatGrid Systems</span>
    </span>
  );
}

/** The saffron, navy and green rule from the company letterhead, kept small. */
export function TriRule({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`flex h-[3px] w-12 overflow-hidden rounded-full ${className}`}>
      <span className="flex-1 bg-saffron" />
      <span className="flex-1 bg-navy" />
      <span className="flex-1 bg-green" />
    </span>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  return (
    <Tag data-reveal="" className={className} style={{ "--delay": `${delay}ms` } as CSSProperties}>
      {children}
    </Tag>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  tone = "white",
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: "white" | "mist";
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`${tone === "mist" ? "bg-mist" : "bg-white"} px-5 py-24 sm:px-8 md:py-32`}
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-navy">{eyebrow}</p>
          <h2
            id={`${id}-title`}
            className="mt-4 max-w-3xl text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.03em]"
          >
            {title}
          </h2>
          {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>}
        </Reveal>
        <div className="mt-14 md:mt-20">{children}</div>
      </div>
    </section>
  );
}

/** Shows a value as plain text, or as a link once it's no longer a placeholder. */
export function Value({ value, href }: { value: string; href?: string }) {
  if (!href) return <span className="whitespace-pre-line">{value}</span>;
  return (
    <a href={href} className="underline decoration-line underline-offset-4 transition-colors hover:text-navy hover:decoration-navy">
      {value}
    </a>
  );
}
