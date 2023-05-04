import React from "react";
import "./Beneficios.css";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import Stack from '@mui/material/Stack';


function Beneficios() {
    return (
        <>
            <section className="section">
                <div className="section-title">
                    <h2>Beneficios y convenios</h2>
                </div>
            
            
            </section>

            <Stack
                id="stackBeneficios"
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={2}
                sx={{pb:8, }}
            >
                <Card>
                    <CardContent sx={{bgcolor:"#00316e", color:"white"}} >
                        <Typography>Beneficio 1</Typography>
                    </CardContent>
                    <CardMedia
                        component={"img"}
                        height="240"
                        width="240"
                        src="/imagenes/beneficio1.jpg"
                        alt="beneficio 1"
                    />
                </Card>
                <Card>
                    <CardContent sx={{bgcolor:"#00316e", color:"white"}}>
                        <Typography>Beneficio 2</Typography>
                    </CardContent>
                    <CardMedia
                        component={"img"}
                        height="240"
                        width="240"
                        src="/imagenes/beneficio2.jpg"
                        alt="beneficio 2"
                    />
                </Card>
                <Card>
                    <CardContent sx={{bgcolor:"#00316e", color:"white"}}>
                        <Typography>Beneficio 3</Typography>
                    </CardContent>
                    <CardMedia
                        component={"img"}
                        height="240"
                        width="240"
                        src="/imagenes/beneficio3.jpg"
                        alt="beneficio 3"
                    />
                </Card>
            </Stack>
        </>

    );
}

export default Beneficios;
