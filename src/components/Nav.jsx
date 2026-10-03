import Container from "./ui/Container";
import HoverButton from "./ui/HoverButton";
import { nav } from "../data/content";
import logo from "../assets/logo-full.webp";

export default function Nav() {
  return (
    <header className="absolute top-0 inset-x-0 z-20">
      <Container className="flex items-center justify-between py-7">
        <a href="#top" className="flex items-center">
          <img
            src={logo}
            alt={nav.brand}
            className="h-14 w-auto brightness-0 invert md:h-16"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm text-muted-dark">
          {nav.links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Texto completo en escritorio; en móvil no cabe junto al logo, así que va el corto */}
        <span className="hidden md:block">
          <HoverButton label={nav.cta.label} href={nav.cta.href} size="sm" />
        </span>
        <span className="md:hidden">
          <HoverButton label={nav.cta.labelShort} href={nav.cta.href} size="sm" />
        </span>
      </Container>
    </header>
  );
}
