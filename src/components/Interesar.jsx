import React from "react";
import { Avatar, Card, CardMedia, Box, IconButton, Container } from "@mui/material";
import Stack from '@mui/material/Stack';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';


function Interesar() {
    return (
        <>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={3}
            >
                <div>
                    <h2>Te Puede Interesar</h2>
                </div>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={0}
                    sx={{ pb: 4, }}
                >
                    <Card>
                        <CardMedia
                            component={"img"}
                            height="80"
                            src="/imagenes/interesar1.jpg"
                            alt="Municipio de Bicente Lopez"
                        />
                    </Card>
                    <Card>
                        <CardMedia
                            component={"img"}
                            height="80"
                            src="/imagenes/interesar2.jpg"
                            alt="Federación Economica de la Provincia de Buenos Aires"
                        />
                    </Card>
                    <Card>
                        <CardMedia
                            component={"img"}
                            height="80"
                            src="/imagenes/interesar3.jpg"
                            alt="Came"
                        />
                    </Card>
                    <Card>
                        <CardMedia
                            component={"img"}
                            height="80"
                            src="/imagenes/interesar4.jpg"
                            alt="CAME"
                        />
                    </Card>

                </Stack>

                <img src="/logos/logo_camara_header.png" alt="Logo de la empresa" width={280}/>
                <Box>
                    <p>Av. Libertad 221, Benito Juárez, Argentina <br></br>
                        camaraempresariabjuarez@hotmail.com
                    </p>
                </Box>
                <div>
                    <IconButton
                        href="https://www.youtube.com/"
                        target="_blank"
                    >
                        <Avatar
                            sx={{ bgcolor: "#0072c6" }}
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
                            sx={{ bgcolor: "#0072c6" }}
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
                            sx={{ bgcolor: "#0072c6" }}
                            variant="solid"
                        >
                            <FacebookOutlinedIcon />
                        </Avatar>
                    </IconButton>
                </div>
            </Stack>

        </>
    );
}

export default Interesar;
