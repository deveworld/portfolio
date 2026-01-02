"use client";

import { motion } from "framer-motion";
import { openSourceContributions } from "@/data/content";
import { useLanguage } from "@/context/LanguageContext";

const ExternalLinkIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
);

export function OpenSource() {
    const { t } = useLanguage();

    return (
        <section id="opensource" className="py-16">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold text-text-primary mb-8"
            >
                Open Source Contributions
            </motion.h2>

            <div className="space-y-3">
                {openSourceContributions.map((contrib, idx) => (
                    <motion.a
                        key={contrib.link}
                        href={contrib.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group flex items-start gap-4 p-4 rounded-lg bg-bg-surface border border-border-subtle hover:border-border-hover transition-all"
                    >
                        <div className="text-text-muted group-hover:text-white transition-colors mt-0.5">
                            <ExternalLinkIcon />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-mono text-text-muted bg-white/5 px-2 py-0.5 rounded">{contrib.type}</span>
                                <span className="text-sm text-text-muted truncate">{contrib.repo}</span>
                            </div>
                            <p className="text-text-primary font-medium group-hover:text-white transition-colors">{t(contrib.title)}</p>
                            <p className="text-sm text-text-secondary mt-1">{t(contrib.description)}</p>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
