import Image from "next/image";
import Reveal from "../animation/Reveal";
import SectionHeading from "../ui/SectionHeading";

const facilities = [
  {
    number: "01",
    title: "Modern Classrooms",
    description:
      "Thoughtfully designed spaces that encourage curiosity, collaboration, and focused learning.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    alt: "Students learning in a classroom",
  },
  {
    number: "02",
    title: "Sports & Activities",
    description:
      "Opportunities for students to stay active, build teamwork, and discover their strengths beyond academics.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80",
    alt: "Students participating in sports",
  },
  {
    number: "03",
    title: "Technology & Innovation",
    description:
      "Technology-rich learning experiences that help students explore ideas and develop future-ready skills.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    alt: "Students working with technology",
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className="facilities-section">
      <Reveal>
        <SectionHeading
          eyebrow="Our Campus"
          title="A space to learn, play, and grow."
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

                <p>{facility.description}</p>

                <span className="facility-link">
                  Explore
                  <span>↗</span>
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}