import React from "react";
import "./Header.css";
import { Avatar, Card, CardMedia, Box, IconButton, Container } from "@mui/material";
import Stack from '@mui/material/Stack';
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
        <h1>1950 -2023</h1>
        <h1>70 años al servicio de la producción</h1>
      </div>
      <div className="redes-sociales">
      <IconButton
                    href="https://www.youtube.com/"
                    target="_blank"
                >
                    <Avatar
                        sx={{ bgcolor: "#0072c6"}}
                        variant="solid"
                    >
                        <YouTubeIcon />
                    </Avatar>
                </IconButton>
                <IconButton
                    href="https://www.instagram.com/"
                    target="_blank"
                >
                    <Avatar
                        sx={{ bgcolor: "#0072c6"}}
                        variant="solid"
                    >
                        <InstagramIcon />
                    </Avatar>
                </IconButton>
                <IconButton
                    href="https://www.facebook.com/"
                    target="_blank"
                >
                    <Avatar
                        sx={{ bgcolor: "#0072c6"}}
                        variant="solid"
                    >
                        <FacebookOutlinedIcon />
                    </Avatar>
                </IconButton>
      </div>
    </header>
  );
}

export default Header;