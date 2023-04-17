import React from "react";
import "./Action.css";
import ReactPlayer from "react-player";
import videoPortada from "../assets/portada.mp4"


function Action() {
    return (
        <>
            <div className="action">
                <div class="videoEmpresa"><video src={videoPortada} autoPlay muted loop></video></div>
                <div className="cta">
                    <h2>Somos una familia que crece, para ofrecerles un servicio superior.</h2>
                    <button>¿Querés ser parte <br></br> de la cámara?</button>
                </div>

            </div>
        </>
    );
}

export default Action;