import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
    title: string;
    subtitle: string;
    body?: React.ReactNode; // Allows any React component or JSX to be passed
    buttonText?: string;    // Optional button text
    buttonUrl?: string;     // Optional URL for the button
}

const Card: React.FC<CardProps> = ({ title, subtitle, body, buttonText, buttonUrl }) => {
    const isInternalLink = buttonUrl?.startsWith('/'); // Check if URL is internal

    return (
        <div className="card w-full mx-4 bg-white dark:bg-gray-800 shadow-xl dark:shadow-gray-700 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105">
            <div className="card-body justify-center">
                <h1 className="card-title text-3xl font-bold text-black dark:text-white">
                    {title}
                </h1>
                <h2 className="text-2xl text-gray-700 dark:text-gray-300">{subtitle}</h2>
                {body && (
                    <div className="mt-4">
                        {body} {/* Directly render body */}
                    </div>
                )}
                {buttonText && (
                    <div className="card-actions justify-center mt-4">
                        {buttonUrl ? (
                            isInternalLink ? (
                                <Link
                                    to={buttonUrl}
                                    className="btn bg-black dark:bg-white text-white dark:text-black hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-black"
                                >
                                    {buttonText}
                                </Link>
                            ) : (
                                <a
                                    href={buttonUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn bg-black dark:bg-white text-white dark:text-black hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-black"
                                >
                                    {buttonText}
                                </a>
                            )
                        ) : (
                            <button
                                type="button"
                                className="btn bg-black dark:bg-white text-white dark:text-black hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-black"
                            >
                                {buttonText}
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
