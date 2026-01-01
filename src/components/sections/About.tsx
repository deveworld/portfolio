"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/content";

export function About() {
    return (
        <motion.section
            id="about"
            className="py-16 md:py-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h2 className="text-2xl font-semibold text-text-primary mb-8">About</h2>
            <p className="text-text-secondary leading-loose text-lg max-w-2xl">
                {profile.bio}
            </p>
        </motion.section>
    );
}
