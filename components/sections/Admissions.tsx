"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Reveal from "../animation/Reveal";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function Admissions() {
  return (
    <section id="admissions" className="admissions">
      <div className="admissions-content">
        <Reveal>
          <SectionHeading
            eyebrow="Admissions"
            title="Begin your journey with Tulas."
          />

          <p className="admissions-description">
            Take the first step towards an inspiring educational experience
            where curiosity, character, and excellence come together.
          </p>

          <Button href="https://admission.tis.edu.in" className="admissions-button">
            Start Your Application
            <span>↗</span>
          </Button>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <motion.div
          className="admissions-side"
          aria-hidden="true"
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="admissions-orbit admissions-orbit-one" />
          <div className="admissions-orbit admissions-orbit-two" />

          <div className="admissions-side-content">
            <span>ADMISSIONS</span>
            <strong>2026</strong>
            <Image
              src="https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png"
              alt=""
              width={52}
              height={52}
              className="admissions-circle"
              unoptimized
            />
          </div>
        </motion.div>
      </Reveal>
    </section>
  );
}