import React, { Fragment } from "react";

const Form = () => {
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
                  <input className="form-control" />
                </div>
              </div>
              <div className="col-lg">
                <div className="form-group">
                  <label className="mt-2">Nombre Dueño</label>
                  <input className="form-control" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="mt-2">Fecha</label>
                  <input className="form-control" type="date" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="mt-2">Hora</label>
                  <input className="form-control" type="time" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="mt-2">Nombre Dueño</label>
              <textarea className="form-control mb-2"></textarea>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
