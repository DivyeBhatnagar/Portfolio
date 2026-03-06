"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { LINKS } from "@/constants";

export const CTA = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className="py-20 relative z-20">
            <div className="max-w-[800px] mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                    className="relative p-10 md:p-14 rounded-[2rem] bg-gradient-to-b from-[#1a0b3a]/80 to-[#0c0728]/80 border border-[#7042f855] text-center overflow-hidden backdrop-blur-md"
                >
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-purple-500/20 blur-[100px] -z-10" />

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Let&apos;s Build Something{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                            Amazing
                        </span>{" "}
                        Together
                    </h2>

                    <p className="text-gray-300 text-lg mb-10 max-w-[500px] mx-auto">
                        Whether you have a specific project in mind or just want to connect, I&apos;m always open to discussing new opportunities.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="#contact"
                            className="py-3 px-8 button-primary text-white font-medium rounded-full transition-transform hover:scale-105"
                        >
                            Contact Me
                        </Link>
                        <Link
                            href={LINKS.sourceCode}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="py-3 px-8 bg-transparent border border-[#7042f88b] text-white font-medium rounded-full hover:bg-[#7042f833] transition-all duration-300"
                        >
                            View GitHub
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
