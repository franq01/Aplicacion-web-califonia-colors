import { Cards } from "./Cards-servicios";
export const ScreenHojalateria = () => {
  return (
    <body>
      <h1 style={{ color: "violet", textAlign: "center", marginTop: "20px" }}>
        ¡Servicios de hojalateria!
      </h1>
      <div
        className="container-services"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "35px",
          marginTop: "40px",
          flexWrap: "wrap",
        }}
      >
        <Cards
          servicio={"Cambio de cristales"}
          descripcion={
            "Ofrecemos un servicio muy amplio de pintura para todo tipo de auto"
          }
          funcion={() => {}}
        />
        <Cards
          servicio={"Cambio de bujes"}
          descripcion={
            "Ofrecemos un servicio muy amplio de pintura para todo tipo de auto"
          }
          funcion={() => {}}
        />
        <Cards
          servicio={"Pernos de puertas"}
          descripcion={
            "Ofrecemos un servicio muy amplio de pintura para todo tipo de auto"
          }
          funcion={() => {}}
        />
        <Cards
          servicio={"Acorazado de chasis"}
          descripcion={
            "Ofrecemos un servicio muy amplio de pintura para todo tipo de auto"
          }
          funcion={() => {}}
        />
        <Cards
          servicio={"Reparacion de chapas"}
          descripcion={
            "Ofrecemos un servicio muy amplio de pintura para todo tipo de auto"
          }
          funcion={() => {}}
        />
        <Cards
          servicio={"Reparacion de manijas"}
          descripcion={
            "Ofrecemos un servicio muy amplio de pintura para todo tipo de auto"
          }
          funcion={() => {}}
        />
        <Cards
          servicio={"Elevadores de puertas"}
          descripcion={
            "Ofrecemos un servicio muy amplio de pintura para todo tipo de auto"
          }
          funcion={() => {}}
        />
        <Cards
          servicio={"Cambio de secciones dañadas"}
          descripcion={
            "Ofrecemos un servicio muy amplio de pintura para todo tipo de auto"
          }
          funcion={() => {}}
        />
      </div>
    </body>
  );
};
