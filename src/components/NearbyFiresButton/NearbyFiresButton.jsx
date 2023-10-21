import React from "react";

const NearbyFiresButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="w-full bg-green-800 text-white px-4 py-2 border border-gray-300 cursor-pointer font-bold mt-10"
        >
            Incendios cerca de mí
        </button>
    );
};

export default NearbyFiresButton;