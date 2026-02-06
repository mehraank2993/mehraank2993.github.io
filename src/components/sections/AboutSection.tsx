import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Download, FileText } from "lucide-react";

export function AboutSection() {
    return (
        <Section id="about">
            <Container className="space-y-16">
                {/* Professional Summary */}
                <div className="flex flex-col items-center text-center gap-8">
                    <div className="max-w-3xl space-y-4">
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-neutral-950 dark:text-white">
                            About Me
                        </h1>
                        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                            Aspiring Data & AI Engineer with hands-on experience in Python, SQL, machine learning, and big data technologies. Skilled in building end-to-end data and AI systems including data ingestion, preprocessing, analytics, and model-driven automation. Experienced in developing AI-powered applications using FastAPI, local LLMs, and Retrieval-Augmented Generation (RAG) with a focus on security, scalability, and real-world problem solving. Passionate about transforming raw data into actionable insights and contributing to production-ready data and AI solutions.
                        </p>
                        <div className="pt-4">
                            <a href="/resume.pdf" download="Mehraan_Khan_Resume.pdf">
                                <Button className="gap-2">
                                    <Download className="h-4 w-4" />
                                    Download Resume
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div className="space-y-8">
                    <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">Education</h2>
                    {/* Education */}
                    <div className="space-y-8 text-center max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">Education</h2>
                        <div className="space-y-8">
                            <div className="relative p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800">
                                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Post Graduate Diploma in Big Data Analytics</h3>
                                <p className="text-neutral-500 dark:text-neutral-400 mt-1">CDAC</p>
                            </div>
                            <div className="relative p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800">
                                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Bachelor of Engineering – Information Technology</h3>
                                <p className="text-neutral-500 dark:text-neutral-400 mt-1">Muffakham Jah College of Engineering & Technology</p>
                            </div>
                            <div className="relative p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800">
                                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Diploma in Information Technology</h3>
                                <p className="text-neutral-500 dark:text-neutral-400 mt-1">State Board of Technical Education and Training</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Certifications */}
                <div className="space-y-8">
                    <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white text-center">Certifications</h2>
                    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            "AWS Academy Cloud Foundations",
                            "AWS Academy Data Engineering",
                            "AWS Generative AI Foundations",
                            "Microsoft Career Essentials in Data Analysis",
                            "LinkedIn Introduction to Data Science",
                            "HackerRank Python (Basic)",
                            "HackerRank SQL (Basic)"
                        ].map((cert, index) => (
                            <Card key={index} className="flex items-center gap-3 p-4">
                                <FileText className="h-5 w-5 text-neutral-400" />
                                <span className="font-medium text-white">{cert}</span>
                            </Card>
                        ))}
                    </ul>
                </div>
            </Container>
        </Section>
    );
}
