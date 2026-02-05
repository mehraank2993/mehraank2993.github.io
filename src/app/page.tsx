import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import ResumeButton from '@/components/ResumeButton';
import { projects } from '@/data/projects';

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="page-home animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section container" style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '2rem'
      }}>
        <div className="hero-content">
          <h2 className="text-accent mb-4" style={{ fontWeight: 500 }}>Hi, I'm</h2>
          <h1 className="hero-name" style={{
            fontSize: '4.5rem',
            fontWeight: 800,
            color: 'var(--text-primary)',
            letterSpacing: '-1px',
            lineHeight: 1.1,
            marginBottom: '0.5rem'
          }}>
            Mehraan Khan
          </h1>
          <h2 className="hero-title text-secondary" style={{
            fontSize: '3.5rem',
            fontWeight: 700,
            marginBottom: '1.5rem',
            lineHeight: 1.1
          }}>
            Data & AI Engineer
          </h2>
          <h3 style={{
            fontSize: '1.5rem',
            color: 'var(--text-secondary)',
            marginBottom: '1.5rem',
            fontWeight: 400
          }}>
            Transforming raw data into scalable AI-driven solutions
          </h3>
          <p className="hero-desc" style={{
            maxWidth: '600px',
            fontSize: '1.15rem',
            color: 'var(--text-secondary)',
            marginBottom: '2.5rem',
            lineHeight: 1.7
          }}>
            Aspiring Data & AI Engineer with hands-on experience in Python, SQL, machine learning, and big data technologies. Skilled in building end-to-end AI systems including ingestion pipelines, analytics, and model-driven automation.
          </p>

          <div className="hero-actions" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/projects" className="btn btn-outline">
              View Projects
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Contact Me
            </Link>
            <ResumeButton download={true} className="btn-primary" />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section container" style={{ paddingBottom: '4rem' }}>
        <div className="section-header flex-center" style={{ justifyContent: 'space-between', marginBottom: '3rem' }}>
          <h2 className="section-title" style={{ marginBottom: 0 }}>Featured Projects</h2>
          <Link href="/projects" className="flex-center text-accent" style={{ gap: '0.5rem' }}>
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid-projects">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
