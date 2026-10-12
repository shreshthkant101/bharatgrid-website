import { Reveal, Section } from "./ui";

const BUSINESSES = [
  {
    name: "Resku",
    tag: "Personal Safety",
    status: null,
    text: "A personal safety application that helps individuals and families stay connected. Resku brings location sharing, journey tracking, emergency SOS and family connectivity together in a single application.",
    features: ["Location sharing", "Journey tracking", "Emergency SOS", "Family connectivity"],
  },
  {
    name: "Resku Fleet",
    tag: "Enterprise Software",
    status: "In development",
    text: "An enterprise software platform for passenger transport operators, currently in development. Resku Fleet is designed to bring fleet visibility, bookings, dispatch coordination and operational management into one system.",
    features: ["Fleet visibility", "Bookings", "Dispatch coordination", "Operational management"],
  },
];

export function Businesses() {
  return (
    <Section
      id="businesses"
      tone="mist"
      eyebrow="Our Businesses"
      title="What we build."
      intro="Our work is organised around two products under the Resku name: one for individuals and families, and one for transport businesses."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {BUSINESSES.map((b, i) => (
          <Reveal
            as="article"
            key={b.name}
            delay={i * 100}
            className="flex flex-col rounded-3xl border border-line bg-white p-8 transition-shadow duration-500 hover:shadow-[0_18px_50px_-24px_rgba(11,27,77,0.22)] md:p-11"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-navy">{b.tag}</span>
              {b.status && (
                <span className="rounded-full border border-navy/15 bg-navy-soft px-2.5 py-0.5 text-[12px] font-medium text-navy">
                  {b.status}
                </span>
              )}
            </div>
            <h3 className="mt-6 text-[clamp(1.9rem,3vw,2.5rem)] font-semibold tracking-[-0.03em]">{b.name}</h3>
            <p className="mb-10 mt-4 text-[16px] leading-relaxed text-muted">{b.text}</p>
            <ul className="mt-auto grid grid-cols-1 gap-x-6 border-t border-line pt-6 sm:grid-cols-2 [&>li]:py-2">
              {b.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-[15px]">
                  <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-navy" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
