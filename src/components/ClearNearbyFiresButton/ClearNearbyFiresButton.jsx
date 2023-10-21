import React from "react";

const ClearNearbyFiresButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-red-800 w-full text-white px-4 py-2 border border-gray-300 cursor-pointer font-bold"
        >
            Volver al informe
        </button>
    );
};

export default ClearNearbyFiresButton;