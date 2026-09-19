import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, MapPin } from "lucide-react";

export default function LocationMap({
  address = "",
  location = "Madrid",
  coordinates = "40.4168° N, 3.7038° W",
  accent = "256 70% 30%",
  defaultExpanded = false,
  className = "",
}) {
  const [isHovered, setIsHovered] = useState(false);
  const isExpanded = defaultExpanded;
  const containerRef = useRef(null);
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    [address, location].filter(Boolean).join(", ")
  )}`;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-50, 50], [8, -8]);
  const rotateY = useTransform(mouseX, [-50, 50], [-8, 8]);

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - (rect.left + rect.width / 2));
    mouseY.set(e.clientY - (rect.top + rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.a
      ref={containerRef}
      href={mapsHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Abrir ${location} en Google Maps`}
      className={`relative block cursor-pointer select-none ${className}`}
      style={{ perspective: 1000, "--map-accent": accent }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl border border-black/[0.08] bg-[var(--color-paper-soft)]"
        style={{ rotateX: springRotateX, rotateY: springRotateY, transformStyle: "preserve-3d" }}
        animate={{ width: isExpanded ? 320 : 240, height: isExpanded ? 260 : 140 }}
        transition={{ type: "spring", stiffness: 400, damping: 35 }}
      >
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="pointer-events-none absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                <motion.line
                  x1="0%" y1="35%" x2="100%" y2="35%"
                  stroke="var(--color-ink)" strokeOpacity={0.16} strokeWidth="4"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
                />
                <motion.line
                  x1="0%" y1="65%" x2="100%" y2="65%"
                  stroke="var(--color-ink)" strokeOpacity={0.16} strokeWidth="4"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
                />
                <motion.line
                  x1="30%" y1="0%" x2="30%" y2="100%"
                  stroke="var(--color-ink)" strokeOpacity={0.12} strokeWidth="3"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
                />
                <motion.line
                  x1="70%" y1="0%" x2="70%" y2="100%"
                  stroke="var(--color-ink)" strokeOpacity={0.12} strokeWidth="3"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.5 }}
                />
                {[20, 50, 80].map((y, i) => (
                  <motion.line
                    key={`h-${y}`}
                    x1="0%" y1={`${y}%`} x2="100%" y2={`${y}%`}
                    stroke="var(--color-ink)" strokeOpacity={0.06} strokeWidth="1.5"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  />
                ))}
                {[15, 45, 55, 85].map((x, i) => (
                  <motion.line
                    key={`v-${x}`}
                    x1={`${x}%`} y1="0%" x2={`${x}%`} y2="100%"
                    stroke="var(--color-ink)" strokeOpacity={0.06} strokeWidth="1.5"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                  />
                ))}
              </svg>

              {[
                { top: "40%", left: "10%", w: "15%", h: "20%", d: 0.5 },
                { top: "15%", left: "35%", w: "12%", h: "15%", d: 0.6 },
                { top: "70%", left: "75%", w: "18%", h: "18%", d: 0.7 },
                { top: "20%", right: "10%", w: "10%", h: "25%", d: 0.55 },
                { top: "55%", left: "5%", w: "8%", h: "12%", d: 0.65 },
                { top: "8%", left: "75%", w: "14%", h: "10%", d: 0.75 },
              ].map((b, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-sm"
                  style={{
                    top: b.top,
                    left: b.left,
                    right: b.right,
                    width: b.w,
                    height: b.h,
                    background: `hsl(var(--map-accent) / 0.22)`,
                    border: "1px solid hsl(var(--map-accent) / 0.3)",
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: b.d }}
                />
              ))}

              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                initial={{ scale: 0, y: -20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.3 }}
              >
                <MapPin
                  className="h-8 w-8"
                  style={{
                    color: `hsl(var(--map-accent))`,
                    fill: `hsl(var(--map-accent) / 0.2)`,
                    filter: "drop-shadow(0 2px 6px hsl(var(--map-accent) / 0.55))",
                  }}
                  strokeWidth={2}
                />
              </motion.div>

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, var(--color-paper-soft), transparent 55%)",
                  opacity: 0.7,
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-10 flex h-full flex-col justify-between p-4">
          <div className="flex items-start justify-between">
            <motion.div animate={{ opacity: isExpanded ? 0 : 1 }} transition={{ duration: 0.3 }}>
              <MapPin
                className="h-[18px] w-[18px]"
                style={{ color: `hsl(var(--map-accent))` }}
              />
            </motion.div>

            <motion.div
              className="flex items-center gap-1.5 rounded-full px-2 py-1 backdrop-blur-sm"
              style={{ background: "rgba(10, 10, 12, 0.05)" }}
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="h-1.5 w-1.5 rounded-full" style={{ background: `hsl(var(--map-accent))` }} />
              <span className="text-[10px] font-medium uppercase tracking-wide text-muted-light">Aprox.</span>
            </motion.div>
          </div>

          <div className="space-y-1">
            <motion.h3
              className="text-sm font-medium tracking-tight text-[var(--color-ink)]"
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {location}
            </motion.h3>

            <AnimatePresence>
              {isExpanded && (
                <motion.p
                  className="font-mono text-xs text-muted-light"
                  initial={{ opacity: 0, y: -10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -10, height: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {coordinates}
                </motion.p>
              )}
            </AnimatePresence>

            <motion.div
              className="h-px"
              style={{
                background: "linear-gradient(to right, hsl(var(--map-accent) / 0.5), hsl(var(--map-accent) / 0.15), transparent)",
                originX: 0,
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isHovered || isExpanded ? 1 : 0.3 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>
      </motion.div>

      <motion.p
        className="absolute -bottom-6 left-1/2 inline-flex items-center gap-1 whitespace-nowrap text-[10px] text-muted-light"
        style={{ x: "-50%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 4 }}
        transition={{ duration: 0.2 }}
      >
        Abrir en Google Maps <ExternalLink className="h-2.5 w-2.5" />
      </motion.p>
    </motion.a>
  );
}
