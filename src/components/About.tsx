import { IMAGES } from "../images";
import { Photo, Reveal, Section } from "./ui";

const PRINCIPLES = [
  {
    title: "Reliability",
    text: "Software engineered to perform consistently, on the networks and devices people use every day.",
  },
  {
    title: "Innovation",
    text: "Modern technology applied with purpose, to solve real problems rather than for its own sake.",
  },
  {
    title: "Responsible technology",
    text: "Privacy, security and transparency treated as requirements from the first stage of design.",
  },
  {
    title: "Built for India",
    text: "Products shaped by Indian conditions and ways of working, and developed in India.",
  },
];

export function About() {
  return (
    <Section id="about" eyebrow="About Us" title="Practical technology, built in India.">
      <div className="grid gap-10 text-[clamp(1.05rem,1.4vw,1.2rem)] leading-[1.75] text-body md:grid-cols-2 md:gap-16">
        <Reveal>
          <p>
            BharatGrid Systems Private Limited is a software and technology company incorporated in India. We design
            and develop software products and digital solutions that serve everyday needs in personal safety,
            mobility and business operations.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <p>
            We believe technology earns trust by being dependable. Our approach is to understand the conditions in
            which people live and work, and to build products that perform reliably within them.
          </p>
        </Reveal>
      </div>

      <Reveal as="figure" className="mt-24 md:mt-32">
        <Photo
          img={IMAGES.capitol}
          sizes="(min-width: 1200px) 1152px, 100vw"
          className="aspect-[4/3] rounded-[20px] sm:aspect-[16/8] md:rounded-[28px]"
        />
        <figcaption className="mt-4 text-[13px] text-muted">Capitol Complex, Chandigarh</figcaption>
      </Reveal>

      <ul className="mt-24 grid gap-x-16 gap-y-14 sm:grid-cols-2 md:mt-32">
        {PRINCIPLES.map((p, i) => (
          <Reveal as="li" key={p.title} delay={(i % 2) * 90} className="border-t border-line pt-8">
            <span className="text-[13px] font-medium tabular-nums text-navy">0{i + 1}</span>
            <h3 className="mt-5 text-[21px] font-semibold tracking-[-0.02em]">{p.title}</h3>
            <p className="mt-3 max-w-md text-[16px] leading-[1.7] text-body">{p.text}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
