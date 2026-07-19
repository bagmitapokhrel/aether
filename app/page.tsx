import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
    
      <Navbar />
      <Hero />
      <About />
      <Projects />  
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}