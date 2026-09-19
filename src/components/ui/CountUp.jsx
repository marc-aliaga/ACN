import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

export default function CountUp({ value, prefix = "", suffix = "", decimals, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 26, stiffness: 90 });
  const digits = decimals ?? (Number.isInteger(value) ? 0 : 1);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${v.toLocaleString("es-ES", {
          minimumFractionDigits: digits,
          maximumFractionDigits: digits,
        })}${suffix}`;
      }
    });
  }, [spring, prefix, suffix, digits]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}0{suffix}
    </motion.span>
  );
}
