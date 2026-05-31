"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/content";
import { useLanguage } from "@/context/LanguageContext";

export function Achievements() {
    const { t } = useLanguage();

    return (
        <section id="achievements" className="py-16">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold text-text-primary mb-8"
            >
                Achievements
            </motion.h2>

            <div className="space-y-4">
                {achievements.map((achievement, idx) => (
                    <motion.div
                        key={`${achievement.project}-${achievement.year}`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 p-4 rounded-lg hover:bg-white/5 transition-colors"
                    >
                        <span className="text-sm font-mono text-text-muted w-24 shrink-0">{achievement.year}</span>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                                <p className="text-lg font-medium text-text-primary">{t(achievement.title)}</p>
                                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
                                    🏆 {t(achievement.award)}
                                </span>
                            </div>
                            <p className="text-sm text-text-muted mt-1">{achievement.project}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
