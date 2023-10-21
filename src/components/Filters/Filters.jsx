import React from "react";

const Filters = ({
    filterBySituation,
    setFilterBySituation,
    filterByCausaProbable,
    setFilterByCausaProbable,
    filterByProvincia,
    setFilterByProvincia,
    filterByNivel,
    setFilterByNivel,
    selectedFilters,
    setSelectedFilters,
}) => {
    const handleFilterSelect = (event, filterState, setFilterState) => {
        const selectedFilter = event.target.value;
        if (!filterState.includes(selectedFilter)) {
            setFilterState([...filterState, selectedFilter]);
            setSelectedFilters([...selectedFilters, selectedFilter]);
        }
    };

    const handleFilterRemove = (filter) => {
        switch (filter) {
            case "EXTINGUIDO":
            case "ACTIVO":
            case "CONTROLADO":
                setFilterBySituation((prevFilterState) => prevFilterState.filter((f) => f !== filter));
                break;
            case "RAYOS":
            case "POR DETERMINAR":
            case "DESCONOCIDO":
            case "NEGLIGENCIAS (LÍNEAS ELÉCTRICAS)":
            case "NEGLIGENCIAS (ELIMINACIÓN DE BASURAS Y RESTOS)":
            case "NEGLIGENCIAS (FUMADORES)":
            case "NEGLIGENCIAS (LIMPIEZAS DE VEGETACIÓN)":
            case "NEGLIGENCIA AUTOCOMBUSTIÓN (RESTOS DE PAJA)":
            case "NEGLIGENCIAS (ESCAPE DE QUEMAS CONTROLADAS)":
            case "NEGLIGENCIAS (QUEMA AGRÍCOLA)":
            case "ACCIDENTAL (MOTORES Y MÁQUINAS)":
            case "ACCIDENTAL (OTRAS ACTIVIDADES O USOS DEL MONTE)":
            case "ACCIDENTAL (TRABAJOS FORESTALES)":
            case "ACCIDENTAL (FERROCARRIL)":
            case "REPRODUCIDO":
            case "INTENCIONADO":
            case "EN INVESTIGACIÓN":

                setFilterByCausaProbable((prevFilterState) => prevFilterState.filter((f) => f !== filter));
                break;
            case "ÁVILA":
            case "BURGOS":
            case "LEÓN":
            case "PALENCIA":
            case "SALAMANCA":
            case "SEGOVIA":
            case "SORIA":
            case "VALLADOLID":
            case "ZAMORA":
                setFilterByProvincia((prevFilterState) => prevFilterState.filter((f) => f !== filter));
                break;
            case "0":
            case "1":
            case "2":
                setFilterByNivel((prevFilterState) => prevFilterState.filter((f) => f !== filter));
                break;
            default:
        }

        setSelectedFilters(selectedFilters.filter((f) => f !== filter));
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4 text-grey-800">
                Filtros
            </h1>
            <div className="mb-4">
                <h4 className="text-gray-700 font-bold">Filtro por Situación Actual</h4>
                <select
                    value={filterBySituation}
                    onChange={(event) =>
                        handleFilterSelect(event, filterBySituation, setFilterBySituation)
                    }
                    className="p-2 border border-gray-300 w-full mt-2 bg-white focus:outline-none"
                >
                    <option value="" disabled>
                        Selecciona Situación
                    </option>
                    <option value="EXTINGUIDO">EXTINGUIDO</option>
                    <option value="ACTIVO">ACTIVO</option>
                    <option value="CONTROLADO">CONTROLADO</option>
                </select>
            </div>
            <div className="mb-4">
                <h4 className="text-gray-700 font-bold">Filtro por Causa Probable</h4>
                <select
                    value={filterByCausaProbable}
                    onChange={(event) =>
                        handleFilterSelect(event, filterByCausaProbable, setFilterByCausaProbable)
                    }
                    className="p-2 border border-gray-300 w-full mt-2 bg-white focus:outline-none"
                >
                    <option value="" disabled>
                        Selecciona Causa
                    </option>
                    <option value="RAYOS">RAYOS</option>
                    <option value="POR DETERMINAR">POR DETERMINAR</option>
                    <option value="DESCONOCIDO">DESCONOCIDO</option>
                    <option value="NEGLIGENCIAS (LÍNEAS ELÉCTRICAS)">NEGLIGENCIAS (LÍNEAS ELÉCTRICAS)</option>
                    <option value="NEGLIGENCIAS (ELIMINACIÓN DE BASURAS Y RESTOS)">NEGLIGENCIAS (ELIMINACIÓN DE BASURAS Y RESTOS)</option>
                    <option value="NEGLIGENCIAS (FUMADORES)">NEGLIGENCIAS (FUMADORES)</option>
                    <option value="NEGLIGENCIAS (LIMPIEZAS DE VEGETACIÓN)">NEGLIGENCIAS (LIMPIEZAS DE VEGETACIÓN)</option>
                    <option value="NEGLIGENCIA AUTOCOMBUSTIÓN (RESTOS DE PAJA)">NEGLIGENCIA AUTOCOMBUSTIÓN (RESTOS DE PAJA)</option>
                    <option value="NEGLIGENCIAS (ESCAPE DE QUEMAS CONTROLADAS)">NEGLIGENCIAS (ESCAPE DE QUEMAS CONTROLADAS)</option>
                    <option value="NEGLIGENCIAS (QUEMA AGRÍCOLA)">NEGLIGENCIAS (QUEMA AGRÍCOLA)</option>
                    <option value="ACCIDENTAL (MOTORES Y MÁQUINAS)">ACCIDENTAL (MOTORES Y MÁQUINAS)</option>
                    <option value="ACCIDENTAL (OTRAS ACTIVIDADES O USOS DEL MONTE)">ACCIDENTAL (OTRAS ACTIVIDADES O USOS DEL MONTE)</option>
                    <option value="ACCIDENTAL (TRABAJOS FORESTALES)">ACCIDENTAL (TRABAJOS FORESTALES)</option>
                    <option value="ACCIDENTAL (FERROCARRIL)">ACCIDENTAL (FERROCARRIL)</option>
                    <option value="REPRODUCIDO">REPRODUCIDO</option>
                    <option value="INTENCIONADO">INTENCIONADO</option>
                    <option value="EN INVESTIGACIÓN">EN INVESTIGACIÓN</option>

                </select>
            </div>
            <div className="mb-4">
                <h4 className="text-gray-700 font-bold">Filtro por Provincia</h4>
                <select
                    value={filterByProvincia}
                    onChange={(event) =>
                        handleFilterSelect(event, filterByProvincia, setFilterByProvincia)
                    }
                    className="p-2 border border-gray-300 w-full mt-2 bg-white focus:outline-none"

                >
                    <option value="" disabled>
                        Selecciona Provincia
                    </option>
                    <option value="ÁVILA">ÁVILA</option>
                    <option value="BURGOS">BURGOS</option>
                    <option value="LEÓN">LEÓN</option>
                    <option value="PALENCIA">PALENCIA</option>
                    <option value="SALAMANCA">SALAMANCA</option>
                    <option value="SEGOVIA">SEGOVIA</option>
                    <option value="SORIA">SORIA</option>
                    <option value="VALLADOLID">VALLADOLID</option>
                    <option value="ZAMORA">ZAMORA</option>
                </select>


            </div>

            <div className="mb-4">
                <h4 className="text-gray-700 font-bold">Filtro por Nivel</h4>
                <select
                    value={filterByNivel}
                    onChange={(event) =>
                        handleFilterSelect(event, filterByNivel, setFilterByNivel)
                    }
                    className="p-2 border border-gray-300 w-full mt-2 bg-white focus:outline-none"
                >
                    <option value="" disabled>
                        Selecciona Nivel
                    </option>
                    <option value="0">Nivel 0</option>
                    <option value="1">Nivel 1</option>
                    <option value="2">Nivel 2</option>
                </select>
            </div>
            {selectedFilters.length > 0 && (
                <div>
                    <h4 className="text-gray-700 font-bold">Filtros seleccionados:</h4>
                    {selectedFilters.map((filter, index) => (
                        <div key={index} className="flex items-center mt-2">
                            {filter}
                            <button
                                onClick={() => handleFilterRemove(filter)}
                                className="ml-2 text-red-500 hover-text-red-700 transition duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Filters;

