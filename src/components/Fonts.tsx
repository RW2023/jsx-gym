import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFont, faTextHeight } from "@fortawesome/free-solid-svg-icons";

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
                    Fonts
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 font-roboto">
                    Fonts are installed to improve performance and enhance privacy.
                </p>
            </div>

            {/* Card */}
            <Card
                title="Installed Fonts"
                subtitle="Explore the installed fonts in this project."
                body={
                    <div className="mt-4">
                        <ul className="list-disc list-inside text-lg text-gray-800 dark:text-gray-300 space-y-4">
                            <motion.li
                                className="flex items-center space-x-4 font-orbitron"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <FontAwesomeIcon
                                    icon={faFont}
                                    className="text-gray-800 dark:text-gray-300"
                                />
                                <span className="font-bold">Orbitron (Headlines):</span>
                                <span>Sample text in Orbitron font.</span>
                            </motion.li>
                            <motion.li
                                className="flex items-center space-x-4 font-roboto"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <FontAwesomeIcon
                                    icon={faTextHeight}
                                    className="text-gray-800 dark:text-gray-300"
                                />
                                <span className="font-bold">Roboto (Body Text):</span>
                                <span>Sample text in Roboto font.</span>
                            </motion.li>
                        </ul>
                    </div>
                }
                buttonText="Home"
                buttonUrl="/"
            />
        </motion.div>
    );
};

export default Font;
