import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import ProjectCard from "@/components/ProjectCard";
import { Brain, LineChart, TrendingUp } from "lucide-react";

/* 
  Data for projects with added Icons.
*/
const projects = [
    {
        title: 'LIC Email Automation & Analytics Platform',
        description: 'AI-driven email classification and routing system. Features include secure ingestion pipeline with PII redaction using Presidio, Retrieval-Augmented Generation (RAG) using local LLM, and intent detection/sentiment analysis.',
        tech: ['Python', 'FastAPI', 'LLM + RAG', 'Docker', 'ChromaDB', 'Presidio'],
        github: 'https://github.com/mehraank2993',
        icon: <Brain className="h-6 w-6 text-white" />
    },
    {
        title: 'Consumer Lending Risk Insight Analysis',
        description: 'Comprehensive risk analysis project involving data cleaning, exploratory analysis, and feature engineering. Built dashboard visualizations in Power BI to identify risk factors and analyze loan defaults.',
        tech: ['Python', 'Pandas', 'NumPy', 'Power BI'],
        github: 'https://github.com/mehraank2993',
        icon: <LineChart className="h-6 w-6 text-white" />
    },
    {
        title: 'Cryptocurrency Price Prediction',
        description: 'Deep learning project using LSTM for time-series forecasting. Handled sequential data preprocessing and financial analytics modeling to evaluate and optimize performance for price prediction.',
        tech: ['Python', 'Deep Learning', 'LSTM', 'Time-Series'],
        github: 'https://github.com/mehraank2993',
        icon: <TrendingUp className="h-6 w-6 text-white" />
    }
];

export function ProjectsSection() {
    return (
        <Section id="projects">
            <Container>
                <div className="mb-12 space-y-4 text-center">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-neutral-950 dark:text-white">Projects</h1>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        A selection of my recent work in Data Engineering, AI, and Analytics.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </Container>
        </Section>
    );
}
