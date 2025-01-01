import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LibraryList from '../Data/LibraryList';

const Mid: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const libraries = [
        {
            name: 'Daisy UI',
            easeOfUse: 4.5,
            added: '2024-12-30',
            description: 'A lightweight UI component library built on TailwindCSS.',
            logo: '/images/daisyui-logo.png',
            link: 'https://daisyui.com',
        },
        {
            name: 'Tailwind CSS',
            easeOfUse: 5,
            added: '2024-12-30',
            description: 'A utility-first CSS framework for rapid UI development.',
            logo: '/images/tailwindcss-logo.png',
            link: 'https://tailwindcss.com',
        },
        {
            name: 'Framer Motion',
            easeOfUse: 4,
            added: '2024-12-30',
            description: 'A powerful motion library for animations in React.',
            logo: '/images/framer-motion.jpeg',
            link: 'https://www.framer.com/motion/',
        },
        {
            name: 'React Router',
            easeOfUse: 4.2,
            added: '2024-12-30',
            description: 'A declarative routing library for React applications.',
            logo: '/images/react-router.png',
            link: 'https://reactrouter.com',
        },
    ];

    const filteredLibraries = libraries.filter((library) =>
        library.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <motion.div
            className="bg-gray-100 dark:bg-gray-900 w-full flex flex-col items-center justify-center min-h-screen p-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
            {/* Title */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                    Frontend Libraries Used
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    Search and filter libraries.
                </p>
            </div>

            {/* Search */}
            <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-3xl mb-6">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search libraries..."
                    className="input input-bordered w-full md:w-1/2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-300"
                />
            </div>

            {/* List */}
            <div className="w-full max-w-3xl">
                {filteredLibraries.length > 0 ? (
                    <LibraryList libraries={filteredLibraries} />
                ) : (
                    <p className="text-gray-600 dark:text-gray-400 text-center">
                        No libraries found.
                    </p>
                )}
            </div>
        </motion.div>
    );
};

export default Mid;
