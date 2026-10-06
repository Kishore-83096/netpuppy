import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="footer-identity">
        <a
          href="#"
          className="footer-brand"
          aria-label="Tulas International School home"
        >
          <Image
            src="https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png"
            alt="Tulas International School"
            width={180}
            height={60}
            className="school-logo footer-logo"
            unoptimized
          />
        </a>
        <p className="footer-tagline">Learning today. Leading tomorrow.</p>
      </div>

      <nav className="footer-links" aria-label="Footer navigation">
        <a href="#about">About</a>
        <a href="#academics">Academics</a>
        <a href="#facilities">Facilities</a>
        <a href="#admissions">Admissions</a>
      </nav>

      <p className="footer-copy">
        © 2026 Tulas International School. All rights reserved.
      </p>
    </footer>
  );
}