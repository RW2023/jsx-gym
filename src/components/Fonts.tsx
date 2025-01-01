import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";

const Font: React.FC = () => {
    return (
        <motion.div
            className="bg-gray-100 dark:bg-gray-900 w-full flex flex-col items-center justify-center min-h-screen p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Page Title */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 font-orbitron">
                    Explore Fonts
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 font-roboto">
                    Learn how to install and configure fonts for your project.
                </p>
            </div>

            {/* Card */}
            <Card
                title="Fonts"
                subtitle="Installing and Configuring Fonts"
                body={
                    <div className="mt-4">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 font-orbitron">
                            Explore the Styles Below:
                        </h2>
                        <ul className="list-disc list-inside text-lg text-gray-800 dark:text-gray-300 space-y-4">
                            <motion.li
                                className="font-orbitron"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <span className="font-bold">Lora (Headlines):</span> Sample text in Lora font.
                            </motion.li>
                            <motion.li
                                className="font-roboto"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <span className="font-bold">Inter (Body Text):</span> Sample text in Inter font.
                            </motion.li>
                        </ul>
                    </div>
                }
                buttonText="Explore States"
                buttonUrl="/StateDemo"
            />
        </motion.div>
    );
};

export default Font;
