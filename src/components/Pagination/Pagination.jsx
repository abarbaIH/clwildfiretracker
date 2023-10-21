import React from "react";

const Pagination = ({
    currentPage,
    lastPage,
    handlePrevPage,
    handleNextPage,
    handlePageChange,
}) => {
    return (
        <div className="w-full flex justify-between my-4">
            <div>
                {currentPage > 1 && (
                    <button
                        onClick={handlePrevPage}
                        className="bg-green-800 text-white px-3 py-1 border border-gray-300 cursor-pointer font-bold mx-20"
                    >
                        Anterior
                    </button>
                )}
            </div>
            <div className="text-lg">
                Página {currentPage} de {lastPage}
                <input
                    type="text"
                    value={currentPage}
                    onChange={handlePageChange}
                    className="ml-2 w-16 p-1 border border-gray-300"
                />
                de {lastPage}
            </div>
            <div>
                {currentPage < lastPage && (
                    <button
                        onClick={handleNextPage}
                        className="bg-green-800 text-white px-3 py-1 border border-gray-300 cursor-pointer font-bold mx-20"
                    >
                        Siguiente
                    </button>
                )}
            </div>
        </div>
    );
};

export default Pagination;