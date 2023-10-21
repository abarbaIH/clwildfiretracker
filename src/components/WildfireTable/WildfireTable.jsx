import React from "react";

const WildfireTable = ({ wildfires }) => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4 text-grey-800 my-2">
                Informe de Incendios Forestales
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
                        {wildfires.map((wildfire, index) => (
                            <tr key={index} className={`${index % 2 === 0 ? "bg-green-50" : "bg-white"}`}>
                                <td className="text-left text-sm p-1">{wildfire.fecha_del_parte}</td>
                                <td className="text-left text-sm p-1">{wildfire.hora_del_parte}</td>
                                <td className="text-left text-sm p-1">{wildfire.provincia.join(" - ")}</td>
                                <td className="text-left text-sm p-1">{wildfire.termino_municipal}</td>
                                <td className="text-left text-sm p-1">{wildfire.situacion_actual}</td>
                                <td className="text-left text-sm p-1">{wildfire.causa_probable}</td>
                                <td className="text-left text-sm p-1">{wildfire.nivel}</td>
                                <td className="text-left text-sm p-1">{wildfire.fecha_inicio}</td>
                                <td className="text-left text-sm p-1">{wildfire.hora_ini}</td>
                                <td className="text-left text-sm p-1">{wildfire.fecha_extinguido}</td>
                                <td className="text-left text-sm p-1">{wildfire.hora_extinguido}</td>
                                <td className="text-left text-sm p-1">{wildfire.medios_de_extincion}</td>
                                <td className="text-left text-sm p-1">{wildfire.tipo_y_has_de_superficie_afectada}</td>
                                <td className="text-left text-sm p-1">{wildfire.nivel_maximo_alcanzado}</td>
                                <td className="text-left text-sm p-1">{wildfire.codigo_municipio_ine}</td>
                                <td className="text-left text-sm p-1">
                                    {wildfire.posicion ? (
                                        `Lat: ${wildfire.posicion.lat}, Lon: ${wildfire.posicion.lon}`
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

export default WildfireTable;