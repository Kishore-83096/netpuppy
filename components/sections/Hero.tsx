"use client";

import { motion } from "motion/react";
import Reveal from "../animation/Reveal";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <Reveal>
          <p className="hero-eyebrow">
            Welcome to Tulas International School
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1>
            Inspiring young minds.
            <span>Shaping future leaders.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="hero-description">
            A place where curiosity, character, and excellence come together
            to create a meaningful learning journey.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="hero-actions">
            <Button href="#admissions">Explore Admissions</Button>
            <Button href="#about">Discover Tulas</Button>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="hero-meta">
            <div>
              <strong>Excellence</strong>
              <span>in every learner</span>
            </div>

            <div>
              <strong>Curiosity</strong>
              <span>at every step</span>
            </div>

            <div>
              <strong>Character</strong>
              <span>for the future</span>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.3} y={40}>
        <motion.div
          className="hero-visual"
          aria-hidden="true"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="hero-school-image" />

          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />

          <div className="hero-grid-lines" />

          <motion.div
            className="hero-card"
            animate={{
              rotate: [3, 1.5, 3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="hero-card-top">
              <span>01</span>
              <span>TULAS</span>
            </div>

            <div className="hero-card-content">
              <span>Learn</span>
              <span>Explore</span>
              <span>Grow</span>
            </div>

            <div className="hero-card-bottom">
              <span>Education for tomorrow</span>
              <span>↗</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-floating-badge hero-floating-badge-one"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span>✦</span>
            <div>
              <strong>Future Ready</strong>
              <small>Learning with purpose</small>
            </div>
          </motion.div>

          <motion.div
            className="hero-floating-badge hero-floating-badge-two"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <strong>100%</strong>
            <span>Curiosity</span>
          </motion.div>
        </motion.div>
      </Reveal>
    </section>
  );
}