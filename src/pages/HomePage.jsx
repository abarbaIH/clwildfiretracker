import React, { useEffect, useState } from "react";
import wildfireService from "../services/wildfire.services";
import Loader from "../components/Loader/Loader";
import Modal from 'react-modal';
import ModalForm from "../components/Modal/ModalForm";
import Filters from "../components/Filters/Filters";
import WildfireTable from "../components/WildfireTable/WildfireTable";
import Pagination from "../components/Pagination/Pagination";
import NearbyFiresButton from "../components/NearbyFiresButton/NearbyFiresButton";
import ClearNearbyFiresButton from "../components/ClearNearbyFiresButton/ClearNearbyFiresButton";
import NearbyFiresTable from "../components/NearbyFiresTable/NearbyFiresTable";
import Header from "../components/Header/Header";


const HomePage = () => {

    const [wildfires, setWildfires] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 20;
    const [filterBySituation, setFilterBySituation] = useState([]);
    const [filterByCausaProbable, setFilterByCausaProbable] = useState([]);
    const [filterByProvincia, setFilterByProvincia] = useState([]);
    const [filterByNivel, setFilterByNivel] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [showNearbyFiresModal, setShowNearbyFiresModal] = useState(false);
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [nearbyFires, setNearbyFires] = useState([]);
    const [showNearbyFiresButton, setShowNearbyFiresButton] = useState(true);
    const [showClearNearbyFiresButton, setShowClearNearbyFiresButton] = useState(false);

    useEffect(() => {
        Modal.setAppElement('body');
        wildfireService
            .getWildfireData()
            .then(({ data }) => setWildfires(data))
            .catch(err => console.log(err));
    }, []);
    const applyFilters = (wildfire) => {
        if (
            (filterBySituation.length === 0 || filterBySituation.includes(wildfire.situacion_actual)) &&
            (filterByCausaProbable.length === 0 || filterByCausaProbable.includes(wildfire.causa_probable)) &&
            (filterByNivel.length === 0 || filterByNivel.includes(wildfire.nivel)) &&
            (filterByProvincia.length === 0 || wildfire.provincia.some(prov => filterByProvincia.includes(prov))
            )) {
            return true;
        }
        return false;
    };

    // Filtrar los datos completos antes de paginar
    const filteredWildfires = wildfires.filter(applyFilters);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = filteredWildfires.slice(indexOfFirstRecord, indexOfLastRecord);

    const lastPage = Math.ceil(filteredWildfires.length / recordsPerPage);

    const handleNextPage = () => {
        if (currentPage < lastPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePageChange = (event) => {
        const inputPage = parseInt(event.target.value);
        if (!isNaN(inputPage) && inputPage >= 1 && inputPage <= lastPage) {
            setCurrentPage(inputPage);
        }
    };

    const handleFilterSelect = (event, filterState, setFilterState) => {
        const selectedFilter = event.target.value;
        if (!filterState.includes(selectedFilter)) {
            setFilterState([...filterState, selectedFilter]);
            setSelectedFilters([...selectedFilters, selectedFilter]);
        }
    };

    const handleFilterRemove = (filter, filterState, setFilterState) => {
        const updatedFilters = filterState.filter(f => f !== filter);
        setFilterState(updatedFilters);
        setSelectedFilters(selectedFilters.filter(f => f !== filter));
    };

    const openNearbyFiresModal = () => {
        setShowNearbyFiresModal(true);

        // Comprueba si hay incendios cercanos y oculta el botón si es el caso
        if (nearbyFires.length > 0) {
            setShowNearbyFiresButton(false);
        }
    };

    const closeNearbyFiresModal = () => {
        setShowNearbyFiresModal(false);
    };

    const handleLatitudeChange = (event) => {
        setLatitude(event.target.value);
    };

    const handleLongitudeChange = (event) => {
        setLongitude(event.target.value);
    };

    const handleFindNearbyFires = (e) => {
        e.preventDefault();

        // Coordenadas del usuario
        const userLatitude = parseFloat(latitude);
        const userLongitude = parseFloat(longitude);

        // Radio de la Tierra en kilómetros
        const earthRadius = 6371;

        // Filtro para encontrar incendios cercanos (menos de 10 km)
        const nearbyFires = wildfires.filter((fire) => {
            if (
                fire.posicion &&
                typeof fire.posicion === 'object' &&
                'lat' in fire.posicion &&
                'lon' in fire.posicion
            ) {
                const fireLatitude = parseFloat(fire.posicion.lat);
                const fireLongitude = parseFloat(fire.posicion.lon);

                if (!isNaN(fireLatitude) && !isNaN(fireLongitude)) {
                    const dLat = (fireLatitude - userLatitude) * (Math.PI / 180);
                    const dLon = (fireLongitude - userLongitude) * (Math.PI / 180);

                    const a =
                        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                        Math.cos(userLatitude * (Math.PI / 180)) *
                        Math.cos(fireLatitude * (Math.PI / 180)) *
                        Math.sin(dLon / 2) *
                        Math.sin(dLon / 2);
                    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                    const distance = earthRadius * c;

                    return distance <= 10;
                }
            }
            return false;
        });

        setNearbyFires(nearbyFires);

        if (nearbyFires.length > 0) {
            setShowClearNearbyFiresButton(true); // Muestra el botón solo cuando hay incendios cercanos
        }

        // Cierra la modal después de buscar incendios cercanos
        closeNearbyFiresModal();

        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'auto', // O 'auto' para un desplazamiento instantáneo
        });
    };

    const handleClearNearbyFires = () => {
        setNearbyFires([]); // Borra el contenido de incendios cercanos
        setShowClearNearbyFiresButton(false); // Oculta el botón para borrar incendios cercanos
    };


    return (
        <>
            <Header />
            <div className="flex w-full p-4">
                <div className="w-1/5 p-4 pr-6 border-r border-gray-300 bg-gray-100">

                    {
                        nearbyFires.length === 0 &&

                        <Filters
                            filterBySituation={filterBySituation}
                            setFilterBySituation={setFilterBySituation}
                            filterByCausaProbable={filterByCausaProbable}
                            setFilterByCausaProbable={setFilterByCausaProbable}
                            filterByProvincia={filterByProvincia}
                            setFilterByProvincia={setFilterByProvincia}
                            filterByNivel={filterByNivel}
                            setFilterByNivel={setFilterByNivel}
                            selectedFilters={selectedFilters}
                            setSelectedFilters={setSelectedFilters}
                            handleFilterRemove={handleFilterRemove}
                        />
                    }


                    {showClearNearbyFiresButton ? (
                        <ClearNearbyFiresButton onClick={handleClearNearbyFires} />
                    ) : (
                        <NearbyFiresButton onClick={openNearbyFiresModal} />
                    )}

                    {showNearbyFiresModal && (
                        <Modal
                            isOpen={showNearbyFiresModal}
                            onRequestClose={closeNearbyFiresModal}
                            contentLabel="Ingresar Coordenadas"
                            className="bg-white rounded-lg shadow-md p-4 max-w-md mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        >
                            <button
                                onClick={closeNearbyFiresModal}
                                className="absolute top-2 right-2 text-gray-600 hover:text-red-600 cursor-pointer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
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

                            <ModalForm
                                latitude={latitude}
                                longitude={longitude}
                                handleLatitudeChange={handleLatitudeChange}
                                handleLongitudeChange={handleLongitudeChange}
                                handleFindNearbyFires={handleFindNearbyFires}
                            />
                        </Modal>
                    )}
                </div>
                <div className="w-4/5 pl-6">
                    {nearbyFires.length === 0 ? (
                        <>
                            {wildfires.length === 0 ? (
                                <Loader />
                            ) : (
                                <>
                                    <WildfireTable wildfires={currentRecords} />
                                    <Pagination
                                        currentPage={currentPage}
                                        lastPage={lastPage}
                                        handlePrevPage={handlePrevPage}
                                        handleNextPage={handleNextPage}
                                        handlePageChange={handlePageChange}
                                    />
                                </>
                            )}
                        </>
                    ) : (
                        <NearbyFiresTable nearbyFires={nearbyFires} />
                    )}
                </div>
            </div>
        </>
    );

};

export default HomePage;