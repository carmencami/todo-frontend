import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';

import TodoList from "./components/Tareas/TodoList";
import ToDoForm from "./components/Tareas/ToDoForm";
import Navbar from "./components/Navbar/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
// También puedes importar bootstrap.min.js si lo necesitas

// import TareaItem from './components/Tareas/tareaItem';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/new-todo" element={<ToDoForm />} />
          <Route path="/tareas" element={<TodoList />} />
          <Route path="/update/:id" element={<ToDoForm />} />

        </Routes>

        <ToastContainer />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// Desregistra el service worker si está registrado
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.ready.then((registration) => {
    registration.unregister();
  });
}
