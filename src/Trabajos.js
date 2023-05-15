import { useState } from "react";
import "./trabajos.css";
export const Trabajos = ({ titulo }) => {
  const [trabajo, setTrabajo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  return (
    <div className="container-trabajos">
      <h1>{titulo}</h1>
      <div className="agregar-trabajo">
        <label htmlFor="trabajo">Trabajo:</label>
        <input
          type="text"
          id="trabajo"
          onChange={(e) => setTrabajo(e.target.value)}
        />
        <label htmlFor="descripcion">Descripcion:</label>
        <textarea
          id="descripcion"
          cols="30"
          rows="10"
          onChange={(e) => setDescripcion(e.target.value)}
        ></textarea>
        <button>Insertar</button>
      </div>
    </div>
  );
};
