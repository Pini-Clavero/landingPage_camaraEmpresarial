import React from "react";
import "./Action.css";
import { Icon, Button } from "@mui/material";

import videoPortada from "../assets/portada.mp4"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Action() {
    return (
        <>
            <div className="action">
                <div className="videoEmpresa"><video src={videoPortada} autoPlay muted loop></video></div>
                <div className="cta">
                    <h2>¿Queres ser parte de una comunidad comprometida <br></br> que apoya y sostiene al comercio local? </h2>
                    <a target="_blanck" href="https://docs.google.com/forms/d/e/1FAIpQLSe-_inJG92ILIe4vSNrIMrNi6p7FFbwN-0ULk2HZDVXdNjxaw/viewform?usp=sf_link" >
                        <Button >
                            ¡Sumate a la Cámara!
                        </Button>
                    </a>

                </div>

                <a id="app-whatsapp" target="_blanck" href="https://api.whatsapp.com/send?phone=5492281319192&amp;text=Hola!&nbsp;Quiero&nbsp;asociarme&nbsp;a&nbsp;la&nbsp;cámara.&nbsp;Como&nbsp;puedo&nbsp;hacerlo?">
                    <Icon sx={{ color: "#ffffff", zIndex: "100" }}>
                        <WhatsAppIcon className="whatsAppIcon" sx={{
                            bgcolor: "#25d366", borderRadius: "50%", p: "12px",
                            right: "25px", zIndex: "12", fontSize: 60
                        }} />
                    </Icon>
                </a>
            </div>


        </>
    );
}

export default Action;