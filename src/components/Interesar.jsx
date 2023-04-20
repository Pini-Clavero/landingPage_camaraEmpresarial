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
                alignItems="center"
                spacing={3}

            >
                <Box sx={{ color: "#666666", fontSize: 30, }}>
                    <h2>Te Puede Interesar</h2>
                </Box>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    sx={{ pb: 4, }}>
                    <Card>
                        <Link href="https://benitojuarez.gov.ar/"
                            target="_blank"
                            SameSite="None" Secure>

                            <CardMedia
                                component={"img"}
                                height="80"
                                src="https://edu.benitojuarez.gov.ar/wp-content/uploads/2021/08/logo-muni-final.png"
                                alt="Municipio de Bicente Lopez"
                                border="3px"
                                sx={{ borderColor: "#66666675", bgcolor:"#00316e", p:"3px" }}
                            />
                        </Link>
                    </Card>
                    <Card>
                        <Link href="https://www.febaweb.org.ar/"
                            target="_blank"
                            SameSite="None" Secure>
                            <CardMedia
                                component={"img"}
                                height="80"
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
                            SameSite="None" Secure>
                            <CardMedia
                                component={"img"}
                                height="80"
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
                            SameSite="None" Secure>
                            <CardMedia
                                component={"img"}
                                height="80"
                                src="https://www.centrodecomercio.org.ar/fotos/2020/03/18032020_logo-ooo.jpg"
                                alt="Camara Argentina de Comercio"
                                border="3px"
                                sx={{ borderColor: "#66666675", p:"3px" }}
                            />
                        </Link>
                    </Card>

                </Stack>

                <img src="/logos/logo_camara_header.png" alt="Logo de la empresa" width={180} />
                <Box sx={{ color: "#666666", fontSize: 20, }}>
                    <p>Av. Libertad 221, Benito Juárez, Argentina <br></br>
                        camaraempresariabjuarez@hotmail.com
                    </p>
                </Box>
                <Box sx={{ pb: 2, }}>
                    <IconButton
                        href="https://www.youtube.com/"
                        target="_blank"
                        SameSite="None" Secure
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
                        SameSite="None" Secure
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
                        SameSite="None" Secure
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
