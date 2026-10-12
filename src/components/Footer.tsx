import { company, NAV } from "../company";
import { Logo } from "./ui";

export function Footer() {
  return (
    <footer className="bg-white px-6 pb-12 pt-20 sm:px-10 md:pt-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <a href="#top" aria-label="BharatGrid Systems — back to top" className="self-start">
            <Logo />
          </a>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-9 gap-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-[14px] text-ink/70 transition-colors hover:text-navy">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-8 border-t border-line pt-10 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2 text-[13px] leading-relaxed text-muted">
            <p className="font-medium text-ink/80">{company.legalName}</p>
            <p>Registered Office: {company.registeredOffice.join(", ")}</p>
            <p>
              <a href={`mailto:${company.email}`} className="hover:text-navy">
                {company.email}
              </a>
            </p>
            <p className="pt-4">
              Registered as {company.legalName} in {company.registeredYear}.
            </p>
          </div>
          <p lang="hi" className="font-deva text-[15px] tracking-[0.02em] text-ink/60" title="The nation's interest above all">
            {company.motto}
          </p>
        </div>
      </div>
    </footer>
  );
}
