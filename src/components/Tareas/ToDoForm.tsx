// ToDoForm.tsx
import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { Tarea } from "./tareas";
import { toast } from "react-toastify";
import { createTareas, getTarea, updateTarea } from "./tareasService";
import { useNavigate, useParams } from "react-router-dom";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

type Params = {
  id?: string;
};

const ToDoForm = () => {
  const navigate = useNavigate();
  const params = useParams<Params>();

  const initialState: Tarea = {
    title: "",
    description: "",
  };

  const [tarea, setTarea] = useState<Tarea>(initialState);

  const handleInputChange = (e: InputChange) => {
    setTarea({ ...tarea, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!params.id) {
      // Crear tarea
      await createTareas(tarea);
      toast.success('Tarea creada exitosamente');
      setTarea(initialState);
    } else {
      // Actualizar tarea
      await updateTarea(params.id, tarea);
      toast.success('Tarea actualizada exitosamente');
      navigate("/");  // Redirige a la lista de tareas después de actualizar
    }
  };

  const fetchTarea = async (id: string) => {
    try {
      const res = await getTarea(id);
      const { title, description } = res.data;
      setTarea({ title, description });
    } catch (error) {
      console.error('Error obteniendo tarea:', error);
    }
  };

  useEffect(() => {
    if (params.id) {
      fetchTarea(params.id);
    }
  }, [params.id]);

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
                  value={tarea.title}
                  autoFocus
                />
              </div>
              <div className="form-group">
                <textarea
                  name="description"
                  rows={3}
                  placeholder="Describa su nueva tarea"
                  className="form-control"
                  onChange={handleInputChange}
                  value={tarea.description}
                ></textarea>
              </div>
              {params.id ? (
                <button className="btn btn-info" type="submit">
                  Actualiza tu tarea
                </button>
              ) : (
                <button className="btn btn-primary" type="submit">
                  Crea tu tarea
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoForm;
