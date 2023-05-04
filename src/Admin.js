import { useState } from "react";
import "./admin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { router } from "./index";
export function Admin() {
  let [producto, setProdcuto] = useState("");
  let [precio, setPrecio] = useState("");
  const inputs = document.querySelectorAll("#inputs");
  const alerta = document.getElementById("alerta");
  return (
    <body>
      <div className="container-formulario">
        <div className="body-formulario">
          <h4>Inicia sesion como administrador</h4>
          <label>Correo electronico:</label>
          <input
            type="text"
            id="inputs"
            className="inputs"
            placeholder="Gmail"
            onChange={(e) => {
              setProdcuto(e.target.value);
            }}
          ></input>
          <label>Ingresa tu contraseña:</label>
          <input
            type="password"
            id="inputs"
            className="inputs"
            placeholder="Contraseña"
            onChange={(e) => {
              setPrecio(e.target.value);
            }}
          ></input>
          <button
            className="btn btn-warning insertar"
            onClick={() => {
              if (producto && precio) {
                inputs.forEach((i) => {
                  i.value = "";
                });
                alerta.innerHTML = `
                      <p>Se agrego correctamente el producto</p>
                      `;
                alerta.style.color = "green";
              } else if (producto == "" || precio == "") {
                alerta.innerHTML = `
                      <p>Verifica que los campos esten llenos</p>
                      `;

                alerta.style.color = "red";
              }
            }}
          >
            Ingresar
          </button>
          <div id="alerta"></div>
        </div>
      </div>
    </body>
  );
}
