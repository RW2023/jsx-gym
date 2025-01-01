import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation: React.FC = () => {
    const location = useLocation();
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Load the user's theme preference from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setIsDarkMode(savedTheme === 'dark');
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }, []);

    // Toggle dark mode
    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        const theme = newMode ? 'dark' : 'light';
        document.documentElement.classList.toggle('dark', newMode);
        localStorage.setItem('theme', theme);
    };

    const isActive = (path: string) => location.pathname === path;

    return (
        <motion.nav
            className="navbar bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            role="navigation"
            aria-label="Main Navigation"
        >
            {/* Logo Section */}
            <div className="flex-1">
                <Link
                    to="/"
                    className="btn btn-ghost normal-case text-2xl font-bold text-black dark:text-white hover:text-gray-600"
                >
                    JSX Gym
                </Link>
            </div>

            {/* Menu Items */}
            <div className="hidden md:flex flex-none">
                <ul className="menu menu-horizontal space-x-4 font-orbitron">
                    <li>
                        <Link
                            to="/"
                            className={`${isActive('/') ? 'text-black dark:text-white font-bold' : 'text-gray-600 dark:text-gray-400'
                                } hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black px-4 py-2 rounded`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/mid"
                            className={`${isActive('/mid') ? 'text-black dark:text-white font-bold' : 'text-gray-600 dark:text-gray-400'
                                } hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black px-4 py-2 rounded`}
                        >
                            Libraries
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/font"
                            className={`${isActive('/font') ? 'text-black dark:text-white font-bold' : 'text-gray-600 dark:text-gray-400'
                                } hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black px-4 py-2 rounded`}
                        >
                            Fonts
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/StateDemo"
                            className={`${isActive('/StateDemo') ? 'text-black dark:text-white font-bold' : 'text-gray-600 dark:text-gray-400'
                                } hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black px-4 py-2 rounded`}
                        >
                            State Demo
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/GenerationSelector"
                            className={`${isActive('/GenerationSelector') ? 'text-black dark:text-white font-bold' : 'text-gray-600 dark:text-gray-400'
                                } hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black px-4 py-2 rounded`}
                        >
                            Generations
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/ChakraExplorer"
                            className={`${isActive('/ChakraExplorer') ? 'text-black dark:text-white font-bold' : 'text-gray-600 dark:text-gray-400'
                                } hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black px-4 py-2 rounded`}
                        >
                            Chakras
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Dark Mode Toggle */}
            <div className="flex-none">
                <button
                    className="btn btn-ghost text-black dark:text-white"
                    onClick={toggleDarkMode}
                    aria-label="Toggle Dark Mode"
                >
                    {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
                </button>
            </div>
        </motion.nav>
    );
};

export default Navigation;
