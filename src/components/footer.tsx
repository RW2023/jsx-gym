import React from "react";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear(); // Get the current year dynamically

    return (
        <footer className="bg-gray-200 dark:bg-gray-800 text-black dark:text-gray-300 text-center py-4 mt-auto transition-colors duration-300">
            <p>&copy; {currentYear} JSX Gym. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
