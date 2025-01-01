import React from 'react';
import Card from './Card';
import { motion } from 'framer-motion';

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
                        title: 'Learn with Examples',
                        subtitle: 'Explore React libraries',
                        buttonText: 'Start Now',
                        buttonUrl: '/Mid',
                    },
                    {
                        title: 'Check Eligibility',
                        subtitle: 'Try our Eligibility Checker',
                        buttonText: 'Try It',
                        buttonUrl: '/EligibilityChecker',
                    },
                    {
                        title: 'State Management Demo',
                        subtitle: 'Understand React State',
                        buttonText: 'View Demo',
                        buttonUrl: '/StateDemo',
                    },
                ].map((card, index) => (
                    <motion.div
                        key={index}
                        className="shadow-lg dark:shadow-gray-700 rounded-lg bg-white dark:bg-gray-800 p-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl dark:hover:shadow-gray-600"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                    >
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
