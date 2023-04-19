import React from "react";
import "./Action.css";
import { Icon, Button } from "@mui/material";

import videoPortada from "../assets/portada.mp4"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Action() {
    return (
        <>
            <div className="action">
                <div class="videoEmpresa"><video src={videoPortada} autoPlay muted loop></video></div>
                <div className="cta">
                    <h2>¿Queres ser parte de una comunidad comprometida <br></br> que apoya y sostiene al comercio local? </h2>
                    <a href="./solicituddesocio.pdf" download>
                        <Button >
                            ¡Sumate a la Cámara!
                        </Button>
                    </a>

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