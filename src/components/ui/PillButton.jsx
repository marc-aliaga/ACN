import { ArrowRight } from "lucide-react";

// Botón en píldora con el círculo de flecha a la derecha (el del diseño de
// referencia). "dark"/"outline" van sobre fondos claros; "light"/"outlineLight"
// sobre fondos oscuros.
const VARIANTS = {
  dark: { root: "bg-black text-white hover:bg-[#1f1f24]", dot: "bg-white text-black" },
  light: { root: "bg-white text-black hover:bg-white/90", dot: "bg-black text-white" },
  outline: { root: "border border-black/80 bg-white text-black hover:bg-black/[0.04]", dot: "bg-black text-white" },
  outlineLight: { root: "border border-white/50 text-white hover:bg-white/10", dot: "bg-white text-black" },
};

const SIZES = {
  sm: { root: "h-10 pl-4 pr-1.5 gap-2.5 text-xs", dot: "h-7 w-7" },
  md: { root: "h-12 pl-6 pr-1.5 gap-3 text-sm", dot: "h-9 w-9" },
};

export default function PillButton({ href, children, variant = "dark", size = "md", target, className = "" }) {
  const v = VARIANTS[variant] ?? VARIANTS.dark;
  const s = SIZES[size] ?? SIZES.md;

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`group inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-full font-semibold transition-colors ${v.root} ${s.root} ${className}`}
    >
      {children}
      <span className={`flex items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5 ${v.dot} ${s.dot}`}>
        <ArrowRight className="h-4 w-4" />
      </span>
    </a>
  );
}
