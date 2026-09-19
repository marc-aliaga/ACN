import Container from "./ui/Container";
import HoverButton from "./ui/HoverButton";
import { nav } from "../data/content";
import logo from "../assets/logo-full.png";

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

        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-dark">
          {nav.links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <HoverButton label={nav.cta.label} href={nav.cta.href} size="sm" />
      </Container>
    </header>
  );
}
