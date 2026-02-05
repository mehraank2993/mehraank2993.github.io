import React from 'react';
import { Linkedin, Mail, Github } from 'lucide-react';
import ResumeButton from './ResumeButton';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="social-links">
                    <a
                        href="https://github.com/mehraank2993"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label="GitHub"
                    >
                        <Github size={24} />
                    </a>
                    <a
                        href="https://linkedin.com/in/mehraan-khan-15956a28a"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a
                        href="mailto:mehraan57@gmail.com"
                        className="social-link"
                        aria-label="Email"
                    >
                        <Mail size={24} />
                    </a>
                </div>

                <ResumeButton download={true} className="btn-outline" />

                <p className="copyright">
                    © {new Date().getFullYear()} Mehraan Khan. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
