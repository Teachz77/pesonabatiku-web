'use client'
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);

    const navLinks = [
        { name: 'Tentang', href: '/#Tentang' },
        { name: 'Galeri', href: '/#Galeri' },
        { name: 'Produk', href: '/#Produk' },
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-[#2B7247]' : 'bg-transparent'}`}>
            <nav className='container mx-auto flex items-center justify-between h-28 px-4'>
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link href="/">
                        <div className='relative block h-40 w-32 cursor-pointer'>
                            <Image src="/Pesona.svg" alt='logo' fill priority />
                        </div>
                    </Link>
                </div>

                {/* Navigasi untuk Desktop */}
                <ul className='hidden md:flex items-center space-x-8 text-white'>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} className='hover:text-gray-300 transition-colors'>{link.name}</a>
                        </li>
                    ))}
                </ul>

                {/* Tombol Hamburger untuk Mobile */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            {/* Menu Navigasi Mobile */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
                 <ul className='px-4 pb-4 flex flex-col items-center space-y-4 text-white bg-[#2B7247]'>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} onClick={() => setIsMenuOpen(false)} className='block py-2 text-center text-lg hover:text-gray-300'>{link.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};