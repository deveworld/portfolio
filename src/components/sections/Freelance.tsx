"use client";

import { motion } from "framer-motion";
import { freelance } from "@/data/content";

const ExternalLinkIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
);

export function Freelance() {
    return (
        <motion.section
            id="freelance"
            className="py-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h2 className="text-2xl font-semibold text-text-primary mb-8">Freelance</h2>

            <a
                href={freelance.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 bg-bg-surface border border-border-subtle rounded-xl hover:border-border-hover transition-all"
            >
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h3 className="text-xl font-medium text-text-primary group-hover:text-white transition-colors">{freelance.platform}</h3>
                        <p className="text-sm text-text-muted mt-1">{freelance.period}</p>
                    </div>
                    <div className="text-text-muted group-hover:text-white transition-colors">
                        <ExternalLinkIcon />
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                    {freelance.services.map((service) => (
                        <span key={service} className="text-sm px-3 py-1 bg-white/5 text-text-secondary rounded-full">
                            {service}
                        </span>
                    ))}
                </div>

                <div className="flex gap-6 pt-4 border-t border-border-subtle">
                    <div>
                        <p className="text-2xl font-bold text-text-primary">{freelance.stats.projects}</p>
                        <p className="text-sm text-text-muted">프로젝트</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-text-primary">{freelance.stats.satisfaction}</p>
                        <p className="text-sm text-text-muted">만족도</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-text-primary">{freelance.stats.rating}</p>
                        <p className="text-sm text-text-muted">평점</p>
                    </div>
                </div>
            </a>
        </motion.section>
    );
}
