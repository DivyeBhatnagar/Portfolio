"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { JOURNEY } from "@/constants";

export const Journey = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="journey" className="py-20 relative z-20">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
                    My Journey
                </h2>
            </motion.div>

            <div className="max-w-[800px] mx-auto px-6 relative">
                {/* Vertical Line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-cyan-500 to-transparent transform -translate-x-1/2 opacity-30" />

                <div className="space-y-12">
                    {JOURNEY.map((item, i) => {
                        const isEven = i % 2 === 0;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
                                transition={{ delay: i * 0.2, duration: 0.6 }}
                                className={`relative flex flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""
                                    } items-start md:items-center`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-cyan-400 transform -translate-x-[7px] md:-translate-x-1/2 mt-1.5 md:mt-0 shadow-[0_0_15px_rgba(34,211,238,0.8)] z-10 border-2 border-[#030014]" />

                                {/* Content */}
                                <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 text-left"}`}>
                                    <div className="p-6 rounded-2xl bg-[#0c0728]/60 border border-[#7042f833] backdrop-blur-sm hover:border-[#7042f88b] hover:shadow-[0_0_20px_rgba(112,66,248,0.2)] transition-all duration-300">
                                        <span className="inline-block py-1 px-3 rounded-full bg-purple-500/20 text-cyan-300 text-sm font-bold mb-3 border border-purple-500/30">
                                            {item.year}
                                        </span>
                                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-gray-400">{item.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
