import ScrollProgress from "../components/animation/ScrollProgress";
import CustomCursor from "../components/animation/CustomCursor";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import AboutTIS from "../components/sections/AboutTIS";
import Academics from "../components/sections/Academics";
import BeyondAcademics from "../components/sections/BeyondAcademics";
import BoardingLife from "../components/sections/BoardingLife";
import Admission from "../components/sections/Admission";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <AboutTIS />
        <Academics />
        <BeyondAcademics />
        <BoardingLife />
        <Admission />
      </main>

      <Footer />
    </>
  );
}