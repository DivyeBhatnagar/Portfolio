"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const animationDelay = 0.08;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay, duration: 0.4 }}
      className="flex flex-col items-center justify-center gap-2 group w-full"
    >
      <div className="flex items-center justify-center w-[80px] h-[80px] rounded-xl bg-[#0c0728]/60 border border-[#7042f833] backdrop-blur-sm group-hover:border-[#7042f88b] group-hover:shadow-[0_0_20px_rgba(112,66,248,0.3)] transition-all duration-300 mx-auto">
        <Image
          src={`/skills/${src}`}
          width={45}
          height={45}
          alt={name}
          className="select-none object-contain"
          draggable={false}
        />
      </div>
      <span className="text-[11px] text-gray-400 text-center group-hover:text-gray-200 transition-colors duration-300 w-full">
        {name}
      </span>
    </motion.div>
  );
};
