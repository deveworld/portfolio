export const translations = {
    en: {
        sections: {
            about: "About",
            projects: "Projects",
            otherProjects: "Other Projects",
            openSource: "Open Source Contributions",
            presentations: "Presentations & Media",
            skills: "Skills",
            freelance: "Freelance",
            grants: "Grants & Support",
            contact: "Let's Connect",
        },
        freelance: {
            projects: "Projects",
            satisfaction: "Satisfaction",
            rating: "Rating",
        },
        contact: {
            description: "If you have any research topics of interest or collaboration proposals, feel free to reach out.",
        },
        footer: {
            copyright: "© 2026 Deveworld. All rights reserved.",
        },
        links: {
            demo: "Demo",
            code: "Code",
            paper: "📄 Paper",
            model: "🤗 Model",
        },
    },
    ko: {
        sections: {
            about: "About",
            projects: "Projects",
            otherProjects: "Other Projects",
            openSource: "Open Source Contributions",
            presentations: "Presentations & Media",
            skills: "Skills",
            freelance: "Freelance",
            grants: "Grants & Support",
            contact: "Let's Connect",
        },
        freelance: {
            projects: "프로젝트",
            satisfaction: "만족도",
            rating: "평점",
        },
        contact: {
            description: "관심 있는 연구 주제나 협업 제안이 있으시다면 언제든 연락해 주세요.",
        },
        footer: {
            copyright: "© 2026 Deveworld. All rights reserved.",
        },
        links: {
            demo: "Demo",
            code: "Code",
            paper: "📄 Paper",
            model: "🤗 Model",
        },
    },
} as const;

export type Translations = typeof translations.en;
