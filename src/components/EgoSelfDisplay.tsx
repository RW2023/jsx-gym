import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faInfinity } from "@fortawesome/free-solid-svg-icons";

const iAm = {
    ego: true,
    duality: true,
    time: "linear",
    identity: "individual",
    perception: "limited",
    purpose: "self-preservation",
    awareness: "localized",
    emotions: ["fear", "desire", "attachment"],
    connection: "separated",
    focus: "external",
    creation: "by action",
};

const theSelf = {
    ego: false,
    duality: false,
    time: "Non Linear",
    identity: "universal",
    perception: "infinite",
    purpose: "oneness and exploration",
    awareness: "all-encompassing",
    emotions: ["peace", "love", "compassion"],
    connection: "interconnected",
    focus: "internal and eternal",
    creation: "by intention",
};

const EgoSelfDisplay: React.FC = () => {
    const [currentInfo, setCurrentInfo] = useState<typeof iAm | typeof theSelf>(iAm);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 flex flex-col items-center">
            {/* Cards Section */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Ego Card */}
                <motion.div
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition duration-300"
                    onMouseEnter={() => setCurrentInfo(iAm)}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="flex flex-col items-center">
                        <FontAwesomeIcon icon={faUser} size="3x" className="text-blue-500 mb-4" />
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                            Me
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm text-center mt-2">
                            Hover to learn more about the Ego.
                        </p>
                    </div>
                </motion.div>

                {/* Self Card */}
                <motion.div
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition duration-300"
                    onMouseEnter={() => setCurrentInfo(theSelf)}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="flex flex-col items-center">
                        <FontAwesomeIcon
                            icon={faInfinity}
                            size="3x"
                            className="text-green-500 mb-4"
                        />
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                            The True Self
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm text-center mt-2">
                            Hover to learn more about The Self.
                        </p>
                    </div>
                </motion.div>
            </motion.div>

            {/* Details Section */}
            <motion.div
                className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    {currentInfo === iAm ? "Me" : "I am"}
                </h3>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                    {Object.entries(currentInfo).map(([key, value]) => (
                        <li key={key} className="flex justify-between">
                            <span className="font-semibold capitalize">{key}:</span>
                            <span>
                                {Array.isArray(value) ? value.join(", ") : value.toString()}
                            </span>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
};

export default EgoSelfDisplay;
