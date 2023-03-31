import React from "react";
import "./Action.css";

function Action() {
  return (
    <div className="action">
      <img src="/imagenes/video_principal.jpg" alt="Imagen de la empresa" />
      <div className="cta">
        <button>¿Querés ser parte de la cámara?</button>
      </div>
      <div className="consigna">
        <h2>Somos una familia que crece, para ofrecerles un servicio superior.</h2>
      </div>
    </div>
  );
}

export default Action;