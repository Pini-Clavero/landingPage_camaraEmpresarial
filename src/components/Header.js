import React from "react";
import "./Header.css";
import { Avatar, IconButton, Box } from "@mui/material";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';



function Header() {
    return (
        <header>
            <div className="logo">
                <img src="/logos/logo_camara_header.png" alt="Logo de la empresa" />
            </div>
            <div className="consigna">
                <h1>1950 -2023<br></br>70 años al servicio de la producción</h1>
            </div>
            <Box className="redes-sociales">
                <IconButton
                    href="https://www.youtube.com/watch?v=S0xjLM79npc&ab_channel=BenitoNet"
                    target="_blank"
                    samesite="None" secure="true"

                >
                    <Avatar
                        sx={{ bgcolor: "#00316e" }}
                        variant="solid"
                    >
                        <YouTubeIcon />
                    </Avatar>
                </IconButton>
                <IconButton
                    href="https://www.instagram.com/"
                    target="_blank"
                    samesite="None" secure="true"
                    sx={{ font: "10px" }}
                >
                    <Avatar
                        sx={{ bgcolor: "#00316e", }}
                        variant="solid"
                    >
                        <InstagramIcon />
                    </Avatar>
                </IconButton>
                <IconButton
                    href="https://www.facebook.com/"
                    target="_blank"
                    samesite="None" secure="true"
                >
                    <Avatar
                        sx={{ bgcolor: "#00316e" }}
                        variant="solid"
                    >
                        <FacebookOutlinedIcon />
                    </Avatar>
                </IconButton>
            </Box>
        </header>
    );
}

export default Header;