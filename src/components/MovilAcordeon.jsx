import * as React from 'react';
import "./MovilAcordeon.css";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';


export default function SimpleAccordion() {
    return (
        <div className='movilAcordeon'>
            <Accordion sx={{ bgcolor: "#00316e" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography component={"h2"} sx={{ color: "white", fontSize: 18 }}>LA VOZ DE LA HISTORIA</Typography>
                </AccordionSummary>
                <AccordionDetails id="acordionDetails">
                    <iframe src="https://www.youtube.com/embed/5f5bKeUVa4I" title="Entrevista a MARIO TANGORRA" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" width="280" height="158" frameborder="0" allowFullScreen></iframe>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ bgcolor: "#00316e" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography component={"h2"} sx={{ color: "white", fontSize: 18 }}>EN PRIMERA PERSONA</Typography>
                </AccordionSummary>
                <AccordionDetails id="acordionDetails">
                    <iframe src="https://www.youtube.com/embed/Zw27iGEM620" title="Asociate a la Cámara!" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" width="280" height="158" frameborder="0"></iframe>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ bgcolor: "#00316e" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography component={"h2"} sx={{ color: "white", fontSize: 18 }}>LA PRODUCCION JUARENCE</Typography>
                </AccordionSummary>
                <AccordionDetails id="acordionDetails">
                    <iframe src="https://www.youtube.com/embed/U6X2mAC5D3E" title="EL LEÑERITO" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" width="280" height="158" frameborder="0"></iframe>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ bgcolor: "#00316e" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                >
                    <Typography component={"h2"} sx={{ color: "white", fontSize: 18 }}>BENEFICIOS DE ASOCIARTE</Typography>
                </AccordionSummary>
                <AccordionDetails id="acordionDetails">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText sx={{ color: "white"}} primary="Descuentos en salón de evento" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText sx={{ color: "white"}} primary="Laboratorio de análisis veterinarios y de cereales" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText sx={{ color: "white"}} primary="Talleres y capacitaciones" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}