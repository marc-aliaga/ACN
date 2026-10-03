// Acordeón de imágenes: en escritorio, la tarjeta bajo el ratón (o con foco) se
// expande y el resto se estrechan y difuminan; en móvil se apilan en columna con
// el texto siempre visible.
export default function ImageAccordion({ items, className = "" }) {
  return (
    <div className={`group flex justify-center gap-2 max-md:flex-col ${className}`}>
      {items.map((item) => (
        <article
          key={item.name}
          className="group/article relative w-full overflow-hidden rounded-xl transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)] focus-within:ring-3 focus-within:ring-[var(--color-gold)] before:absolute before:inset-x-0 before:bottom-0 before:z-[1] before:h-1/2 before:bg-linear-to-t before:from-black/70 before:transition-opacity focus-within:before:opacity-100 md:before:opacity-0 md:hover:before:opacity-100 md:not-[&:hover]:group-hover:w-[20%] md:[&:not(:focus-within):not(:hover)]:group-focus-within:w-[20%] after:absolute after:inset-0 after:rounded-lg after:bg-white/30 after:opacity-0 after:backdrop-blur-sm after:transition-all md:not-[&:hover]:group-hover:after:opacity-100 md:[&:not(:focus-within):not(:hover)]:group-focus-within:after:opacity-100"
        >
          <div
            tabIndex={0}
            className="absolute inset-0 z-10 flex flex-col justify-end p-4 text-white outline-none md:p-5"
          >
            <h3 className="font-[var(--font-display)] text-2xl font-semibold tracking-tight transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:translate-y-0 group-hover/article:opacity-100 group-hover/article:delay-300 group-focus-within/article:translate-y-0 group-focus-within/article:opacity-100 group-focus-within/article:delay-300 md:translate-y-2 md:truncate md:whitespace-nowrap md:text-3xl md:opacity-0">
              {item.name}
            </h3>
            <span className="text-sm font-medium text-[var(--color-gold-2)] transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:translate-y-0 group-hover/article:opacity-100 group-hover/article:delay-500 group-focus-within/article:translate-y-0 group-focus-within/article:opacity-100 group-focus-within/article:delay-500 md:translate-y-2 md:truncate md:whitespace-nowrap md:text-base md:opacity-0">
              {item.role}
            </span>
          </div>
          <img
            className="h-80 w-full object-cover md:h-[440px]"
            src={item.image}
            alt={`${item.name}, ${item.role}`}
            width="960"
            height="1200"
            loading="lazy"
          />
        </article>
      ))}
    </div>
  );
}
