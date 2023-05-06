import "./Promociones.css";
export const Promociones = ({ imagen, promocion, descripcion }) => {
  return (
    <div className="container-promociones" id="promociones">
      <img id="imagen" src={imagen} alt="" />
      <div className="body-promociones">
        <h2 id="servicio">
          {promociones.length <= 0 ? "no hay promociones aun" : promocion}
        </h2>
        <p id="descripcion">{descripcion}</p>
      </div>
    </div>
  );
};

const promociones = [];
