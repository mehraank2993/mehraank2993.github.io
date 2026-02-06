import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const skillCategories = [
    {
        title: "Programming",
        skills: ["Python", "SQL"]
    },
    {
        title: "Data Analysis & Visualization",
        skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Excel"]
    },
    {
        title: "Machine Learning & AI",
        skills: ["LSTM", "Feature Engineering", "Data Preprocessing", "Model Evaluation", "Time-Series Forecasting"]
    },
    {
        title: "Big Data",
        skills: ["Apache Spark (PySpark)", "Spark SQL", "Hadoop", "Apache Hive"]
    },
    {
        title: "Cloud & Tools",
        skills: ["AWS", "Docker", "Linux", "MySQL", "FastAPI", "Git"]
    },
    {
        title: "AI & LLM",
        skills: ["Local LLM Deployment (Ollama)", "RAG Architecture", "ChromaDB", "Presidio"]
    }
];

export function SkillsSection() {
    return (
        <Section id="skills">
            <Container>
                <div className="mb-12 space-y-4 text-center">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-neutral-950 dark:text-white">Technical Skills</h1>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        My technical expertise across Data Engineering, AI, and Analytics.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {skillCategories.map((category) => (
                        <Card key={category.title}>
                            <h3 className="mb-4 text-xl font-bold text-white">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-md bg-neutral-900 border border-neutral-800 px-3 py-1 text-sm font-medium text-neutral-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
