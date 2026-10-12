import { company, isSet } from "../company";
import { Reveal, Section, Value } from "./ui";

export const mailHref = () => (isSet(company.email) ? `mailto:${company.email}` : undefined);
export const telHref = () => (isSet(company.phone) ? `tel:${company.phone.replace(/[^\d+]/g, "")}` : undefined);

export function CompanyInfo() {
  const rows: [string, string, string?][] = [
    ["Legal Name", company.legalName],
    ["Company Type", company.companyType],
    ["CIN", company.cin],
    ["Registered Office", company.registeredOffice],
    ["Official Email", company.email, mailHref()],
    ["Phone", company.phone, telHref()],
    ["Person Responsible for Queries / Grievances", company.grievanceOfficer],
  ];
  return (
    <Section id="company" tone="mist" eyebrow="Company Information" title="Statutory details.">
      <Reveal>
        <dl className="overflow-hidden rounded-3xl border border-line bg-white">
          {rows.map(([label, value, href]) => (
            <div
              key={label}
              className="grid gap-1 border-b border-line px-6 py-5 last:border-b-0 md:grid-cols-12 md:gap-8 md:px-10 md:py-6"
            >
              <dt className="text-[14px] text-muted md:col-span-4">{label}</dt>
              <dd className="text-[16px] font-medium md:col-span-8">
                <Value value={value} href={href} />
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
