import React from "react";

const ModalForm = ({
    latitude,
    longitude,
    handleLatitudeChange,
    handleLongitudeChange,
    handleFindNearbyFires,
}) => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4 my-8">Ingresa tus coordenadas</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Latitud:</label>
                    <input
                        type="text"
                        value={latitude}
                        onChange={handleLatitudeChange}
                        className="w-full p-2 border border-gray-300 focus:outline-none"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Longitud:</label>
                    <input
                        type="text"
                        value={longitude}
                        onChange={handleLongitudeChange}
                        className="w-full p-2 border border-gray-300 focus:outline-none"
                    />
                </div>
                <button
                    onClick={handleFindNearbyFires}
                    className="w-full bg-green-800 text-white px-4 py-2 border border-gray-300 cursor-pointer font-bold"
                >
                    Buscar Incendios
                </button>
            </form>
        </div>
    );
};

export default ModalForm;

