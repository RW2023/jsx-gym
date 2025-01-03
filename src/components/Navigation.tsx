import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
    { name: 'Libraries', href: '/mid' },
    { name: 'Fonts', href: '/font' },
    { name: 'State Demo', href: '/StateDemo' },
    { name: 'Generations', href: '/GenerationSelector' },
    { name: 'Chakras', href: '/ChakraExplorer' },
];

const menuVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: '-100%', transition: { duration: 0.2 } },
};

const Navigation: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Load the user's theme preference
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setIsDarkMode(savedTheme === 'dark');
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }, []);

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        document.documentElement.classList.toggle('dark', newMode);
        localStorage.setItem('theme', newMode ? 'dark' : 'light');
    };

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    // Close the menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className="bg-white dark:bg-gray-800 text-black dark:text-white sticky top-0 z-20 shadow-md font-orbitron">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Section */}
                    <Link to="/" className="text-2xl font-bold">
                        JSX Gym
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="text-black dark:text-white hover:text-primary transition duration-300"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <button
                            className="text-black dark:text-white"
                            onClick={toggleDarkMode}
                        >
                            {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className="lg:hidden text-black dark:text-white"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        ref={menuRef}
                        className="lg:hidden bg-gray-800 text-white fixed top-0 left-0 w-3/4 h-full z-30"
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className="p-4 space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className="block text-lg text-white hover:text-primary"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <button
                                className="mt-4 text-white"
                                onClick={toggleDarkMode}
                            >
                                {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navigation;
