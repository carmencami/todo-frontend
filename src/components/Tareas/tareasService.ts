// tareasService.ts
import axios from 'axios';
import { Tarea } from './tareas';

const API = 'http://localhost:5000';

export const getTareas = async () => {
return await axios.get<Tarea[]>(`${API}/tareas`);
}

export const createTareas = async (tarea: Tarea) => {
return await axios.post<Tarea>(`${API}/tareas`, tarea);
}

export const getTarea = async (id: string) => {
    return await axios.get<Tarea>(`${API}/tareas/${id}`);
};

export const updateTarea = async (id: string, tarea:Tarea) => {
    return await axios.put<Tarea>(`${API}/tareas/${id}`, tarea);
};

export const deleteTarea = async (id: string) => {
    return await axios.delete<Tarea>(`${API}/tareas/${id}`);
};

