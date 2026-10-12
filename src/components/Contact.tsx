import type { ReactNode } from "react";
import { company, telHref } from "../company";
import { Reveal, Section } from "./ui";

const link = "underline decoration-line decoration-1 underline-offset-[6px] transition-colors hover:text-navy hover:decoration-navy";

export function Contact() {
  const items: [string, ReactNode][] = [
    ["Email", <a href={`mailto:${company.email}`} className={link}>{company.email}</a>],
    ["Phone", <a href={telHref} className={link}>{company.phone}</a>],
    [
      "Registered Office",
      <address className="not-italic">
        {company.registeredOffice.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </address>,
    ],
    ["Queries & Grievances", <a href={`mailto:${company.grievanceEmail}`} className={link}>{company.grievanceEmail}</a>],
  ];
  return (
    <Section
      id="contact"
      tone="mist"
      eyebrow="Contact"
      title="Get in touch."
      intro="For business enquiries, partnerships and official correspondence, please contact us using the details below."
    >
      <dl className="grid gap-x-16 sm:grid-cols-2">
        {items.map(([label, value], i) => (
          <Reveal key={label} delay={(i % 2) * 90} className="border-t border-line py-10">
            <dt className="text-[12px] font-semibold uppercase tracking-[0.16em] text-navy">{label}</dt>
            <dd className="mt-4 text-[clamp(1.1rem,1.6vw,1.3rem)] leading-[1.6] text-ink">{value}</dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
