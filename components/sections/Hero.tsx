"use client";

import { motion } from "motion/react";
import Reveal from "../animation/Reveal";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <Reveal>
          <p className="hero-eyebrow">Welcome to Tulas International School (TIS)</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1>
            Welcome to Tulas International School (TIS)
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="hero-description">
            TIS is one of India’s top boarding and day schools in Dehradun,
            India. Our CBSE curriculum focuses on academic excellence, holistic
            development, and preparing students to be global leaders. Explore
            our programs, campus life, achievements, and why TIS is the
            preferred choice for parents across India.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="hero-actions">
            <Button href="https://admission.tis.edu.in">Apply Now</Button>
            <Button href="#academics">Academics</Button>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="hero-meta">
            <div>
              <strong>Boarding and Day School</strong>
              <span>Dehradun, India</span>
            </div>

            <div>
              <strong>CBSE Curriculum</strong>
              <span>Academic excellence</span>
            </div>

            <div>
              <strong>Holistic Development</strong>
              <span>Global leaders</span>
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
              <span>Academic excellence</span>
              <span>Holistic development</span>
              <span>Global leaders</span>
            </div>

            <div className="hero-card-bottom">
              <span>Boarding and Day School Excellence</span>
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
              <strong>CBSE Curriculum</strong>
              <small>Academic excellence</small>
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
            <strong>TIS</strong>
            <span>Dehradun, India</span>
          </motion.div>
        </motion.div>
      </Reveal>
    </section>
  );
}