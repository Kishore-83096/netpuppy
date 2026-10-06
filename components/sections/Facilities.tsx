import Image from "next/image";
import Reveal from "../animation/Reveal";
import SectionHeading from "../ui/SectionHeading";

const facilities = [
  {
    number: "01",
    title: "Taekwondo",
    image:
      "https://tis.edu.in/_next/static/media/karate.4020fba5.webp",
    alt: "Taekwondo",
  },
  {
    number: "02",
    title: "Football",
    image:
      "https://tis.edu.in/_next/static/media/Image%202.0c5295c9.webp",
    alt: "Football",
  },
  {
    number: "03",
    title: "Shooting Range",
    image:
      "https://tis.edu.in/_next/static/media/Image%203.21dc9e69.webp",
    alt: "Shooting Range",
  },
  {
    number: "04",
    title: "Horse Riding",
    image: "https://tis.edu.in/_next/static/media/polo.973ddbae.webp",
    alt: "Horse Riding",
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