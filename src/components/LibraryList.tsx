import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faStar, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

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
                    className="p-4 rounded-lg shadow bg-white dark:bg-gray-800 flex gap-4 items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {/* Logo */}
                    <motion.img
                        src={library.logo}
                        alt={`${library.name} logo`}
                        className="w-12 h-12 object-contain rounded"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    />

                    {/* Library Info */}
                    <div>
                        {/* Library Name with External Link Icon */}
                        <a
                            href={library.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl font-bold text-blue-500 dark:text-blue-400 hover:underline flex items-center gap-2"
                        >
                            {library.name}
                            <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                        </a>

                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                            {library.description}
                        </p>

                        {/* Metadata with Icons */}
                        <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 flex items-center gap-4">
                            <span className="flex items-center gap-1">
                                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                                Ease of Use: {library.easeOfUse}/5
                            </span>
                            <span className="flex items-center gap-1">
                                <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-500" />
                                Added: {library.added}
                            </span>
                        </p>
                    </div>
                </motion.li>
            ))}
        </ul>
    );
};

export default LibraryList;
