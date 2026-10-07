"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "../animation/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="about-section">
      <div className="about-copy">
        <Reveal>
          <SectionHeading
            eyebrow="A school for the whole journey"
            title="Helping students grow through learning and discovery"
          />
        </Reveal>

        <div className="about-content">
          <Reveal delay={0.1}>
            <p className="about-lead">
              Tulas International School brings academic ambition and a
              supportive community together, helping every student find their
              strengths and build confidence for the world ahead.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="about-statement">
              <span>01</span>

              <div>
                <h3>Rooted in values. Ready for the world.</h3>

                <p>
                  A nurturing day and boarding school where learning reaches
                  beyond lessons into sport, creativity, and life together.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="about-more-wrap">
              <div id="about-more" className="about-more" hidden={!isExpanded}>
                <p>
                  TIS aims to help students realize their full potential and
                  become independent learners who understand their social,
                  moral, and cultural responsibilities. Learning is intended to
                  support students academically as well as mentally,
                  emotionally, spiritually, and creatively.
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
                {isExpanded ? "Read less" : "Get to know TIS"}
                <span aria-hidden="true">{isExpanded ? "−" : "↗"}</span>
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="about-visual" aria-label="Life and learning at Tulas">
        <Image
          src="/school-campus.webp"
          alt="Tulas International School campus"
          fill
          sizes="(max-width: 900px) 100vw, 48vw"
          className="about-campus-image"
        />
        <div className="about-photo-stack" aria-hidden="true">
          <Image
            src="/archery-range.png"
            alt=""
            width={220}
            height={150}
            className="about-small-image about-small-image-one"
          />
          <Image
            src="/horse-riding.png"
            alt=""
            width={220}
            height={150}
            className="about-small-image about-small-image-two"
          />
        </div>
        <span className="about-image-label">A campus made for possibility</span>
      </div>
    </section>
  );
}