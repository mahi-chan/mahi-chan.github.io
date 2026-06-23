import { useEffect } from "react";
import { profile } from "./data/profile";
import { Background } from "./components/Background";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { GitHubStats } from "./components/GitHubStats";
import { Awards } from "./components/Awards";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  useEffect(() => {
    document.title = `${profile.name} — ${profile.role}`;
  }, []);

  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Experience />
        <Skills />
        <Projects />
        <GitHubStats />
        {profile.awards.length > 0 && <Awards />}
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
