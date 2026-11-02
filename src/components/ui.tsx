import type { CSSProperties, ReactNode } from "react";

/** The official wordmark: name with the saffron, navy and green underline from the company letterhead. */
export function Logo({ tone = "ink" }: { tone?: "ink" | "paper" }) {
  return (
    <span className="inline-flex flex-col">
      <span className={`text-[16px] font-semibold leading-none tracking-[-0.015em] ${tone === "paper" ? "text-paper" : "text-ink"}`}>
        BharatGrid Systems
      </span>
      <TriRule className="mt-[7px] h-[2px] w-full rounded-none" />
    </span>
  );
}

export function TriRule({ className = "h-[3px] w-12" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`flex overflow-hidden rounded-full ${className}`}>
      <span className="flex-1 bg-saffron" />
      <span className="flex-1 bg-navy" />
      <span className="flex-1 bg-green" />
    </span>
  );
}

/** Fades in as it scrolls into view (src/site/client.ts). Keep it out of every page's first screen. */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "figure" | "section" | "article";
}) {
  return (
    <Tag data-reveal="" className={className} style={{ "--delay": `${delay}ms` } as CSSProperties}>
      {children}
    </Tag>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-6 sm:px-10 ${className}`}>{children}</div>;
}

/** Small uppercase section label, optionally numbered. */
export function Label({ children, n, tone = "muted", className = "" }: { children: ReactNode; n?: string; tone?: "muted" | "dim"; className?: string }) {
  return (
    <p className={`flex items-baseline gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] ${tone === "dim" ? "text-night-dim" : "text-muted"} ${className}`}>
      {n && <span className="font-mono text-[12px] font-normal tracking-normal text-accent">{n}</span>}
      {children}
    </p>
  );
}

const h2 = "text-[clamp(1.85rem,3.6vw,3rem)] font-medium leading-[1.08] tracking-[-0.03em]";

/** A section opening: label, heading and an optional introduction. */
export function SectionHead({
  id,
  n,
  label,
  title,
  intro,
  className = "",
}: {
  id: string;
  n?: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={`grid gap-6 md:grid-cols-12 md:gap-10 ${className}`}>
      <div className="md:col-span-4">
        <Label n={n}>{label}</Label>
      </div>
      <div className="md:col-span-8">
        <h2 id={id} className={`${h2} max-w-[22ch]`}>
          {title}
        </h2>
        {intro && <div className="mt-6 max-w-[62ch] text-[clamp(1.02rem,1.3vw,1.125rem)] leading-[1.75] text-body">{intro}</div>}
      </div>
    </Reveal>
  );
}

export function Section({ id, children, tone = "paper", className = "" }: { id: string; children: ReactNode; tone?: "paper" | "paper-2" | "night"; className?: string }) {
  const bg = tone === "night" ? "bg-night text-paper" : tone === "paper-2" ? "bg-paper-2" : "bg-paper";
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`${bg} py-24 md:py-36 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

/** Opening of an inner page: breadcrumb, label, the page's one h1 and its lede. */
export function PageIntro({ crumb, label, title, lede, children }: { crumb: string; label: string; title: ReactNode; lede: ReactNode; children?: ReactNode }) {
  return (
    <header className="border-b border-line pb-20 pt-14 md:pb-28 md:pt-20">
      <Container>
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[13px] text-muted">
            <li>
              <a href="/" className="hover:text-ink">
                BharatGrid Systems
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-ink">
              {crumb}
            </li>
          </ol>
        </nav>
        <Label className="mt-16 md:mt-24">{label}</Label>
        <h1 className="mt-6 max-w-[18ch] text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.02] tracking-[-0.035em]">{title}</h1>
        <div className="mt-8 max-w-[60ch] text-[clamp(1.1rem,1.6vw,1.3rem)] leading-[1.65] text-body">{lede}</div>
        {children}
      </Container>
    </header>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" className={className}>
      <path d="M2.5 8h10M9 4.5 12.5 8 9 11.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function External({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true" className={className}>
      <path d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/** A text link with an arrow, for moving to the next page. */
export function MoreLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a href={href} className={`group inline-flex items-center gap-2.5 text-[15px] font-medium text-ink underline decoration-line-strong underline-offset-[6px] transition-colors hover:decoration-ink ${className}`}>
      {children}
      <Arrow className="transition-transform duration-300 group-hover:translate-x-0.5" />
    </a>
  );
}

/** Where a product or initiative stands today, in plain words. */
export function Status({ children, tone = "paper" }: { children: ReactNode; tone?: "paper" | "night" }) {
  return (
    <span className={`inline-flex items-center gap-2 text-[12px] font-medium ${tone === "night" ? "text-night-dim" : "text-muted"}`}>
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-saffron" />
      {children}
    </span>
  );
}
