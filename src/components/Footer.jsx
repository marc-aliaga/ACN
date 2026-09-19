import Container from "./ui/Container";
import { nav, footer } from "../data/content";
import logo from "../assets/logo-full.png";

export default function Footer() {
  return (
    <footer className="surface-light border-t border-black/[0.08]">
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
                    <a href={link.href} className="text-[var(--color-ink)] transition-colors hover:text-[var(--color-gold-deep)]">
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
          </div>
        </div>
      </Container>
    </footer>
  );
}
