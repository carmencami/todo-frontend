import React from "react";
import { Tarea } from "./tareas";
import "./TareasItem.css";
import * as tareasService from './tareasService';

import { useNavigate } from "react-router-dom";

interface TareaItemProps {
  tarea: Tarea;
  loadTareas: () => void;
}

const TareaItem: React.FC<TareaItemProps> = ({ tarea, loadTareas }) => {
  const navigate = useNavigate();

  const handleDelete = async (id: string) => {
    await tareasService.deleteTarea(id)
    loadTareas();
  }
  return (
    <div className="col-md-4">
      <div className="card card-body tareas-card" style={{ cursor: "pointer" }}>
        <div className="d-flex justify-content-between">
          <h1 onClick={() => navigate(`/update/${tarea._id}`)}>
            Tarea {tarea.title}
          </h1>
          <span className="text-danger" onClick={()=> tarea._id && handleDelete(tarea._id)}>
            X
          </span>
        </div>
        <p>Descripción: {tarea.description}</p>
      </div>
    </div>
  );
};

export default TareaItem;
