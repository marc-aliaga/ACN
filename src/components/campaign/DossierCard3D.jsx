import { Download } from "lucide-react";
import AuroraCard3D from "../ui/AuroraCard3D";
import { dossierContents } from "../../data/campaign";
import logoMark from "../../assets/logo-mark.webp";

// Portada del dossier: logo arriba, título abajo. Todo en cqw (se escala con
// la tarjeta), sobre la carcasa 3D compartida.
export default function DossierCard3D({ href = "#dossier-form" }) {
  const { card, tileTitle } = dossierContents;

  return (
    <AuroraCard3D
      href={href}
      tileTitle={tileTitle}
      ariaLabel={`${tileTitle}: ir al formulario de descarga`}
      action={<Download className="size-5" />}
    >
      <img
        src={logoMark}
        alt=""
        className="pointer-events-none absolute"
        style={{
          top: "8cqw",
          left: "8cqw",
          width: "14cqw",
          filter: "brightness(0) invert(1) drop-shadow(0 0.4cqw 1cqw rgba(9,6,22,0.4))",
        }}
      />
      <span
        className="pointer-events-none absolute font-[var(--font-hero-title)] font-semibold leading-[1.05] drop-shadow-[0_2px_8px_rgba(9,6,22,0.45)]"
        style={{ left: "8cqw", right: "8cqw", bottom: "19cqw", fontSize: "11cqw" }}
      >
        {card.title}
      </span>
      <span
        className="pointer-events-none absolute text-white/85"
        style={{ left: "8cqw", bottom: "11cqw", fontSize: "4.4cqw", letterSpacing: "0.02em" }}
      >
        {card.lines}
      </span>
      <span
        className="pointer-events-none absolute rounded-full border border-white/50 font-semibold tracking-[0.14em] text-white/90"
        style={{ right: "8cqw", top: "9cqw", padding: "1cqw 3cqw", fontSize: "3.4cqw" }}
      >
        {card.tag}
      </span>
    </AuroraCard3D>
  );
}
