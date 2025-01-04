import React, { useState } from "react";
import { motion } from "framer-motion";
import { chakras, ChakraDetails } from "../Data/chakraData";
import EgoSelfDisplay from "./EgoSelfDisplay";

const ChakraExplorer: React.FC = () => {
    const [selectedChakra, setSelectedChakra] = useState<ChakraDetails | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const chakra = chakras.find((c) => c.name === event.target.value) || null;
        setSelectedChakra(chakra);
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Chakra Map */}
                <motion.div
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                        Chakra Map
                    </h2>
                    <img
                        src="/chakras/chakra-map.jpg"
                        alt="Chakra Map"
                        className="w-full h-auto rounded-lg"
                    />
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-4 text-center">
                        The chakra map shows the seven primary energy centers in the body.
                    </p>
                </motion.div>

                {/* Chakra Selector and Details */}
                <motion.div
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mb-6">
                        <label className="block font-bold text-gray-700 dark:text-gray-300 mb-2">
                            Select a Chakra:
                        </label>
                        <select
                            aria-label="Select a Chakra"
                            className="select select-bordered w-full dark:bg-gray-700 dark:text-gray-300"
                            onChange={handleChange}
                            defaultValue=""
                        >
                            <option value="" disabled>
                                -- Choose a Chakra --
                            </option>
                            {chakras.map((chakra) => (
                                <option key={chakra.name} value={chakra.name}>
                                    {chakra.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {selectedChakra ? (
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                                {selectedChakra.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 italic text-sm mb-4">
                                Location: {selectedChakra.location}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 italic text-sm mb-4">
                                Purpose: {selectedChakra.purpose}
                            </p>
                            <p className="text-gray-800 dark:text-gray-300 mt-4">
                                {selectedChakra.description}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md shadow">
                                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                                        Details
                                    </h4>
                                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                                        <li>
                                            <strong>Physical Location:</strong>{" "}
                                            {selectedChakra.physicalLocation}
                                        </li>
                                        <li>
                                            <strong>Physical Systems:</strong>{" "}
                                            {selectedChakra.physicalSystems}
                                        </li>
                                        <li>
                                            <strong>Nerve Plexus:</strong>{" "}
                                            {selectedChakra.nervePlexus}
                                        </li>
                                        <li>
                                            <strong>Gland:</strong> {selectedChakra.gland}
                                        </li>
                                        <li>
                                            <strong>Element:</strong> {selectedChakra.element}
                                        </li>
                                        <li>
                                            <strong>Color:</strong> {selectedChakra.color}
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md shadow">
                                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                                        Additional Information
                                    </h4>
                                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                                        <li>
                                            <strong>Sense:</strong> {selectedChakra.sense}
                                        </li>
                                        <li>
                                            <strong>Energy Body:</strong>{" "}
                                            {selectedChakra.energyBody}
                                        </li>
                                        <li>
                                            <strong>Seed Mantra:</strong> {selectedChakra.seedMantra}
                                        </li>
                                        <li>
                                            <strong>Foods:</strong> {selectedChakra.foods}
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-6">
                                <img
                                    src={selectedChakra.image}
                                    alt={`${selectedChakra.name} illustration`}
                                    className="w-full h-auto rounded-lg shadow-md"
                                />
                            </div>
                        </div>
                    ) : (
                        <p className="text-gray-500 dark:text-gray-400 text-center mt-4">
                            Please select a chakra to view its details.
                        </p>
                    )}
                </motion.div>
            </div>

            {/* Enhanced Container for EgoSelfDisplay */}
            <div className="flex flex-col items-center justify-center mt-12">
                <motion.div
                    className="w-full max-w-5xl bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
                        Explore the Ego and Self
                    </h2>
                    <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-8">
                        Dive into the depths of the psyche and uncover the differences between the Ego and the Self. Hover to learn more.
                    </p>
                    <EgoSelfDisplay />
                </motion.div>
            </div>
        </div>
    );
};

export default ChakraExplorer;
