import Reveal from "../animation/Reveal";
import SectionHeading from "../ui/SectionHeading";

const experiences = [
  {
    number: "01",
    title: "Discover",
    description:
      "Explore new ideas, interests, activities, and experiences that encourage curiosity.",
  },
  {
    number: "02",
    title: "Connect",
    description:
      "Build friendships, collaborate with others, and become part of a supportive school community.",
  },
  {
    number: "03",
    title: "Grow",
    description:
      "Develop confidence, character, leadership, and the mindset needed for the future.",
  },
];

export default function StudentExperience() {
  return (
    <section className="student-experience">
      <div className="student-experience-header">
        <Reveal>
          <SectionHeading
            eyebrow="Student Experience"
            title="Where every student gets the opportunity to shine."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="student-experience-intro">
            At Tulas, learning extends beyond academics. Students are
            encouraged to discover their interests, build meaningful
            relationships, and grow with confidence.
          </p>
        </Reveal>
      </div>

      <div className="experience-list">
        {experiences.map((experience, index) => (
          <Reveal key={experience.number} delay={index * 0.1}>
            <article className="experience-item">
              <span className="experience-number">{experience.number}</span>

              <div className="experience-main">
                <h3>{experience.title}</h3>

                <p>{experience.description}</p>
              </div>

              <span className="experience-arrow">↗</span>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}