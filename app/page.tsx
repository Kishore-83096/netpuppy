import ScrollProgress from "../components/animation/ScrollProgress";
import CustomCursor from "../components/animation/CustomCursor";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Academics from "../components/sections/Academics";
import Facilities from "../components/sections/Facilities";
import StudentExperience from "../components/sections/StudentExperience";
import Admissions from "../components/sections/Admissions";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Academics />
        <StudentExperience />
        <Facilities />
        <Admissions />
      </main>

      <Footer />
    </>
  );
}