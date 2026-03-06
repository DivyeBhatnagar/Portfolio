"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { STATS } from "@/constants";

export const Stats = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className="py-20 relative z-20">
            <div className="max-w-[1000px] mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                            className="flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-[#0c0728]/40 border border-[#7042f833] backdrop-blur-md hover:border-[#7042f88b] hover:shadow-[0_0_20px_rgba(112,66,248,0.2)] transition-all duration-300"
                        >
                            <h4 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2 drop-shadow-md">
                                {stat.value}
                            </h4>
                            <p className="text-gray-400 font-medium tracking-wide">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
