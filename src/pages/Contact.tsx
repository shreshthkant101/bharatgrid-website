import type { ReactNode } from "react";
import { company, telHref } from "../company";
import { Layout } from "../components/Layout";
import { Container, PageIntro, Reveal } from "../components/ui";

const link = "underline decoration-line-strong decoration-1 underline-offset-[6px] transition-colors hover:decoration-ink";

const ROUTES: { title: string; text: string; action: ReactNode }[] = [
  {
    title: "Business and partnerships",
    text: "Enquiries from companies, institutions, universities and partners interested in our engineering or products.",
    action: (
      <a href={`mailto:${company.email}`} className={link}>
        {company.email}
      </a>
    ),
  },
  {
    title: "BharatGrid Academy",
    text: "Questions about Business Fellowship ’27 and how to apply. Most answers are on the Academy page.",
    action: (
      <>
        <a href="/academy" className={link}>
          bharatgridsystems.com/academy
        </a>
        <span className="mt-1 block">
          <a href={`mailto:${company.email}?subject=BharatGrid%20Academy`} className={link}>
            {company.email}
          </a>
        </span>
      </>
    ),
  },
  {
    title: "Support, queries and grievances",
    text: "Help with our products, questions about how we handle data, and any grievance.",
    action: (
      <a href={`mailto:${company.grievanceEmail}`} className={link}>
        {company.grievanceEmail}
      </a>
    ),
  },
];

export default function Contact() {
  return (
    <Layout page="contact">
      <PageIntro
        crumb="Contact"
        label="Contact"
        title="Get in touch."
        lede={<p>For business enquiries, partnerships, BharatGrid Academy and official correspondence, please contact us using the details below.</p>}
      />

      <section aria-labelledby="routes-title" className="py-20 md:py-28">
        <Container>
          <h2 id="routes-title" className="sr-only">
            Who to contact
          </h2>
          <ul className="grid gap-12 md:grid-cols-3 md:gap-8">
            {ROUTES.map((r, i) => (
              <Reveal as="li" key={r.title} delay={i * 90} className="flex flex-col border-t border-ink pt-7">
                <h3 className="text-[1.3rem] font-medium tracking-[-0.02em]">{r.title}</h3>
                <p className="mt-3 text-[15.5px] leading-[1.7] text-body">{r.text}</p>
                <div className="mt-auto pt-8 text-[16px] text-ink">{r.action}</div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="office-title" className="border-t border-line bg-paper-2 py-20 md:py-28">
        <Container className="grid gap-12 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-4">
            <h2 id="office-title" className="text-[12px] font-semibold uppercase tracking-[0.16em] text-muted">
              {company.legalName}
            </h2>
          </Reveal>
          <Reveal className="md:col-span-8">
            <dl className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
              <div>
                <dt className="text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">Registered office</dt>
                <dd className="mt-3 text-[clamp(1.1rem,1.6vw,1.3rem)] leading-[1.6] text-ink">
                  <address className="not-italic">
                    {company.registeredOffice.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                    <span className="block">India</span>
                  </address>
                </dd>
              </div>
              <div>
                <dt className="text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">Phone</dt>
                <dd className="mt-3 text-[clamp(1.1rem,1.6vw,1.3rem)] leading-[1.6] text-ink">
                  <a href={telHref} className={link}>
                    {company.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">General enquiries</dt>
                <dd className="mt-3 text-[clamp(1.1rem,1.6vw,1.3rem)] leading-[1.6] text-ink">
                  <a href={`mailto:${company.email}`} className={link}>
                    {company.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">Queries and grievances</dt>
                <dd className="mt-3 text-[clamp(1.1rem,1.6vw,1.3rem)] leading-[1.6] text-ink">
                  <a href={`mailto:${company.grievanceEmail}`} className={link}>
                    {company.grievanceEmail}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </Container>
      </section>
    </Layout>
  );
}
