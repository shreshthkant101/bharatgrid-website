import type { ReactNode } from "react";
import { company } from "../company";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Reveal } from "../components/ui";
import { useReveal } from "../reveal";
import { ApplicationsProvider, ApplyButton, BrochureButton, Deadline, HeaderApply } from "./apply";
import { APPLY_URL, fellowship } from "./config";

/* ---------------------------------------------------------------- pieces */

function Label({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`font-label text-[12px] font-semibold uppercase tracking-[0.2em] text-ac-emerald ${className}`}>{children}</p>;
}

function Title({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <h2 id={id} className={`font-display text-[clamp(2.3rem,4.6vw,3.9rem)] font-medium leading-[1.04] tracking-[-0.015em] text-ac-charcoal ${className}`}>
      {children}
    </h2>
  );
}

function Band({
  id,
  tone = "warm",
  label,
  children,
  className = "",
}: {
  id?: string;
  tone?: "warm" | "grey" | "sage" | "forest";
  label?: string;
  children: ReactNode;
  className?: string;
}) {
  const bg = { warm: "bg-ac-warm", grey: "bg-ac-grey", sage: "bg-ac-sage", forest: "bg-ac-forest text-white" }[tone];
  return (
    <section id={id} aria-labelledby={id ? `${id}-title` : undefined} aria-label={label} className={`${bg} px-6 py-24 sm:px-10 md:py-32 lg:py-40 ${className}`}>
      <div className="mx-auto max-w-[1180px]">{children}</div>
    </section>
  );
}

const Rule = ({ className = "" }: { className?: string }) => <div aria-hidden="true" className={`h-px bg-ac-charcoal/15 ${className}`} />;

/* ---------------------------------------------------------------- content */

const GLANCE: [string, ReactNode][] = [
  ["Organiser", <>BharatGrid Academy, {fellowship.company}</>],
  ["Duration", <>24 weeks, January – June 2027</>],
  ["Programme begins", fellowship.begins],
  ["Intake", <>Ten members</>],
  ["Selection", <>Interview only. No CV required.</>],
  ["Outcome", <>Designed to lead to full-time roles at BharatGrid on successful completion</>],
];

const NUMBERS: { value: ReactNode; label: string }[] = [
  {
    value: (
      <>
        1,000<span className="ml-1 align-[0.12em] font-label text-[0.62em] font-normal text-ac-emerald">+</span>
      </>
    ),
    label: "Targeted applications",
  },
  { value: "10", label: "Fellowship selections" },
  {
    value: (
      <>
        24<span className="text-[0.42em] italic"> weeks</span>
      </>
    ),
    label: "Intensive programme",
  },
  { value: "10", label: "Full-time hiring positions" },
];

const JOURNEY = [
  {
    n: "01",
    title: "Learn",
    when: "January – March 2027",
    text: "12 weeks of intensive professional training: around 120 hours of structured sessions, practical exercises, simulations and evaluations.",
  },
  {
    n: "02",
    title: "Apply",
    when: "April – June 2027",
    text: "12 weeks inside BharatGrid’s marketing and sales operations, on real campaigns, clients and commercial work.",
  },
  {
    n: "03",
    title: "Build your career",
    when: "On completion",
    text: "Members who successfully complete the programme are intended to transition into full-time roles at BharatGrid.",
  },
];

const CAPABILITIES = [
  "Business and commercial fundamentals",
  "Marketing and customer acquisition",
  "Consumer and business psychology",
  "Professional communication",
  "Sales and business development",
  "Client relationships and negotiations",
  "Commercial thinking and execution",
];
const ROMAN = ["i", "ii", "iii", "iv", "v", "vi", "vii"];

const FORMAT = ["Interactive sessions", "Practical exercises", "Professional simulations", "Evaluations", "Direct feedback"];

const TEAMS = [
  {
    name: "Marketing Team",
    work: ["Marketing campaigns", "Market research", "Customer acquisition", "Lead generation", "Distribution", "Performance analysis", "Growth operations"],
    focus: "Bringing customers to the business, and measuring what works.",
  },
  {
    name: "Sales & Business Development Team",
    work: ["Prospecting", "Real client interactions", "Business development", "Sales meetings", "Follow-ups", "Negotiations", "Commercial conversions"],
    focus: "Turning conversations into clients, and clients into revenue.",
  },
];

const ENVIRONMENT = [
  ["Company management", "Both teams work inside BharatGrid, in a structured corporate environment under the company’s management."],
  ["Clear responsibilities", "Every member has defined responsibilities, owned and reviewed as in any professional role."],
  ["Performance expectations", "Work is measured against clear expectations. Results matter."],
];

const GAINS = [
  ["Practical capability", "Professional skills that transfer to any role in business, marketing or sales."],
  ["Structured learning", "A programme designed and run by an operating company, not a classroom alone."],
  ["Real-world exposure", "First-hand experience of marketing and business development as they actually happen."],
  ["Customers and live projects", "Work with actual customers on commercial projects that carry real outcomes."],
  ["Confidence and judgement", "Sharper communication and sounder professional judgement, built through practice and feedback."],
  ["Achievements you can show", "Specific, genuine accomplishments that strengthen every future job application."],
  ["How teams operate", "An inside view of how professional teams plan, collaborate, review and deliver."],
  ["Competitive experience", "Experience directly relevant to competitive roles in business, marketing and sales."],
  ["A full-time role", "The opportunity to transition into full-time employment at BharatGrid on successful completion."],
];

const QUALITIES = ["Ambition", "Potential", "Communication", "Curiosity", "Willingness to learn"];

const PROCESS = [
  ["Apply", "Submit the online application."],
  ["Review", "Applications are reviewed for interview shortlisting."],
  ["Interview", "Shortlisted candidates are invited to interview."],
  ["Selection", "Ten candidates are selected for the inaugural cohort."],
  ["Begin", `Selected members begin the programme on ${fellowship.begins}.`],
];

const TIMELINE = [
  ["January – March 2027", "Phase I: Intensive Professional Training"],
  ["April – June 2027", "Phase II: Corporate Immersion"],
  ["On completion", "Transition to full-time roles at BharatGrid"],
];

/* ---------------------------------------------------------------- sections */

function Hero() {
  return (
    <section aria-labelledby="fellowship-title" className="bg-ac-warm px-6 pb-24 pt-10 sm:px-10 md:pb-32 md:pt-14">
      <div className="mx-auto max-w-[1180px]">
        <Reveal className="flex flex-wrap items-baseline justify-between gap-3 border-b border-ac-charcoal/15 pb-5">
          <p className="font-label text-[12px] font-semibold uppercase tracking-[0.24em] text-ac-forest">BharatGrid Academy</p>
          <p className="font-label text-[12px] font-medium uppercase tracking-[0.2em] text-ac-slate">Inaugural cohort · 2027</p>
        </Reveal>

        <Reveal delay={60}>
          <h1
            id="fellowship-title"
            className="mt-12 font-display text-[clamp(2.75rem,11vw,8.6rem)] md:text-[clamp(3.3rem,9.6vw,8.6rem)] font-medium leading-[0.92] tracking-[-0.02em] text-ac-charcoal md:mt-14"
          >
            Business
            <br />
            Fellowship <span className="italic text-ac-emerald">’27</span>
          </h1>
        </Reveal>

        <div className="mt-12 grid gap-16 md:mt-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal delay={140}>
              <p className="max-w-[38rem] text-[clamp(1.12rem,1.5vw,1.3rem)] leading-[1.65] text-ac-charcoal/85">
                An intensive 24-week fellowship that prepares ten exceptional people for careers in business, marketing, sales and
                business development: rigorous professional training first, then real work inside an operating company.
              </p>
            </Reveal>
            <Reveal delay={200} className="mt-10">
              <div className="flex flex-wrap items-center gap-4">
                <ApplyButton className="w-full sm:w-auto" />
                <BrochureButton className="w-full sm:w-auto" />
              </div>
              <Deadline className="mt-6" />
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-10 max-w-[38rem] border-t border-ac-charcoal/12 pt-6 text-[16px] leading-[1.7] text-ac-slate">
                Not an internship, and not an online certificate. A selective pathway from training to employment, designed to lead to
                full-time roles at BharatGrid for members who successfully complete it.
              </p>
            </Reveal>
          </div>

          <Reveal as="div" delay={260} className="lg:col-span-5 lg:pl-8">
            <aside aria-label="The fellowship at a glance" className="border-t-2 border-ac-charcoal">
              <p className="pt-5 font-label text-[12px] font-semibold uppercase tracking-[0.2em] text-ac-charcoal">At a glance</p>
              <dl className="mt-4">
                {GLANCE.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[8.5rem_1fr] gap-4 border-b border-ac-charcoal/12 py-4 text-[15px] leading-snug">
                    <dt className="font-label text-[11.5px] font-semibold uppercase tracking-[0.14em] text-ac-slate pt-[3px]">{k}</dt>
                    <dd className="text-ac-charcoal">{v}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Numbers() {
  return (
    <section aria-label="The fellowship in numbers" className="bg-ac-warm px-6 sm:px-10">
      <div className="mx-auto max-w-[1180px] border-y border-ac-charcoal/15">
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {NUMBERS.map((n, i) => (
            <Reveal
              key={n.label}
              delay={i * 70}
              className={`flex flex-col-reverse justify-end gap-3 py-10 sm:py-14 ${i % 2 === 1 ? "pl-6 sm:pl-10" : "pr-6 sm:pr-10"} ${
                i % 2 === 1 ? "border-l border-ac-charcoal/15" : ""
              } ${i >= 2 ? "border-t border-ac-charcoal/15 lg:border-t-0" : ""} lg:px-10 lg:first:pl-0 ${i === 2 ? "lg:border-l" : ""}`}
            >
              <dt className="font-label text-[11.5px] font-semibold uppercase tracking-[0.16em] text-ac-slate">{n.label}</dt>
              <dd className="font-display text-[clamp(3rem,6vw,5rem)] font-medium leading-none tracking-[-0.02em] text-ac-charcoal">{n.value}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
      <p className="mx-auto max-w-[1180px] py-5 text-[13px] text-ac-slate">
        1,000+ is our application target for the inaugural cohort. Ten candidates will be selected.
      </p>
    </section>
  );
}

function AboutAcademy() {
  return (
    <Band id="academy" tone="grey">
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <Label>BharatGrid Academy</Label>
          <Title id="academy-title" className="mt-6">
            Where education meets the work itself.
          </Title>
        </Reveal>
        <Reveal delay={100} className="space-y-6 text-[clamp(1.05rem,1.35vw,1.18rem)] leading-[1.75] text-ac-charcoal/85 lg:col-span-6 lg:col-start-7">
          <p>
            BharatGrid Academy is the professional education and career development initiative of {fellowship.company} It exists to close the
            gap between academic education and real-world professional capability.
          </p>
          <p>
            Its method is simple to state and demanding to deliver: train people properly, then put that training to work inside an operating
            company, with real teams, real clients and real commercial responsibility.
          </p>
          <p>
            Business Fellowship ’27 is the Academy’s inaugural programme. Its purpose is to develop capable professionals who are ready for
            full-time employment.
          </p>
        </Reveal>
      </div>
    </Band>
  );
}

function Journey() {
  return (
    <Band id="programme" tone="warm">
      <Reveal>
        <Label>The programme</Label>
        <Title id="programme-title" className="mt-6 max-w-3xl">
          24 weeks. Three stages. One direction.
        </Title>
      </Reveal>
      <ol className="mt-16 grid gap-12 md:mt-24 md:grid-cols-3 md:gap-10">
        {JOURNEY.map((j, i) => (
          <Reveal as="li" key={j.n} delay={i * 90} className="border-t border-ac-charcoal pt-7">
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-label text-[13px] font-semibold tracking-[0.12em] text-ac-emerald">{j.n}</span>
              <span className="font-label text-[11.5px] font-semibold uppercase tracking-[0.14em] text-ac-slate">{j.when}</span>
            </div>
            <h3 className="mt-8 font-display text-[clamp(1.9rem,2.6vw,2.4rem)] font-medium leading-tight text-ac-charcoal">{j.title}</h3>
            <p className="mt-4 text-[16px] leading-[1.7] text-ac-charcoal/80">{j.text}</p>
          </Reveal>
        ))}
      </ol>
    </Band>
  );
}

function Training() {
  return (
    <Band id="training" tone="grey">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-5">
          <Label>Phase I · January – March 2027</Label>
          <Title id="training-title" className="mt-6">
            Intensive Professional Training
          </Title>
          <p className="mt-8 text-[17px] leading-[1.75] text-ac-charcoal/85">
            All ten members complete approximately 120 hours of structured professional training over 12 weeks. The training is built to
            develop capability, not just knowledge: every area is taught, practised, evaluated and reviewed.
          </p>
          <div className="mt-10 flex items-baseline gap-4 border-t border-ac-charcoal/15 pt-8">
            <span className="font-display text-[4.2rem] font-medium leading-none text-ac-charcoal">~120</span>
            <span className="font-label text-[11.5px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-ac-slate">
              hours of structured
              <br />
              training over 12 weeks
            </span>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-3 gap-y-2 text-[14px] text-ac-charcoal/80">
            {FORMAT.map((f, i) => (
              <li key={f} className="flex items-center gap-3">
                {f}
                {i < FORMAT.length - 1 && <span aria-hidden="true" className="h-1 w-1 rounded-full bg-ac-emerald" />}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <p className="font-label text-[12px] font-semibold uppercase tracking-[0.2em] text-ac-charcoal">Capabilities developed</p>
          </Reveal>
          <ol className="mt-6 border-t border-ac-charcoal">
            {CAPABILITIES.map((c, i) => (
              <Reveal as="li" key={c} delay={i * 40} className="flex items-baseline gap-6 border-b border-ac-charcoal/12 py-5">
                <span className="w-8 shrink-0 font-display text-[1.05rem] italic text-ac-emerald">{ROMAN[i]}</span>
                <span className="text-[17px] text-ac-charcoal">{c}</span>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-10 border-l-2 border-ac-crimson pl-6">
            <p className="text-[15.5px] leading-[1.7] text-ac-charcoal/85">
              This is a demanding programme, and it expects serious commitment. Members are held to professional standards from the first week.
              The detailed curriculum is shared with selected members.
            </p>
          </Reveal>
        </div>
      </div>
    </Band>
  );
}

function Immersion() {
  return (
    <Band id="corporate-experience" tone="warm">
      <div className="grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <Label>Phase II · April – June 2027</Label>
          <Title id="corporate-experience-title" className="mt-6">
            Corporate Immersion
          </Title>
        </Reveal>
        <Reveal delay={100} className="lg:col-span-6">
          <p className="text-[17px] leading-[1.75] text-ac-charcoal/85 lg:mt-12">
            For the second half of the programme, all ten members move into BharatGrid’s working environment. They are divided into two teams
            and take on real responsibilities: actual campaigns, actual clients and actual commercial operations. The aim is experience, not
            theory.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-px border border-ac-charcoal/15 bg-ac-charcoal/15 md:mt-24 lg:grid-cols-2">
        {TEAMS.map((t, i) => (
          <Reveal key={t.name} delay={i * 100} className="flex flex-col bg-ac-warm p-8 sm:p-10 lg:p-12">
            <p className="font-label text-[11.5px] font-semibold uppercase tracking-[0.18em] text-ac-slate">Team {i === 0 ? "I" : "II"}</p>
            <h3 className="mt-4 font-display text-[clamp(1.8rem,2.6vw,2.35rem)] font-medium leading-tight text-ac-charcoal lg:min-h-[2.5em]">{t.name}</h3>
            <p className="mt-8 font-label text-[11.5px] font-semibold uppercase tracking-[0.16em] text-ac-charcoal">The work</p>
            <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {t.work.map((w) => (
                <li key={w} className="flex items-baseline gap-3 text-[15.5px] text-ac-charcoal/85">
                  <span aria-hidden="true" className="relative top-[-2px] h-[5px] w-[5px] shrink-0 bg-ac-emerald" />
                  {w}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-10">
              <div className="border-t border-ac-charcoal/15 pt-7">
                <p className="font-label text-[11.5px] font-semibold uppercase tracking-[0.16em] text-ac-charcoal">The focus</p>
                <p className="mt-3 font-display text-[1.45rem] italic leading-snug text-ac-forest">{t.focus}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-3">
        {ENVIRONMENT.map(([title, text], i) => (
          <Reveal key={title} delay={i * 80} className="border-t border-ac-charcoal/15 pt-6">
            <h3 className="font-label text-[13px] font-semibold uppercase tracking-[0.12em] text-ac-charcoal">{title}</h3>
            <p className="mt-3 text-[15.5px] leading-[1.7] text-ac-charcoal/80">{text}</p>
          </Reveal>
        ))}
      </div>
    </Band>
  );
}

function Employment() {
  return (
    <Band id="employment" tone="forest">
      <div className="grid gap-14 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-7">
          <p className="font-label text-[12px] font-semibold uppercase tracking-[0.2em] text-ac-sage">Full-time employment</p>
          <h2 id="employment-title" className="mt-6 font-display text-[clamp(2.6rem,6vw,5.2rem)] font-medium leading-[1] tracking-[-0.015em]">
            Ten members.
            <br />
            <span className="italic text-ac-sage">Ten full-time positions.</span>
          </h2>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-5">
          <p className="text-[17px] leading-[1.75] text-white/85">
            The fellowship is designed as a pathway into employment, not a certificate to collect. Upon successful completion of the programme,
            all ten members are intended to transition into full-time roles at BharatGrid.
          </p>
          <div className="mt-10">
            <ApplyButton label="Apply for the Fellowship" variant="light" />
            <Deadline tone="light" className="mt-6" />
          </div>
        </Reveal>
      </div>
    </Band>
  );
}

function Career() {
  return (
    <Band id="career" tone="warm">
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <Label>Why this fellowship matters</Label>
          <Title id="career-title" className="mt-6">
            The distance between a degree and a career.
          </Title>
        </Reveal>
        <Reveal delay={100} className="space-y-6 text-[clamp(1.05rem,1.35vw,1.18rem)] leading-[1.75] text-ac-charcoal/85 lg:col-span-6 lg:col-start-7">
          <p>
            Many students graduate with sound theory and very little experience of how businesses actually work: winning and keeping customers,
            carrying professional responsibility, and delivering results that can be measured.
          </p>
          <p>
            That experience is usually learned slowly, on the job, after the first offer. Business Fellowship ’27 is designed to build it
            deliberately: a structured programme, backed by an operating company, that ends with real work to show for it and a pathway into
            a full-time role.
          </p>
        </Reveal>
      </div>

      <ol className="mt-16 grid gap-x-12 gap-y-12 border-t border-ac-charcoal pt-12 sm:grid-cols-2 md:mt-24 lg:grid-cols-3">
        {GAINS.map(([title, text], i) => (
          <Reveal as="li" key={title} delay={(i % 3) * 70}>
            <span className="font-label text-[12px] font-semibold tracking-[0.12em] text-ac-emerald">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-4 font-display text-[1.6rem] font-medium leading-snug text-ac-charcoal">{title}</h3>
            <p className="mt-3 text-[15.5px] leading-[1.7] text-ac-charcoal/80">{text}</p>
          </Reveal>
        ))}
      </ol>
    </Band>
  );
}

function Selection() {
  return (
    <Band id="selection" tone="grey">
      <Reveal>
        <Label>Selection & admissions</Label>
        <h2 id="selection-title" className="sr-only">
          Selection and admissions
        </h2>
        <blockquote className="mt-8 max-w-4xl">
          <p className="font-display text-[clamp(2.2rem,4.8vw,4.2rem)] font-medium italic leading-[1.08] tracking-[-0.01em] text-ac-charcoal">
            <span className="text-ac-crimson">“</span>We don’t care about your CV. We care about what you’re capable of.
            <span className="text-ac-crimson">”</span>
          </p>
        </blockquote>
      </Reveal>

      <div className="mt-16 grid gap-16 md:mt-24 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-[17px] leading-[1.75] text-ac-charcoal/85">
              Selection is by interview alone. We do not ask for a CV, an entrance examination or previous work experience, and academic scores
              are not the measure. We are looking for:
            </p>
            <ul className="mt-8 border-t border-ac-charcoal">
              {QUALITIES.map((q) => (
                <li key={q} className="border-b border-ac-charcoal/12 py-4 font-display text-[1.45rem] text-ac-charcoal">
                  {q}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80} className="mt-12 grid grid-cols-[auto_1fr] items-center gap-6">
            <span className="font-display text-[5.5rem] font-medium leading-none text-ac-forest">10</span>
            <p className="text-[15.5px] leading-[1.65] text-ac-charcoal/85">
              The inaugural cohort is limited to ten members. It is open to anyone who wants to grow in their career.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <p className="font-label text-[12px] font-semibold uppercase tracking-[0.2em] text-ac-charcoal">The process</p>
          </Reveal>
          <ol className="mt-6 border-t border-ac-charcoal">
            {PROCESS.map(([step, text], i) => (
              <Reveal as="li" key={step} delay={i * 60} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-ac-charcoal/12 py-6">
                <span className="font-display text-[1.6rem] leading-none text-ac-emerald">{i + 1}</span>
                <div>
                  <h3 className="font-label text-[13px] font-semibold uppercase tracking-[0.12em] text-ac-charcoal">{step}</h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-ac-charcoal/85">{text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <ApplyButton />
            <p className="text-[14px] text-ac-slate">No CV. No entrance examination. One interview.</p>
          </Reveal>
        </div>
      </div>
    </Band>
  );
}

function Dates() {
  return (
    <Band id="dates" tone="warm">
      <Reveal>
        <Label>Important dates</Label>
        <Title id="dates-title" className="mt-6">
          Mark the calendar.
        </Title>
      </Reveal>
      <div className="mt-16 grid gap-px border border-ac-charcoal/15 bg-ac-charcoal/15 md:mt-20 md:grid-cols-2">
        <Reveal className="bg-ac-warm p-8 sm:p-12">
          <p className="flex items-center gap-2 font-label text-[11.5px] font-semibold uppercase tracking-[0.18em] text-ac-crimson">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-ac-crimson" />
            Applications close
          </p>
          <p className="mt-6 font-display text-[clamp(2.2rem,3.6vw,3.1rem)] font-medium leading-none text-ac-charcoal">
            <time dateTime="2026-11-30T23:59+05:30">30 November 2026</time>
          </p>
          <p className="mt-4 text-[16px] text-ac-charcoal/80">11:59 PM, Indian Standard Time</p>
        </Reveal>
        <Reveal delay={100} className="bg-ac-warm p-8 sm:p-12">
          <p className="font-label text-[11.5px] font-semibold uppercase tracking-[0.18em] text-ac-emerald">Programme begins</p>
          <p className="mt-6 font-display text-[clamp(2.2rem,3.6vw,3.1rem)] font-medium leading-none text-ac-charcoal">
            <time dateTime="2027-01-01">1 January 2027</time>
          </p>
          <p className="mt-4 text-[16px] text-ac-charcoal/80">The inaugural cohort’s first day</p>
        </Reveal>
      </div>
      <ol className="mt-14 grid gap-8 md:grid-cols-3">
        {TIMELINE.map(([when, what], i) => (
          <Reveal as="li" key={when} delay={i * 60} className="border-t border-ac-charcoal/25 pt-5">
            <p className="font-label text-[11.5px] font-semibold uppercase tracking-[0.14em] text-ac-charcoal">{when}</p>
            <p className="mt-2 text-[14.5px] leading-relaxed text-ac-slate">{what}</p>
          </Reveal>
        ))}
      </ol>
    </Band>
  );
}

function FinalCall() {
  return (
    <Band id="apply" tone="sage">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-7">
          <Label className="text-ac-forest">Business Fellowship ’27</Label>
          <h2 id="apply-title" className="mt-6 font-display text-[clamp(2.8rem,6.6vw,5.6rem)] font-medium leading-[0.98] tracking-[-0.02em] text-ac-charcoal">
            Become one of <span className="italic text-ac-forest">ten.</span>
          </h2>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-5">
          <p className="text-[17px] leading-[1.75] text-ac-charcoal/85">
            If you are ambitious, curious and ready to be held to a professional standard, we would like to meet you. The application is a
            single online form; selection is a single interview.
          </p>
          <div className="mt-10">
            <ApplyButton label="Apply for the Fellowship" />
            <Deadline className="mt-6" />
            <p className="mt-6 text-[13.5px] leading-relaxed text-ac-slate">
              The application opens in Google Forms, in a new tab. Questions about the fellowship:{" "}
              <a href={`mailto:${company.email}?subject=Business%20Fellowship%20%E2%80%9927`} className="text-ac-forest underline underline-offset-4">
                {company.email}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </Band>
  );
}

/* ---------------------------------------------------------------- page */

const structuredData = () =>
  JSON.stringify({
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    name: fellowship.name.replace("’", "'"),
    description:
      "An intensive 24-week professional fellowship by BharatGrid Academy: 12 weeks of professional training followed by 12 weeks of corporate experience in marketing or sales, with full-time roles at BharatGrid for members who successfully complete it.",
    url: fellowship.url,
    provider: {
      "@type": "Organization",
      name: "BharatGrid Academy",
      parentOrganization: { "@type": "Organization", name: company.legalName, url: company.url },
    },
    timeToComplete: "P24W",
    startDate: "2027-01-01",
    applicationDeadline: "2026-11-30",
    maximumEnrollment: fellowship.selections,
    occupationalCategory: ["Marketing", "Sales", "Business Development"],
    potentialAction: { "@type": "ApplyAction", target: APPLY_URL },
  }).replace(/</g, "\\u003c");

export default function Academy() {
  useReveal();
  return (
    <ApplicationsProvider>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-ac-forest px-4 py-2 text-sm text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-3"
      >
        Skip to content
      </a>
      <Header page="academy" action={<HeaderApply />} />
      <main id="main" className="bg-ac-warm font-sans text-ac-charcoal">
        <Hero />
        <Numbers />
        <AboutAcademy />
        <Journey />
        <Training />
        <Immersion />
        <Employment />
        <Career />
        <Selection />
        <Dates />
        <FinalCall />
      </main>
      <Footer page="academy" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData() }} />
    </ApplicationsProvider>
  );
}
