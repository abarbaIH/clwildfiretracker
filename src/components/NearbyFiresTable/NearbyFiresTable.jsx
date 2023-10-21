import React from "react";

const NearbyFiresTable = ({ nearbyFires }) => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4 text-grey-800 my-2">
                Incendios cerca de mí (radio 10km)
            </h1>
            <div className="w-full overflow-x-auto">
                <table className="w-max">
                    <thead className="bg-green-800 text-white">
                        <tr>
                            <th className="text-left text-sm p-2">FECHA DEL PARTE</th>
                            <th className="text-left text-sm p-2">HORA DEL PARTE</th>
                            <th className="text-left text-sm p-2">PROVINCIA</th>
                            <th className="text-left text-sm p-2">TÉRMINO MUNICIPAL</th>
                            <th className="text-left text-sm p-2">SITUACIÓN ACTUAL</th>
                            <th className="text-left text-sm p-2">CAUSA PROBABLE</th>
                            <th className="text-left text-sm p-2">NIVEL</th>
                            <th className="text-left text-sm p-2">FECHA INICIO</th>
                            <th className="text-left text-sm p-2">HORA INICIO</th>
                            <th className="text-left text-sm p-2">FECHA EXTINCIÓN</th>
                            <th className="text-left text-sm p-2">HORA EXTINCIÓN</th>
                            <th className="text-left text-sm p-2">MEDIOS EXTINCIÓN</th>
                            <th className="text-left text-sm p-2">TIPO Y HAS DE SUPERFICIE AFECTADA</th>
                            <th className="text-left text-sm p-2">NIVEL MÁXIMO</th>
                            <th className="text-left text-sm p-2">CÓDIGO INE</th>
                            <th className="text-left text-sm p-2">POSICIÓN</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nearbyFires.map((fire, index) => (
                            <tr key={index} className={`${index % 2 === 0 ? "bg-green-50" : "bg-white"}`}>
                                <td className="text-left text-sm p-1">{fire.fecha_del_parte}</td>
                                <td className="text-left text-sm p-1">{fire.hora_del_parte}</td>
                                <td className="text-left text-sm p-1">{fire.provincia.join(" - ")}</td>
                                <td className="text-left text-sm p-1">{fire.termino_municipal}</td>
                                <td className="text-left text-sm p-1">{fire.situacion_actual}</td>
                                <td className="text-left text-sm p-1">{fire.causa_probable}</td>
                                <td className="text-left text-sm p-1">{fire.nivel}</td>
                                <td className="text-left text-sm p-1">{fire.fecha_inicio}</td>
                                <td className="text-left text-sm p-1">{fire.hora_ini}</td>
                                <td className="text-left text-sm p-1">{fire.fecha_extinguido}</td>
                                <td className="text-left text-sm p-1">{fire.hora_extinguido}</td>
                                <td className="text-left text-sm p-1">{fire.medios_de_extincion}</td>
                                <td className="text-left text-sm p-1">{fire.tipo_y_has_de_superficie_afectada}</td>
                                <td className="text-left text-sm p-1">{fire.nivel_maximo_alcanzado}</td>
                                <td className="text-left text-sm p-1">{fire.codigo_municipio_ine}</td>
                                <td className="text-left text-sm p-1">
                                    {fire.posicion ? (
                                        `Lat: ${fire.posicion.lat}, Lon: ${fire.posicion.lon}`
                                    ) : (
                                        'No disponible'
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default NearbyFiresTable;