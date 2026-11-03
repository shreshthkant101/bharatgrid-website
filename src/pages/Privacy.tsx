import type { ReactNode } from "react";
import { company } from "../company";
import { Layout } from "../components/Layout";
import { Container, PageIntro } from "../components/ui";

const link = "underline decoration-line-strong decoration-1 underline-offset-[5px] transition-colors hover:decoration-ink";
const MICROSOFT_PRIVACY = "https://www.microsoft.com/privacy/privacystatement";

/** Change this date whenever the notice changes. */
const UPDATED = "3 November 2026";

function Part({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section aria-labelledby={id} className="grid gap-6 border-t border-line pt-10 first:border-t-0 first:pt-0 md:grid-cols-12 md:gap-10">
      <h2 id={id} className="text-[1.3rem] font-medium leading-snug tracking-[-0.02em] md:col-span-4">
        {title}
      </h2>
      <div className="max-w-[64ch] space-y-5 text-[16px] leading-[1.75] text-body md:col-span-8">{children}</div>
    </section>
  );
}

export default function Privacy() {
  return (
    <Layout page="privacy">
      <PageIntro
        crumb="Privacy"
        label="Privacy notice"
        title="How this website handles your information."
        lede={
          <p>
            This notice covers bharatgridsystems.com, the website of {company.legalName}. Our products have their own: Resku’s is at{" "}
            <a href={`${company.reskuUrl}/privacy`} className={link}>
              reskuapp.com/privacy
            </a>
            .
          </p>
        }
      >
        <p className="mt-8 text-[14px] text-muted">Last updated {UPDATED}</p>
      </PageIntro>

      <div className="py-20 md:py-28">
        <Container className="space-y-16">
          <Part id="visits" title="When you visit this website">
            <p>
              We use Microsoft Clarity to understand how people use this website, so we can improve it. Clarity records how you move
              through the site: the pages you open, where you click and scroll, and how long you stay. We see this as heatmaps and
              as recordings of visits. It also records your type of device, browser, screen size and approximate location, such as
              your country or region.
            </p>
            <p>
              This website has no forms or accounts, so you never type personal information into it. We don’t use Clarity to
              identify you, and we don’t use it for advertising.
            </p>
            <p>
              Microsoft provides Clarity and processes this data under the{" "}
              <a href={MICROSOFT_PRIVACY} target="_blank" rel="noopener" className={link}>
                Microsoft Privacy Statement
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              .
            </p>
          </Part>

          <Part id="cookies" title="Cookies">
            <p>
              Clarity sets two cookies on this website: <code className="text-ink">_clck</code>, which recognises your browser when
              you come back (it lasts up to a year), and <code className="text-ink">_clsk</code>, which links the pages of one visit
              (it lasts a day). Microsoft may also use its own cookies, such as <code className="text-ink">MUID</code>, on
              Microsoft’s domains. This website sets no other cookies.
            </p>
            <p>
              In the European Economic Area, the United Kingdom and Switzerland, Clarity sets no cookies on this website, because we
              don’t ask for cookie consent there.
            </p>
          </Part>

          <Part id="choices" title="Your choices">
            <p>
              You can turn analytics off for this browser here. If your browser sends Global Privacy Control, we treat that as a
              request to turn it off and Clarity doesn’t load. Blocking cookies in your browser also stops Clarity’s cookies.
            </p>
            <div data-analytics-control hidden className="rounded-sm border border-line-strong bg-paper-2 p-6">
              <p data-analytics-state className="text-ink" aria-live="polite" />
              <button
                type="button"
                data-analytics-toggle
                className="mt-4 inline-flex h-11 items-center rounded-full border border-ink px-5 text-[15px] font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
              />
            </div>
          </Part>

          <Part id="hosting" title="Hosting">
            <p>
              This website is hosted by Cloudflare, which processes technical information such as your IP address to deliver its
              pages and to protect it from attacks.
            </p>
          </Part>

          <Part id="applications" title="If you apply to BharatGrid Academy">
            <p>
              Applications for Business Fellowship ’27 are made through a Google Form, which Google hosts. We use what you send to
              assess your application and to contact you about it.
            </p>
          </Part>

          <Part id="contact" title="If you write to us or call us">
            <p>We use what you send us to reply to you.</p>
          </Part>

          <Part id="questions" title="Questions and grievances">
            <p>
              {company.legalName} is responsible for this website. Our registered office is at{" "}
              {company.registeredOffice.join(", ")}, India.
            </p>
            <p>
              Write to{" "}
              <a href={`mailto:${company.grievanceEmail}`} className={link}>
                {company.grievanceEmail}
              </a>{" "}
              with any question or grievance about this notice or about information you have sent us.
            </p>
            <p>If anything here changes, we’ll update this page and the date at the top.</p>
          </Part>
        </Container>
      </div>
    </Layout>
  );
}
