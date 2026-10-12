import type { CSSProperties, ReactNode } from "react";
import { imgUrl, srcSet, type Img } from "../images";

/** Text wordmark with the saffron, navy and green underline from the company letterhead. */
export function Logo() {
  return (
    <span className="inline-flex flex-col">
      <span className="text-[16px] font-semibold leading-none tracking-[-0.015em] text-ink">BharatGrid Systems</span>
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

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "figure";
}) {
  return (
    <Tag data-reveal="" className={className} style={{ "--delay": `${delay}ms` } as CSSProperties}>
      {children}
    </Tag>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-navy">{children}</p>;
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
  title: ReactNode;
  intro?: string;
  tone?: "white" | "mist";
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`${tone === "mist" ? "bg-mist" : "bg-white"} px-6 py-28 sm:px-10 md:py-40 lg:py-48`}
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2
            id={`${id}-title`}
            className="mt-6 max-w-3xl text-[clamp(2.1rem,4.4vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.03em]"
          >
            {title}
          </h2>
          {intro && <p className="mt-7 max-w-2xl text-[clamp(1.05rem,1.4vw,1.2rem)] leading-[1.7] text-body">{intro}</p>}
        </Reveal>
        <div className="mt-16 md:mt-24">{children}</div>
      </div>
    </section>
  );
}

export function Photo({
  img,
  sizes,
  className = "",
  eager = false,
}: {
  img: Img;
  sizes: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <div className={`overflow-hidden bg-line/60 ${className}`}>
      <img
        src={imgUrl(img.id, 1200)}
        srcSet={srcSet(img.id)}
        sizes={sizes}
        alt={img.alt}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        decoding="async"
        className="photo h-full w-full object-cover"
        style={img.position ? { objectPosition: img.position } : undefined}
      />
    </div>
  );
}
