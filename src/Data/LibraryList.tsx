import React from 'react';
import { motion } from 'framer-motion';

interface Library {
    name: string;
    easeOfUse: number;
    added: string;
    description: string;
    logo: string;
    link: string;
}

interface LibraryListProps {
    libraries: Library[];
}

const LibraryList: React.FC<LibraryListProps> = ({ libraries }) => {
    return (
        <ul className="space-y-4">
            {libraries.map((library, index) => (
                <motion.li
                    key={index}
                    className="p-4 rounded-lg shadow bg-white dark:bg-gray-800 flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <li className="flex items-center gap-4">
                        {/* Logo */}
                        <img
                            src={library.logo}
                            alt={`${library.name} logo`}
                            className="w-12 h-12 object-contain rounded"
                        />

                        {/* Library Info */}
                        <div>
                            <a
                                href={library.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl font-bold text-blue-500 dark:text-blue-400 hover:underline"
                            >
                                {library.name}
                            </a>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                {library.description}
                            </p>
                            <p className="text-gray-500 dark:text-gray-400 text-xs">
                                Ease of Use: {library.easeOfUse}/5 | Added: {library.added}
                            </p>
                        </div>
                    </li>
                </motion.li>
            ))}
        </ul>
    );
};

export default LibraryList;
