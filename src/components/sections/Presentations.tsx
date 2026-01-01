"use client";

import { motion } from "framer-motion";
import { presentations, media } from "@/data/content";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const YouTubeIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
);

const ExternalLinkIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
);

export function Presentations() {
    return (
        <section id="presentations" className="py-24">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold text-text-primary mb-10"
            >
                Presentations & Media
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {presentations.map((p) => (
                    <a key={p.title} href={p.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                        <SpotlightCard className="p-6 h-full flex items-start gap-4 hover:border-border-hover/80 transition-colors">
                            <div className="text-red-500 mt-1">
                                <YouTubeIcon />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-text-primary group-hover:text-white transition-colors">
                                    {p.title}
                                </h3>
                                <p className="text-sm text-text-muted mt-1">{p.event} · {p.type}</p>
                            </div>
                        </SpotlightCard>
                    </a>
                ))}

                {media.map((m) => (
                    <a key={m.title} href={m.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                        <SpotlightCard className="p-6 h-full flex items-start gap-4 hover:border-border-hover/80 transition-colors">
                            <div className="text-text-muted mt-1">
                                <ExternalLinkIcon />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-text-primary group-hover:text-white transition-colors">
                                    {m.title}
                                </h3>
                                <p className="text-sm text-text-muted mt-1">{m.publisher} · {m.year}</p>
                            </div>
                        </SpotlightCard>
                    </a>
                ))}
            </div>
        </section>
    );
}
