import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Vision } from "./Vision";
import { Mision, Valores } from "./Mision";
import { Promociones } from "./Promociones";
import { Header } from "./Header";
import { useFirebaseApp } from "reactfire"; /*funciona para acceder a la api completa de firebase*/
import { CardsServicios } from "./Cards-servicios";
import hojalateria from "./assets/hojalateria.jpg";
import tapiceria from "./assets/tapiceria.jpg";
import electrico from "./assets/electrico.jpg";
import pintura from "./assets/pintura.jpg";
import mecanica from "./assets/mecanica.jpg";

/*rfc funciona como atajo para crear un nuevo componente*/

export function App() {
  const firebase = useFirebaseApp();
  console.log(firebase);
  return (
    <body>
      <nav
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "space-around",
          marginTop: "35px",
        }}
      >
        <a href="#">Nosotros</a>
        <a href="#promociones">Promociones</a>
        <a href="#catalogo">Catalogo de servicios</a>
        <a href="">Comentarios</a>
        <a href="">Contacto</a>
        <div
          className="container-admin"
          style={{
            backgroundColor: "violet",
            borderRadius: "10px",
            width: "80px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link style={{ color: "white" }} to={"/admin"}>
            Admin
          </Link>
        </div>
      </nav>
      <Header
        titulo="¿Quienes somos?"
        parrafo="Somos una empresa tlaxcalteca, cuyo objetivo y compromiso es otorgar servicios de calidad, ya que nuestra preparacion, conocimiento y experiencia nos avalan para atender las necesidades del cliente. Iniciamos nuestras actividades en el año 1994, ofreciendo servicios competitivos dentro del mercado, generando fuentes de empleo para coadyuvar a la economia del estado."
      />

      <Vision
        imagen={<ion-icon name="eye-outline"></ion-icon>}
        vision="Nuestra vision"
        texto="Posicionarnos como empresa lider en el ramo para seguir atendiendo las necesidades del cliente con la calidad, capacidad y cumplimiento oportuno que siempre nos a caracterizado, enfrentnando retos a traves de metodos innovadores, reconocida por la satisfaccion del cliente."
      />
      <Mision
        imagen={<ion-icon name="rocket-outline"></ion-icon>}
        mision="Nuestra mision"
        texto="Ofrecer servicios de muy alta calidad y darle la confianza a todos nuestros usuarios de que conservaremos sus autos en un muy buen estado de operacion eficiente y seguro, superando todas las expectativas de nuestros consumidores en el menor tiempo posibles. ¡PARA NUESTRA EMPRESA USTED Y SU VEHICULO SON PRIORIDAD!. "
      />
      <Valores
        imagen={<ion-icon name="happy-outline"></ion-icon>}
        valores="Nuestros valores"
        texto="Somos una empresa que cumple en tiempo y forma con las necesidades de cada uno de nuestros clientes, sabemos trabajar de manera muy honesta garantizando la buena calidad del trabajo al igual que todas las herramientas utilizadas. Nos dirigimos a nuestros clientes de manera equitativa y respetuosa. ¡Somos leales ante nuestros socios comerciales, empleados y accionistas!"
      />
      <h1 style={{ color: "violet", textAlign: "center", marginTop: "20px" }}>
        Promociones
      </h1>
      <Promociones />
      <h1 style={{ color: "violet", textAlign: "center", marginTop: "20px" }}>
        Servicios que ofrecemos
      </h1>
      <div
        className="container-info"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px",
          marginTop: "45px",
        }}
      >
        <CardsServicios
          icono={hojalateria}
          referencia="#"
          servicio="Hojalateria"
          descripcion="Servicio de hojalateria"
          refe="/hojalateria"
        />
        <CardsServicios
          icono={tapiceria}
          referencia="#"
          servicio="Tapiceria"
          descripcion="Servicio de tapiceria"
        />
        <CardsServicios
          icono={electrico}
          referencia="#"
          servicio="Electrico"
          descripcion="Servicio electrico"
        />
        <CardsServicios
          icono={pintura}
          referencia="#"
          servicio="Pintura"
          descripcion="Servicio de pintura"
        />
        <CardsServicios
          icono={mecanica}
          referencia="#"
          servicio="Mecanica"
          descripcion="Servicio de mecanica"
        />
      </div>
    </body>
  );
}

export default App;
