import Image from "next/image";
import Reveal from "../animation/Reveal";
import SectionHeading from "../ui/SectionHeading";

const academicCards = [
  {
    number: "01",
    symbol: "A",
    title: "Academic Excellence",
    description:
      "A strong CBSE foundation helps students think deeply and take their learning further.",
    image: "/academics-cbse.png",
    alt: "Students learning in the classroom",
  },
  {
    number: "02",
    symbol: "✦",
    title: "Holistic Development",
    description:
      "Sport, creativity, and community help every student discover their strengths.",
    image: "/academics-sports.webp",
    alt: "Students taking part in school activities",
  },
  {
    number: "03",
    symbol: "∞",
    title: "Global Leaders",
    description:
      "We nurture the confidence, curiosity, and compassion to make a difference.",
    image: "/academics-leadership.webp",
    alt: "Students developing leadership skills",
  },
];

export default function Academics() {
  return (
    <section id="academics" className="academics-section">
      <Reveal>
        <SectionHeading
          eyebrow="Learning with purpose"
          title="A strong foundation for what comes next"
        />
      </Reveal>

      <div className="academic-grid">
        {academicCards.map((card, index) => (
          <Reveal key={card.number} delay={index * 0.1}>
            <article className="academic-card">
              <div className="academic-image">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 760px) 100vw, (max-width: 1050px) 50vw, 33vw"
                />
                <span className="academic-number">{card.number}</span>
              </div>
              <div className="academic-card-content">
                <span className="academic-symbol" aria-hidden="true">
                  {card.symbol}
                </span>
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
