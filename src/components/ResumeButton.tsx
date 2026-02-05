'use client';
import React from 'react';
import { FileText, Download } from 'lucide-react';
import Link from 'next/link';

interface ResumeButtonProps {
    download?: boolean;
    className?: string;
}

const ResumeButton: React.FC<ResumeButtonProps> = ({ download = false, className = '' }) => {
    const content = (
        <>
            {download ? <Download size={18} /> : <FileText size={18} />}
            <span>Resume</span>
        </>
    );

    const baseClasses = `btn btn-primary flex-center gap-2 ${className}`;

    if (download) {
        return (
            <a
                href="/resume.pdf"
                download="Mehraan_Khan_Resume.pdf"
                className={baseClasses}
                aria-label="Download Resume"
            >
                {content}
            </a>
        );
    }

    return (
        <Link href="/resume" className={baseClasses}>
            {content}
        </Link>
    );
};

export default ResumeButton;
