export default function Footer() {
    return (
        <footer className="mt-12 border-t border-[color-mix(in_oklab,var(--color-highlight-dark)_10%,transparent)] bgBrand">
            <div className="max-w-[1440px] mx-auto px-4 py-8 text-center">
                <p className="text-sm textBrand/70">
                    © {new Date().getFullYear()}{" "}
                    <span className="headingBrand font-semibold">
                        Mitchi Motcho Websites
                    </span>
                    . All rights reserved.
                </p>
                <p className="mt-2 text-xs textBrand/60">
                    Friendly, modern, and worry-free websites — one step at a time.
                </p>
            </div>
        </footer>
    );
}
