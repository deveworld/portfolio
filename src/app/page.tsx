import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { OpenSource } from "@/components/sections/OpenSource";
import { Presentations } from "@/components/sections/Presentations";
import { Achievements } from "@/components/sections/Achievements";
import { Skills } from "@/components/sections/Skills";
import { Freelance } from "@/components/sections/Freelance";
import { Grants } from "@/components/sections/Grants";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary overflow-x-hidden selection:bg-white/20">
      {/* Background Patterns */}
      <div className="hidden md:block fixed inset-0 bg-dot-pattern opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <Hero />
        <About />
        <Projects />
        <OpenSource />
        <Presentations />
        <Achievements />
        <Skills />
        <Freelance />
        <Grants />
        <Contact />

        {/* Footer */}
        <footer className="py-12 text-center text-sm text-text-muted border-t border-border-subtle mt-12">
          <p>© 2026 Deveworld. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
