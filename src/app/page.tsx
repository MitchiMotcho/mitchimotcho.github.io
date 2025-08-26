import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen flex items-center justify-center px-6 bgBrand">
            <div className="card shadowSoft w-full max-w-xl text-center p-8 md:p-10 backdrop-blur-sm">
                {/* Logo */}
                <div className="mb-6 flex justify-center">
                    <Image
                        src="/assets/logo.png"
                        alt="Mitchi Motcho Logo"
                        width={96}
                        height={96}
                        className="rounded-xl"
                        priority
                    />
                </div>

                {/* Kicker + Headline */}
                <p className="sectionKicker mb-2">coming soon</p>
                <h1 className="headingBrand text-3xl md:text-4xl font-semibold tracking-tight mb-3">
                    We&apos;re Building Something Special
                </h1>

                {/* Supporting copy */}
                <p className="textBrand/90 text-base md:text-lg leading-relaxed mb-6">
                    At{" "}
                    <span className="font-semibold headingBrand">
                        Mitchi Motcho Websites
                    </span>
                    , we create modern, worry-free websites for small
                    businesses, so you never have to think about the tech. As a
                    local, community-driven team, we care about helping your
                    business shine online. While we craft your experience, our
                    full site is on the way. Your next opportunity to shine
                    online is coming soon.
                </p>

                {/* CTA buttons */}
                <div
                    id="coming-soon"
                    className="flex flex-col sm:flex-row gap-3 sm:justify-center"
                >
                    <Link
                        href="/contact"
                        className="btn btnPrimary bg-highlight text-background hover:bg-highlight-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color-mix(in_oklab,var(--color-highlight)_50%,white)]"
                    >
                        Contact Us
                    </Link>

                    <span
                        className="btn btnOutline hover:border-highlight-dark hover:bg-white cursor-default"
                        aria-disabled
                    >
                        See Our Work
                        <br />
                        (Coming Soon...)
                    </span>
                </div>

                {/* Divider */}
                <div className="my-6 h-px w-full bg-[rgba(122,59,59,0.15)]" />

                {/* Reassurance bullets */}
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm textBrand/80">
                    <li className="p-3 rounded-md bg-white/60 border border-white/70">
                        Seamless mobile experience
                    </li>
                    <li className="p-3 rounded-md bg-white/60 border border-white/70">
                        Quick and easy updates
                    </li>
                    <li className="p-3 rounded-md bg-white/60 border border-white/70">
                        All technical details managed for you
                    </li>
                </ul>

                {/* Footer note */}
                <p className="mt-6 text-xs textBrand/60">
                    Friendly, modern, and worry-free websites.
                </p>
            </div>
        </main>
    );
}
