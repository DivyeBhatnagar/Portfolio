"use client";

import { SparklesIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-10 md:px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full lg:w-1/2 flex flex-col gap-5 justify-center text-center lg:text-left mb-10 lg:mb-0">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mx-auto lg:mx-0"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Full Stack Developer | AI & ML Enthusiast
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto mx-auto lg:mx-0"
        >
          <span>
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Divye Bhatnagar
            </span>
          </span>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.6)}
          className="flex items-center justify-center lg:justify-start gap-2 text-gray-300 mx-auto lg:mx-0"
        >
          <MapPinIcon className="h-5 w-5 text-cyan-400" />
          <span className="text-lg">India</span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.7)}
          className="text-xl text-gray-300 my-2 max-w-[600px] font-medium mx-auto lg:mx-0"
        >
          Building intelligent systems & scalable applications
        </motion.p>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-3 max-w-[600px] mx-auto lg:mx-0"
        >
          I am a Computer Science student specializing in Artificial
          Intelligence and Machine Learning. I enjoy building intelligent
          systems, scalable applications, and modern web experiences using
          cutting-edge technologies.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-wrap justify-center lg:justify-start gap-4 mt-2"
        >
          <Link
            href="#projects"
            className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg"
          >
            View Projects
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="py-2 px-6 border border-cyan-500 text-center text-cyan-400 cursor-pointer rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
          >
            Download Resume
          </a>
          <Link
            href="https://github.com/DivyeBhatnagar"
            target="_blank"
            rel="noreferrer noopener"
            className="py-2 px-6 border border-[#7042f88b] text-center text-white cursor-pointer rounded-lg hover:bg-[#7042f88b] transition-all duration-300"
          >
            GitHub
          </Link>
          <Link
            href="#contact"
            className="py-2 px-6 border border-[#7042f88b] text-center text-white cursor-pointer rounded-lg hover:bg-[#7042f88b] transition-all duration-300"
          >
            Contact
          </Link>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full lg:w-1/2 h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
