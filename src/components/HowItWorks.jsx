import { motion } from "framer-motion";
import Container from "./ui/Container";
import { howItWorks } from "../data/content";
import stepOneImg from "../assets/feature-step1-1.webp";
import stepTwoImg from "../assets/2.webp";
import stepThreeImg from "../assets/3.webp";

const STEP_IMAGES = [stepOneImg, stepTwoImg, stepThreeImg];

export default function HowItWorks() {
  return (
    <section id="como-invertimos" className="surface-dark py-24 md:py-40">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-[var(--font-display)] text-3xl md:text-5xl font-semibold tracking-tight">
            {howItWorks.title}
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-dark">{howItWorks.intro}</p>
        </div>

        <div className="mt-24 flex flex-col gap-24 md:mt-36 md:gap-40">
          {howItWorks.steps.map((step, i) => {
            const imageRight = i % 2 === 0;
            return (
              <div
                key={step.number}
                className={[
                  "flex flex-col gap-10 md:items-center md:gap-16",
                  imageRight ? "md:flex-row" : "md:flex-row-reverse",
                ].join(" ")}
              >
                <motion.div
                  className="flex-1"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15% 0px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span
                    aria-hidden="true"
                    className="block font-[var(--font-display)] text-7xl font-semibold text-transparent md:text-8xl"
                    style={{ WebkitTextStroke: "1px rgba(255,255,255,0.22)" }}
                  >
                    {step.number}
                  </span>
                  <h3 className="mt-4 font-[var(--font-display)] text-2xl font-semibold tracking-tight md:text-3xl">
                    {step.title}
                  </h3>
                  <ul className="mt-4 max-w-md space-y-2.5">
                    {step.bullets.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-base text-muted-dark md:text-lg"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-[var(--color-gold)]"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  className="relative flex flex-1 justify-center"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15% 0px" }}
                  transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div
                    className="absolute -inset-16 -z-10 rounded-full opacity-50 blur-3xl"
                    style={{ background: "radial-gradient(circle, rgba(177,135,48,0.25), transparent 70%)" }}
                    aria-hidden="true"
                  />
                  <img
                    src={STEP_IMAGES[i]}
                    alt={step.title}
                    loading="lazy"
                    className="h-auto w-full max-w-sm object-contain md:max-w-md"
                  />
                </motion.div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
