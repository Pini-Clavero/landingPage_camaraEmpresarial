import React from "react";
import { Typography, Link } from "@mui/material";
export default function Copyright() {

    return (
        <Typography
            className="copyright"
            variant="body2"
            color="white"
            align="center"
            backgroundColor="#00316e"
            padding="10px"
        >
            {"Copyright © "}
            <Link color="inherit" href="https://www.casa-3.com/"
                target="_blank"
                rel="noopener noreferrer">
                Casa3 producciones
            </Link>{" & "}
            <Link color="inherit" href="https://github.com/Pini-Clavero"
                target="_blank"
                rel="noopener noreferrer">
                Pini Clavero Web Developer
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}




