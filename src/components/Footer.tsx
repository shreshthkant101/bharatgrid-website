import { company, NAV } from "../company";
import { Logo, TriRule } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-line bg-mist px-5 pb-10 pt-14 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <a href="#top" aria-label="BharatGrid Systems — back to top" className="self-start">
            <Logo />
          </a>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-7 gap-y-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-[14px] text-ink/70 transition-colors hover:text-navy">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#company" className="text-[14px] text-ink/70 transition-colors hover:text-navy">
                  Company Information
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-line pt-8 md:flex-row md:items-end md:justify-between">
          <div className="space-y-1.5 text-[13px] leading-relaxed text-muted">
            <p>
              {company.legalName} · {company.companyType} · CIN: {company.cin}
            </p>
            <p className="whitespace-pre-line">Registered Office: {company.registeredOffice}</p>
            <p>
              Email: {company.email} · Phone: {company.phone}
            </p>
            <p className="pt-3">
              Copyright © {company.year} {company.legalName}. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-3 md:flex-col md:items-end">
            <TriRule className="w-8" />
            <p lang="hi" className="font-deva text-[15px] tracking-[0.02em] text-ink/65" title="The nation's interest above all">
              {company.motto}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
