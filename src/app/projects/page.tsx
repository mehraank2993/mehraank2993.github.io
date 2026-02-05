import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export default function Projects() {
    return (
        <div className="page-projects animate-fade-in">
            <div className="container">
                <h1 className="section-title">Projects</h1>
                <p className="text-muted mb-8" style={{ maxWidth: '600px', marginBottom: '3rem' }}>
                    A showcase of my work in Data Engineering, AI, and Analytics.
                </p>

                <div className="grid-projects">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
}
