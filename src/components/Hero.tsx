import { Reveal, TriRule } from "./ui";

const FOCUS = [
  {
    title: "Everyday safety",
    text: "Tools that help individuals and families stay connected and respond quickly when it matters.",
  },
  {
    title: "Mobility",
    text: "Software for journeys, and for the operators who keep people moving.",
  },
  {
    title: "Business operations",
    text: "Digital systems that bring clarity and coordination to day-to-day operations.",
  },
];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="px-5 pb-20 pt-20 sm:px-8 md:pb-28 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <TriRule />
          <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.14em] text-navy">
            BharatGrid Systems Private Limited
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1
            id="hero-title"
            className="mt-6 max-w-4xl text-[clamp(2.6rem,7vw,5.25rem)] font-semibold leading-[1.03] tracking-[-0.035em]"
          >
            Building technology for a safer, smarter India.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 max-w-2xl text-[clamp(1.075rem,1.6vw,1.3rem)] leading-relaxed text-muted">
            BharatGrid Systems Private Limited is an Indian technology company developing software products and
            digital solutions for everyday safety, mobility, and business operations.
          </p>
        </Reveal>
        <Reveal delay={240} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href="#businesses"
            className="group inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-[#13286b]"
          >
            Explore Our Work
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <a href="#contact" className="text-[15px] font-medium text-navy hover:underline hover:underline-offset-4">
            Contact us
          </a>
        </Reveal>

        <ul className="mt-24 grid gap-10 border-t border-line pt-10 md:mt-32 md:grid-cols-3 md:gap-12">
          {FOCUS.map((f, i) => (
            <Reveal as="li" key={f.title} delay={i * 90}>
              <h2 className="text-[15px] font-semibold">{f.title}</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{f.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
