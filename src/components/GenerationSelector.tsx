import React, { useState } from "react";
import { motion } from "framer-motion";

// Types
type GenerationDetails = {
    years: string;
    description: string;
    detailedDescription: string;
    image: string; // Added for image paths
};

type Generations = {
    [key: string]: GenerationDetails;
};

// Generations data with image placeholders
const generations: Generations = {
    silent: {
        years: "1928-1945",
        description:
            "The Silent Generation grew up during the Great Depression and World War II.",
        detailedDescription:
            "This generation is known for their strong work ethic, discipline, and traditional values. They witnessed major world events like the Great Depression and WWII, which deeply influenced their outlook on life. Many became leaders in business and government in the latter half of the 20th century.",
        image: "/generations/silent.jpg", // Placeholder for Silent Generation image
    },
    babyBoomers: {
        years: "1946-1964",
        description:
            "Baby Boomers were born post-World War II during a time of economic prosperity.",
        detailedDescription:
            "Baby Boomers played a key role in shaping modern culture. They experienced the civil rights movement, the Vietnam War protests, and the rise of rock 'n' roll. As a generation, they value personal growth and were pioneers of social change.",
        image: "/generations/babyBoomers.jpg", // Placeholder for Baby Boomers image
    },
    generationX: {
        years: "1965-1980",
        description:
            "Generation X grew up during the rise of personal computers.",
        detailedDescription:
            "Often referred to as the 'Latchkey Generation,' Generation X is known for their independence and entrepreneurial spirit. They were the first generation to grow up with video games, cable TV, and personal computers, marking the beginning of the digital age.",
        image: "/generations/generationX.webp", // Placeholder for Generation X image
    },
    millennials: {
        years: "1981-1996",
        description:
            "Millennials came of age during the internet boom and the rise of social media.",
        detailedDescription:
            "Millennials are highly tech-savvy and value experiences over material possessions. They came of age during the dot-com boom, 9/11, and the 2008 financial crisis, shaping their adaptability and focus on work-life balance. They are also known for their environmental and social awareness.",
        image: "/generations/millennials.webp", // Placeholder for Millennials image
    },
    generationZ: {
        years: "1997-2012",
        description:
            "Generation Z is the first generation to grow up with smartphones.",
        detailedDescription:
            "This generation is marked by their digital-native status. They value diversity and inclusivity, and they are highly vocal about social and political issues. Their strong connection to technology influences their communication and work preferences.",
        image: "/generations/generationZ.webp", // Placeholder for Generation Z image
    },
    generationAlpha: {
        years: "2013-Present",
        description:
            "Generation Alpha is growing up in a world dominated by digital technologies.",
        detailedDescription:
            "Generation Alpha is still in its formative years, but they are already showing a deep connection to AI, automation, and cutting-edge technology. They are expected to be the most educated generation, with a strong focus on creativity and innovation.",
        image: "/generations/generationAlpha.jpg", // Placeholder for Generation Alpha image
    },
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

    // Framer Motion variants for animations
    const fadeVariant = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 10 },
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
                        <label className="label">
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
                    <button
                        type="button"
                        className="btn btn-outline w-full mt-2 text-gray-800 dark:text-gray-300 dark:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700"
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                </form>

                {/* Dynamic Explainer */}
                {selectedGeneration && (
                    <motion.div
                        className="p-4 mt-4 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-lg"
                        variants={fadeVariant}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-lg font-bold font-roboto">
                            {toTitleCase(selectedGeneration)}
                        </h2>
                        <p className="text-sm italic font-roboto">
                            Years: {generations[selectedGeneration].years}
                        </p>
                        <p className="mt-2 font-roboto">
                            {generations[selectedGeneration].description}
                        </p>
                        <p className="mt-4 font-roboto text-gray-600 dark:text-gray-300">
                            {generations[selectedGeneration].detailedDescription}
                        </p>

                        {/* Image */}
                        <img
                            src={generations[selectedGeneration].image}
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
