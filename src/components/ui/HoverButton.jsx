import { ArrowRight } from "lucide-react";

const SIZES = {
  sm: "min-w-[9.5rem] px-5 py-2.5 text-xs gap-1.5",
  md: "min-w-[15rem] px-8 py-4 text-sm gap-2",
};

// "dark" = sobre fondos oscuros (hero, secciones surface-dark).
// "light" = sobre fondos claros (modales, secciones surface-light).
const VARIANTS = {
  dark: {
    wrapper: "border-white/15 bg-white/[0.04] text-white",
    dot: "bg-white/10",
  },
  light: {
    wrapper: "border-black/15 bg-black/[0.04] text-[var(--color-ink)]",
    dot: "bg-black/10",
  },
};

export default function HoverButton({
  label = "Button",
  href = "#",
  size = "md",
  variant = "dark",
  className = "",
  target,
}) {
  const v = VARIANTS[variant] ?? VARIANTS.dark;

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={[
        "group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full border font-semibold",
        v.wrapper,
        SIZES[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="relative z-10 inline-flex items-center gap-2 transition-all duration-300 ease-out group-hover:translate-x-10 group-hover:opacity-0">
        {label}
      </span>

      <span
        aria-hidden="true"
        className="absolute inset-0 z-10 flex translate-x-10 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100"
      >
        {label}
        <ArrowRight className="h-4 w-4" />
      </span>

      <span
        className={`absolute left-[20%] top-1/2 z-0 h-2 w-2 -translate-y-1/2 rounded-full transition-all duration-500 ease-out group-hover:left-0 group-hover:top-0 group-hover:h-full group-hover:w-full group-hover:translate-y-0 group-hover:bg-[var(--color-gold)] ${v.dot}`}
        aria-hidden="true"
      />
    </a>
  );
}
