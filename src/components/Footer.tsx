import type { ReactNode } from "react";
import { company, NAV, telHref, type Page } from "../company";
import { Container, External, Logo } from "./ui";

const link = "text-[14px] text-body transition-colors hover:text-ink";

function Column({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-muted">{title}</p>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}

export function Footer({ page = "home" }: { page?: Page }) {
  return (
    <footer className="border-t border-line bg-paper pb-12 pt-20 md:pt-24">
      <Container>
        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <a href="/" aria-label="BharatGrid Systems home" className="inline-block">
              <Logo />
            </a>
            <p className="mt-6 max-w-[38ch] text-[14px] leading-[1.7] text-body">
              An Indian software and AI/ML engineering company, building research-driven products and intelligent systems.
            </p>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-7">
            <Column title="Company">
              {NAV.filter((i) => i.page !== "academy").map((item) => (
                <li key={item.href}>
                  <a href={item.href} aria-current={item.page === page ? "page" : undefined} className={link}>
                    {item.label}
                  </a>
                </li>
              ))}
            </Column>
            <Column title="Initiatives">
              <li>
                <a href={company.reskuUrl} target="_blank" rel="noopener" className={`${link} inline-flex items-center gap-1.5`}>
                  Resku <External />
                  <span className="sr-only"> (opens reskuapp.com in a new tab)</span>
                </a>
              </li>
              <li>
                <a href="/work#resku-business" className={link}>
                  Resku Business
                </a>
              </li>
              <li>
                <a href="/academy" aria-current={page === "academy" ? "page" : undefined} className={link}>
                  BharatGrid Academy
                </a>
              </li>
              <li>
                <a href="/academy#programme" className={link}>
                  Business Fellowship ’27
                </a>
              </li>
            </Column>
            <Column title="Reach us">
              <li>
                <a href={`mailto:${company.email}`} className={link}>
                  {company.email}
                </a>
              </li>
              <li>
                <a href={telHref} className={link}>
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.grievanceEmail}`} className={link}>
                  {company.grievanceEmail}
                </a>
              </li>
            </Column>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-8 border-t border-line pt-10 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2 text-[13px] leading-relaxed text-muted">
            <p className="font-medium text-ink/80">{company.legalName}</p>
            <p>Registered office: {company.registeredOffice.join(", ")}</p>
            <p>
              Registered as {company.legalName} in {company.registeredYear}.
            </p>
          </div>
          <p lang="hi" className="font-deva text-[15px] tracking-[0.02em] text-ink/60" title="The nation's interest above all">
            {company.motto}
          </p>
        </div>
      </Container>
    </footer>
  );
}
