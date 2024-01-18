import React, { useEffect, useState } from 'react';
import * as tareasService from './tareasService';
import TareaItem from './tareaItem';
import { Tarea } from './tareas';

const TodoList = () => {
  const [tareas, setTareas] = useState<Tarea[]>([]);

  const loadTareas = async () => {
    try {
      const res = await tareasService.getTareas();

      const formatedTarea = res.data
        .map((tarea) => ({
          ...tarea,
          createdAt: tarea.createdAt ? new Date(tarea.createdAt) : new Date(),
          updatedAt: tarea.updatedAt ? new Date(tarea.updatedAt) : new Date(),
        }))
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

      setTareas(formatedTarea);
    } catch (error) {
      console.error('Error cargando tareas:', error);
    }
  };

  useEffect(() => {
    loadTareas();
  }, []);

  return (
    <div className='row'>
      {tareas.map((tarea) => (
        <TareaItem key={tarea._id} tarea={tarea} loadTareas = {loadTareas} />
      ))}
    </div>
  );
};

export default TodoList;
