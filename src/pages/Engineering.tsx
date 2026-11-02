import type { ReactNode } from "react";
import { Layout } from "../components/Layout";
import { Container, Label, MoreLink, PageIntro, Reveal, Section, SectionHead } from "../components/ui";

const prose = "space-y-5 text-[clamp(1.02rem,1.3vw,1.125rem)] leading-[1.8] text-body";

function Area({ id, n, title, where, children, points }: { id: string; n: string; title: string; where: string; children: ReactNode; points: string[] }) {
  return (
    <article id={id} aria-labelledby={`${id}-title`} className="grid gap-8 border-t border-line-strong py-16 md:grid-cols-12 md:gap-10 md:py-20">
      <Reveal className="md:col-span-4">
        <div className="md:sticky md:top-28">
          <p className="font-mono text-[12px] text-accent">{n}</p>
          <h3 id={`${id}-title`} className="mt-3 max-w-[18ch] text-[clamp(1.4rem,2.2vw,1.85rem)] font-medium leading-[1.15] tracking-[-0.025em]">
            {title}
          </h3>
          <p className="mt-4 text-[13px] text-muted">{where}</p>
        </div>
      </Reveal>
      <div className="md:col-span-8">
        <Reveal className={prose}>{children}</Reveal>
        <Reveal>
          <ul className="mt-10 grid gap-x-10 gap-y-4 border-t border-line pt-8 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-[15px] leading-[1.6] text-ink">
                <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 shrink-0 bg-ink" />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </article>
  );
}

function Current() {
  return (
    <Section id="current">
      <SectionHead
        id="current-title"
        n="01"
        label="Current work"
        title="What we build today."
        intro={<p>Every area here is in working code, in products that are in testing or development. Results are described in words, not marketing numbers.</p>}
      />
      <div className="mt-16 md:mt-20">
        <Area
          id="sensing"
          n="1.1"
          title="Event detection from everyday sensors"
          where="In Resku"
          points={[
            "Several independent signals combined into one judgement",
            "No alert until the vehicle is confirmed to have stopped, then a countdown the person can cancel",
            "Separate detection for people on foot struck by a vehicle",
            "Everyday look-alikes modelled and tested explicitly",
          ]}
        >
          <p>
            Resku detects possible vehicle collisions using the accelerometer, gyroscope and GPS of an ordinary phone. A single strong reading is
            never enough. The decision draws on several independent signals: the shape of the impact, rotation, the change in speed, and what the
            phone and the vehicle do afterwards. It waits for the vehicle to come to rest before it alerts anyone.
          </p>
          <p>
            Most of the difficulty is in the look-alikes: potholes and speed breakers, a phone dropped or tossed onto a bed, someone sitting down
            hard. A person on foot struck by a vehicle produces a very different signature from a collision inside a car, so it is detected
            separately.
          </p>
        </Area>

        <Area
          id="weak-networks"
          n="1.2"
          title="Software for weak networks and constrained phones"
          where="In Resku"
          points={[
            "Alerts queued on the phone and sent as soon as signal returns",
            "Sensing that steps up only when there is something to verify",
            "Location tracking designed around Android and iOS power saving",
            "Anonymous coverage readings, classified by a statistical model",
          ]}
        >
          <p>
            Coverage drops out on highways and in the hills, and phones close background apps to save battery. Resku is engineered for both. An
            alert that cannot be sent waits on the phone and goes out the moment there is signal. Sensors run at full rate only when there is an
            event to check, and location tracking is built to survive the power-saving behaviour of Android and iOS.
          </p>
          <p>
            We also map where signal is lost. Phones that take part contribute anonymous coverage readings on a coarse grid, and a statistical
            model separates genuine no-signal stretches from momentary drops, so the app can warn people before they reach one. The model was first
            trained on simulated journeys that run the app’s own capture code, and is built to be refitted on real readings.
          </p>
        </Area>

        <Area
          id="learning"
          n="1.3"
          title="Privacy-preserving data for learning"
          where="In Resku"
          points={[
            "Physics and outcome only: no time, device or person",
            "Uploaded only after a delay, with consent",
            "Raw event logs purged on a schedule",
            "Consent can be withdrawn, which clears what is waiting to upload",
          ]}
        >
          <p>
            Detection improves with real data, but crash data is sensitive. With consent, Resku keeps an anonymous summary of each impact it
            judges: the physics of the event and whether it turned out to be real, without the time, the device or the person.
          </p>
          <p>
            Summaries leave the phone only after a delay, and the server’s raw event logs are purged on a schedule, so a summary cannot easily be
            joined back to an individual. This is the data we intend to train future detection models on.
          </p>
        </Area>

        <Area
          id="operations"
          n="1.4"
          title="Operations platforms and assistive AI"
          where="In Resku Business"
          points={[
            "Every change made through typed, validated commands, and recorded",
            "Access controlled by role, enforced in the database as well as the application",
            "Country-specific rules kept in separate packs on a neutral core",
            "AI assistance being designed to act only within limits people set",
          ]}
        >
          <p>
            Resku Business is an operations platform for passenger transport operators. At its core, every change, whether a person makes it or
            software does, passes through typed, validated commands and is recorded. Permissions are enforced in the database as well as in the
            application.
          </p>
          <p>
            Rules that differ between countries, such as language, tax and messaging, live in separate packs on a neutral core, so the same system
            can serve operators in different places. We are designing AI assistance for the platform to work inside explicit limits on what it may
            do, with people deciding how much it is trusted.
          </p>
        </Area>

        <Area
          id="languages"
          n="1.5"
          title="Language and access"
          where="In Resku and Resku Business"
          points={["Resku available in seven languages", "Notifications delivered in each recipient’s own language", "Plain descriptions in place of opaque scores"]}
        >
          <p>
            A safety alert is only useful if the person receiving it understands it at once. Resku is available in seven languages, and each
            notification reaches its recipient in their own language, whatever language the sender uses.
          </p>
          <p>We also prefer plain descriptions to numbers people cannot interpret, and say nothing at all when the evidence is too thin.</p>
        </Area>
      </div>
    </Section>
  );
}

const METHOD = [
  ["Specify, then implement", "Detection logic is written and tested first as a reference model, then mirrored in the app, with conformance tests that hold both to the same expected results."],
  ["Replay before release", "We run the app’s real code against modelled sensor and GPS data for many scenarios, including collisions, near misses and everyday look-alikes, before a change reaches a phone."],
  ["Trace every false alarm", "Alerts from field testing are reviewed, and a false alarm is traced to a cause before anything is changed."],
  ["Write it down", "Decisions, assumptions and open questions are documented, so knowledge belongs to the company rather than to one person."],
];

function Method() {
  return (
    <Section id="method" tone="paper-2">
      <SectionHead
        id="method-title"
        n="02"
        label="How we work"
        title="Engineering as a research practice."
        intro={<p>We treat our own systems as subjects of study. The habits below are how we keep what we build honest.</p>}
      />
      <ol className="mt-16 grid gap-x-12 gap-y-10 md:mt-20 md:grid-cols-2">
        {METHOD.map(([title, text], i) => (
          <Reveal as="li" key={title} delay={(i % 2) * 90} className="border-t border-line-strong pt-6">
            <p className="font-mono text-[12px] text-accent">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-3 text-[18px] font-medium tracking-[-0.015em]">{title}</h3>
            <p className="mt-2 max-w-[52ch] text-[15.5px] leading-[1.7] text-body">{text}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

const DIRECTIONS = [
  ["On-device intelligence", "Moving from hand-tuned detection towards models trained on consented, anonymised field data and running on the phone itself."],
  ["Connectivity-aware systems", "Systems that plan for the network they will actually have: predicting coverage, deferring work and degrading gracefully."],
  ["Assistive AI with human authority", "AI that helps run day-to-day operations while people keep authority over what it may do, with autonomy granted gradually and measured."],
  ["Indian-language interfaces", "Products that work as well in Indian languages as in English, including by voice."],
  ["Dependable digital infrastructure", "The long-term aim: platforms that institutions and essential services can build on, engineered for reliability, privacy and scale."],
];

function Directions() {
  return (
    <Section id="directions">
      <SectionHead
        id="directions-title"
        n="03"
        label="Research directions"
        title="Where the work is heading."
        intro={
          <p>
            These are directions, not results. Each grows out of the current work above, and each will take years. As the work matures, we intend
            to publish engineering notes and findings here.
          </p>
        }
      />
      <ul className="mt-16 md:mt-20">
        {DIRECTIONS.map(([title, text], i) => (
          <Reveal as="li" key={title} delay={i * 60} className="grid gap-3 border-t border-dashed border-line-strong py-8 md:grid-cols-12 md:gap-10">
            <div className="flex items-baseline gap-4 md:col-span-4">
              <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full border border-accent" />
              <h3 className="text-[18px] font-medium tracking-[-0.015em]">{title}</h3>
            </div>
            <p className="max-w-[60ch] text-[16px] leading-[1.7] text-body md:col-span-8">{text}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

export default function Engineering() {
  return (
    <Layout page="engineering">
      <PageIntro
        crumb="Engineering & Research"
        label="Engineering & Research"
        title="Research-driven engineering, grounded in real products."
        lede={
          <p>
            We build products to solve real problems and treat the engineering behind them as research. This page sets out what we work on today,
            how we do it, and the directions we intend to pursue. Where something is a direction rather than a result, we say so.
          </p>
        }
      >
        <nav aria-label="On this page" className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[14px]">
          {[
            ["#current", "Current work"],
            ["#method", "How we work"],
            ["#directions", "Research directions"],
          ].map(([href, label]) => (
            <a key={href} href={href} className="text-muted underline decoration-line-strong underline-offset-[6px] hover:text-ink hover:decoration-ink">
              {label}
            </a>
          ))}
        </nav>
      </PageIntro>
      <Current />
      <Method />
      <Directions />
      <section aria-labelledby="next-title" className="border-t border-line py-20 md:py-28">
        <Container className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Label>Next</Label>
          </div>
          <div className="md:col-span-8">
            <h2 id="next-title" className="max-w-[24ch] text-[clamp(1.5rem,2.6vw,2.1rem)] font-medium leading-[1.15] tracking-[-0.025em]">
              See where this engineering is used, or talk to us about it.
            </h2>
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              <MoreLink href="/work">Our work</MoreLink>
              <MoreLink href="/contact">Contact</MoreLink>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
