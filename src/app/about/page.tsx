import ResumeButton from '@/components/ResumeButton';

export default function About() {
    return (
        <div className="page-about animate-fade-in">
            <div className="container">
                <h1 className="section-title">About Me</h1>

                <div className="about-content" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>

                    {/* Professional Summary */}
                    <section>
                        <h2 className="text-xl font-bold mb-4" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Professional Summary</h2>
                        <p className="text-muted" style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            Aspiring Data & AI Engineer with hands-on experience in Python, SQL, machine learning, and big data technologies. Skilled in building end-to-end data and AI systems including data ingestion, preprocessing, analytics, and model-driven automation. Experienced in developing AI-powered applications using FastAPI, local LLMs, and Retrieval-Augmented Generation (RAG) with a focus on security, scalability, and real-world problem solving. Passionate about transforming raw data into actionable insights and contributing to production-ready data and AI solutions.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <ResumeButton download={true} className="btn-primary" />
                        </div>
                    </section>

                    {/* Education */}
                    <section>
                        <h2 className="text-xl font-bold mb-4" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Education</h2>

                        <div className="education-item" style={{ marginBottom: '2rem', borderLeft: '2px solid var(--border)', paddingLeft: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--text-primary)' }}>Post Graduate Diploma in Big Data Analytics</h3>
                            <div style={{ color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Centre for Development of Advanced Computing (C-DAC), Navi Mumbai | Aug 2025 – Feb 2026</div>
                        </div>

                        <div className="education-item" style={{ marginBottom: '2rem', borderLeft: '2px solid var(--border)', paddingLeft: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--text-primary)' }}>Bachelor of Engineering – Information Technology</h3>
                            <div style={{ color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Konkan Gyanpeeth College of Engineering | Nov 2022 – May 2025</div>
                        </div>

                        <div className="education-item" style={{ marginBottom: '2rem', borderLeft: '2px solid var(--border)', paddingLeft: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--text-primary)' }}>Diploma in Information Technology</h3>
                            <div style={{ color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Shivajirao S. Jondhale Polytechnic | Jul 2019 – Jun 2022</div>
                        </div>
                    </section>

                    {/* Certifications */}
                    <section>
                        <h2 className="text-xl font-bold mb-4" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Certifications</h2>
                        <ul style={{ listStyle: 'disc', color: 'var(--text-secondary)', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                            <li>AWS Academy Cloud Foundations</li>
                            <li>AWS Academy Data Engineering</li>
                            <li>AWS Generative AI Foundations</li>
                            <li>Microsoft Career Essentials in Data Analysis</li>
                            <li>LinkedIn Introduction to Data Science</li>
                            <li>HackerRank Python (Basic)</li>
                            <li>HackerRank SQL (Basic)</li>
                        </ul>
                    </section>

                </div>
            </div>
        </div>
    );
}
