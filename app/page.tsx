import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { AIEdge } from "@/components/sections/AIEdge";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <AIEdge />
        <Contact />
      </main>
    </div>
  );
}
