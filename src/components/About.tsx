import { Reveal, Section } from "./ui";

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
      <div className="grid gap-12 md:grid-cols-12">
        <Reveal className="space-y-6 text-[17px] leading-relaxed text-ink/85 md:col-span-7">
          <p>
            BharatGrid Systems Private Limited is a software and technology company incorporated in India. We design
            and develop software products and digital solutions that serve everyday needs in personal safety,
            mobility and business operations.
          </p>
          <p>
            We believe technology earns trust by being dependable. Our approach is to understand the conditions in
            which people live and work, and to build products that perform reliably within them.
          </p>
        </Reveal>
      </div>

      <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {PRINCIPLES.map((p, i) => (
          <Reveal as="li" key={p.title} delay={i * 80} className="bg-white p-7 md:p-8">
            <span className="text-[13px] font-medium tabular-nums text-navy">0{i + 1}</span>
            <h3 className="mt-6 text-[17px] font-semibold tracking-[-0.01em]">{p.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.text}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
