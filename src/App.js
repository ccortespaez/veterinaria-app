import React, { Fragment, useState } from 'react';
import Form from './components/Form';
import Check from './components/Check';

function App() {

  const [checks, setChecks] = useState([]);

  const createCheck = check => {
    setChecks([...checks,check])
  }

  return (
    <>
    <div className="container">
    <h1 className="text-center mt-2 mb-2 text-white fw-bold">Veterinaria App</h1>
    <div className="row">
      <div className="col-lg-5">
        <Form 
        createCheck={createCheck}/>
      </div>
      <div className="col-lg mt-2">
        <h2 className="text-white fw-bold">Administra tus citas</h2>
        {checks.map(check => (
          <Check
            key={check.id}
            check={check}
          />
        ))}
      </div>

    </div>
    </div>
    </>
  );
}

export default App;
