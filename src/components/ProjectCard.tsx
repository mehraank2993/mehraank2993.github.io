import React from 'react';
import './ProjectCard.css';
import { Github } from 'lucide-react';

interface ProjectProps {
    project: {
        title: string;
        description: string;
        tech: string[];
        github?: string;
    };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
    return (
        <div className="project-card">
            <div className="card-content" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <h3 className="card-title">{project.title}</h3>
                <p className="card-desc">{project.description}</p>

                <div className="card-tech">
                    {project.tech.map((t) => (
                        <span key={t} className="tech-tag">
                            {t}
                        </span>
                    ))}
                </div>

                {/* GitHub Link */}
                <div className="card-links" style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                    <a
                        href={project.github || "https://github.com/mehraank2993"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-icon flex-center"
                        style={{ gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', width: 'fit-content' }}
                        aria-label="GitHub Repo"
                    >
                        <Github size={20} />
                        <span>View Code</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
