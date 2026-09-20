import Container from "./ui/Container";
import { nav, footer, cookieBanner } from "../data/content";
import { OPEN_COOKIE_SETTINGS, analyticsEnabled } from "../lib/analytics";
import logo from "../assets/logo-full.webp";

// homePath: cuando el footer se usa fuera de la home (p. ej. en /invierte), los
// enlaces a secciones ("#propiedades") deben apuntar a la home ("/#propiedades").
export default function Footer({ homePath = "" }) {
  const resolve = (href) => (homePath && href.startsWith("#") ? `${homePath}${href}` : href);

  return (
    <footer className="defer-render [--defer-h:520px] surface-light border-t border-black/[0.08]">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center">
              <img src={logo} alt={nav.brand} className="h-12 w-auto" />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-light">{footer.tagline}</p>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-light">{column.title}</h4>
              <ul className="mt-4 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={resolve(link.href)} className="text-[var(--color-ink)] transition-colors hover:text-[var(--color-gold-deep)]">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-light">{footer.contact.title}</h4>
            <a
              href={`mailto:${footer.contact.email}`}
              className="mt-4 block text-sm text-[var(--color-ink)] transition-colors hover:text-[var(--color-gold-deep)]"
            >
              {footer.contact.email}
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-black/[0.08] pt-8">
          <p className="max-w-3xl text-xs leading-relaxed text-muted-light/80">{footer.disclaimer}</p>

          <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-muted-light sm:flex-row">
            <p>{footer.copyright}</p>
            {analyticsEnabled && (
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS))}
                className="underline underline-offset-4 transition-colors hover:text-[var(--color-ink)]"
              >
                {cookieBanner.settings}
              </button>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
}
