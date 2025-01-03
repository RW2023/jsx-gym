import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo, faChevronDown, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import generations from "../Data/generations";

// Ensure generations is typed correctly
const typedGenerations: Generations = generations;

// Types
type GenerationDetails = {
    years: string;
    description: string;
    detailedDescription: string;
    image: string;
    definingItems: { type: string; value: string }[];
};

type Generations = {
    [key: string]: GenerationDetails;
};

// Helper function to convert strings to Title Case
const toTitleCase = (str: string): string => {
    return str
        .replace(/([a-z])([A-Z])/g, "$1 $2") // Add spaces between camelCase words
        .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word
};

const GenerationSelector: React.FC = () => {
    const [selectedGeneration, setSelectedGeneration] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedGeneration(event.target.value);
    };

    const handleReset = () => {
        setSelectedGeneration("");
    };

    return (
        <motion.div
            className="bg-gray-100 dark:bg-gray-900 w-full flex flex-col items-center justify-center min-h-screen p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Page Title */}
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6 font-orbitron">
                Generation Selector
            </h1>
            <div className="max-w-lg w-full bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <form>
                    {/* Dropdown */}
                    <div className="form-control mb-4">
                        <label className="label flex items-center">
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className="text-gray-700 dark:text-gray-300 mr-2"
                            />
                            <span className="label-text text-gray-800 dark:text-gray-300">
                                Select a Generation:
                            </span>
                        </label>
                        <select
                            title="Select a Generation"
                            className="select select-bordered w-full dark:bg-gray-700 dark:text-gray-300"
                            value={selectedGeneration}
                            onChange={handleChange}
                        >
                            <option value="" disabled>
                                -- Choose a Generation --
                            </option>
                            {Object.entries(generations).map(([key]) => (
                                <option key={key} value={key}>
                                    {toTitleCase(key)}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Reset Button */}
                    <motion.button
                        type="button"
                        className="btn btn-outline w-full mt-2 text-gray-800 dark:text-gray-300 dark:border-gray-500 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-700 flex items-center justify-center gap-2"
                        onClick={handleReset}
                        whileHover={{ scale: 1.05 }}
                    >
                        <FontAwesomeIcon icon={faRedo} />
                        Reset
                    </motion.button>
                </form>

                {/* Dynamic Explainer */}
                {selectedGeneration && (
                    <motion.div
                        className="p-4 mt-4 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-lg font-bold font-roboto flex items-center">
                            <FontAwesomeIcon
                                icon={faCalendarAlt}
                                className="text-gray-800 dark:text-white mr-2"
                            />
                            Years: {typedGenerations[selectedGeneration].years}
                        </h2>
                        <p className="text-sm italic font-roboto">
                            Years: {typedGenerations[selectedGeneration].years}
                        </p>
                        <p className="mt-2 font-roboto">
                            {typedGenerations[selectedGeneration].description}
                        </p>
                        <p className="mt-4 font-roboto text-gray-600 dark:text-gray-300">
                            {typedGenerations[selectedGeneration].detailedDescription}
                        </p>
                        <ul className="mt-4 list-disc list-inside">
                            {typedGenerations[selectedGeneration].definingItems.map((item, index) => (
                                <li key={index}>
                                    <strong>{item.type}:</strong> {item.value}
                                </li>
                            ))}
                        </ul>
                        <img
                            src={typedGenerations[selectedGeneration].image}
                            alt={`${toTitleCase(selectedGeneration)} image`}
                            className="w-full h-auto mt-4 rounded-lg"
                        />
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

export default GenerationSelector;
