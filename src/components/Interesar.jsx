import React from "react";
import { Avatar, Card, CardMedia, Box, IconButton, Link } from "@mui/material";
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
                alignItems="center">
                <Box component={"h2"} sx={{ color: "#666666", fontSize: 30 }}>
                    Te Puede Interesar
                </Box>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}>
                    <Card>
                        <Link href="https://benitojuarez.gov.ar/"
                            target="_blank"
                            samesite="None" secure="true">

                            <CardMedia
                                component={"img"}
                                height="100"
                                src="https://yt3.googleusercontent.com/ytc/AGIKgqNWZOP07uDaQ8Opc06XFwVMtwFDgM614PNL0Xzr=s900-c-k-c0x00ffffff-no-rj"
                                alt="Municipio de Bicente Lopez"
                                border="3px"
                                sx={{ borderColor: "#66666675", p:"3px", objectFit: "cover", width:"150px" }}
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
                                sx={{ borderColor: "#66666675", p:"3px" }}
                            />
                        </Link>
                    </Card>
                    <Card>
                        <Link href="https://www.redcame.org.ar/"
                            target="_blank"
                            samesite="None" secure="true">
                            <CardMedia
                                component={"img"}
                                height="100"
                                src="https://www.redcame.org.ar/images/logos/logo-came-lite.svg"
                                alt="Came"
                                border="3px"
                                sx={{ borderColor: "#66666675", p:"3px" }}
                            />
                        </Link>
                    </Card>
                    <Card>
                        <Link href="https://www.cac.com.ar/"
                            target="_blank"
                            samesite="None" secure="true">
                            <CardMedia
                                component={"img"}
                                height="100"
                                src="https://www.centrodecomercio.org.ar/fotos/2020/03/18032020_logo-ooo.jpg"
                                alt="Camara Argentina de Comercio"
                                border="3px"
                                sx={{ borderColor: "#66666675", p:"3px" }}
                            />
                        </Link>
                    </Card>

                </Stack>

                <img src="/logos/logo_camara_header.png" alt="Logo de la empresa" width={280} />
                <Box sx={{ color: "#666666", fontSize: 20, }}>
                    <p>Av. Libertad 221, Benito Juárez, Argentina <br></br>
                        camaraempresariabjuarez@hotmail.com
                    </p>
                </Box>
                <Box sx={{ pb: 2, }}>
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
                    >
                        <Avatar
                            sx={{ bgcolor: "#00316e" }}
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
            </Stack>

        </>
    );
}

export default Interesar;
