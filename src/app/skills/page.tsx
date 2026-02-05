export default function Skills() {
    const skillCategories = [
        {
            title: 'Programming',
            skills: ['Python', 'SQL']
        },
        {
            title: 'Data Analysis & Visualization',
            skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Power BI', 'Excel']
        },
        {
            title: 'Machine Learning & AI',
            skills: ['LSTM', 'Feature Engineering', 'Data Preprocessing', 'Model Evaluation', 'Time-Series Forecasting']
        },
        {
            title: 'Big Data',
            skills: ['Apache Spark (PySpark)', 'Spark SQL', 'Hadoop', 'Apache Hive']
        },
        {
            title: 'Cloud & Tools',
            skills: ['AWS', 'Docker', 'Linux', 'MySQL', 'FastAPI', 'Git']
        },
        {
            title: 'AI & LLM',
            skills: ['Local LLM Deployment (Ollama)', 'RAG Architecture', 'ChromaDB', 'Presidio']
        }
    ];

    return (
        <div className="page-skills animate-fade-in">
            <div className="container">
                <h1 className="section-title">Technical Skills</h1>

                <div className="skills-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {skillCategories.map((category) => (
                        <div key={category.title} style={{
                            backgroundColor: 'var(--bg-card)',
                            padding: '2rem',
                            borderRadius: 'var(--radius)',
                            border: '1px solid var(--border)'
                        }}>
                            <h3 style={{
                                color: 'var(--accent)',
                                marginBottom: '1.5rem',
                                fontSize: '1.25rem',
                                fontWeight: '600'
                            }}>
                                {category.title}
                            </h3>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {category.skills.map((skill) => (
                                    <li key={skill} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: 'var(--text-primary)'
                                    }}>
                                        <span style={{
                                            width: '8px',
                                            height: '8px',
                                            backgroundColor: 'var(--border)',
                                            borderRadius: '50%',
                                            marginRight: '10px'
                                        }}></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
