import React, { Fragment } from 'react';
import Form from './components/Form';

function App() {
  return (
    <>
    <div className="container">
    <h1 className="text-center mt-2 mb-2 text-white fw-bold">Veterinaria App</h1>
    <div className="row">
      <div className="col-lg-5">
        <Form/>
      </div>
      <div className="col-lg">
        Mensaje de prueba
      </div>

    </div>
    </div>
    </>
  );
}

export default App;
