import React from "react";
import "./Action.css";
import ReactPlayer from "react-player";


function Action() {
    return (
        <>
        <div className="action">
            <ReactPlayer className="videoEmpresa" muted={true} url="/imagenes/engranajes.mp4" playing loop height="100%" width="100%"/>
            <div className="cta">
                <h2>Somos una familia que crece, para ofrecerles un servicio superior.</h2>
                <button>¿Querés ser parte de la cámara?</button>
            </div>

        </div>
        </>
    );
}

export default Action;