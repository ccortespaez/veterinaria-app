import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Check from './components/Check';

function App() {

  // Citas en local storage
  let checksInitials = JSON.parse(localStorage.getItem('checks'));
  if (!checksInitials) {
    checksInitials = [];
  }

  // Arreglo de citas
  const [checks, setChecks] = useState([]);

  // Use Effect para realizar ciertas operaciones cuando el state cambia
  useEffect(() => {
    let checksInitials = JSON.parse(localStorage.getItem('checks'));
    if (checksInitials) {
      localStorage.setItem('citas', JSON.stringify(checks))
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [checks]);

  //Crear una cita
  const createCheck = check => {
    setChecks([...checks, check])
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
          <div className="col-lg-6">
            <Form
              createCheck={createCheck} />
          </div>
          <div className="col-lg mt-2">
            <h2 className="text-white fw-bold">{title}</h2>
            <div className="row scroll">
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
        <footer className="fixed-bottom text-center">Creado por <a href="https://github.com/ccortespaez/veterinaria-app">Cristobal Cortés</a> | <a href="https://www.linkedin.com/in/ccortespaez/">Linkedin</a></footer>
      </div>
    </>
  );
}

export default App;
