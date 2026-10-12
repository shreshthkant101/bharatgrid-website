import { IMAGES } from "../images";
import { Photo, Reveal, TriRule } from "./ui";

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
    <section aria-labelledby="hero-title" className="px-6 pb-28 pt-24 sm:px-10 md:pb-40 md:pt-36 lg:pt-44">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <TriRule />
          <p className="mt-8 text-[13px] font-semibold uppercase tracking-[0.16em] text-navy">
            BharatGrid Systems Private Limited
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1
            id="hero-title"
            className="mt-8 max-w-4xl text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.038em]"
          >
            Building technology for a safer, smarter India.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-10 max-w-2xl text-[clamp(1.1rem,1.6vw,1.35rem)] leading-[1.65] text-body">
            BharatGrid Systems Private Limited is an Indian technology company developing software products and
            digital solutions for everyday safety, mobility, and business operations.
          </p>
        </Reveal>
        <Reveal delay={240} className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-5">
          <a
            href="#businesses"
            className="group inline-flex items-center gap-2.5 rounded-full bg-navy px-7 py-4 text-[15px] font-medium text-white transition-colors hover:bg-navy-hover"
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
      </div>

      <Reveal as="figure" delay={120} className="mx-auto mt-24 max-w-[1320px] md:mt-32">
        <Photo
          img={IMAGES.seaLink}
          eager
          sizes="(min-width: 1400px) 1320px, 100vw"
          className="aspect-[4/3] rounded-[20px] sm:aspect-[16/9] md:rounded-[28px] lg:aspect-[2.35/1]"
        />
      </Reveal>

      <div className="mx-auto max-w-6xl">
        <ul className="mt-24 grid gap-14 md:mt-32 md:grid-cols-3 md:gap-16">
          {FOCUS.map((f, i) => (
            <Reveal as="li" key={f.title} delay={i * 90} className="border-t border-line pt-8">
              <h2 className="text-[17px] font-semibold tracking-[-0.01em]">{f.title}</h2>
              <p className="mt-3 text-[16px] leading-[1.7] text-body">{f.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
