import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import ImageAccordion from "./ui/ImageAccordion";
import { team } from "../data/content";

export default function Team() {
  return (
    <section id="equipo" className="defer-render [--defer-h:900px] surface-light py-24 md:py-32">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="font-[var(--font-display)] text-3xl md:text-5xl font-semibold tracking-tight">
            {team.title}
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-light">{team.intro}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 md:mt-20">
          <ImageAccordion items={team.members} />
        </Reveal>
      </Container>
    </section>
  );
}
