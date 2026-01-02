"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/content";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { useLanguage } from "@/context/LanguageContext";

const ExternalLinkIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
);

const GithubIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
);

export function Projects() {
    const { t } = useLanguage();
    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    return (
        <section id="projects" className="py-24">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold text-text-primary mb-10"
            >
                Projects
            </motion.h2>

            {/* Featured Projects - Bento Grid (2x2 for 4 items) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {featuredProjects.map((project) => (
                    <SpotlightCard
                        key={project.title}
                        className="p-6 md:p-8 flex flex-col"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-medium text-text-primary">{project.title}</h3>
                                <p className="text-sm text-text-muted mt-1">{t(project.subtitle)}</p>
                            </div>
                            <span className="text-xs font-mono text-text-muted bg-white/5 px-2 py-1 rounded">
                                {project.period}
                            </span>
                        </div>

                        <p className="text-text-secondary text-sm mb-6 leading-relaxed flex-grow">
                            {t(project.description)}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.highlights.map((h, idx) => (
                                <span key={idx} className="text-xs px-2.5 py-1 bg-white/10 text-text-secondary rounded-full border border-white/5">
                                    {t(h)}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4 pt-4 border-t border-border-subtle mt-auto">
                            {project.links.page && (
                                <a href={project.links.page} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors flex items-center gap-2 text-sm">
                                    <ExternalLinkIcon />
                                    <span>Demo</span>
                                </a>
                            )}
                            {project.links.github && (
                                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors flex items-center gap-2 text-sm">
                                    <GithubIcon />
                                    <span>Code</span>
                                </a>
                            )}
                            {project.links.paper && (
                                <a href={project.links.paper} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors flex items-center gap-2 text-sm">
                                    <span>📄 Paper</span>
                                </a>
                            )}
                            {project.links.huggingface && (
                                <a href={project.links.huggingface} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors flex items-center gap-2 text-sm">
                                    <span>🤗 Model</span>
                                </a>
                            )}
                        </div>
                    </SpotlightCard>
                ))}
            </div>

            {/* Other Projects */}
            <h3 className="text-lg font-medium text-text-secondary mb-6">Other Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {otherProjects.map((project) => (
                    <a
                        key={project.title}
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-4 bg-bg-surface border border-border-subtle rounded-lg hover:border-border-hover transition-all"
                    >
                        <div className="flex items-start justify-between mb-2">
                            <h4 className="font-medium text-text-primary group-hover:text-white transition-colors">{project.title}</h4>
                            <GithubIcon />
                        </div>
                        <p className="text-sm text-text-muted mb-3">{t(project.subtitle)}</p>
                        <div className="flex flex-wrap gap-1.5">
                            {project.highlights.slice(0, 2).map((h, idx) => (
                                <span key={idx} className="text-xs px-2 py-0.5 bg-white/5 text-text-muted rounded">
                                    {t(h)}
                                </span>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
