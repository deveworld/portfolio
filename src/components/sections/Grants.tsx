"use client";

import { motion } from "framer-motion";
import { grants } from "@/data/content";
import { useLanguage } from "@/context/LanguageContext";

export function Grants() {
    const { t } = useLanguage();

    return (
        <section id="grants" className="py-24 border-t border-border-subtle">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold text-text-primary mb-10"
            >
                Grants & Support
            </motion.h2>

            <div className="space-y-4">
                {grants.map((grant, idx) => (
                    <motion.div
                        key={grant.organization}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 p-4 rounded-lg hover:bg-white/5 transition-colors"
                    >
                        <span className="text-sm font-mono text-text-muted w-24 shrink-0">{grant.year}</span>
                        <div>
                            <p className="text-lg font-medium text-text-primary">{grant.organization}</p>
                            <p className="text-text-secondary w-full">{t(grant.description)}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
