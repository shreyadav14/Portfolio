import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Testimonial } from "@/sections/Testimonial";
import { Contact } from "@/sections/Contact";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Testimonial />
        <Experience />
        <Contact />
      </main>

 </div>
  );
}

export default App
