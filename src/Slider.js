import manijas from "./assets/manijas.jpg";
import elevadores from "./assets/elevadores.jpg";
import secciones from "./assets/seccionesdañadas.jpg";
export const Slider = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={manijas} class="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={elevadores} class="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={secciones} class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
