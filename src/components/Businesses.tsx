import type { ReactNode } from "react";
import { company } from "../company";
import { IMAGES } from "../images";
import { Eyebrow, Photo, Reveal } from "./ui";

const host = company.reskuUrl.replace(/^https?:\/\//, "");

const PRINCIPLES = [
  ["Automatic, not manual", "The most important alert should not depend on someone being able to press a button."],
  ["Family first", "Alerts go to the people who know the person, and who can act immediately."],
  ["Built for Indian conditions", "Patchy networks, potholes and speed breakers, and the full range of phones people actually use."],
  ["Private by design", "Share journeys and moments of need, not a permanent record of someone's day."],
  ["Calm by default", "Quiet in everyday use, so that when an alert does arrive, it is taken seriously."],
];

const FEATURES = [
  ["Circles", "The people who look out for each other share their location and can see one another at a glance."],
  ["Journeys", "Head out, and your circle can follow along live and is told the moment you arrive."],
  [
    "Crash detection",
    "Motion sensors and GPS recognise the signature of a vehicle collision. A short countdown lets the person cancel; if they don't, their contacts are alerted with their location.",
  ],
  ["One-tap SOS", "Help can be sent with a single tap, including straight from the lock screen."],
  [
    "Made for weak signal",
    "Alerts wait on the phone and go out as soon as there is signal, and known no-signal stretches are flagged before you reach them.",
  ],
  ["Private by design", "Saved places stay on the person's own phone, and what is shared stays in their hands."],
];

const OUTCOMES = [
  ["After a crash", "Family finds out only when someone calls them.", "If the countdown isn't cancelled, contacts are alerted with a location automatically."],
  ["Getting home", "“Call me when you reach.”", "The circle is told on arrival, without anyone having to ask."],
  ["Out of signal", "The message waits until the person thinks to try again.", "The alert waits on the phone and is sent as soon as signal returns."],
  ["Asking for help", "Unlock the phone, find a contact, make a call.", "One tap, from the lock screen."],
];

function Chapter({ n, label, title, children }: { n: string; label: string; title: string; children: ReactNode }) {
  return (
    <article className="grid gap-8 border-t border-line py-20 md:grid-cols-12 md:gap-12 md:py-28">
      <Reveal className="md:col-span-4">
        <div className="md:sticky md:top-32">
          <span className="text-[13px] font-medium tabular-nums text-resku">{n}</span>
          <h3 className="mt-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-ink">{label}</h3>
        </div>
      </Reveal>
      <div className="md:col-span-8">
        <Reveal>
          <p className="text-[clamp(1.6rem,2.8vw,2.35rem)] font-semibold leading-[1.18] tracking-[-0.025em]">{title}</p>
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </article>
  );
}

const prose = "space-y-6 text-[clamp(1.02rem,1.3vw,1.125rem)] leading-[1.8] text-body";
const label = "text-[12px] font-semibold uppercase tracking-[0.16em]";
const mobileLabel =
  "before:mb-1 before:block before:text-[11px] before:font-semibold before:uppercase before:tracking-[0.16em] before:content-[attr(data-label)] md:before:hidden";

function VisitLink({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      Visit {host}
      <span aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
        ↗
      </span>
    </span>
  );
}

export function Businesses() {
  return (
    <section id="businesses" aria-labelledby="businesses-title" className="bg-white px-6 py-28 sm:px-10 md:py-40 lg:py-48">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col items-start">
          <Eyebrow>Our Businesses</Eyebrow>
          <a href={company.reskuUrl} target="_blank" rel="noopener" className="mt-12 block" aria-label={`Resku — visit ${host}`}>
            <img src="resku-wordmark.png" alt="Resku" width={560} height={171} className="h-12 w-auto md:h-16" />
          </a>
          <div className="mt-10 flex flex-wrap items-center gap-3 text-[13px] font-medium">
            <span className="rounded-full bg-resku-soft px-3 py-1 text-resku">Our first product</span>
            <span className="text-muted">Case study</span>
          </div>
          <h2
            id="businesses-title"
            className="mt-6 max-w-3xl text-[clamp(2.1rem,4.4vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.03em]"
          >
            The people closest to you should know first.
          </h2>
          <p className="mt-7 max-w-2xl text-[clamp(1.05rem,1.4vw,1.2rem)] leading-[1.7] text-body">
            Resku is the first product built by BharatGrid Systems: a personal safety application for individuals and
            families. This is the problem it was built to solve, and how we approached it.
          </p>
        </Reveal>

        <Reveal as="figure" className="mt-20 md:mt-28">
          <Photo
            img={IMAGES.family}
            sizes="(min-width: 1200px) 1152px, 100vw"
            className="aspect-[4/3] rounded-[20px] sm:aspect-[16/8] md:rounded-[28px]"
          />
        </Reveal>

        <div className="mt-20 md:mt-28">
          <Chapter n="01" label="The problem" title="Help often begins with a phone call that never gets made.">
            <Reveal className={prose}>
              <p>
                When something goes wrong on the road, whether a collision, a breakdown on an empty highway or a
                journey that runs late into the night, the first minutes matter most. Indian law recognises this as
                the golden hour: the first hour after a traumatic injury, when prompt medical care is most likely to
                prevent death.
              </p>
              <p>
                Yet in those minutes, the people who would act fastest are usually the last to know. Someone who is
                injured, shaken or out of signal cannot always make a call, and families are left waiting for a
                message that says they have reached.
              </p>
            </Reveal>
            <Reveal className="mt-14 rounded-[24px] bg-mist p-8 md:p-10">
              <p className="text-[clamp(2.75rem,6vw,4.5rem)] font-semibold leading-none tracking-[-0.04em] text-navy">
                1,72,890
              </p>
              <p className="mt-4 max-w-md text-[17px] leading-[1.6] text-ink">
                people lost their lives in road accidents in India in 2023, about 474 every day.
              </p>
              <p className="mt-5 text-[13px] text-muted">
                Source: Ministry of Road Transport and Highways,{" "}
                <cite className="not-italic">Road Accidents in India 2023</cite>.
              </p>
            </Reveal>
          </Chapter>

          <Chapter n="02" label="The situation" title="A gap between the moment of need and the people who can respond.">
            <Reveal className={prose}>
              <p>
                Families already look out for one another in informal ways: a call before leaving, a location shared
                on a messaging app, a request to text on arrival. Each of these depends on someone remembering, having
                signal and being able to type.
              </p>
              <p>
                Formal assistance exists, from emergency numbers to roadside assistance programmes, but it begins
                only once someone asks for it. Our research into roadside breakdowns kept returning to the same
                pattern: long waits, unclear responsibility, and people left to manage alone, often far from home and
                late at night.
              </p>
              <p>
                Indian conditions add their own difficulties. Mobile coverage drops out on highways and in the hills,
                phones aggressively close apps to save battery, and everyday potholes and speed breakers produce the
                kind of jolts that confuse safety systems designed for other roads.
              </p>
            </Reveal>
            <Reveal as="figure" className="mt-14">
              <Photo
                img={IMAGES.nightRoad}
                sizes="(min-width: 1200px) 740px, (min-width: 768px) 66vw, 100vw"
                className="aspect-[3/2] rounded-[20px] md:rounded-[24px]"
              />
            </Reveal>
          </Chapter>

          <Chapter n="03" label="What we planned" title="Start with the people who care most, and remove the need to ask.">
            <Reveal className={prose}>
              <p>
                We set out to build a safety net that begins with a person's own circle of family and close contacts,
                and that keeps working when the person cannot reach their phone. Five principles shaped every
                decision:
              </p>
            </Reveal>
            <ol className="mt-12">
              {PRINCIPLES.map(([title, text], i) => (
                <Reveal as="li" key={title} delay={i * 60} className="grid gap-2 border-t border-line py-7 sm:grid-cols-[3rem_1fr]">
                  <span className="text-[13px] font-medium tabular-nums text-resku">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="text-[18px] font-semibold tracking-[-0.01em]">{title}</p>
                    <p className="mt-2 text-[16px] leading-[1.7] text-body">{text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </Chapter>

          <Chapter n="04" label="What we built" title="One application for staying close, and for the moments that matter.">
            <ul className="grid gap-12 sm:grid-cols-2">
              {FEATURES.map(([title, text], i) => (
                <Reveal as="li" key={title} delay={(i % 2) * 80}>
                  <span aria-hidden="true" className="block h-[3px] w-8 rounded-full bg-resku" />
                  <p className="mt-5 text-[19px] font-semibold tracking-[-0.015em]">{title}</p>
                  <p className="mt-2.5 text-[16px] leading-[1.7] text-body">{text}</p>
                </Reveal>
              ))}
            </ul>
          </Chapter>

          <Chapter n="05" label="How it helps" title="From waiting for a phone call to knowing within moments.">
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
                    <tr key={moment} className="block border-t border-line py-7 md:table-row md:py-0">
                      <th scope="row" className="block pb-3 text-[17px] font-semibold md:table-cell md:w-[24%] md:py-7 md:pr-8 md:align-top">
                        {moment}
                      </th>
                      <td
                        data-label="Before"
                        className={`block pb-3 text-[16px] leading-[1.65] text-muted md:table-cell md:w-[34%] md:py-7 md:pr-8 md:align-top ${mobileLabel}`}
                      >
                        {before}
                      </td>
                      <td
                        data-label="With Resku"
                        className={`block text-[16px] leading-[1.65] text-ink before:text-resku md:table-cell md:py-7 md:align-top ${mobileLabel}`}
                      >
                        {after}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
            <Reveal className="mt-14">
              <a
                href={company.reskuUrl}
                target="_blank"
                rel="noopener"
                className="group inline-flex rounded-full bg-resku px-7 py-4 text-[15px] font-medium text-white transition-opacity hover:opacity-90"
              >
                <VisitLink />
              </a>
            </Reveal>
          </Chapter>
        </div>

        <Reveal className="mt-8 border-t border-line pt-20 md:pt-28">
          <Eyebrow>What's next</Eyebrow>
        </Reveal>
        <Reveal className="mt-10">
          <a
            href={company.reskuUrl}
            target="_blank"
            rel="noopener"
            aria-label={`Resku Fleet: visit ${host} (opens in a new tab)`}
            className="group grid overflow-hidden rounded-[28px] bg-mist md:grid-cols-2"
          >
            <Photo
              img={IMAGES.bus}
              sizes="(min-width: 768px) 576px, 100vw"
              className="aspect-[16/10] md:aspect-auto md:h-full [&_img]:transition-transform [&_img]:duration-[1.2s] [&_img]:ease-out group-hover:[&_img]:scale-[1.03]"
            />
            <div className="flex flex-col p-8 sm:p-10 lg:p-14">
              <div className="flex h-7 flex-wrap items-center gap-3">
                <span className={`${label} text-navy`}>Enterprise Software</span>
                <span className="rounded-full bg-navy-soft px-3 py-1 text-[12px] font-medium text-navy">In development</span>
              </div>
              <h3 className="mt-6 text-[clamp(1.9rem,3vw,2.5rem)] font-semibold tracking-[-0.03em]">Resku Fleet</h3>
              <p className="mt-5 text-[16px] leading-[1.75] text-body">
                An enterprise software platform for passenger transport operators. Resku Fleet is designed to bring
                fleet visibility, bookings, dispatch coordination and operational management into one system.
              </p>
              <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 border-t border-line pt-8 sm:grid-cols-2">
                {["Fleet visibility", "Bookings", "Dispatch coordination", "Operational management"].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[15px] text-ink">
                    <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-navy" />
                    {f}
                  </li>
                ))}
              </ul>
              <VisitLink className="mt-10 text-[15px] font-medium text-navy" />
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
