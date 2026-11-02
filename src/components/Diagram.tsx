import type { CSSProperties, ReactNode } from "react";
import { Reveal } from "./ui";

/** How the work connects: products and initiatives build capabilities the company keeps, and those point to
 *  where BharatGrid is heading. Solid = exists today; dashed = direction. The list is the real content (and
 *  what phones show); the drawing is the same thing for wide screens. */

const PRODUCTS = [
  { name: "Resku", note: "Personal safety · in testing", y: 120 },
  { name: "Resku Business", note: "Transport operations · in development", y: 235 },
  { name: "BharatGrid Academy", note: "Talent · first cohort January 2027", y: 350 },
];

const CAPABILITIES = [
  { name: "Sensing and event detection", y: 80 },
  { name: "Systems for weak networks", y: 160 },
  { name: "Privacy-preserving learning", y: 240 },
  { name: "Operations platforms", y: 320 },
  { name: "People and engineering practice", y: 400 },
];

/** product index → capability indexes it has built */
const LINKS: [number, number][] = [
  [0, 0],
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 4],
];

const DIRECTION = { name: "Digital infrastructure", note: ["Platforms and intelligent systems", "that others can build on"], y: 240 };

const mono = { fontFamily: "var(--font-mono)" } as CSSProperties;
const curve = (x1: number, y1: number, x2: number, y2: number) => {
  const mid = (x1 + x2) / 2;
  return `M${x1},${y1} C${mid},${y1} ${mid},${y2} ${x2},${y2}`;
};

function Drawing() {
  return (
    <svg viewBox="0 0 1120 470" className="hidden h-auto w-full lg:block" aria-hidden="true" focusable="false">
      <g style={mono} fontSize="11" letterSpacing="1.4" fill="var(--color-muted)">
        <text x="0" y="28">PRODUCTS AND INITIATIVES</text>
        <text x="436" y="28">CAPABILITIES WE KEEP</text>
        <text x="830" y="28">DIRECTION</text>
      </g>

      {LINKS.map(([p, c], i) => (
        <path
          key={`${p}-${c}`}
          className="draw"
          pathLength={1}
          d={curve(290, PRODUCTS[p].y, 438, CAPABILITIES[c].y)}
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth="1.2"
          style={{ "--len": 1, "--d": `${i * 120}ms` } as CSSProperties}
        />
      ))}
      {CAPABILITIES.map((c, i) => (
        <path
          key={c.name}
          className="fade"
          d={curve(712, c.y, 828, DIRECTION.y)}
          fill="none"
          stroke="var(--color-line-strong)"
          strokeWidth="1.2"
          strokeDasharray="3 5"
          style={{ "--d": `${700 + i * 90}ms` } as CSSProperties}
        />
      ))}

      {PRODUCTS.map((p) => (
        <g key={p.name}>
          <rect x="0" y={p.y - 5} width="10" height="10" fill="var(--color-ink)" />
          <text x="24" y={p.y + 5} fontSize="17" fontWeight="500" fill="var(--color-ink)">
            {p.name}
          </text>
          <text x="24" y={p.y + 27} fontSize="12.5" fill="var(--color-muted)">
            {p.note}
          </text>
        </g>
      ))}

      {CAPABILITIES.map((c) => (
        <g key={c.name}>
          <circle cx="444" cy={c.y} r="5.5" fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth="1.4" />
          <text x="460" y={c.y + 5} fontSize="15" fill="var(--color-ink)">
            {c.name}
          </text>
        </g>
      ))}

      <g className="fade" style={{ "--d": "1100ms" } as CSSProperties}>
        <rect x="830" y={DIRECTION.y - 62} width="288" height="124" fill="none" stroke="var(--color-line-strong)" strokeWidth="1.2" strokeDasharray="3 5" />
        <circle cx="854" cy={DIRECTION.y - 30} r="5" fill="var(--color-saffron)" />
        <text x="870" y={DIRECTION.y - 25} fontSize="17" fontWeight="500" fill="var(--color-ink)">
          {DIRECTION.name}
        </text>
        {DIRECTION.note.map((line, i) => (
          <text key={line} x="850" y={DIRECTION.y + 8 + i * 19} fontSize="13" fill="var(--color-muted)">
            {line}
          </text>
        ))}
      </g>
    </svg>
  );
}

export function Diagram() {
  return (
    <figure aria-labelledby="diagram-caption">
      <Reveal>
        <div className="dot-grid border border-line bg-paper px-6 py-10 sm:px-10 md:py-14">
          <Drawing />
          <div className="lg:sr-only">
            <Group title="Products and initiatives">
              {PRODUCTS.map((p) => (
                <li key={p.name} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-[7px] h-2 w-2 shrink-0 bg-ink" />
                  <span>
                    <span className="block text-[16px] font-medium">{p.name}</span>
                    <span className="block text-[13px] text-muted">{p.note}</span>
                  </span>
                </li>
              ))}
            </Group>
            <Down />
            <Group title="Capabilities we keep">
              {CAPABILITIES.map((c) => (
                <li key={c.name} className="flex items-center gap-3 text-[15px]">
                  <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full border-[1.5px] border-ink bg-paper" />
                  {c.name}
                </li>
              ))}
            </Group>
            <Down dashed />
            <Group title="Direction">
              <li className="border border-dashed border-line-strong p-4">
                <span className="flex items-center gap-3 text-[16px] font-medium">
                  <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full bg-saffron" />
                  {DIRECTION.name}
                </span>
                <span className="mt-1 block text-[13px] text-muted">{DIRECTION.note.join(" ")}</span>
              </li>
            </Group>
          </div>
        </div>
      </Reveal>
      <figcaption id="diagram-caption" className="mt-4 max-w-[70ch] text-[13px] leading-relaxed text-muted">
        How the work connects. Each product builds capabilities the company keeps, and those capabilities point to where BharatGrid is heading. Solid
        lines show work that exists today; dashed lines show direction, not results.
      </figcaption>
    </figure>
  );
}

function Group({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{title}</p>
      <ul className="mt-4 space-y-3">{children}</ul>
    </div>
  );
}

function Down({ dashed = false }: { dashed?: boolean }) {
  return <span aria-hidden="true" className={`my-6 ml-[3px] block h-8 w-0 border-l ${dashed ? "border-dashed border-line-strong" : "border-ink"}`} />;
}
