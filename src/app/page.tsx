import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WorkingStyle } from "@/components/sections/WorkingStyle";
import { Projects } from "@/components/sections/Projects";
import { Domains } from "@/components/sections/Domains";
import { Architecture } from "@/components/sections/Architecture";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <Hero />
      <About />
      <WorkingStyle />
      <Projects />
      <Domains />
      <Architecture />
      <Experience />
      <Contact />
      <SiteFooter />
    </main>
  );
}
