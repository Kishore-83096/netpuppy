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
            src="/tulas-school-logo.png"
            alt="Tulas International School"
            width={180}
            height={60}
            className="school-logo footer-logo"
            unoptimized
          />
        </a>
        <p className="footer-tagline">Boarding and Day School Excellence</p>
      </div>

      <nav className="footer-links" aria-label="Footer navigation">
        <a href="#about">About TIS</a>
        <a href="#academics">Academics</a>
        <a href="#boarding">Boarding Life</a>
        <a href="#facilities">Beyond Academics</a>
        <a href="#admissions">Admission</a>
      </nav>

      <p className="footer-copy">
        Tulas International School
      </p>
    </footer>
  );
}