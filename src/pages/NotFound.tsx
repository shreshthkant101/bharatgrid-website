import { NAV } from "../company";
import { Layout } from "../components/Layout";
import { Container, Label, MoreLink } from "../components/ui";

/** Served by Cloudflare with a 404 status for any path that doesn't exist (wrangler.jsonc). */
export default function NotFound() {
  return (
    <Layout page="notfound">
      <section aria-labelledby="nf-title" className="py-24 md:py-36">
        <Container>
          <Label>Error 404</Label>
          <h1 id="nf-title" className="mt-6 max-w-[16ch] text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.02] tracking-[-0.035em]">
            This page doesn’t exist.
          </h1>
          <p className="mt-8 max-w-[52ch] text-[clamp(1.1rem,1.6vw,1.3rem)] leading-[1.65] text-body">
            The link may be old, or the address mistyped. These pages are a good place to continue:
          </p>
          <ul className="mt-12 flex flex-col gap-4">
            <li>
              <MoreLink href="/">Home</MoreLink>
            </li>
            {NAV.map((item) => (
              <li key={item.href}>
                <MoreLink href={item.href}>{item.label}</MoreLink>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </Layout>
  );
}
