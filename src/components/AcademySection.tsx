import { ApplicationsProvider, useApplications } from "../academy/apply";
import { APPLY_URL, fellowship } from "../academy/config";
import { Reveal } from "./ui";

const FACTS: [string, string][] = [
  ["Duration", "Six months, from 1 January 2027"],
  ["Intake", "Ten members"],
  ["Outcome", "Ten full-time positions at BharatGrid"],
  ["Applications close", `${fellowship.closes}, ${fellowship.closesTime}`],
];

/** The home page's introduction to BharatGrid Academy; /academy has the rest. */
export function AcademySection() {
  return (
    <ApplicationsProvider>
      <section id="academy" aria-labelledby="academy-title" className="bg-ac-forest px-6 py-28 text-white sm:px-10 md:py-40 lg:py-48">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-ac-sage">BharatGrid Academy</p>
            <h2 id="academy-title" className="mt-6 max-w-3xl text-[clamp(2.1rem,4.4vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
              Professional education, inside a working company.
            </h2>
            <p className="mt-7 max-w-2xl text-[clamp(1.05rem,1.4vw,1.2rem)] leading-[1.7] text-white/80">
              BharatGrid Academy is our professional education and career development initiative. It exists to close the gap between academic
              education and real-world professional capability, by training people properly and then putting that training to work on real
              business.
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-16 border-t border-white/20 pt-12 md:mt-24 md:pt-16">
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-ac-sage">Inaugural programme</p>
                <h3 className="mt-5 font-display text-[clamp(2.6rem,5.6vw,4.6rem)] font-medium leading-[0.98] tracking-[-0.01em]">
                  Business Fellowship <span className="italic text-ac-sage">’27</span>
                </h3>
                <p className="mt-7 max-w-xl text-[17px] leading-[1.75] text-white/85">
                  A selective six-month fellowship for ten members: three months of intensive professional training, then three months of
                  real marketing and sales work inside BharatGrid. It is designed to lead to full-time roles for members who successfully
                  complete it. Selection is by interview, with no CV required.
                </p>
                <Actions />
              </div>
              <dl className="self-end border-t border-white/20 lg:col-span-5">
                {FACTS.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[9.5rem_1fr] gap-4 border-b border-white/15 py-4 text-[15px] leading-snug">
                    <dt className="pt-[2px] text-[12px] font-semibold uppercase tracking-[0.12em] text-white/55">{k}</dt>
                    <dd className="text-white">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>
    </ApplicationsProvider>
  );
}

function Actions() {
  const { open } = useApplications();
  return (
    <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-5">
      <a
        href="./academy"
        className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-4 text-[15px] font-medium text-ac-forest transition-colors hover:bg-ac-sage focus-visible:outline-white"
      >
        Explore the Fellowship
        <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">
          →
        </span>
      </a>
      {open ? (
        <a
          href={APPLY_URL}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 text-[15px] font-medium text-white underline decoration-white/40 underline-offset-[6px] hover:decoration-white focus-visible:outline-white"
        >
          Apply now
          <span aria-hidden="true">↗</span>
          <span className="sr-only"> (opens the application form in a new tab)</span>
        </a>
      ) : (
        <p className="text-[15px] text-white/70">Applications for the inaugural cohort have closed.</p>
      )}
    </div>
  );
}
