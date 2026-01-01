"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/content";

export function Skills() {
    return (
        <section id="skills" className="py-24">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold text-text-primary mb-10"
            >
                Skills
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Object.entries(skills).map(([category, items], idx) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <h3 className="text-sm font-medium text-text-muted mb-4 uppercase tracking-wider">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {items.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1.5 text-sm bg-bg-surface border border-border-subtle rounded-lg text-text-secondary hover:text-white hover:border-white/20 transition-all duration-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
