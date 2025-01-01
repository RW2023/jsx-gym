import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Mid: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const libraries = [
        { name: 'Daisy UI', easeOfUse: 4.5, added: '2024-12-30' },
        { name: 'Tailwind CSS', easeOfUse: 5, added: '2024-12-30' },
        { name: 'Framer Motion', easeOfUse: 4, added: '2024-12-30' },
        { name: 'React Router', easeOfUse: 4.2, added: '2024-12-30' },
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
                    Explore Frontend Libraries
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    Search and filter libraries to find the best fit for your projects.
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
                    <ul className="list-disc list-inside space-y-4">
                        {filteredLibraries.map((library, index) => (
                            <motion.li
                                key={index}
                                className="text-lg text-gray-800 dark:text-gray-300"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {library.name} - Ease of Use: {library.easeOfUse}/5
                            </motion.li>
                        ))}
                    </ul>
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
