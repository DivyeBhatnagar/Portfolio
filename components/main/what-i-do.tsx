"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    CpuChipIcon,
    CodeBracketIcon,
    CogIcon,
    SparklesIcon,
} from "@heroicons/react/24/solid";

const services = [
    {
        icon: CpuChipIcon,
        title: "AI Systems Development",
        description:
            "Building intelligent systems using machine learning, deep learning, and modern AI frameworks like TensorFlow and PyTorch.",
        gradient: "from-purple-500 to-indigo-500",
    },
    {
        icon: CodeBracketIcon,
        title: "Full Stack Development",
        description:
            "Designing and building scalable web applications using modern frontend and backend technologies like React, Next.js, and Node.js.",
        gradient: "from-cyan-500 to-blue-500",
    },
    {
        icon: CogIcon,
        title: "AI Automation",
        description:
            "Creating automated workflows and intelligent tools powered by AI models, Large Language Models, and agent architectures.",
        gradient: "from-violet-500 to-purple-500",
    },
    {
        icon: SparklesIcon,
        title: "Modern Web Experiences",
        description:
            "Developing visually engaging and interactive web interfaces using Three.js, animations, and cutting-edge web technologies.",
        gradient: "from-pink-500 to-rose-500",
    },
];

const ServiceCard = ({
    icon: Icon,
    title,
    description,
    gradient,
    index,
}: {
    icon: typeof CpuChipIcon;
    title: string;
    description: string;
    gradient: string;
    index: number;
}) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="group relative"
        >
            <div className="relative h-full p-6 rounded-2xl bg-[#0c0728]/60 border border-[#7042f833] backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-[#7042f88b] hover:shadow-[0_0_30px_rgba(112,66,248,0.2)] hover:-translate-y-1">
                {/* Glow Effect */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500 -translate-y-8 translate-x-8`} />

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
            </div>
        </motion.div>
    );
};

export const WhatIDo = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className="py-20 px-6 relative">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
            >
                <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
                    What I Do
                </h2>
                <p className="text-gray-400 max-w-[600px] mx-auto text-lg">
                    Combining AI expertise with full-stack development to build intelligent, scalable solutions.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
                {services.map((service, i) => (
                    <ServiceCard key={service.title} {...service} index={i} />
                ))}
            </div>
        </section>
    );
};
