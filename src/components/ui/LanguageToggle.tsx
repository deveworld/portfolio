"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={() => setLanguage(language === "en" ? "ko" : "en")}
            className="fixed top-6 right-6 z-50 flex items-center gap-1 px-3 py-1.5 text-sm font-medium bg-bg-surface/80 backdrop-blur-sm border border-border-subtle rounded-full hover:border-white/20 transition-all duration-300"
            aria-label={`Switch to ${language === "en" ? "Korean" : "English"}`}
        >
            <span className={language === "en" ? "text-white" : "text-text-muted"}>EN</span>
            <span className="text-text-muted">/</span>
            <span className={language === "ko" ? "text-white" : "text-text-muted"}>KO</span>
        </motion.button>
    );
}
