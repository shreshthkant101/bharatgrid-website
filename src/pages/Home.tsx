import { APPLICATIONS_CLOSE, fellowship } from "../academy/config";
import { company } from "../company";
import { Diagram } from "../components/Diagram";
import { Layout } from "../components/Layout";
import { Arrow, Container, External, Label, MoreLink, Reveal, Section, SectionHead, Status, TriRule } from "../components/ui";

const primary =
  "group inline-flex h-12 items-center gap-3 bg-ink px-6 text-[15px] font-medium text-paper transition-colors hover:bg-ink/85";

function Hero() {
  return (
    <section aria-labelledby="hero-title" className="pb-16 pt-14 md:pb-24 md:pt-24">
      <Container>
        <div className="flex items-center gap-4">
          <TriRule className="h-[3px] w-10" />
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-muted">BharatGrid Systems Private Limited · India</p>
        </div>
        <h1 id="hero-title" className="mt-10 max-w-[16ch] text-[clamp(2.6rem,6.6vw,5.6rem)] font-medium leading-[1.01] tracking-[-0.04em]">
          Engineering the next generation of India’s digital infrastructure.
        </h1>
        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12">
          <p className="max-w-[58ch] text-[clamp(1.1rem,1.6vw,1.3rem)] leading-[1.65] text-body md:col-span-7">
            BharatGrid Systems is an Indian software and AI/ML engineering company. We build research-driven products and intelligent systems,
            starting with our own, and work towards the systems that industries, institutions and essential services depend on.
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-5 md:col-span-5 md:justify-end md:self-start">
            <a href="/engineering" className={primary}>
              Our engineering
              <Arrow className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <MoreLink href="/about">About BharatGrid</MoreLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

const STAGES = [
  {
    when: "Today",
    text: "Two products in development, Resku and Resku Business. An engineering practice built on testing and evidence. And BharatGrid Academy, our training and hiring programme.",
  },
  {
    when: "Next",
    text: "Resku and Resku Business in public use, and BharatGrid Academy’s first cohort, from 1 January 2027.",
  },
  {
    when: "Direction",
    text: "Platforms, intelligent systems and, in time, digital infrastructure that institutions and essential services can build on.",
  },
];

function Direction() {
  return (
    <Section id="direction">
      <SectionHead
        id="direction-title"
        n="01"
        label="Our direction"
        title="Beyond applications. Towards infrastructure."
        intro={
          <>
            <p>
              India’s next decades will run on systems most people never see: software that coordinates transport, keeps people in touch when
              networks fail, moves information between institutions and supports essential services. Those systems have to work in Indian
              conditions, with patchy coverage, a wide range of phones and many languages, and they have to be trustworthy.
            </p>
            <p className="mt-5">
              That is the work we are preparing for. We start with products because products force engineering to meet reality. Each one teaches
              us something about sensing, reliability, data and people, and that knowledge stays with the company long after any single product.
            </p>
          </>
        }
      />
      <ol className="mt-20 grid gap-10 md:mt-28 md:grid-cols-3 md:gap-8">
        {STAGES.map((s, i) => (
          <Reveal as="li" key={s.when} delay={i * 90} className="border-t border-ink pt-6">
            <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-accent">{s.when}</p>
            <p className="mt-4 text-[16px] leading-[1.7] text-body">{s.text}</p>
          </Reveal>
        ))}
      </ol>
      <Reveal>
        <p className="mt-12 max-w-[62ch] text-[14px] leading-relaxed text-muted">
          We are early in this work. We describe our direction plainly so that it is never mistaken for something we have already built.
        </p>
      </Reveal>
    </Section>
  );
}

const AREAS = [
  {
    id: "sensing",
    title: "Sensing and event detection",
    text: "Recognising real events, such as a vehicle collision, from the motion sensors and GPS in an ordinary phone, and telling them apart from the everyday jolts that look similar.",
    today: "Crash detection in Resku, for people in vehicles and on foot",
  },
  {
    id: "weak-networks",
    title: "Systems for weak networks",
    text: "Software that keeps working when the network does not: alerts that wait on the phone and go out when signal returns, and maps of where coverage drops away.",
    today: "Offline-safe alerts and coverage mapping in Resku",
  },
  {
    id: "learning",
    title: "Privacy-preserving learning",
    text: "Collecting only what a model needs, with consent, delay and anonymity designed in, so systems can improve without becoming a record of people’s lives.",
    today: "Anonymous, consent-based training data for crash detection",
  },
  {
    id: "operations",
    title: "Operations platforms",
    text: "Software that runs real businesses, from bookings and dispatch to billing, built so that every change is validated and recorded, and so that AI assistance can work within limits people set.",
    today: "Resku Business, for passenger transport operators",
  },
];

function Engineering() {
  return (
    <Section id="engineering" tone="paper-2">
      <SectionHead
        id="engineering-title"
        n="02"
        label="What we work on"
        title="Engineering grounded in problems we are already solving."
        intro={<p>Each area below begins with work that exists in our products today. That is where our research questions come from.</p>}
      />
      <ul className="mt-20 grid gap-x-12 gap-y-14 md:mt-24 md:grid-cols-2">
        {AREAS.map((a, i) => (
          <Reveal as="li" key={a.id} delay={(i % 2) * 90} className="border-t border-line-strong pt-7">
            <h3 className="text-[clamp(1.25rem,1.8vw,1.5rem)] font-medium tracking-[-0.02em]">
              <a href={`/engineering#${a.id}`} className="hover:underline hover:decoration-line-strong hover:underline-offset-[6px]">
                {a.title}
              </a>
            </h3>
            <p className="mt-4 max-w-[52ch] text-[16px] leading-[1.7] text-body">{a.text}</p>
            <p className="mt-5 text-[13px] text-muted">
              <span className="font-mono uppercase tracking-[0.12em] text-accent">Today</span> · {a.today}
            </p>
          </Reveal>
        ))}
      </ul>
      <Reveal className="mt-16">
        <MoreLink href="/engineering">Engineering &amp; Research</MoreLink>
      </Reveal>
    </Section>
  );
}

function Work() {
  return (
    <Section id="work">
      <SectionHead
        id="work-title"
        n="03"
        label="Our work"
        title="Products are where we begin."
        intro={<p>They are the clearest evidence of our engineering, and the first of the things we intend to build.</p>}
      />
      <ul className="mt-20 grid gap-12 md:mt-24 md:grid-cols-3 md:gap-8">
        <Reveal as="li" className="flex flex-col border-t border-ink pt-7">
          <Status>Personal safety · in testing</Status>
          <h3 className="mt-5 text-[1.6rem] font-medium tracking-[-0.025em]">Resku</h3>
          <p className="mt-4 text-[16px] leading-[1.7] text-body">
            A safety app for families: shared journeys, automatic crash detection with a countdown to cancel, one-tap SOS, and alerts that wait
            for signal.
          </p>
          <div className="mt-auto flex flex-wrap gap-x-6 gap-y-3 pt-8 text-[15px]">
            <MoreLink href="/work#resku">The case study</MoreLink>
            <a href={company.reskuUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-muted hover:text-ink">
              reskuapp.com <External />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </Reveal>
        <Reveal as="li" delay={90} className="flex flex-col border-t border-ink pt-7">
          <Status>Transport operations · in development</Status>
          <h3 className="mt-5 text-[1.6rem] font-medium tracking-[-0.025em]">Resku Business</h3>
          <p className="mt-4 text-[16px] leading-[1.7] text-body">
            An operations platform for passenger transport operators: bookings, dispatch, duty records, invoicing and customer accounts in one
            system.
          </p>
          <div className="mt-auto pt-8">
            <MoreLink href="/work#resku-business">More about Resku Business</MoreLink>
          </div>
        </Reveal>
        <Reveal as="li" delay={180} className="flex flex-col border-t border-ink pt-7">
          <Status>
            <span data-closes={APPLICATIONS_CLOSE.toISOString()} data-closed="Talent · applications for 2027 have closed">
              Talent · applications open until {fellowship.closes}
            </span>
          </Status>
          <h3 className="mt-5 text-[1.6rem] font-medium tracking-[-0.025em]">BharatGrid Academy</h3>
          <p className="mt-4 text-[16px] leading-[1.7] text-body">
            How we find and develop people. Its first programme, {fellowship.name}, is 24 weeks of training and real work for ten members, designed
            to lead to full-time roles.
          </p>
          <div className="mt-auto pt-8">
            <MoreLink href="/academy">BharatGrid Academy</MoreLink>
          </div>
        </Reveal>
      </ul>
    </Section>
  );
}

const PRINCIPLES = [
  ["Evidence before claims", "We test ideas against real data and modelled scenarios before relying on them, and say plainly what we don’t yet know."],
  ["Real conditions first", "Weak networks, aggressive battery saving, low-cost phones and many languages are design inputs from the start, not edge cases."],
  ["Privacy as a requirement", "We collect the minimum, design for consent and delete what we no longer need."],
  ["Knowledge that compounds", "Every product should leave the company more capable: shared methods, tests, tools and people."],
];

function Principles() {
  return (
    <Section id="principles" tone="paper-2">
      <SectionHead id="principles-title" n="04" label="How we work" title="Principles we hold ourselves to." />
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
      <Reveal className="mt-14">
        <MoreLink href="/about">About BharatGrid</MoreLink>
      </Reveal>
    </Section>
  );
}

function Invitation() {
  return (
    <Section id="talk" tone="night">
      <Reveal className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <Label tone="dim">Work with us</Label>
        </div>
        <div className="md:col-span-8">
          <h2 id="talk-title" className="max-w-[22ch] text-[clamp(1.85rem,3.6vw,3rem)] font-medium leading-[1.1] tracking-[-0.03em]">
            If these are problems you care about, we would like to hear from you.
          </h2>
          <p className="mt-6 max-w-[58ch] text-[17px] leading-[1.7] text-night-dim">
            We welcome conversations with engineers, researchers, institutions and partners. People who want to build their careers with us start
            at BharatGrid Academy.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <a href="/contact" className="group inline-flex h-12 items-center gap-3 bg-paper px-6 text-[15px] font-medium text-ink transition-colors hover:bg-paper/85">
              Contact us
              <Arrow className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a href="/academy" className="text-[15px] font-medium text-paper underline decoration-paper/30 underline-offset-[6px] hover:decoration-paper">
              BharatGrid Academy
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export default function Home() {
  return (
    <Layout page="home">
      <Hero />
      <Container className="pb-24 md:pb-36">
        <Diagram />
      </Container>
      <Direction />
      <Engineering />
      <Work />
      <Principles />
      <Invitation />
    </Layout>
  );
}
