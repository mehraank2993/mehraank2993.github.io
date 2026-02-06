"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md">
            <Container className="flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
                    <span>Mehraan Khan</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-neutral-900 dark:hover:text-neutral-100",
                                pathname === link.href ? "text-neutral-900 dark:text-neutral-100" : "text-neutral-500 dark:text-neutral-400"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/resume">
                        <Button variant="primary" size="sm" className="gap-2">
                            <FileText className="h-4 w-4" />
                            Resume
                        </Button>
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </Container>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
                    <Container className="flex flex-col gap-4 py-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-base font-medium hover:text-neutral-900 dark:hover:text-neutral-100",
                                    pathname === link.href ? "text-neutral-900 dark:text-neutral-100" : "text-neutral-500 dark:text-neutral-400"
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link href="/resume" onClick={() => setIsOpen(false)}>
                            <Button variant="primary" className="w-full gap-2">
                                <FileText className="h-4 w-4" />
                                Resume
                            </Button>
                        </Link>

                    </Container>
                </div>
            )}
        </header>
    );
}
