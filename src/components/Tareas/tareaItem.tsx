// TareaItem.tsx
/// <reference types="react" />

import React from 'react';
import { Tarea } from './tareas'; // Ajusta la ruta según tu estructura de archivos


interface TareaItemProps {
  tarea: Tarea;
}

const TareaItem: React.FC<TareaItemProps> = ({ tarea }) => {
  return (
    <div>
      <p>Titulo: {tarea.title}</p>
      <p>Descripción: {tarea.description}</p>
      {/* Otros elementos del componente TareaItem */}
    </div>
  );
};

export default TareaItem;
