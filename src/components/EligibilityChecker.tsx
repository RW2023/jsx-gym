import React, { useState } from "react";

const EligibilityChecker: React.FC = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthYear, setBirthYear] = useState<number | "">("");
    const [eligibilityMessage, setEligibilityMessage] = useState("");
    const [error, setError] = useState<string>("");

    const eligibleAge = 18;

    const calculateAge = (birthYear: number): number => {
        const currentYear = new Date().getFullYear();
        return currentYear - birthYear;
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

        const age = calculateAge(birthYear);

        if (age >= eligibleAge) {
            setEligibilityMessage(
                `${firstName} ${lastName} is ${age} years old and is eligible to participate.`
            );
        } else {
            const yearsLeft = eligibleAge - age;
            setEligibilityMessage(
                `${firstName} ${lastName} is ${age} years old and needs ${yearsLeft} more year(s) to be eligible.`
            );
        }
    };

    const resetForm = () => {
        setFirstName("");
        setLastName("");
        setBirthYear("");
        setEligibilityMessage("");
        setError("");
    };

    return (
        <div className="bg-base-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto m-3">
            <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Eligibility Checker
            </h1>

            <form onSubmit={checkEligibility} className="mb-6">
                <div className="mb-4">
                    <label
                        className="block font-bold mb-2 text-gray-700 dark:text-gray-200"
                        htmlFor="firstName"
                    >
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
                <div className="mb-4">
                    <label
                        className="block font-bold mb-2 text-gray-700 dark:text-gray-200"
                        htmlFor="lastName"
                    >
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
                <div className="mb-4">
                    <label
                        className="block font-bold mb-2 text-gray-700 dark:text-gray-200"
                        htmlFor="birthYear"
                    >
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
                {error && <p className="text-red-500 dark:text-red-400 mb-4">{error}</p>}
                <div className="flex gap-4">
                    <button
                        type="submit"
                        className="btn bg-blue-500 text-white hover:bg-blue-600 dark:hover:bg-blue-400 flex-1"
                    >
                        Check Eligibility
                    </button>
                    <button
                        type="button"
                        onClick={resetForm}
                        className="btn bg-gray-500 text-white hover:bg-gray-600 dark:hover:bg-gray-400 flex-1"
                    >
                        Reset
                    </button>
                </div>
            </form>

            {eligibilityMessage && (
                <div
                    className="alert alert-info bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white p-4 rounded-lg"
                    role="alert"
                    aria-live="polite"
                >
                    <p>{eligibilityMessage}</p>
                </div>
            )}
        </div>
    );
};

export default EligibilityChecker;
