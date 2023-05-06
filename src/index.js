import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Admin } from "./Admin";
import { FirebaseAppProvider } from "reactfire"; /*se importa el provedor de firebase para poder hacer uso de los servicios que nos ofrece*/
import firebaseConfig from "./firebase-config"; /*Se importa la configuracion de firebase que esta en el archivo firebase-config.js*/
import { CardsServicios } from "./Cards-servicios";
import { ScreenHojalateria } from "./ScreenHojalateria";

/*Creando rutas con react-router-dom*/
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/hojalateria",
    element: <ScreenHojalateria />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </FirebaseAppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
