import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { APPLICATIONS_CLOSE, APPLY_URL, fellowship } from "./config";

interface ApplicationState {
  open: boolean;
  /** whole days left in IST, or null before the browser has checked the time */
  daysLeft: number | null;
}

const IST_MS = 5.5 * 60 * 60 * 1000;
const DAY_MS = 24 * 60 * 60 * 1000;
const istDay = (ms: number) => Math.floor((ms + IST_MS) / DAY_MS);

const Ctx = createContext<ApplicationState>({ open: true, daysLeft: null });

/** One clock for the page. The prerendered HTML is the open state; once the
 *  browser runs, it checks the real time and re-checks every 30 seconds, so a
 *  page left open past the deadline closes itself. */
export function ApplicationsProvider({ children }: { children: ReactNode }) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);
  const close = APPLICATIONS_CLOSE.getTime();
  const state: ApplicationState =
    now === null ? { open: true, daysLeft: null } : { open: now < close, daysLeft: Math.max(0, istDay(close) - istDay(now)) };
  return <Ctx.Provider value={state}>{children}</Ctx.Provider>;
}

export const useApplications = () => useContext(Ctx);

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" className={className}>
      <path d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
    </svg>
  );
}

const variants = {
  primary: "bg-ac-forest text-white hover:bg-ac-emerald",
  light: "bg-ac-warm text-ac-forest hover:bg-white",
} as const;

/** Every application button on the page: Google Forms, in a new tab. After
 *  the deadline it becomes a plain "Applications closed" label. */
export function ApplyButton({
  label = "Apply Now",
  variant = "primary",
  className = "",
}: {
  label?: string;
  variant?: keyof typeof variants;
  className?: string;
}) {
  const { open } = useApplications();
  const base =
    "inline-flex min-h-[52px] items-center justify-center gap-3 px-8 font-label text-[13px] font-semibold uppercase tracking-[0.14em]";
  if (!open) {
    return (
      <span
        aria-disabled="true"
        className={`${base} cursor-default border ${
          variant === "light" ? "border-white/30 text-white/70" : "border-ac-charcoal/20 text-ac-slate"
        } ${className}`}
      >
        Applications closed
      </span>
    );
  }
  return (
    <a
      href={APPLY_URL}
      target="_blank"
      rel="noopener"
      className={`group ${base} transition-colors duration-300 ${variants[variant]} ${className}`}
    >
      {label}
      <Arrow className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      <span className="sr-only"> (opens the application form in a new tab)</span>
    </a>
  );
}

/** The closing date, and how long is left once the browser knows the time. */
export function Deadline({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  const { open, daysLeft } = useApplications();
  const muted = tone === "light" ? "text-white/70" : "text-ac-slate";
  const strong = tone === "light" ? "text-white" : "text-ac-charcoal";
  if (!open) {
    return (
      <p className={`text-[15px] leading-relaxed ${muted} ${className}`}>
        Applications for {fellowship.name} closed on {fellowship.closes}.
      </p>
    );
  }
  const left =
    daysLeft === null ? null : daysLeft === 0 ? "Closes tonight" : daysLeft === 1 ? "Closes tomorrow" : `${daysLeft} days left`;
  return (
    <p className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] leading-relaxed ${muted} ${className}`}>
      <span className="inline-flex items-center gap-2">
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-ac-crimson" />
        Applications close
      </span>
      <span className={`font-medium ${strong}`}>
        {fellowship.closes}, {fellowship.closesTime}
      </span>
      {left && (
        <span className={tone === "light" ? "text-white/60" : "text-ac-crimson"} aria-live="polite">
          {left}
        </span>
      )}
    </p>
  );
}

/** The header's compact Apply, on /academy only; gone once applications close. */
export function HeaderApply() {
  const { open } = useApplications();
  if (!open) return null;
  return (
    <a
      href={APPLY_URL}
      target="_blank"
      rel="noopener"
      className="inline-flex h-9 items-center gap-2 bg-ac-forest px-4 font-label text-[11.5px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-ac-emerald"
    >
      Apply
      <Arrow />
      <span className="sr-only"> for Business Fellowship ’27 (opens the application form in a new tab)</span>
    </a>
  );
}
