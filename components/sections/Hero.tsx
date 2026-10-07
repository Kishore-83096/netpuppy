"use client";

import Image from "next/image";
import Reveal from "../animation/Reveal";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <Reveal>
          <p className="hero-eyebrow">Tulas International School · Dehradun</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1>
            A brighter future
            <span>starts here.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="hero-description">
            A place to learn with purpose, explore new interests, and grow into
            a confident, compassionate global citizen.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="hero-actions">
            <Button href="https://admission.tis.edu.in">Explore TIS</Button>
            <Button href="#facilities">Discover school life</Button>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="hero-meta">
            <div>
              <strong>01</strong>
              <span>CBSE learning</span>
            </div>
            <div>
              <strong>02</strong>
              <span>Residential life</span>
            </div>
            <div>
              <strong>03</strong>
              <span>Beyond the classroom</span>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.25} y={36}>
        <div className="hero-visual">
          <Image
            src="/football-team.png"
            alt="Students enjoying an active school life"
            fill
            loading="eager"
            sizes="(max-width: 760px) 100vw, 44vw"
            className="hero-feature-image"
          />
          <div className="hero-image-caption">
            <span>Learning in every direction</span>
            <span aria-hidden="true">↗</span>
          </div>
          <div className="hero-floating-badge">
            <span aria-hidden="true">✦</span>
            <div>
              <strong>Curiosity in action</strong>
              <small>Room to discover what you love</small>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
