import { Navbar } from "@/layout/Navbar";
import{Footer} from "@/layout/Footer";
import { Hero } from "@/sections/hero";
import { About } from "@/sections/About";
import { Certifications } from "@/sections/Certifications";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";
import { Button } from "./assets/Components/Button";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Certifications/>
        <Contact />
      </main>
      <Footer/>

 </div>
  );
}

export default App
