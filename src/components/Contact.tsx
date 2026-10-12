import { company } from "../company";
import { mailHref, telHref } from "./CompanyInfo";
import { Reveal, Section, Value } from "./ui";

export function Contact() {
  const items: [string, string, string?][] = [
    ["Email", company.email, mailHref()],
    ["Phone", company.phone, telHref()],
    ["Registered Office", company.registeredOffice],
    ["Queries & Grievances", company.grievanceOfficer],
  ];
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Get in touch."
      intro="For business enquiries, partnerships and official correspondence, please contact us using the details below."
    >
      <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
        {items.map(([label, value, href], i) => (
          <Reveal key={label} delay={i * 70} className="bg-white p-7 md:p-9">
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-navy">{label}</h3>
            <p className="mt-3 text-[17px] leading-relaxed">
              <Value value={value} href={href} />
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
