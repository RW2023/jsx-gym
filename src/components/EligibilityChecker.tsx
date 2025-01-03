import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faCalendarAlt,
    faExclamationCircle,
    faCheckCircle,
    faRedo,
} from "@fortawesome/free-solid-svg-icons";

const categories: { [key: string]: number } = {
    "Drinking And Clubbing - Quebec": 18,
    "Drinking Age Clubbing - Ontario": 19,
    "Driving Age": 16,
    "College Admission": 17,
    "Voting Age": 18,
    "Retirement Age": 65,
    "Military Enlistment": 18,
    "First Job": 16,
    "Adulthood": 18,
    "Drinking And Clubbing USA": 21,

};

const EligibilityChecker: React.FC = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthYear, setBirthYear] = useState<number | "">("");
    const [eligibilityMessage, setEligibilityMessage] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string>("Drinking Age Clubbing - Ontario");
    const [error, setError] = useState<string>("");

    const calculateAge = (birthYear: number): number => {
        const currentYear = new Date().getFullYear();
        return currentYear - birthYear;
    };

    const updateEligibilityMessage = () => {
        if (!firstName.trim() || !lastName.trim() || !birthYear) {
            setEligibilityMessage("");
            return;
        }

        const age = calculateAge(Number(birthYear));
        const eligibleAge = categories[selectedCategory];

        if (age >= eligibleAge) {
            setEligibilityMessage(
                `${firstName} ${lastName} is ${age} years old and is eligible for ${selectedCategory}.`
            );
        } else {
            const yearsLeft = eligibleAge - age;
            setEligibilityMessage(
                `${firstName} ${lastName} is ${age} years old and needs ${yearsLeft} more year(s) to be eligible for ${selectedCategory}.`
            );
        }
    };

    const checkEligibility = (e: React.FormEvent) => {
        e.preventDefault();

        if (!firstName.trim() || !lastName.trim() || !birthYear) {
            setError("All fields are required.");
            return;
        }
        if (birthYear < 1900 || birthYear > new Date().getFullYear()) {
            setError("Please enter a valid birth year between 1900 and the current year.");
            return;
        }

        setError("");
        updateEligibilityMessage();
    };

    const resetForm = () => {
        setFirstName("");
        setLastName("");
        setBirthYear("");
        setSelectedCategory("Drinking Age Clubbing - Ontario");
        setEligibilityMessage("");
        setError("");
    };

    // Update eligibility message when the category changes
    useEffect(() => {
        updateEligibilityMessage();
    }, [selectedCategory]);

    return (
        <div className="bg-base-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto m-3">
            <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-blue-500" />
                Eligibility Checker
            </h1>

            <form onSubmit={checkEligibility} className="mb-6">
                {/* First Name */}
                <div className="mb-4">
                    <label
                        className="font-bold mb-2 text-gray-700 dark:text-gray-200 flex items-center"
                        htmlFor="firstName"
                    >
                        <FontAwesomeIcon icon={faUser} className="mr-2" />
                        First Name:
                    </label>
                    <input
                        id="firstName"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className={`input input-bordered w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white ${error && !firstName ? "border-red-500" : ""
                            }`}
                        placeholder="Enter first name"
                        aria-required="true"
                    />
                </div>

                {/* Last Name */}
                <div className="mb-4">
                    <label
                        className="block font-bold mb-2 text-gray-700 dark:text-gray-200 flex items-center"
                        htmlFor="lastName"
                    >
                        <FontAwesomeIcon icon={faUser} className="mr-2" />
                        Last Name:
                    </label>
                    <input
                        id="lastName"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className={`input input-bordered w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white ${error && !lastName ? "border-red-500" : ""
                            }`}
                        placeholder="Enter last name"
                        aria-required="true"
                    />
                </div>

                {/* Birth Year */}
                <div className="mb-4">
                    <label
                        className="block font-bold mb-2 text-gray-700 dark:text-gray-200 flex items-center"
                        htmlFor="birthYear"
                    >
                        <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                        Birth Year:
                    </label>
                    <input
                        id="birthYear"
                        type="number"
                        value={birthYear}
                        onChange={(e) => setBirthYear(Number(e.target.value))}
                        className={`input input-bordered w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white ${error &&
                            (!birthYear ||
                                birthYear < 1900 ||
                                birthYear > new Date().getFullYear())
                            ? "border-red-500"
                            : ""
                            }`}
                        placeholder="Enter birth year"
                        aria-required="true"
                    />
                </div>

                {/* Category Selection */}
                <div className="mb-4">
                    <label
                        className="block font-bold mb-2 text-gray-700 dark:text-gray-200 flex items-center"
                        htmlFor="category"
                    >
                        <FontAwesomeIcon icon={faExclamationCircle} className="mr-2" />
                        Select Category:
                    </label>
                    <select
                        id="category"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
                    >
                        {Object.keys(categories).map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Error Message */}
                {error && (
                    <p className="text-red-500 dark:text-red-400 mb-4 flex items-center">
                        <FontAwesomeIcon icon={faExclamationCircle} className="mr-2" />
                        {error}
                    </p>
                )}

                {/* Buttons */}
                <div className="flex gap-4">
                    <button
                        type="submit"
                        className="btn bg-blue-500 text-white hover:bg-blue-600 dark:hover:bg-blue-400 flex-1 flex items-center justify-center gap-2"
                    >
                        <FontAwesomeIcon icon={faCheckCircle} />
                        Check Eligibility
                    </button>
                    <button
                        type="button"
                        onClick={resetForm}
                        className="btn bg-gray-500 text-white hover:bg-gray-600 dark:hover:bg-gray-400 flex-1 flex items-center justify-center gap-2"
                    >
                        <FontAwesomeIcon icon={faRedo} />
                        Reset
                    </button>
                </div>
            </form>

            {/* Eligibility Message */}
            {eligibilityMessage && (
                <div
                    className="alert alert-info bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white p-4 rounded-lg flex items-center gap-2"
                    role="alert"
                    aria-live="polite"
                >
                    <FontAwesomeIcon icon={faCheckCircle} className="text-blue-500" />
                    <p>{eligibilityMessage}</p>
                </div>
            )}
        </div>
    );
};

export default EligibilityChecker;
