import { Github, PlayCircle, Code2, Database, Brain } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface ProjectProps {
    project: {
        title: string;
        description: string;
        tech: string[];
        github?: string;
        demo?: string;
        icon?: React.ReactNode;
    };
}

export default function ProjectCard({ project }: ProjectProps) {
    // Determine icon based on title or randomize, but better to pass it in. 
    // For now, default to Brain if not provided, or logic based on content.
    const Icon = project.icon || <Code2 className="h-6 w-6" />;

    return (
        <div className="relative h-full rounded-[1.25rem] border border-neutral-800 p-2 md:rounded-[1.5rem] md:p-3">
            <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
            />
            <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-6 shadow-sm md:p-6 transition-shadow hover:shadow-md">
                <div className="relative flex flex-1 flex-col justify-between gap-3">
                    <div className="w-fit rounded-lg border border-neutral-800 bg-neutral-900 p-2 text-white">
                        {Icon}
                    </div>
                    <div className="space-y-3">
                        <h3 className="pt-0.5 text-xl font-bold leading-[1.375rem] tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-white">
                            {project.title}
                        </h3>
                        <p className="font-sans text-sm leading-[1.6] text-neutral-400 md:text-base">
                            {project.description}
                        </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                            <span
                                key={t}
                                className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-0.5 text-xs font-semibold text-neutral-300"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-auto pt-4 flex gap-4">
                    <a
                        href={project.github || "https://github.com/mehraank2993"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                    >
                        <Button variant="outline" size="sm" className="w-full gap-2 border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white hover:border-neutral-600">
                            <Github className="h-4 w-4" />
                            View Code
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}
