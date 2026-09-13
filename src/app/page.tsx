import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WorkingStyle } from "@/components/sections/WorkingStyle";
import { Domains } from "@/components/sections/Domains";
import { Projects } from "@/components/sections/Projects";
import { Architecture } from "@/components/sections/Architecture";
import { Observability } from "@/components/sections/Observability";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <Hero />
      <About />
      <WorkingStyle />
      <Domains />
      <Projects />
      <Architecture />
      <Observability />
      <Experience />
      <Contact />
      <SiteFooter />
    </main>
  );
}
