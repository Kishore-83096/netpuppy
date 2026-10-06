import Reveal from "../animation/Reveal";
import SectionHeading from "../ui/SectionHeading";

const academicCards = [
  {
    number: "01",
    symbol: "A",
    title: "Academic Excellence",
    description:
      "A strong academic foundation supported by thoughtful teaching and continuous learning.",
    image:
      "https://tis.edu.in/_next/static/media/CBSEHeader.6fa1d7c5.png",
  },
  {
    number: "02",
    symbol: "✦",
    title: "Holistic Development",
    description:
      "Encouraging students to develop confidence, creativity, communication, and leadership.",
    image:
      "https://tis.edu.in/_next/static/media/SPORTS.5b77ae97.webp",
  },
  {
    number: "03",
    symbol: "∞",
    title: "Future Ready",
    description:
      "Preparing students with the skills, mindset, and curiosity needed for a changing world.",
    image:
      "https://tis.edu.in/_next/static/media/image2.c5a88387.webp",
  },
];

export default function Academics() {
  return (
    <section id="academics">
      <Reveal>
        <SectionHeading
          eyebrow="Academics"
          title="Learning designed for tomorrow."
        />
      </Reveal>

      <div className="academic-grid">
        {academicCards.map((card, index) => (
          <Reveal key={card.number} delay={index * 0.1}>
            <article
              className="academic-card"
              style={{
                backgroundImage: `linear-gradient(
                  180deg,
                  rgba(16, 41, 59, 0.18) 0%,
                  rgba(16, 41, 59, 0.78) 72%,
                  rgba(16, 41, 59, 0.94) 100%
                ), url("${card.image}")`,
              }}
            >
              <div className="academic-card-top">
                <span>{card.number}</span>
                <span className="academic-arrow">↗</span>
              </div>

              <div className="academic-card-content">
                <div className="academic-symbol">{card.symbol}</div>

                <h3>{card.title}</h3>

                <p>{card.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}