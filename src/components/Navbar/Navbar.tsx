import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {	
    return(
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
        <div className="container-fluid">
    <Link className="navbar-brand" to="/">Tareas importantes</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
        <li className="nav-item">
        <Link className="nav-link" to="/tareas">Crear nueva tarea</Link>
        </li>
    </ul>
    </div>
</div>
        </div>

    </nav>
    )
    }

    export default Navbar