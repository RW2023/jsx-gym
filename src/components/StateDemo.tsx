import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faRedo, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const StateDemo: React.FC = () => {
    const useCounter = (initialValue = 0) => {
        const [count, setCount] = useState(initialValue);
        const increment = () => setCount((prev) => prev + 1);
        const decrement = () => setCount((prev) => prev - 1);
        const reset = () => setCount(initialValue);
        return { count, increment, decrement, reset };
    };

    const { count, increment, decrement, reset } = useCounter();
    const [text, setText] = useState("");
    const navigate = useNavigate();

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const counterVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
        updated: { scale: 1.2 },
    };

    return (
        <motion.div
            className="bg-base-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-4xl mx-auto my-6 sm:p-8 lg:p-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <h1 className="text-2xl font-bold mb-6 dark:text-white text-center sm:text-3xl">
                React State Demo
            </h1>

            {/* Counter Example */}
            <section className="mb-12" id="state-demo">
                <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200 sm:text-2xl">
                    Counter Example
                </h2>
                <motion.p
                    className="mb-6 text-lg text-gray-600 dark:text-gray-300 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover="updated"
                    variants={counterVariants}
                    transition={{ duration: 0.3 }}
                >
                    Current Count: <span className="font-bold">{count}</span>
                </motion.p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <motion.button
                        onClick={increment}
                        className="btn bg-green-500 text-white hover:bg-green-600 dark:hover:bg-green-400 w-full sm:w-auto flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Increment count"
                    >
                        <FontAwesomeIcon icon={faPlus} />
                        Increment
                    </motion.button>
                    <motion.button
                        onClick={decrement}
                        className="btn bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-400 w-full sm:w-auto flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Decrement count"
                    >
                        <FontAwesomeIcon icon={faMinus} />
                        Decrement
                    </motion.button>
                    <motion.button
                        onClick={reset}
                        className="btn bg-gray-500 text-white hover:bg-gray-600 dark:hover:bg-gray-400 w-full sm:w-auto flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Reset count"
                    >
                        <FontAwesomeIcon icon={faRedo} />
                        Reset
                    </motion.button>
                </div>
            </section>

            {/* Text Input Example */}
            <section>
                <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200 sm:text-2xl">
                    Text Input Example
                </h2>
                <p className="mb-6 text-gray-600 dark:text-gray-300 text-center sm:text-lg">
                    Type something below to see how state updates in real-time:
                </p>
                <motion.input
                    type="text"
                    value={text}
                    onChange={handleTextChange}
                    className="input input-bordered w-full mb-6 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Type here..."
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    whileFocus={{ scale: 1.05 }}
                    aria-label="Enter text"
                />
                <motion.p
                    className="text-lg text-gray-600 dark:text-gray-300 mb-6 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    aria-live="polite"
                >
                    Current Text: <span className="font-bold">{text}</span>
                </motion.p>
                <motion.button
                    type="button"
                    className="btn bg-black text-white hover:text-black hover:bg-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white w-full sm:w-auto mx-auto block flex items-center gap-2"
                    whileHover={{ scale: 1.1 }}
                    onClick={() => navigate("/EligibilityChecker")}
                >
                    <FontAwesomeIcon icon={faArrowRight} />
                    Check Eligibility Demo
                </motion.button>
            </section>
        </motion.div>
    );
};

export default StateDemo;
