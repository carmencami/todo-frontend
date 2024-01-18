import axios from 'axios';
import { Tarea } from './tareas';

export const getTareas = async () => {
    return await axios.get<Tarea[]>('https://localhost:3000/tareas');
}


export const createTareas = async (tarea:Tarea) => {
    return await axios.post<Tarea[]>('https://localhost:3000/tareas');
}