// Microsoft Clarity: heatmaps and recordings of visits, disclosed at /privacy. The project ID is public by design (it
// is in the script URL on every page). With no ID, nothing loads.
import { APPLY_URL } from "../academy/config";

export const CLARITY_ID = "";

const OFF_KEY = "bg-analytics-off";

type Clarity = ((...args: unknown[]) => void) & { q?: IArguments[] };

declare global {
  interface Window {
    clarity?: Clarity;
  }
  interface Navigator {
    globalPrivacyControl?: boolean;
  }
}

const gpc = () => navigator.globalPrivacyControl === true;

/** This browser opted out at /privacy, or sends Global Privacy Control. */
function off() {
  try {
    if (localStorage.getItem(OFF_KEY) === "1") return true;
  } catch {
    // Storage blocked: fall through to the browser's own signal.
  }
  return gpc();
}

/** What a click on a link means, as a Clarity event (filterable in its dashboard), or null for ordinary navigation. */
function eventFor(a: HTMLAnchorElement) {
  const href = a.getAttribute("href") ?? "";
  if (href.startsWith(APPLY_URL)) return "apply_click";
  if (href.endsWith(".pdf")) return "brochure_download";
  if (href.startsWith("mailto:")) return "email_click";
  if (href.startsWith("tel:")) return "phone_click";
  if (a.hostname && a.hostname !== location.hostname) return "outbound_click";
  return null;
}

/** Only on bharatgridsystems.com (never previews, workers.dev or localhost). The queue starts at once so early clicks
 *  count; the script itself waits until the page has loaded and the browser is idle, so it never delays the first screen. */
export function startAnalytics() {
  if (!CLARITY_ID || location.hostname !== "bharatgridsystems.com" || off()) return;

  const clarity: Clarity =
    window.clarity ??
    function () {
      // Clarity's queue expects each call's arguments object, as its own snippet pushes.
      (clarity.q ??= []).push(arguments);
    };
  window.clarity = clarity;

  addEventListener(
    "click",
    (e) => {
      const a = (e.target as Element | null)?.closest?.("a[href]");
      const name = a instanceof HTMLAnchorElement && eventFor(a);
      if (name) clarity("event", name);
    },
    { capture: true },
  );

  const load = () => {
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
    document.head.appendChild(s);
  };
  const idle = () => ("requestIdleCallback" in window ? requestIdleCallback(load, { timeout: 4000 }) : setTimeout(load, 1500));
  if (document.readyState === "complete") idle();
  else addEventListener("load", idle, { once: true });
}

/** The opt-out control on /privacy: [data-analytics-control] holds [data-analytics-state] and [data-analytics-toggle]. */
export function analyticsControl() {
  const box = document.querySelector<HTMLElement>("[data-analytics-control]");
  const state = box?.querySelector<HTMLElement>("[data-analytics-state]");
  const button = box?.querySelector<HTMLButtonElement>("[data-analytics-toggle]");
  if (!box || !state || !button) return;

  const render = () => {
    if (gpc()) {
      state.textContent = "Your browser sends Global Privacy Control, so analytics is off here.";
      button.hidden = true;
    } else if (off()) {
      state.textContent = "Analytics is off in this browser.";
      button.textContent = "Turn analytics back on";
    } else {
      state.textContent = "Analytics is on in this browser.";
      button.textContent = "Turn off analytics in this browser";
    }
    box.hidden = false;
  };

  button.addEventListener("click", () => {
    const turnOff = !off();
    try {
      if (turnOff) localStorage.setItem(OFF_KEY, "1");
      else localStorage.removeItem(OFF_KEY);
    } catch {
      state.textContent = "Your browser is blocking storage, so this setting can’t be saved. Blocking cookies stops Clarity too.";
      return;
    }
    if (turnOff) {
      window.clarity?.("consentv2", { ad_Storage: "denied", analytics_Storage: "denied" });
      for (const name of ["_clck", "_clsk"]) {
        document.cookie = `${name}=; Max-Age=0; path=/`;
        document.cookie = `${name}=; Max-Age=0; path=/; domain=.${location.hostname}`;
      }
    }
    render();
  });
  render();
}
