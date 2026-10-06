import Reveal from "../animation/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-heading">
        <Reveal>
          <SectionHeading
            eyebrow="Who We Are"
            title="Education beyond the classroom."
          />
        </Reveal>
      </div>

      <div className="about-content">
        <Reveal delay={0.1}>
          <p className="about-lead">
            Tulas International School is a place where students are
            encouraged to think boldly, explore their potential, and grow
            into confident individuals.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="about-statement">
            <span>01</span>

            <div>
              <h3>Learning with purpose</h3>

              <p>
                We believe education should go beyond textbooks. Our approach
                combines strong academics with creativity, character,
                collaboration, and real-world experiences.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}