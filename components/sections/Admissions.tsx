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
            eyebrow="Contact Us."
            title="Tulas International School"
          />

          <p className="admissions-description">
            Admission Helpline No. +91-98379 83791
            <br />
            info@tis.edu.in
            <br />
            Tulas International School Dhoolkot, P.O – Selaqui, Chakrata Road,
            Dehradun-248011 (Uttarakhand)
            <br />
            Landline No. 0135-2699444, 0135-2699666
          </p>

          <Button href="mailto:info@tis.edu.in">
            Enquire Now!
            <span>↗</span>
          </Button>
          <Button
            href="https://admission.tis.edu.in"
            className="admissions-button"
          >
            Apply Now
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
            <span>BOARDING AND DAY SCHOOL</span>
            <strong>TIS</strong>
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