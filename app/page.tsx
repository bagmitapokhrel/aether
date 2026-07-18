import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import ProgressBar from "@/components/layout/ProgressBar";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <>
      <ProgressBar />
      <Navbar />
      <Hero />
      <About />
      <Projects />  
    </>
  );
}