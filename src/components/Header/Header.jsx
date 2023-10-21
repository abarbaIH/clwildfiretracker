import React from 'react';

const Header = () => {
    return (
        <header className="bg-green-800 text-white p-4 flex items-center justify-between">
            <div className="flex items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 0a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2V2a2 2 0 0 1 2-2zM1.293 5.293a1 1 0 0 1 1.414 0L10 13.586l7.293-7.293a1 1 0 1 1 1.414 1.414l-8 8a1 1 0 0 1-1.414 0l-8-8a1 1 0 0 1 0-1.414z"
                    />
                </svg>
                <h1 className="text-2xl font-bold">CyL Wildfire Tracker</h1>
            </div>
            <div className="text-sm">Versión 1.0</div>
        </header>
    );
};

export default Header;

