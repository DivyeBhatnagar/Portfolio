"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";
import { SKILL_CATEGORIES } from "@/constants";

const CategorySection = ({
  category,
  skills,
  categoryIndex,
}: {
  category: string;
  skills: readonly {
    readonly skill_name: string;
    readonly image: string;
    readonly width: number;
    readonly height: number;
  }[];
  categoryIndex: number;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: categoryIndex * 0.15, duration: 0.5 }}
      className="w-full max-w-[900px] mx-auto mb-10"
    >
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-6 px-4">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#7042f860] to-transparent" />
        <h3 className="text-[14px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 uppercase tracking-[3px] whitespace-nowrap">
          {category}
        </h3>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#7042f860] to-transparent" />
      </div>

      {/* Skills Grid — centered */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center px-4">
        {skills.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <SkillText />

      <div className="w-full flex flex-col items-center gap-2 mt-6 z-[10]">
        {SKILL_CATEGORIES.map((cat, i) => (
          <CategorySection
            key={cat.category}
            category={cat.category}
            skills={cat.skills}
            categoryIndex={i}
          />
        ))}
      </div>

      {/* Background Video */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
