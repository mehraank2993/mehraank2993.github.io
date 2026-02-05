'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Code2 } from 'lucide-react';
import ResumeButton from './ResumeButton';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Skills', path: '/skills' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <Link href="/" className="nav-logo" onClick={closeMenu}>
                    <Code2 className="mr-2 text-accent" />
                    Mehraan<span>Khan</span>
                </Link>

                <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.path}
                                className={`nav-link ${pathname === item.path ? 'active' : ''}`}
                                onClick={closeMenu}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                    <li onClick={closeMenu}>
                        <ResumeButton />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
