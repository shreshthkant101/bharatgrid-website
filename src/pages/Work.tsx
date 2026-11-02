import type { ReactNode } from "react";
import { APPLICATIONS_CLOSE, APPLY_URL, BROCHURE, fellowship } from "../academy/config";
import { company } from "../company";
import { Layout } from "../components/Layout";
import { Arrow, Container, External, Label, MoreLink, PageIntro, Reveal, Status } from "../components/ui";

const host = company.reskuUrl.replace(/^https?:\/\//, "");
const prose = "space-y-5 text-[clamp(1.02rem,1.3vw,1.125rem)] leading-[1.8] text-body";

const PRINCIPLES = [
  ["Automatic, not manual", "The most important alert should not depend on someone being able to press a button."],
  ["Family first", "Alerts go to the people who know the person, and who can act immediately."],
  ["Built for Indian conditions", "Patchy networks, potholes and speed breakers, and the full range of phones people actually use."],
  ["Private by design", "Share journeys and moments of need, not a permanent record of someone’s day."],
  ["Calm by default", "Quiet in everyday use, so that when an alert does arrive, it is taken seriously."],
];

const FEATURES = [
  ["Circles", "The people who look out for each other share their location and can see one another at a glance."],
  ["Journeys", "Head out, and your circle can follow along live and is told the moment you arrive."],
  ["Crash detection", "Motion sensors and GPS recognise the signature of a collision. A short countdown lets the person cancel; if they don’t, their contacts are alerted with their location."],
  ["One-tap SOS", "Help can be sent with a single tap, including straight from the lock screen."],
  ["Made for weak signal", "Alerts wait on the phone and go out as soon as there is signal, and known no-signal stretches are flagged before you reach them."],
  ["Private by design", "Saved places stay on the person’s own phone, and what is shared stays in their hands."],
];

const OUTCOMES = [
  ["After a crash", "Family finds out only when someone calls them.", "If the countdown isn’t cancelled, contacts are alerted with a location automatically."],
  ["Getting home", "“Call me when you reach.”", "The circle is told on arrival, without anyone having to ask."],
  ["Out of signal", "The message waits until the person thinks to try again.", "The alert waits on the phone and is sent as soon as signal returns."],
  ["Asking for help", "Unlock the phone, find a contact, make a call.", "One tap, from the lock screen."],
];

const BUSINESS = [
  ["Bookings and enquiries", "From an enquiry and a quote to a confirmed booking, with the customer’s history in one place."],
  ["Dispatch", "Assign vehicles and drivers, and follow each duty from start to finish."],
  ["Duty records", "The steps of each duty and its slip, recorded as the work happens."],
  ["Invoicing and payments", "Invoices raised from completed work, and payments recorded against them."],
  ["Customer accounts", "Companies and the people who travel for them, with billing and credit in view."],
  ["Roles and access", "Each member of the team sees and does only what their role allows."],
];

const label = "text-[12px] font-semibold uppercase tracking-[0.16em]";
const mobileLabel =
  "before:mb-1 before:block before:text-[11px] before:font-semibold before:uppercase before:tracking-[0.16em] before:content-[attr(data-label)] md:before:hidden";

function Chapter({ n, label: name, title, children }: { n: string; label: string; title: string; children: ReactNode }) {
  return (
    <article className="grid gap-8 border-t border-line py-16 md:grid-cols-12 md:gap-10 md:py-24">
      <Reveal className="md:col-span-4">
        <div className="md:sticky md:top-28">
          <p className="font-mono text-[12px] text-resku">{n}</p>
          <h3 className="mt-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ink">{name}</h3>
        </div>
      </Reveal>
      <div className="md:col-span-8">
        <Reveal>
          <p className="max-w-[26ch] text-[clamp(1.45rem,2.6vw,2.1rem)] font-medium leading-[1.2] tracking-[-0.025em]">{title}</p>
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </article>
  );
}

function Resku() {
  return (
    <section id="resku" aria-labelledby="resku-title" className="py-24 md:py-32">
      <Container>
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <Label n="01">Product</Label>
          </div>
          <div className="md:col-span-8">
            <a href={company.reskuUrl} target="_blank" rel="noopener" className="inline-block" aria-label={`Resku: visit ${host} (opens in a new tab)`}>
              <img src="/resku-wordmark.png" alt="Resku" width={560} height={171} loading="lazy" decoding="async" className="h-11 w-auto md:h-14" />
            </a>
            <div className="mt-8">
              <Status>Personal safety · in testing ahead of public launch</Status>
            </div>
            <h2 id="resku-title" className="mt-5 max-w-[20ch] text-[clamp(1.85rem,3.6vw,3rem)] font-medium leading-[1.08] tracking-[-0.03em]">
              Resku: the people closest to you should know first.
            </h2>
            <p className="mt-6 max-w-[60ch] text-[clamp(1.02rem,1.3vw,1.125rem)] leading-[1.75] text-body">
              Resku is the first product built by BharatGrid Systems: a personal safety app for individuals and families. This is the problem it was
              built to solve, and how we approached it. The engineering behind it is described on{" "}
              <a href="/engineering" className="text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink">
                Engineering &amp; Research
              </a>
              .
            </p>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <Chapter n="1.1" label="The problem" title="Help often begins with a phone call that never gets made.">
            <Reveal className={prose}>
              <p>
                When something goes wrong on the road, whether a collision, a breakdown on an empty highway or a journey that runs late into the night,
                the first minutes matter most. Indian law recognises this as the golden hour: the first hour after a traumatic injury, when prompt
                medical care is most likely to prevent death.
              </p>
              <p>
                Yet in those minutes, the people who would act fastest are usually the last to know. Someone who is injured, shaken or out of signal
                cannot always make a call, and families are left waiting for a message that says they have reached.
              </p>
            </Reveal>
            <Reveal className="mt-12 border-l-2 border-resku bg-paper-2 p-8 md:p-10">
              <p className="text-[clamp(2.5rem,5.5vw,4rem)] font-medium leading-none tracking-[-0.04em] text-resku">1,72,890</p>
              <p className="mt-4 max-w-md text-[17px] leading-[1.6] text-ink">people lost their lives in road accidents in India in 2023, about 474 every day.</p>
              <p className="mt-5 text-[13px] text-muted">
                Source: Ministry of Road Transport and Highways, <cite className="not-italic">Road Accidents in India 2023</cite>.
              </p>
            </Reveal>
          </Chapter>

          <Chapter n="1.2" label="The situation" title="A gap between the moment of need and the people who can respond.">
            <Reveal className={prose}>
              <p>
                Families already look out for one another in informal ways: a call before leaving, a location shared on a messaging app, a request to
                text on arrival. Each depends on someone remembering, having signal and being able to type.
              </p>
              <p>
                Formal assistance exists, from emergency numbers to roadside assistance programmes, but it begins only once someone asks for it. Our
                research into roadside breakdowns kept returning to the same pattern: long waits, unclear responsibility, and people left to manage
                alone, often far from home and late at night.
              </p>
              <p>
                Indian conditions add their own difficulties. Coverage drops out on highways and in the hills, phones aggressively close apps to save
                battery, and everyday potholes and speed breakers produce the kind of jolts that confuse safety systems designed for other roads.
              </p>
            </Reveal>
          </Chapter>

          <Chapter n="1.3" label="What we planned" title="Start with the people who care most, and remove the need to ask.">
            <Reveal className={prose}>
              <p>
                We set out to build a safety net that begins with a person’s own circle of family and close contacts, and that keeps working when the
                person cannot reach their phone. Five principles shaped every decision:
              </p>
            </Reveal>
            <ol className="mt-10">
              {PRINCIPLES.map(([title, text], i) => (
                <Reveal as="li" key={title} delay={i * 60} className="grid gap-2 border-t border-line py-6 sm:grid-cols-[3rem_1fr]">
                  <span className="font-mono text-[12px] text-resku">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="text-[17px] font-medium tracking-[-0.01em]">{title}</p>
                    <p className="mt-1.5 text-[15.5px] leading-[1.7] text-body">{text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </Chapter>

          <Chapter n="1.4" label="What we built" title="One app for staying close, and for the moments that matter.">
            <ul className="grid gap-10 sm:grid-cols-2">
              {FEATURES.map(([title, text], i) => (
                <Reveal as="li" key={title} delay={(i % 2) * 80}>
                  <span aria-hidden="true" className="block h-[2px] w-8 bg-resku" />
                  <p className="mt-5 text-[18px] font-medium tracking-[-0.015em]">{title}</p>
                  <p className="mt-2 text-[15.5px] leading-[1.7] text-body">{text}</p>
                </Reveal>
              ))}
            </ul>
          </Chapter>

          <Chapter n="1.5" label="How it helps" title="From waiting for a phone call to knowing within moments.">
            <Reveal>
              <table className="block w-full text-left md:table">
                <caption className="sr-only">Everyday moments, before and with Resku</caption>
                <thead className="hidden md:table-header-group">
                  <tr>
                    <th scope="col" className={`pb-5 ${label} text-muted`}>
                      <span className="sr-only">Moment</span>
                    </th>
                    <th scope="col" className={`pb-5 ${label} text-muted`}>
                      Before
                    </th>
                    <th scope="col" className={`pb-5 ${label} text-resku`}>
                      With Resku
                    </th>
                  </tr>
                </thead>
                <tbody className="block md:table-row-group">
                  {OUTCOMES.map(([moment, before, after]) => (
                    <tr key={moment} className="block border-t border-line py-6 md:table-row md:py-0">
                      <th scope="row" className="block pb-3 text-[16px] font-medium md:table-cell md:w-[24%] md:py-6 md:pr-8 md:align-top">
                        {moment}
                      </th>
                      <td data-label="Before" className={`block pb-3 text-[15.5px] leading-[1.65] text-muted md:table-cell md:w-[34%] md:py-6 md:pr-8 md:align-top ${mobileLabel}`}>
                        {before}
                      </td>
                      <td data-label="With Resku" className={`block text-[15.5px] leading-[1.65] text-ink before:text-resku md:table-cell md:py-6 md:align-top ${mobileLabel}`}>
                        {after}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
            <Reveal className="mt-12">
              <a
                href={company.reskuUrl}
                target="_blank"
                rel="noopener"
                className="group inline-flex h-12 items-center gap-2.5 bg-resku px-6 text-[15px] font-medium text-white transition-opacity hover:opacity-90"
              >
                Visit {host}
                <External className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </Reveal>
          </Chapter>
        </div>
      </Container>
    </section>
  );
}

function Business() {
  return (
    <section id="resku-business" aria-labelledby="resku-business-title" className="border-t border-line bg-paper-2 py-24 md:py-32">
      <Container>
        <Reveal className="grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <Label n="02">Product</Label>
          </div>
          <div className="md:col-span-8">
            <Status>Transport operations · in development</Status>
            <h2 id="resku-business-title" className="mt-5 max-w-[22ch] text-[clamp(1.85rem,3.6vw,3rem)] font-medium leading-[1.08] tracking-[-0.03em]">
              Resku Business: one system for running a transport operation.
            </h2>
            <div className="mt-6 max-w-[60ch] space-y-5 text-[clamp(1.02rem,1.3vw,1.125rem)] leading-[1.75] text-body">
              <p>
                Resku Business is an operations platform for passenger transport operators. It brings the day-to-day work of an operation, which is
                often spread across calls, messages, registers and spreadsheets, into one system that every member of the team works from.
              </p>
              <p>
                It is built on a neutral core, with the rules that differ between countries kept separately, so that it can serve operators in India
                and beyond. Its architecture is described on{" "}
                <a href="/engineering#operations" className="text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink">
                  Engineering &amp; Research
                </a>
                .
              </p>
            </div>
          </div>
        </Reveal>
        <ul className="mt-16 grid gap-x-10 gap-y-10 sm:grid-cols-2 md:mt-20 md:pl-[calc(33.333%+0.833rem)]">
          {BUSINESS.map(([title, text], i) => (
            <Reveal as="li" key={title} delay={(i % 2) * 80} className="border-t border-line-strong pt-5">
              <p className="text-[17px] font-medium tracking-[-0.01em]">{title}</p>
              <p className="mt-2 text-[15.5px] leading-[1.7] text-body">{text}</p>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-14 md:pl-[calc(33.333%+0.833rem)]">
          <p className="max-w-[58ch] text-[15.5px] leading-[1.7] text-body">
            Transport operators who would like to hear when Resku Business is ready can write to{" "}
            <a href={`mailto:${company.email}?subject=Resku%20Business`} className="text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink">
              {company.email}
            </a>
            .
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

function Academy() {
  return (
    <section id="academy" aria-labelledby="academy-title" className="bg-ac-forest py-24 text-white md:py-32">
      <Container>
        <Reveal className="grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <p className="flex items-baseline gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ac-sage">
              <span className="font-mono font-normal tracking-normal">03</span>Initiative
            </p>
          </div>
          <div className="md:col-span-8">
            <p className="inline-flex items-center gap-2 text-[12px] font-medium text-ac-sage">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-saffron" />
              <span data-closes={APPLICATIONS_CLOSE.toISOString()} data-closed="Talent development · applications for 2027 have closed">
                Talent development · applications open until {fellowship.closes}
              </span>
            </p>
            <h2 id="academy-title" className="mt-5 max-w-[22ch] text-[clamp(1.85rem,3.6vw,3rem)] font-medium leading-[1.08] tracking-[-0.03em]">
              BharatGrid Academy: how we find and develop people.
            </h2>
            <div className="mt-6 max-w-[60ch] space-y-5 text-[clamp(1.02rem,1.3vw,1.125rem)] leading-[1.75] text-white/80">
              <p>
                BharatGrid Academy is our professional training and talent development initiative. It trains people properly, puts that training to
                work on real business, and brings them into the company.
              </p>
              <p>
                Its first programme, {fellowship.name}, is 24 weeks for ten members: 12 weeks of intensive professional training, then 12 weeks of
                real marketing and sales work inside BharatGrid, designed to lead to full-time roles for members who successfully complete it.
                Selection is by interview, with no CV required. The cohort begins on {fellowship.begins}.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
              <a href="/academy" className="group inline-flex h-12 items-center gap-3 bg-white px-6 text-[15px] font-medium text-ac-forest transition-colors hover:bg-ac-sage">
                Explore the Fellowship
                <Arrow className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener"
                data-hide-after={APPLICATIONS_CLOSE.toISOString()}
                className="inline-flex items-center gap-1.5 text-[15px] font-medium text-white underline decoration-white/40 underline-offset-[6px] hover:decoration-white"
              >
                Apply <External />
                <span className="sr-only"> (opens the application form in a new tab)</span>
              </a>
              <a href={BROCHURE.href} download={BROCHURE.file} className="text-[15px] text-white/80 underline decoration-white/30 underline-offset-[6px] hover:text-white">
                Brochure ({BROCHURE.size})
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default function Work() {
  return (
    <Layout page="work">
      <PageIntro
        crumb="Our Work"
        label="Our Work"
        title="Products where our engineering meets real use."
        lede={
          <p>
            Each product is built to stand on its own, and each one adds to what BharatGrid can do next. They are where we begin, not the limit of
            what we intend to build.
          </p>
        }
      >
        <nav aria-label="On this page" className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[14px]">
          {[
            ["#resku", "Resku"],
            ["#resku-business", "Resku Business"],
            ["#academy", "BharatGrid Academy"],
          ].map(([href, text]) => (
            <a key={href} href={href} className="text-muted underline decoration-line-strong underline-offset-[6px] hover:text-ink hover:decoration-ink">
              {text}
            </a>
          ))}
        </nav>
      </PageIntro>
      <Resku />
      <Business />
      <Academy />
      <section aria-labelledby="work-next-title" className="py-20 md:py-28">
        <Container className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Label>Next</Label>
          </div>
          <div className="md:col-span-8">
            <h2 id="work-next-title" className="max-w-[24ch] text-[clamp(1.5rem,2.6vw,2.1rem)] font-medium leading-[1.15] tracking-[-0.025em]">
              Read about the engineering behind these products, or get in touch.
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
