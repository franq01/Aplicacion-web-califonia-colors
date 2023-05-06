import { useState } from "react";
import "./admin.css";
import "bootstrap/dist/css/bootstrap.min.css";
export function Admin() {
  let [usuario, setUsuario] = useState("");
  let [password, setPassword] = useState("");
  const inputs = document.querySelectorAll("#inputs");
  const alerta = document.getElementById("alerta");
  return (
    <body>
      <div className="container-formulario">
        <div className="body-formulario">
          <h4>Inicia sesion como administrador</h4>
          <label>Nombre de usuario:</label>
          <input
            type="text"
            id="inputs"
            className="inputs"
            placeholder="Usuario"
            onChange={(e) => {
              setUsuario(e.target.value);
            }}
          ></input>
          <label>Ingresa tu contraseña:</label>
          <input
            type="password"
            id="inputs"
            className="inputs"
            placeholder="Contraseña"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <button
            className="insertar"
            onClick={() => {
              if (usuario && password) {
                inputs.forEach((i) => {
                  i.value = "";
                });
                alerta.innerHTML = `
                      <p>Se agrego correctamente el producto</p>
                      `;
                alerta.style.color = "green";
              } else if (usuario == "" || password == "") {
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
