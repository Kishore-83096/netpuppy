import Image from "next/image";
import Reveal from "../animation/Reveal";
import SectionHeading from "../ui/SectionHeading";

const facilities = [
  {
    number: "01",
    title: "Taekwondo",
    image: "/taekwondo-training.png",
    alt: "Tulas students practicing Taekwondo",
  },
  {
    number: "02",
    title: "Football",
    image: "/football-team.png",
    alt: "Tulas students playing football on the school grounds",
  },
  {
    number: "03",
    title: "Archery",
    image: "/archery-range.png",
    alt: "Tulas students practicing archery on the school grounds",
  },
  {
    number: "04",
    title: "Horse Riding",
    image: "/horse-riding.png",
    alt: "Tulas students riding horses at the school",
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className="facilities-section">
      <Reveal>
        <SectionHeading
          eyebrow="Explore our programs, campus life, achievements"
          title="Beyond Academics"
        />
      </Reveal>

      <div className="facility-grid">
        {facilities.map((facility, index) => (
          <Reveal key={facility.number} delay={index * 0.1}>
            <article className="facility-card">
              <div className="facility-image">
                <Image
                  src={facility.image}
                  alt={facility.alt}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  unoptimized
                />

                <span className="facility-number">{facility.number}</span>
              </div>

              <div className="facility-content">
                <h3>{facility.title}</h3>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}