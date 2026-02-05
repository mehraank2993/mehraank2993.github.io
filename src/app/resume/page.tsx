import { Download } from 'lucide-react';

export default function Resume() {
    return (
        <div className="page-resume animate-fade-in" style={{ height: 'calc(100vh - var(--nav-height))', display: 'flex', flexDirection: 'column' }}>
            <div className="resume-header" style={{
                padding: '1rem',
                backgroundColor: 'var(--bg-secondary)',
                borderBottom: '1px solid var(--border)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <a
                    href="/resume.pdf"
                    download="Mehraan_Khan_Resume.pdf"
                    className="btn btn-primary"
                >
                    <Download size={20} style={{ marginRight: '0.5rem' }} />
                    Download PDF
                </a>
            </div>

            <div className="resume-viewer" style={{ flex: 1, backgroundColor: '#525659' }}>
                <iframe
                    src="/resume.pdf"
                    title="Resume Preview"
                    width="100%"
                    height="100%"
                    style={{ border: 'none', display: 'block' }}
                >
                    <p className="text-center p-4">
                        Your browser does not support PDF embedding.
                        <a href="/resume.pdf" className="text-accent underline ml-2">Download Resume</a>
                    </p>
                </iframe>
            </div>
        </div>
    );
}
