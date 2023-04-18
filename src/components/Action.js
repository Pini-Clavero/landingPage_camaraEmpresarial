import React from "react";
import "./Action.css";
import { Icon} from "@mui/material";

import videoPortada from "../assets/portada.mp4"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Action() {
    return (
        <>
            <div className="action">
                <div class="videoEmpresa"><video src={videoPortada} autoPlay muted loop></video></div>
                <div className="cta">
                    <h2>Somos una familia que crece, para ofrecerles un servicio superior</h2>
                    <a href="./solicituddesocio.pdf" download><button>
                        ¿Querés ser parte <br></br> de la cámara?
                    </button></a>

                </div>

            </div>


            <a id="app-whatsapp" target="_blanck" href="https://api.whatsapp.com/send?phone=5491127854696&amp;text=Hola!&nbsp;me&nbsp;pueden&nbsp;ayudar&nbsp;a&nbsp;afiliarme&nbsp;en&nbsp;la&nbsp;Cámara&nbsp;Empresarial&nbsp;de&nbsp;Benito&nbsp;Juarez?">
                    <Icon sx={{ color: "#ffffff", zIndex: "100" }}>
                        <WhatsAppIcon sx={{ bgcolor: "#25d366", borderRadius: "50%", p: "12px", position: "fixed", right: "35px", bottom: "40px", fontSize: 60 }} />
                    </Icon>
            </a>
        </>
    );
}

export default Action;