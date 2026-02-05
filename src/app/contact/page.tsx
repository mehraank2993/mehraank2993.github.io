'use client';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thanks for your message! This is a demo form.');
    };

    return (
        <div className="page-contact animate-fade-in">
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 className="section-title">Get In Touch</h1>
                <p className="text-muted mb-8" style={{ marginBottom: '3rem' }}>
                    I am currently open to new opportunities in Data Engineering and AI.
                </p>

                <div className="contact-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '3rem'
                }}>
                    {/* Contact Info */}
                    <div className="contact-info">
                        <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                            <a href="mailto:mehraan57@gmail.com" className="contact-link flex-center" style={{ flexDirection: 'column', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                                <Mail size={32} className="text-accent" />
                                <span>mehraan57@gmail.com</span>
                            </a>
                            <a href="https://linkedin.com/in/mehraan-khan-15956a28a" target="_blank" rel="noopener noreferrer" className="contact-link flex-center" style={{ flexDirection: 'column', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                                <Linkedin size={32} className="text-accent" />
                                <span>Mehraan Khan</span>
                            </a>
                            <a href="https://github.com/mehraank2993" target="_blank" rel="noopener noreferrer" className="contact-link flex-center" style={{ flexDirection: 'column', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                                <Github size={32} className="text-accent" />
                                <span>mehraank2993</span>
                            </a>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div className="form-group">
                            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    backgroundColor: 'var(--bg-secondary)',
                                    border: '1px solid var(--border)',
                                    borderRadius: 'var(--radius)',
                                    color: 'var(--text-primary)'
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    backgroundColor: 'var(--bg-secondary)',
                                    border: '1px solid var(--border)',
                                    borderRadius: 'var(--radius)',
                                    color: 'var(--text-primary)'
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Message</label>
                            <textarea
                                id="message"
                                rows={5}
                                required
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    backgroundColor: 'var(--bg-secondary)',
                                    border: '1px solid var(--border)',
                                    borderRadius: 'var(--radius)',
                                    color: 'var(--text-primary)',
                                    resize: 'vertical'
                                }}
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
