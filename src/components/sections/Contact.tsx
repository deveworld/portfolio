"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/content";

const MailIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);

const GithubIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
);

export function Contact() {
    return (
        <section id="contact" className="py-24 border-t border-border-subtle">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <h2 className="text-3xl font-semibold text-text-primary mb-6">Let's Connect</h2>
                <p className="text-text-secondary mb-10 max-w-xl mx-auto">
                    관심 있는 연구 주제나 협업 제안이 있으시다면 언제든 연락해 주세요.
                </p>

                <div className="flex justify-center gap-6">
                    <a
                        href={`mailto:${profile.links.email}`}
                        className="group flex items-center gap-3 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-colors"
                    >
                        <MailIcon />
                        <span>Email Me</span>
                    </a>
                    <a
                        href={profile.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-6 py-3 bg-bg-surface border border-border-subtle rounded-full text-white hover:border-white/20 transition-all"
                    >
                        <GithubIcon />
                        <span>GitHub</span>
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
