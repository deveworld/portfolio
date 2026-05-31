"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import {
    profile,
    projects,
    presentations,
    media,
    skills,
    openSourceContributions,
    freelance,
    achievements,
    grants,
} from "@/data/content";
import { useLanguage } from "@/context/LanguageContext";

const stripUrl = (url: string) =>
    url.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");

function SectionTitle({ children }: { children: ReactNode }) {
    return (
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500 border-b border-neutral-300 pb-1 mb-3 mt-6">
            {children}
        </h2>
    );
}

export default function CVPage() {
    const { t } = useLanguage();

    const featured = projects.filter((p) => p.featured);
    const others = projects.filter((p) => !p.featured);

    const contactLinks: { label: string; href: string }[] = [
        { label: profile.links.email, href: `mailto:${profile.links.email}` },
        { label: stripUrl(profile.links.blog), href: profile.links.blog },
        { label: stripUrl(profile.links.github), href: profile.links.github },
        { label: "Google Scholar", href: profile.links.scholar },
        { label: "ORCID", href: profile.links.orcid },
        { label: "LinkedIn", href: profile.links.linkedin },
    ];

    return (
        <div className="min-h-screen bg-neutral-100 print:bg-white">
            {/* Screen-only toolbar */}
            <div className="print:hidden sticky top-0 z-10 flex items-center justify-between max-w-[820px] mx-auto px-4 py-3">
                <Link href="/" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    ← {t({ en: "Back to portfolio", ko: "포트폴리오로" })}
                </Link>
                <button
                    onClick={() => window.print()}
                    className="text-sm font-medium px-4 py-2 bg-neutral-900 text-white rounded-full hover:bg-neutral-700 transition-colors"
                >
                    {t({ en: "Save as PDF", ko: "PDF로 저장" })}
                </button>
            </div>

            {/* CV sheet */}
            <article className="max-w-[820px] mx-auto bg-white text-neutral-800 px-10 py-12 print:px-0 print:py-0 shadow-sm print:shadow-none mb-12 print:mb-0">
                {/* Header */}
                <header className="mb-6">
                    <h1 className="text-3xl font-bold text-neutral-900 leading-tight">
                        {profile.name.sub}
                    </h1>
                    <p className="text-base text-neutral-600 mt-1">{t(profile.tagline)}</p>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3 text-[12px] text-neutral-600">
                        {contactLinks.map((l, i) => (
                            <span key={l.href} className="flex items-center gap-3">
                                {i > 0 && <span className="text-neutral-300">·</span>}
                                <a href={l.href} className="hover:text-neutral-900 underline-offset-2 hover:underline">
                                    {l.label}
                                </a>
                            </span>
                        ))}
                    </div>
                    <p className="text-[13px] text-neutral-700 leading-relaxed mt-4">{t(profile.bio)}</p>
                </header>

                {/* Research & Projects */}
                <section>
                    <SectionTitle>Research &amp; Projects</SectionTitle>
                    <div className="space-y-3">
                        {featured.map((p) => (
                            <div key={p.title} className="break-inside-avoid">
                                <div className="flex items-baseline justify-between gap-4">
                                    <h3 className="text-[14px] font-semibold text-neutral-900">
                                        {p.title}
                                        <span className="font-normal text-neutral-500"> — {t(p.subtitle)}</span>
                                    </h3>
                                    <span className="text-[11px] font-mono text-neutral-500 shrink-0">{p.period}</span>
                                </div>
                                <p className="text-[12.5px] text-neutral-700 leading-snug mt-0.5">{t(p.description)}</p>
                                <p className="text-[11px] text-neutral-500 mt-0.5">
                                    {p.highlights.map((h) => t(h)).join("  ·  ")}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Other Projects */}
                <section>
                    <SectionTitle>Selected Other Projects</SectionTitle>
                    <ul className="space-y-1">
                        {others.map((p) => (
                            <li key={p.title} className="text-[12.5px] text-neutral-700 break-inside-avoid">
                                <span className="font-medium text-neutral-900">{p.title}</span>
                                <span className="text-neutral-500"> — {t(p.subtitle)}</span>
                                <span className="text-neutral-400 font-mono text-[11px]"> ({p.period})</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Open Source */}
                <section>
                    <SectionTitle>Open Source Contributions</SectionTitle>
                    <ul className="space-y-1.5">
                        {openSourceContributions.map((c) => (
                            <li key={c.link} className="text-[12.5px] break-inside-avoid">
                                <span className="font-medium text-neutral-900">{c.repo}</span>
                                <span className="text-neutral-700"> — {t(c.title)}</span>
                                <span className="text-neutral-500"> · {t(c.description)}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Talks & Media */}
                <section>
                    <SectionTitle>Talks &amp; Media</SectionTitle>
                    <ul className="space-y-1.5">
                        {presentations.map((p) => (
                            <li key={p.link} className="text-[12.5px] break-inside-avoid">
                                <span className="font-medium text-neutral-900">{t(p.title)}</span>
                                <span className="text-neutral-500"> — {p.event} · {p.type}</span>
                            </li>
                        ))}
                        {media.map((m) => (
                            <li key={m.link} className="text-[12.5px] break-inside-avoid">
                                <span className="font-medium text-neutral-900">{t(m.title)}</span>
                                <span className="text-neutral-500"> — {t(m.publisher)} · {m.year}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Achievements */}
                <section>
                    <SectionTitle>Achievements</SectionTitle>
                    <ul className="space-y-1">
                        {achievements.map((a) => (
                            <li key={`${a.project}-${a.year}`} className="text-[12.5px] break-inside-avoid">
                                <span className="font-mono text-[11px] text-neutral-500">{a.year}</span>
                                <span className="text-neutral-900 font-medium"> {t(a.title)}</span>
                                <span className="text-neutral-600"> — {t(a.award)} ({a.project})</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Grants */}
                <section>
                    <SectionTitle>Grants &amp; Support</SectionTitle>
                    <ul className="space-y-1">
                        {grants.map((g) => (
                            <li key={g.organization} className="text-[12.5px] break-inside-avoid">
                                <span className="font-mono text-[11px] text-neutral-500">{g.year}</span>
                                <span className="text-neutral-900 font-medium"> {g.organization}</span>
                                <span className="text-neutral-600"> — {t(g.description)}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Skills */}
                <section>
                    <SectionTitle>Technical Skills</SectionTitle>
                    <div className="space-y-1">
                        {Object.entries(skills).map(([category, items]) => (
                            <div key={category} className="text-[12.5px] break-inside-avoid">
                                <span className="font-semibold text-neutral-900">{category}: </span>
                                <span className="text-neutral-700">{items.join(", ")}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Freelance */}
                <section>
                    <SectionTitle>Freelance</SectionTitle>
                    <p className="text-[12.5px] break-inside-avoid">
                        <span className="font-medium text-neutral-900">{t(freelance.platform)}</span>
                        <span className="text-neutral-500"> ({t(freelance.badge)}) · {freelance.period}</span>
                        <span className="text-neutral-700"> — {freelance.services.map((s) => t(s)).join(", ")}.</span>
                        <span className="text-neutral-600">
                            {" "}{freelance.stats.projects}+ projects · {freelance.stats.satisfaction} satisfaction · {freelance.stats.rating}
                        </span>
                    </p>
                </section>
            </article>
        </div>
    );
}
