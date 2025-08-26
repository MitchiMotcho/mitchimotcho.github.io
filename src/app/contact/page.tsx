"use client";

import { useEffect, useMemo, useState } from "react";

const EMAIL = "contact@motchi.ca";
const SITE_URL = "https://motchi.ca";

export default function ContactPage() {
    const [toast, setToast] = useState<string | null>(null);
    const [isMobileLike, setIsMobileLike] = useState<boolean>(false);

    useEffect(() => {
        const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
        const byUA = /Mobi|Android|iPhone|iPad|iPod/i.test(ua);
        const byPointer =
            typeof window !== "undefined" &&
            window.matchMedia &&
            window.matchMedia("(pointer: coarse)").matches;
        setIsMobileLike(byUA || byPointer);
    }, []);

    useEffect(() => {
        if (!toast) return;
        const t = setTimeout(() => setToast(null), 2200);
        return () => clearTimeout(t);
    }, [toast]);

    const handleEmailClick = async () => {
        if (isMobileLike) {
            window.location.href = `mailto:${EMAIL}`;
            return;
        }
        try {
            await navigator.clipboard.writeText(EMAIL);
            setToast("Email copied to clipboard");
        } catch {
            setToast("Copy failed — please copy manually");
        }
    };

    const mailtoTitle = useMemo(
        () => (isMobileLike ? "Open email app" : "Copy email address"),
        [isMobileLike]
    );

    return (
        <>
            <section className="max-w-[1440px] mx-auto px-6 md:px-8 py-12">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-8">
                    <p className="sectionKicker mb-2">get in touch</p>
                    <h1 className="text-highlight-dark text-3xl md:text-4xl font-semibold tracking-tight mb-3">
                        We’re here to help
                    </h1>
                    <p className="text-foreground/90 leading-relaxed">
                        Questions about{" "}
                        <span className="font-semibold text-highlight-dark">
                            features
                        </span>
                        ,{" "}
                        <span className="font-semibold text-highlight-dark">
                            pricing
                        </span>
                        , or anything else you need? Reach out anytime. We’ll
                        take care of the tech so you can focus on your business.
                    </p>
                </div>

                {/* Contact cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
                    {/* Email */}
                    <div className="card p-6">
                        <h2 className="text-highlight-dark text-xl font-semibold mb-2">
                            Email
                        </h2>
                        <p className="text-foreground/80 mb-4">
                            Prefer email? Tap on phone to compose, or click on
                            desktop to copy our address.
                        </p>
                        <button
                            onClick={handleEmailClick}
                            title={mailtoTitle}
                            className="btn bg-highlight text-white hover:bg-highlight-dark w-full"
                        >
                            {isMobileLike ? `Email us` : `Copy email`}
                        </button>
                        <p className="text-xs text-foreground/60 mt-3 select-all text-center">
                            {EMAIL}
                        </p>
                    </div>

                    {/* Website */}
                    <div className="card p-6">
                        <h2 className="text-highlight-dark text-xl font-semibold mb-2">
                            Website
                        </h2>
                        <p className="text-foreground/80 mb-4">
                            Learn more about our approach and see what we’re
                            building next.
                        </p>
                        <button
                            onClick={() => window.open(SITE_URL, "_blank")}
                            rel="noopener noreferrer"
                            className="btn border border-highlight-dark/30 text-highlight-dark bg-white/70 hover:bg-white w-full text-center"
                        >
                            Visit motchi.ca
                        </button>
                    </div>
                </div>

                {/* Reassurance strip */}
                <div className="max-w-3xl mx-auto mt-8">
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-foreground/80 [&>*]:bg-highlight-light/30 font-medium">
                        <li className="p-3 rounded-md bg-white/60 border border-white/70 text-center">
                            Friendly & responsive
                        </li>
                        <li className="p-3 rounded-md bg-white/60 border border-white/70 text-center">
                            Clear, fair pricing
                        </li>
                        <li className="p-3 rounded-md bg-white/60 border border-white/70 text-center">
                            We handle the tech
                        </li>
                    </ul>
                </div>
            </section>

            {/* Toast */}
            <div
                aria-live="polite"
                className={`fixed left-1/2 -translate-x-1/2 bottom-6 px-4 py-2 rounded-lg text-white text-sm shadowSoft transition-opacity ${
                    toast ? "opacity-100" : "opacity-0 pointer-events-none"
                } bg-highlight-dark`}
            >
                {toast}
            </div>
        </>
    );
}
