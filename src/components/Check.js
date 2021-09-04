import React from 'react';

const Check = ({check, deleteCheck}) => (
    <div className="card p-4">
        <p className="text-white">Mascota:<span>{check.pet}</span> </p>
        <p className="text-white">Dueño:<span>{check.owner}</span> </p>
        <p className="text-white">Fecha:<span>{check.date}</span> </p>
        <p className="text-white">Hora:<span>{check.time}</span> </p>
        <p className="text-white">Sintomas:<span>{check.symptoms}</span> </p>
        <button className="btn btn-danger" onClick={() => deleteCheck(check.id)}>Eliminar</button>
    </div>
)

export default Check;