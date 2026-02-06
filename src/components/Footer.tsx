import Link from "next/link";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function Footer() {
    return (
        <footer className="w-full border-t border-neutral-200 bg-white py-12">
            <Container className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
                <p className="text-sm text-neutral-500">
                    © {new Date().getFullYear()} Mehraan Khan. All rights reserved.
                </p>

                <div className="flex items-center gap-4">
                    <a
                        href="mailto:mehraan57@gmail.com"
                        className="text-neutral-500 hover:text-neutral-900 transition-colors"
                        aria-label="Email"
                    >
                        <Mail className="h-5 w-5" />
                    </a>
                    <a
                        href="https://linkedin.com/in/mehraan-khan-15956a28a"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-500 hover:text-neutral-900 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                        href="https://github.com/mehraank2993"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-500 hover:text-neutral-900 transition-colors"
                        aria-label="GitHub"
                    >
                        <Github className="h-5 w-5" />
                    </a>
                    <a href="/resume.pdf" download="Mehraan_Khan_Resume.pdf">
                        <Button variant="outline" size="sm" className="gap-2 border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100">
                            <Download className="h-4 w-4" />
                            Download Resume
                        </Button>
                    </a>
                </div>
            </Container>
        </footer>
    );
}
