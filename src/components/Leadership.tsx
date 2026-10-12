import { company } from "../company";
import { Reveal, Section } from "./ui";

const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("");

export function Leadership() {
  return (
    <Section id="leadership" eyebrow="Leadership" title="Company leadership.">
      <ul className="grid gap-8 sm:grid-cols-2 lg:gap-10">
        {company.leaders.map((p, i) => (
          <Reveal as="li" key={p.name} delay={i * 100} className="flex items-center gap-7 rounded-[28px] bg-mist p-8 md:p-10">
            <span
              aria-hidden="true"
              className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-navy text-[21px] font-semibold tracking-[0.02em] text-white"
            >
              {initials(p.name)}
            </span>
            <div>
              <h3 className="text-[22px] font-semibold tracking-[-0.02em]">{p.name}</h3>
              <p className="mt-1.5 text-[16px] text-body">{p.role}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
