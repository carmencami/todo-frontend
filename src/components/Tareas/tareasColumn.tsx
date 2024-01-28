// import React, { useEffect, useState } from "react";
// import * as tareasService from "./tareasService";
// import { Tarea } from "./tareas";

// const TareasColumnas = () => {
//   const [porHacerTareas, setPorHacerTareas] = useState<Tarea[]>([]);
//   const [enProcesoTareas, setEnProcesoTareas] = useState<Tarea[]>([]);
//   const [finalizadaTareas, setFinalizadaTareas] = useState<Tarea[]>([]);

//   const loadTareasPorHacer = async () => {
//     try {
//       const res = await tareasService.getTareasPorHacer();
//       setPorHacerTareas(res.data);
//     } catch (error) {
//       console.error("Error cargando tareas por hacer:", error);
//     }
//   };

//   const loadTareasEnProceso = async () => {
//     // Lógica para cargar tareas en proceso.
//   };

//   const loadTareasFinalizadas = async () => {
//     // Lógica para cargar tareas finalizadas.
//   };

//   useEffect(() => {
//     loadTareasPorHacer();
//     loadTareasEnProceso();
//     loadTareasFinalizadas();
//   }, []);

//   return (
//     <div className="row">
//       <div className="col-md-4">
//         <div>
//           <h2>Por Hacer</h2>
//           {porHacerTareas.map((tarea) => (
//             <TareaColumnaItem key={tarea._id} tarea={tarea} />
//           ))}
//         </div>
//       </div>

//       <div className="col-md-4">
//         <div>
//           <h2>En Proceso</h2>
//           {enProcesoTareas.map((tarea) => (
//             <TareaColumnaItem key={tarea._id} tarea={tarea} />
//           ))}
//         </div>
//       </div>

//       <div className="col-md-4">
//         <div>
//           <h2>Finalizada</h2>
//           {finalizadaTareas.map((tarea) => (
//             <TareaColumnaItem key={tarea._id} tarea={tarea} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TareasColumnas;


// tareasColumn.tsx
import React from 'react';  // Importando React como ejemplo

// Resto de tu código...

export {};  // Declaración de exportación vacía
