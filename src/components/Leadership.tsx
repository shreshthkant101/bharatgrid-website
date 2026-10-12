import { company } from "../company";
import { Reveal, Section } from "./ui";

export function Leadership() {
  const { name, role } = company.founder;
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("");
  return (
    <Section id="leadership" eyebrow="Leadership" title="Company leadership.">
      <Reveal className="flex max-w-xl items-center gap-6 rounded-3xl border border-line p-6 md:p-8">
        <span
          aria-hidden="true"
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-navy text-[19px] font-semibold tracking-[0.02em] text-white"
        >
          {initials}
        </span>
        <div>
          <h3 className="text-[21px] font-semibold tracking-[-0.02em]">{name}</h3>
          <p className="mt-1 text-[15px] text-muted">{role}</p>
        </div>
      </Reveal>
    </Section>
  );
}
