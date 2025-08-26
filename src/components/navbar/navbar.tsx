"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    // Close the mobile menu after clicking a link
    const close = () => setOpen(false);

    const NAV_ITEMS = [
        { title: "Home", href: "/", disabled: false },
        { title: "About", href: "/about", disabled: true },
        { title: "Services", href: "/services", disabled: true },
        { title: "Contact", href: "/contact", disabled: false },
    ];

    return (
        <header className="sticky top-0 z-50 bgBrand/85 backdrop-blur-md border-b border-[color-mix(in_oklab,var(--color-highlight-dark)_10%,transparent)]">
            <nav className="max-w-[1440px] mx-auto px-4 py-3 flex items-center justify-between">
                {/* Left: Logo + Brand */}
                <div className="flex items-center gap-3">
                    <Link href="/" aria-label="Mitchi Motcho Websites">
                        <Image
                            src={`/assets/logo.png`}
                            alt="Mitchi Motcho Logo"
                            width={36}
                            height={36}
                            className="rounded-lg shadowSoft"
                            priority
                        />
                    </Link>
                    <Link
                        href="/"
                        className="hidden sm:inline text-sm font-semibold headingBrand"
                    >
                        Mitchi Motcho Websites
                    </Link>
                </div>

                {/* Desktop nav */}
                <ul className="hidden md:flex items-center gap-6 text-sm">
                    {/* Coming Soon best practice: keep non-essential links inert/disabled */}
                    {NAV_ITEMS.map((item) => (
                        <li key={item.title}>
                            {item.disabled ? (
                                <span
                                    className="textBrand/40 cursor-not-allowed"
                                    aria-disabled="true"
                                    title="Coming soon"
                                >
                                    {item.title}{" "}
                                    <span aria-hidden="true">
                                        (Coming soon)
                                    </span>
                                </span>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="btn hover:bg-highlight transition-all ease-in-out duration-300"
                                >
                                    {item.title}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Mobile: hamburger */}
                <div className="md:hidden">
                    <Hamburger
                        toggled={open}
                        toggle={setOpen}
                        size={20}
                        color="var(--color-highlight-dark)"
                        rounded
                    />
                </div>
            </nav>

            {/* Mobile panel */}
            <nav
                className={`md:hidden transition-[max-height,opacity] duration-200 overflow-hidden ${
                    open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="mx-4 mb-3 rounded-xl border border-[color-mix(in_oklab,var(--color-highlight-dark)_10%,transparent)] bg-white/70 backdrop-blur p-3 shadowSoft">
                    <ul className="flex flex-col gap-2 text-sm">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.title}>
                                {item.disabled ? (
                                    <span
                                        className="block px-3 py-2 rounded-md textBrand/40 cursor-not-allowed"
                                        aria-disabled="true"
                                        title="Coming soon"
                                    >
                                        {item.title}{" "}
                                        <span aria-hidden="true">
                                            (Coming soon)
                                        </span>
                                    </span>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="block px-3 py-2 rounded-md textBrand hover:bg-highlight transition-all ease-in-out duration-300"
                                        onClick={close}
                                    >
                                        {item.title}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                    <p className="mt-2 text-xs textBrand/60 text-center">
                        We handle the tech — you focus on your business.
                    </p>
                </div>
            </nav>
        </header>
    );
}
