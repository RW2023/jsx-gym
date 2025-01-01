import React, { useState } from "react";
import { motion } from "framer-motion";
import { chakras, ChakraDetails } from "../Data/chakraData"; // Import chakra data

const ChakraExplorer: React.FC = () => {
    const [selectedChakra, setSelectedChakra] = useState<ChakraDetails | null>(
        null
    );

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const chakra = chakras.find((c) => c.name === event.target.value) || null;
        setSelectedChakra(chakra);
    };

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
            {/* Chakra Map */}
            <div className="max-w-md mb-6 lg:mb-0 lg:mr-6">
                <img
                    src="/chakras/chakra-map.jpg"
                    alt="Chakra Map"
                    className="w-full h-auto rounded-lg"
                />
            </div>

            {/* Chakra Selector & Details */}
            <motion.div
                className="max-w-lg w-full bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Selector */}
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text text-gray-800 dark:text-gray-300">
                            Select a Chakra:
                        </span>
                    </label>
                    <select
                        className="select select-bordered w-full dark:bg-gray-700 dark:text-gray-300"
                        onChange={handleChange}
                        defaultValue=""
                        title="Select a Chakra"
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

                {/* Chakra Details */}
                {selectedChakra ? (
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                            {selectedChakra.name}
                        </h2>
                        <p className="text-sm italic text-gray-600 dark:text-gray-300">
                            Location: {selectedChakra.location}
                        </p>
                        <p className="text-sm italic text-gray-600 dark:text-gray-300">
                            Purpose: {selectedChakra.purpose}
                        </p>
                        <p className="mt-4 text-gray-800 dark:text-gray-300">
                            {selectedChakra.description}
                        </p>

                        {/* Detailed Information */}
                        <ul className="mt-4 text-gray-800 dark:text-gray-300">
                            <li>
                                <strong>Physical Location:</strong> {selectedChakra.physicalLocation}
                            </li>
                            <li>
                                <strong>Physical Systems:</strong> {selectedChakra.physicalSystems}
                            </li>
                            <li>
                                <strong>Nerve Plexus:</strong> {selectedChakra.nervePlexus}
                            </li>
                            <li>
                                <strong>Gland:</strong> {selectedChakra.gland}
                            </li>
                            <li>
                                <strong>Psychological Aspect:</strong> {selectedChakra.psychologicalAspect}
                            </li>
                            <li>
                                <strong>Spiritual Function:</strong> {selectedChakra.spiritualFunction}
                            </li>
                            <li>
                                <strong>Traditional Symbol:</strong> {selectedChakra.traditionalSymbol}
                            </li>
                            <li>
                                <strong>Element:</strong> {selectedChakra.element}
                            </li>
                            <li>
                                <strong>Color:</strong> {selectedChakra.color}
                            </li>
                            <li>
                                <strong>Sense:</strong> {selectedChakra.sense}
                            </li>
                            <li>
                                <strong>Energy Body:</strong> {selectedChakra.energyBody}
                            </li>
                            <li>
                                <strong>Seed Mantra:</strong> {selectedChakra.seedMantra}
                            </li>
                            <li>
                                <strong>Related Day:</strong> {selectedChakra.relatedDay}
                            </li>
                            <li>
                                <strong>Psychological Development:</strong> {selectedChakra.psychologicalDevelopment}
                            </li>
                            <li>
                                <strong>Quest:</strong> {selectedChakra.quest}
                            </li>
                            <li>
                                <strong>Qualities:</strong> {selectedChakra.qualities}
                            </li>
                            <li>
                                <strong>Blocking Fears:</strong> {selectedChakra.blockingFears}
                            </li>
                            <li>
                                <strong>Catharsis:</strong> {selectedChakra.catharsis}
                            </li>
                            <li>
                                <strong>Stone:</strong> {selectedChakra.stone}
                            </li>
                            <li>
                                <strong>Foods:</strong> {selectedChakra.foods}
                            </li>
                        </ul>

                        {/* Chakra Image */}
                        <img
                            src={selectedChakra.image}
                            alt={`${selectedChakra.name} image`}
                            className="w-full h-auto mt-4 rounded-lg"
                        />
                    </div>
                ) : (
                    <p className="text-gray-500 dark:text-gray-400 text-center mt-4">
                        Please select a chakra to view its details.
                    </p>
                )}
            </motion.div>
        </div>
    );
};

export default ChakraExplorer;
