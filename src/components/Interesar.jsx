import React from "react";
import { Avatar, Card, CardMedia, Box, IconButton, Link } from "@mui/material";
import Stack from '@mui/material/Stack';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./Interesar.css";


function Interesar() {
    return (
        <>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center">
                <section className="tePuedeInteresar">
                    <Box component={"h2"} sx={{ color: "#666666", fontSize: 30, textAlign: "center" }}>
                        Te Puede Interesar
                    </Box>
                    <Stack
                        className="tePuedeInteresar"
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}>
                        <Card >
                            <Link href="https://benitojuarez.gov.ar/"
                                target="_blank"
                                rel="noopener noreferrer">

                                <CardMedia
                                    component={"img"}
                                    height="100"
                                    src="https://yt3.googleusercontent.com/ytc/AGIKgqNWZOP07uDaQ8Opc06XFwVMtwFDgM614PNL0Xzr=s900-c-k-c0x00ffffff-no-rj"
                                    alt="Municipio de Bicente Lopez"
                                    border="3px"
                                    sx={{ borderColor: "#66666675", p: "3px", objectFit: "cover", width: "150px" }}
                                />
                            </Link>
                        </Card>
                        <Card>
                            <Link href="https://www.febaweb.org.ar/"
                                target="_blank"
                                samesite="None" secure="true">
                                <CardMedia
                                    component={"img"}
                                    height="100"
                                    src="https://www.febaweb.org.ar/images/logo.png"
                                    alt="Federación Economica de la Provincia de Buenos Aires"
                                    border="3px"
                                    sx={{ borderColor: "#66666675", p: "3px" }}
                                />
                            </Link>
                        </Card>
                        <Card>
                            <Link href="https://www.redcame.org.ar/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <CardMedia
                                    component={"img"}
                                    height="100"
                                    src="https://www.redcame.org.ar/images/logos/logo-came-lite.svg"
                                    alt="Came"
                                    border="3px"
                                    sx={{ borderColor: "#66666675", p: "3px" }}
                                />
                            </Link>
                        </Card>
                        <Card>
                            <Link href="https://www.cac.com.ar/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <CardMedia
                                    component={"img"}
                                    height="100"
                                    src="https://www.centrodecomercio.org.ar/fotos/2020/03/18032020_logo-ooo.jpg"
                                    alt="Camara Argentina de Comercio"
                                    border="3px"
                                    sx={{ borderColor: "#66666675", p: "3px" }}
                                />
                            </Link>
                        </Card>

                    </Stack>
                </section>
                <footer>

                <img className="imgFooter" src="/logos/logo_camara_header.png" alt="Logo de la empresa" width={280} aria-label="Logo de la empresa"/>
                <p className="pFooter">Av. Libertad 221, Benito Juárez, Argentina <br></br>
                    camaraempresariabjuarez@hotmail.com
                </p>
                <Box sx={{ pb: 2, }}>
                    <IconButton
                        href="https://youtube.com/@camaraempresariabenitojuarez"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Avatar
                            sx={{ bgcolor: "#00316e" }}
                            variant="solid"
                        >
                            <YouTubeIcon />
                        </Avatar>
                    </IconButton>
                    <IconButton
                        href="https://www.instagram.com/camaraempbjuarez/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Avatar
                            sx={{ bgcolor: "#00316e" }}
                            variant="solid"
                        >
                            <InstagramIcon />
                        </Avatar>
                    </IconButton>
                    <IconButton
                        href="https://www.facebook.com/profile.php?id=100054584163238"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Avatar
                            sx={{ bgcolor: "#00316e" }}
                            variant="solid"
                        >
                            <FacebookOutlinedIcon />
                        </Avatar>
                    </IconButton>
                </Box>
                </footer>

            </Stack>

        </>
    );
}

export default Interesar;
