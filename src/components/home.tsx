import React from 'react';
import Card from './Card';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faFont, faAdjust, faYinYang, faUsers } from '@fortawesome/free-solid-svg-icons';

const Home: React.FC = () => {
    return (
        <motion.div
            className="bg-gray-100 dark:bg-gray-900 w-full flex flex-col items-center justify-center min-h-screen p-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            {/* Hero Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                    Welcome to JSX Gym
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                    Your ultimate React playground for honing your skills.
                </p>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
                {[
                    {
                        title: 'Libraries Explored',
                        subtitle: 'Explore Installed libraries',
                        buttonText: 'View Libraries',
                        buttonUrl: '/Mid',
                        icon: faBook,
                    },
                    {
                        title: 'Typography',
                        subtitle: 'Installed Fonts',
                        buttonText: 'View Fonts',
                        buttonUrl: '/font',
                        icon: faFont,
                    },
                    {
                        title: 'State Management ',
                        subtitle: 'Mini State Projects',
                        buttonText: 'View Demos',
                        buttonUrl: '/StateDemo',
                        icon: faAdjust,
                    },
                    {
                        title: 'Balance Your Chakras',
                        subtitle: 'Discover the 7 chakras',
                        buttonText: 'Explore Chakras',
                        buttonUrl: '/ChakraExplorer',
                        icon: faYinYang,
                    },
                    {
                        title: 'Generations',
                        subtitle: 'Reference guide for generations',
                        buttonText: 'View Guide',
                        buttonUrl: '/GenerationSelector',
                        icon: faUsers,
                    },
                ].map((card, index) => (
                    <motion.div
                        key={index}
                        className="shadow-lg dark:shadow-gray-700 rounded-lg bg-white dark:bg-gray-800 p-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl dark:hover:shadow-gray-600"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <div className="flex items-center mb-4">
                            <FontAwesomeIcon
                                icon={card.icon}
                                className="text-3xl text-gray-800 dark:text-white mr-4"
                            />
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                                    {card.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    {card.subtitle}
                                </p>
                            </div>
                        </div>
                        <Card
                            title={card.title}
                            subtitle={card.subtitle}
                            buttonText={card.buttonText}
                            buttonUrl={card.buttonUrl}
                        />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Home;
