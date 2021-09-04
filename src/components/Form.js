import React, { Fragment, useState } from "react";

const Form = () => {
  //Crear state de citas
    const [check, setCheck] = useState({
        pet: '',
        owner: '',
        date: '',
        time: '',
        symptoms: ''
    });

    const handleChange = e => {
        setCheck({
            ...check,
            [e.target.name] : e.target.value
        })
    }

    const [pet, owner, date, time, symptoms] = check;

  return (
    <>
      <h3 className="fw-bold text-white mt-3 text-center">Crear Cita</h3>
      <div className="card">
        <div className="card-body">
          <form>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="mt-2">Nombre Mascota</label>
                  <input className="form-control" name="pet" onChange={handleChange} value={pet}/>
                </div>
              </div>
              <div className="col-lg">
                <div className="form-group">
                  <label className="mt-2">Nombre Dueño</label>
                  <input className="form-control" name="owner" onChange={handleChange} value={owner}/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="mt-2">Fecha</label>
                  <input className="form-control" type="date" name="date" onChange={handleChange} value={date}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="mt-2">Hora</label>
                  <input className="form-control" type="time" name="time" onChange={handleChange} value={time}/>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="mt-2">Sintomas</label>
              <textarea
                className="form-control mb-2"
                name="symptoms" onChange={handleChange} value={symptoms}
              ></textarea>
            </div>
            <button className="btn mx-auto d-grid gap-2 col-6">Ingresar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
