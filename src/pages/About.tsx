import type { ReactNode } from "react";
import { fellowship } from "../academy/config";
import { company, telHref } from "../company";
import { Layout } from "../components/Layout";
import { Container, Label, MoreLink, PageIntro, Reveal, Section, SectionHead } from "../components/ui";

const prose = "space-y-5 text-[clamp(1.02rem,1.3vw,1.125rem)] leading-[1.8] text-body";
const inline = "text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink";

function Essay({ id, n, label, title, children, tone }: { id: string; n: string; label: string; title: string; children: ReactNode; tone?: "paper" | "paper-2" }) {
  return (
    <Section id={id} tone={tone}>
      <div className="grid gap-8 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-4">
          <Label n={n}>{label}</Label>
        </Reveal>
        <div className="md:col-span-8">
          <Reveal>
            <h2 id={`${id}-title`} className="max-w-[22ch] text-[clamp(1.85rem,3.6vw,3rem)] font-medium leading-[1.08] tracking-[-0.03em]">
              {title}
            </h2>
          </Reveal>
          <Reveal className={`mt-8 max-w-[62ch] ${prose}`}>{children}</Reveal>
        </div>
      </div>
    </Section>
  );
}

const PRINCIPLES = [
  ["Evidence before claims", "We test ideas against real data and modelled scenarios before relying on them, and say plainly what we don’t yet know."],
  ["Real conditions first", "Weak networks, aggressive battery saving, low-cost phones and many languages are design inputs from the start, not edge cases."],
  ["Privacy as a requirement", "We collect the minimum, design for consent and delete what we no longer need."],
  ["Knowledge that compounds", "Every product should leave the company more capable: shared methods, tests, tools and people."],
  ["Clear about where we are", "We describe our direction as a direction, and our results as results, and never blur the two."],
];

const FACTS: [string, ReactNode][] = [
  ["Legal name", company.legalName],
  ["Registered", `In India, in ${company.registeredYear}`],
  [
    "Registered office",
    <address key="office" className="not-italic">
      {company.registeredOffice.map((l) => (
        <span key={l} className="block">
          {l}
        </span>
      ))}
    </address>,
  ],
  ["What we do", "Software and AI/ML engineering: research-driven products and intelligent systems"],
  [
    "Products and initiatives",
    <>
      <a href="/work#resku" className={inline}>
        Resku
      </a>
      ,{" "}
      <a href="/work#resku-business" className={inline}>
        Resku Business
      </a>{" "}
      and{" "}
      <a href="/academy" className={inline}>
        BharatGrid Academy
      </a>
    </>,
  ],
  [
    "Contact",
    <>
      <a href={`mailto:${company.email}`} className={inline}>
        {company.email}
      </a>
      <span className="block">
        <a href={telHref} className={inline}>
          {company.phone}
        </a>
      </span>
    </>,
  ],
];

const QUESTIONS: [string, ReactNode][] = [
  [
    "What does BharatGrid Systems do?",
    <>
      BharatGrid Systems is an Indian software and AI/ML engineering company. It builds research-driven products and intelligent systems, and works
      towards the digital infrastructure that industries, institutions and essential services depend on. Its current work includes Resku, Resku
      Business and BharatGrid Academy.
    </>,
  ],
  ["Where is BharatGrid Systems based?", <>Its registered office is in SAS Nagar (Mohali), Punjab, India.</>],
  [
    "Is BharatGrid Systems a government or power-sector company?",
    <>No. BharatGrid Systems Private Limited is an independent, privately held software company. It is not part of any government body or power-sector organisation.</>,
  ],
  [
    "What is Resku?",
    <>
      Resku is a personal safety app built by BharatGrid Systems, with shared journeys, automatic crash detection, one-tap SOS and alerts that wait
      for signal. It is in testing ahead of public launch at{" "}
      <a href={company.reskuUrl} target="_blank" rel="noopener" className={inline}>
        reskuapp.com
      </a>
      .
    </>,
  ],
  [
    "What is BharatGrid Academy?",
    <>
      BharatGrid Academy is the company’s professional training and talent development initiative. Its first programme,{" "}
      <a href="/academy" className={inline}>
        {fellowship.name}
      </a>
      , begins on {fellowship.begins}.
    </>,
  ],
  [
    "How can I work with BharatGrid?",
    <>
      For partnerships and business enquiries, see{" "}
      <a href="/contact" className={inline}>
        Contact
      </a>
      . People who want to build a career with us start at{" "}
      <a href="/academy" className={inline}>
        BharatGrid Academy
      </a>
      .
    </>,
  ],
];

export default function About() {
  return (
    <Layout page="about">
      <PageIntro
        crumb="About"
        label="About BharatGrid Systems"
        title="An engineering company, built for the long term."
        lede={
          <p>
            {company.legalName} is an Indian software and AI/ML engineering company, registered in {company.registeredYear} with its registered
            office in SAS Nagar (Mohali), Punjab. We design, build and run software products and intelligent systems, and we treat the engineering
            behind them as research.
          </p>
        }
      />

      <Essay id="why" n="01" label="Why we exist" title="To help India build the future.">
        <p>
          India’s industries, institutions and essential services increasingly run on software. Too often, that software is built for conditions
          that don’t match how India actually works: steady networks, uniform devices, a single language, users who can always stop to type.
        </p>
        <p>
          We think the systems India depends on should start from Indian conditions and be engineered to a standard that institutions can rely on for
          decades. BharatGrid exists to build that capability: the engineering, the technology and the institutional knowledge behind it.
        </p>
      </Essay>

      <Essay id="intent" n="02" label="What we intend to build" title="Our products are where we begin." tone="paper-2">
        <p>
          Over the long term, we intend to work on the layers beneath applications: dependable platforms, intelligent systems and digital
          infrastructure that other organisations can build on. That is a direction, and a long one.
        </p>
        <p>
          Today we have two products in development and a training academy. Nothing on this site should be read as a claim that we have built
          national-scale systems. It is a description of where we are heading, and of why we build the way we do.
        </p>
        <p>
          <a href="/engineering" className={inline}>
            Engineering &amp; Research
          </a>{" "}
          sets out the work behind that direction, and{" "}
          <a href="/work" className={inline}>
            Our Work
          </a>{" "}
          the products it is in today.
        </p>
      </Essay>

      <Section id="principles">
        <SectionHead id="principles-title" n="03" label="How we work" title="Principles we hold ourselves to." />
        <ul className="mt-16 grid gap-x-12 gap-y-10 md:mt-20 md:grid-cols-2">
          {PRINCIPLES.map(([title, text], i) => (
            <Reveal as="li" key={title} delay={(i % 2) * 90} className="grid gap-3 border-t border-line-strong pt-6 sm:grid-cols-[3rem_1fr]">
              <span className="font-mono text-[12px] text-accent">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-[18px] font-medium tracking-[-0.015em]">{title}</h3>
                <p className="mt-2 text-[15.5px] leading-[1.7] text-body">{text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Essay id="people" n="04" label="People" title="We would rather develop people than only hire them." tone="paper-2">
        <p>
          BharatGrid Academy is how we find and develop the people who build the company. It trains people properly, gives them real responsibility,
          and is designed to bring them into the team. Its first programme, {fellowship.name}, is open to anyone who wants to grow in their career,
          whatever their degree or background.
        </p>
        <p>
          <a href="/academy" className={inline}>
            About BharatGrid Academy
          </a>
        </p>
      </Essay>

      <Section id="company">
        <SectionHead id="company-title" n="05" label="Company information" title="The facts." />
        <Reveal>
          <dl className="mt-14 border-b border-line md:mt-16">
            {FACTS.map(([k, v]) => (
              <div key={k} className="grid gap-2 border-t border-line py-5 md:grid-cols-12 md:gap-10">
                <dt className="text-[12px] font-semibold uppercase tracking-[0.14em] text-muted md:col-span-4 md:pt-1">{k}</dt>
                <dd className="text-[16px] leading-[1.65] text-ink md:col-span-8">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Section>

      <Section id="questions" tone="paper-2">
        <SectionHead id="questions-title" n="06" label="Questions" title="Common questions about BharatGrid." />
        <dl className="mt-14 md:mt-16">
          {QUESTIONS.map(([q, a]) => (
            <Reveal key={q} className="grid gap-3 border-t border-line-strong py-7 md:grid-cols-12 md:gap-10">
              <dt className="text-[17px] font-medium tracking-[-0.01em] md:col-span-4">{q}</dt>
              <dd className="max-w-[62ch] text-[16px] leading-[1.7] text-body md:col-span-8">{a}</dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      <section aria-labelledby="about-next-title" className="py-20 md:py-28">
        <Container className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Label>Next</Label>
          </div>
          <div className="md:col-span-8">
            <h2 id="about-next-title" className="max-w-[24ch] text-[clamp(1.5rem,2.6vw,2.1rem)] font-medium leading-[1.15] tracking-[-0.025em]">
              See what we work on, or get in touch.
            </h2>
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              <MoreLink href="/engineering">Engineering &amp; Research</MoreLink>
              <MoreLink href="/contact">Contact</MoreLink>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
