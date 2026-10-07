"use client";

import { useState } from "react";
import Reveal from "../animation/Reveal";
import SectionHeading from "../ui/SectionHeading";

const experiences = [
  {
    number: "01",
    title: "Leadership",
    id: "boarding-leadership",
    description:
      "TIS encourages students to take initiative and make a positive contribution. Student councils, clubs, and community-service activities give them opportunities to practise decision-making, problem-solving, and empathy.",
  },
  {
    number: "02",
    title: "Innovation",
    id: "boarding-innovation",
    description:
      "TIS values discussion and the exchange of ideas. Listening to different viewpoints helps students think critically, explore fresh approaches, and build the confidence to solve problems creatively.",
  },
  {
    number: "03",
    title: "Lifelong Learning",
    id: "boarding-lifelong-learning",
    description:
      "Learning continues beyond lessons. With guidance from teachers and opportunities to learn alongside peers, students can develop curiosity, independence, and a lasting desire to keep learning.",
  },
];

export default function StudentExperience() {
  const [expandedExperience, setExpandedExperience] = useState<string | null>(
    null,
  );

  return (
    <section id="boarding" className="student-experience">
      <div className="student-experience-header">
        <Reveal>
          <SectionHeading
            eyebrow="Boarding Life"
            title="Boarding and Day School Excellence"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="student-experience-intro">
            Join TIS to be part of a community that encourages leadership,
            innovation, and lifelong learning.
          </p>
        </Reveal>
      </div>

      <div className="experience-list">
        {experiences.map((experience, index) => (
          <Reveal key={experience.number} delay={index * 0.1}>
            <article
              className={`experience-item${expandedExperience === experience.id ? " is-expanded" : ""}`}
            >
              <button
                type="button"
                className="experience-toggle"
                aria-expanded={expandedExperience === experience.id}
                aria-controls={`${experience.id}-details`}
                onClick={() =>
                  setExpandedExperience((expanded) =>
                    expanded === experience.id ? null : experience.id,
                  )
                }
              >
                <span className="experience-number">{experience.number}</span>
                <span className="experience-main">
                  <span className="experience-title">{experience.title}</span>
                </span>
                <span className="experience-arrow" aria-hidden="true">
                  {expandedExperience === experience.id ? "−" : "+"}
                </span>
              </button>
              <div
                id={`${experience.id}-details`}
                className="experience-details"
                hidden={expandedExperience !== experience.id}
              >
                <p>{experience.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}