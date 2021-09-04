import React, { Fragment, useState } from 'react';
import Form from './components/Form';
import Check from './components/Check';

function App() {

  const [checks, setChecks] = useState([]);

  //Crear una cita
  const createCheck = check => {
    setChecks([...checks,check])
  }

  //Borrar las citas
  const deleteCheck = id => {
    const newCheck = checks.filter(check => check.id !== id);
    setChecks(newCheck);
  }

  //Mensaje no hay citas
  const title = checks.length === 0 ? 'No hay citas' : 'Administra tus Citas';

  return (
    <>
    <div className="container">
    <h1 className="text-center mt-2 mb-2 text-white fw-bold">Veterinaria App</h1>
    <div className="row">
      <div className="col-lg">
        <Form 
        createCheck={createCheck}/>
      </div>
      <div className="col-lg mt-2">
        <h2 className="text-white fw-bold">{title}</h2>
        {checks.map(check => (
          <Check
            key={check.id}
            check={check}
            deleteCheck={deleteCheck}
          />
        ))}
      </div>

    </div>
    </div>
    </>
  );
}

export default App;
