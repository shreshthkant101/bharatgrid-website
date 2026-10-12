import { company } from "../company";
import { IMAGES, type Img } from "../images";
import { Eyebrow, Photo, Reveal } from "./ui";

const BUSINESSES: { name: string; tag: string; status?: string; img: Img; text: string; features: string[] }[] = [
  {
    name: "Resku",
    tag: "Personal Safety",
    img: IMAGES.family,
    text: "A personal safety application that helps individuals and families stay connected. Resku brings location sharing, journey tracking, emergency SOS and family connectivity together in a single application.",
    features: ["Location sharing", "Journey tracking", "Emergency SOS", "Family connectivity"],
  },
  {
    name: "Resku Fleet",
    tag: "Enterprise Software",
    status: "In development",
    img: IMAGES.bus,
    text: "An enterprise software platform for passenger transport operators, currently in development. Resku Fleet is designed to bring fleet visibility, bookings, dispatch coordination and operational management into one system.",
    features: ["Fleet visibility", "Bookings", "Dispatch coordination", "Operational management"],
  },
];

const host = company.reskuUrl.replace(/^https?:\/\//, "");

export function Businesses() {
  return (
    <section id="businesses" aria-labelledby="businesses-title" className="bg-mist px-6 py-28 sm:px-10 md:py-40 lg:py-48">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col items-start">
          <Eyebrow>Our Businesses</Eyebrow>
          <h2 id="businesses-title" className="mt-10">
            <a href={company.reskuUrl} target="_blank" rel="noopener" className="block">
              <img src="resku-wordmark.png" alt="Resku" width={560} height={171} className="h-12 w-auto md:h-16" />
            </a>
          </h2>
          <p className="mt-10 max-w-2xl text-[clamp(1.05rem,1.4vw,1.2rem)] leading-[1.7] text-body">
            Our products are built under the Resku brand: one for individuals and families, and one for the
            businesses that move people every day.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:mt-24 md:grid-cols-2 lg:gap-10">
          {BUSINESSES.map((b, i) => (
            <Reveal key={b.name} delay={i * 110} className="h-full">
              <a
                href={company.reskuUrl}
                target="_blank"
                rel="noopener"
                aria-label={`${b.name}: visit ${host} (opens in a new tab)`}
                className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04)] ring-1 ring-line transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(11,27,77,0.28)]"
              >
                <Photo
                  img={b.img}
                  sizes="(min-width: 768px) 560px, 100vw"
                  className="aspect-[16/10] [&_img]:transition-transform [&_img]:duration-[1.2s] [&_img]:ease-out group-hover:[&_img]:scale-[1.03]"
                />
                <div className="flex flex-1 flex-col p-8 sm:p-10 lg:p-12">
                  <div className="flex h-7 flex-wrap items-center gap-3">
                    <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-navy">{b.tag}</span>
                    {b.status && (
                      <span className="rounded-full bg-navy-soft px-3 py-1 text-[12px] font-medium text-navy">
                        {b.status}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-6 text-[clamp(1.9rem,3vw,2.5rem)] font-semibold tracking-[-0.03em]">{b.name}</h3>
                  <p className="mb-10 mt-5 text-[16px] leading-[1.75] text-body">{b.text}</p>
                  <ul className="mt-auto grid grid-cols-1 gap-x-8 gap-y-3 border-t border-line pt-8 sm:grid-cols-2">
                    {b.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-[15px] text-ink">
                        <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-navy" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-10 inline-flex items-center gap-2 text-[15px] font-medium text-navy">
                    Visit {host}
                    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
