"use client";

import { useState } from "react";
import Reveal from "../animation/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="about-section">
      <div className="about-heading">
        <Reveal>
          <SectionHeading
            eyebrow="About TIS"
            title="Tulas International School"
          />
        </Reveal>
      </div>

      <div className="about-content">
        <Reveal delay={0.1}>
          <p className="about-lead">
            Tulas International School was established in 2012 under the aegis
            of Rishabh Educational Trust to impart education through seamless
            opportunities.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="about-statement">
            <span>01</span>

            <div>
              <h3>Boarding and Day School Excellence</h3>

              <p>
                We provide world-class education, modern facilities, and a
                nurturing environment for students to thrive academically,
                socially, and culturally.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="about-more-wrap">
            <div
              id="about-more"
              className="about-more"
              hidden={!isExpanded}
            >
              <p>
                TIS aims to help students realize their full potential and
                become independent learners who understand their social,
                moral, and cultural responsibilities. Learning is intended to
                support students academically as well as mentally, emotionally,
                spiritually, and creatively.
              </p>
              <p>
                The school describes its community values as equity and
                engagement: creating a supportive environment, encouraging
                active learning, and guiding students to make the most of
                their abilities.
              </p>
            </div>
            <button
              type="button"
              className="content-toggle"
              aria-expanded={isExpanded}
              aria-controls="about-more"
              onClick={() => setIsExpanded((expanded) => !expanded)}
            >
              {isExpanded ? "Read less" : "Read more"}
              <span aria-hidden="true">{isExpanded ? "−" : "+"}</span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}