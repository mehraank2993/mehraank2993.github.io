import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";

export function ContactSection() {
    return (
        <Section id="contact">
            <Container className="flex flex-col items-center">
                <div className="mb-16 text-center space-y-4 max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-neutral-950 dark:text-white">
                        Get In Touch
                    </h1>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400">
                        Let&apos;s discuss your next project
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3 w-full max-w-5xl">
                    {/* Email Card */}
                    <Card className="p-8 flex flex-col items-center text-center gap-4 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors group">
                        <div className="h-12 w-12 rounded-full bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white">
                            <Mail className="h-6 w-6" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Email</h3>
                            <p className="text-neutral-500 dark:text-neutral-400">mehraan57@gmail.com</p>
                        </div>
                        <a
                            href="mailto:mehraan57@gmail.com"
                            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-white hover:gap-3 transition-all"
                        >
                            Send Email <ArrowRight className="h-4 w-4" />
                        </a>
                    </Card>

                    {/* LinkedIn Card */}
                    <Card className="p-8 flex flex-col items-center text-center gap-4 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors group">
                        <div className="h-12 w-12 rounded-full bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white">
                            <Linkedin className="h-6 w-6" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white">LinkedIn</h3>
                            <p className="text-neutral-500 dark:text-neutral-400">Connect professionally</p>
                        </div>
                        <a
                            href="https://linkedin.com/in/mehraan-khan-15956a28a"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-white hover:gap-3 transition-all"
                        >
                            View Profile <ArrowRight className="h-4 w-4" />
                        </a>
                    </Card>

                    {/* GitHub Card */}
                    <Card className="p-8 flex flex-col items-center text-center gap-4 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors group">
                        <div className="h-12 w-12 rounded-full bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white">
                            <Github className="h-6 w-6" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white">GitHub</h3>
                            <p className="text-neutral-500 dark:text-neutral-400">Check out my code</p>
                        </div>
                        <a
                            href="https://github.com/mehraank2993"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-white hover:gap-3 transition-all"
                        >
                            View Repos <ArrowRight className="h-4 w-4" />
                        </a>
                    </Card>
                </div>
            </Container>
        </Section>
    );
}
