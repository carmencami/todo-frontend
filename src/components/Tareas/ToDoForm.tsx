/// <reference types="react" />

import React, { ChangeEvent, FormEvent, useState } from "react";
import { Tarea } from "./tareas";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const ToDoForm = () => {
  const [tarea, setTarea] = useState<Tarea>({ title: "", description: "" });

  const handleInputChange = (e: InputChange) => {
    setTarea({ ...tarea, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(tarea);
  };
  return (
    <div className="row">
      <div className="col-md-4 offset-md-4 ">
        <div className="card">
          <div className="card-body">
            <h3>Nueva tarea</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Escriba su nueva tarea"
                  className="form-control"
                  onChange={handleInputChange}
                  autoFocus
                />
              </div>
              <div className="form-group">
                <textarea
                  name="Descripción"
                  rows={3}
                  placeholder="Describa su nueva tarea"
                  className="form-control"
                  onChange={handleInputChange}
                  autoFocus
                ></textarea>
              </div>
              <button className="btn btn-primary">Crea tu tarea</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoForm;
