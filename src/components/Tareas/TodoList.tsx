/// <reference types="react" />

import React, { useEffect, useState } from 'react';
import * as tareasService from './tareasService';
import TareaItem from './tareaItem';
import { Tarea } from './tareas';

const TodoList: React.FC = () => {
  const [tareas, setTareas] = useState<Tarea[]>([]);

  const loadTareas = async () => {
    try {
      const res = await tareasService.getTareas();
      setTareas(res.data);
    } catch (error) {
      console.error('Error al cargar las tareas:', error);
      // Puedes mostrar un mensaje de error o realizar otras acciones.
    }
  };

  useEffect(() => {
    loadTareas();
  }, []);

  return (
    <div>
      {tareas.map((tarea) => (
      <TareaItem tarea={tarea} />
      ))}
    </div>
  );
};

export default TodoList;
