import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, PlayCircle } from "lucide-react";
import Container from "./ui/Container";
import HoverButton from "./ui/HoverButton";
import CountUp from "./ui/CountUp";
import VideoModal from "./ui/VideoModal";
import { investorZone, contactSection } from "../data/content";
import videoThumbnail from "../assets/bg5.jpg";

// Secuencia coreografiada: título -> tarjeta azul (texto + checklist + vídeo) ->
// stats -> CTA final. Un único trigger de scroll (whileInView en el wrapper)
// reparte el stagger entre las fases, en vez de animaciones independientes.
const sequenceVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3, delayChildren: 0.1 } },
};

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], when: "beforeChildren", staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const statsVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const statCardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const ctaVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.94 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "backOut" } },
};

// El azul "premium card" que pediste, con la misma sensación de profundidad
// (degradado + sombras internas/externas) que el resto de tarjetas del sitio.
const PREMIUM_CARD_STYLE = {
  background: "linear-gradient(145deg, #162C6D 0%, #0A101D 100%)",
  boxShadow:
    "0 40px 100px -20px rgba(0,0,0,0.9), 0 20px 40px -20px rgba(0,0,0,0.8), inset 0 1px 2px rgba(255,255,255,0.15), inset 0 -2px 4px rgba(0,0,0,0.8)",
  border: "1px solid rgba(255,255,255,0.06)",
};

export default function InvestorZone() {
  const [videoOpen, setVideoOpen] = useState(false);
  const { card } = investorZone;
  const whatsappUrl = `https://wa.me/${contactSection.whatsappNumber}?text=${encodeURIComponent(
    investorZone.cta.whatsappMessage
  )}`;

  return (
    <section id="zona-inversores" className="surface-dark py-24 md:py-32">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={sequenceVariants}
        >
          <motion.div variants={headerVariants} className="mx-auto max-w-2xl text-center">
            <h2 className="font-[var(--font-display)] text-3xl md:text-5xl font-semibold tracking-tight">
              {investorZone.title}
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted-dark">{investorZone.subtitle}</p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            style={PREMIUM_CARD_STYLE}
            className="relative mt-14 overflow-hidden rounded-2xl p-6 md:p-10"
          >
            <motion.p variants={itemVariants} className="max-w-2xl text-sm leading-relaxed text-blue-100/70 md:text-base">
              {card.intro}
            </motion.p>

            <div className="mt-8 grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {card.checklist.map((item) => (
                    <motion.li key={item.id} variants={itemVariants} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--color-gold-2)]" />
                      <span className="text-sm font-medium text-white">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.button
                type="button"
                variants={itemVariants}
                onClick={() => setVideoOpen(true)}
                aria-label="Reproducir vídeo de la zona de inversores"
                className="group relative aspect-video w-full cursor-pointer overflow-hidden rounded-xl"
              >
                <img
                  src={videoThumbnail}
                  alt="Miniatura del vídeo de la zona de inversores"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <PlayCircle className="h-16 w-16 text-white/85 transition-all duration-300 group-hover:scale-110 group-hover:text-white" />
                </div>
              </motion.button>
            </div>
          </motion.div>

          <motion.div variants={statsVariants} className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {investorZone.stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={statCardVariants}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center"
              >
                <div className="font-[var(--font-display)] text-4xl font-semibold tracking-tight md:text-5xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm text-muted-dark">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={ctaVariants} className="mt-10 flex flex-col items-center text-center">
            <HoverButton label={investorZone.cta.label} href={whatsappUrl} target="_blank" />
            <span className="mt-3 text-xs text-muted-dark/70">{investorZone.cta.caption}</span>
            {investorZone.cta.disclaimer && (
              <p className="mt-4 max-w-md text-[11px] text-muted-dark/60">{investorZone.cta.disclaimer}</p>
            )}
          </motion.div>
        </motion.div>
      </Container>

      <VideoModal open={videoOpen} videoUrl={card.video.url} onClose={() => setVideoOpen(false)} />
    </section>
  );
}
