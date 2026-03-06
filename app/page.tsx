import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { WhatIDo } from "@/components/main/what-i-do";
import { Stats } from "@/components/main/stats";
import { Journey } from "@/components/main/journey";
import { CTA } from "@/components/main/cta";

export default function Home() {
  return (
    <main className="h-full w-full relative z-10">
      <div className="flex flex-col gap-20">
        <Hero />
        <Stats />
        <Encryption />
        <WhatIDo />
        <Skills />
        <Journey />
        <Projects />
        <CTA />
      </div>
    </main>
  );
}
