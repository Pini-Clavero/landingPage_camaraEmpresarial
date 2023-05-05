import React from "react";
import "./Section.css";
import { Card, CardMedia, Link } from "@mui/material";
import Stack from '@mui/material/Stack';

function Section3() {
    return (
        <section className="section">
            <div className="section-title">
                <h2>LA PRODUCCIÓN JUARENSE</h2>
            </div>
            <div className="section-content">
                <div className="section-text">
                <iframe id="section-video" width="560" height="315" src="https://www.youtube.com/embed/F1Sms-5A8u8?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <p>Las empresas y comercios de nuestra ciudad son una parte fundamental de la economía local. Estas
                        nos brindan una amplia gama de productos y servicios a la comunidad, desde alimentos y vestimenta
                        hasta servicios financieros y profesionales.<br></br>
                        Además de generar empleo y contribuir al desarrollo económico, también desempeñan un papel
                        importante en la vida social y cultural de la comunidad.<br></br>
                        A menudo, se convierten en puntos de encuentro para nosotros, donde podemos socializar y disfrutar
                        de eventos y actividades!<br></br>

                        Presentamos a las empresas y negocios que decidieron unirse a la Cámara, una organización que
                        representa los intereses de los negocios locales y trabaja para promover el crecimiento y desarrollo.<br></br>
                        Al asociarse podrán aprovechar los beneficios de la Cámara, las capacitaciónes, cursos y talleres
                        empresariales, la representación en el ámbito local ante problemáticas que atañen a nuestra
                        producción, requerimientos y necesidades comerciales.<br></br>
                        Gracias por su dedicación y compromiso con la creación de empleos y la generación de
                        oportunidades en nuestra ciudad. Gracias por ofrecer productos y servicios de alta calidad que
                        satisfacen las necesidades de nuestra población y contribuyen a su bienestar.<br></br>
                        Su presencia y colaboración en la escena local no solo beneficia a su empresa, sino también a la
                        sociedad en general. Gracias por ser parte de la Cámara y por ser un ejemplo a seguir para otros
                        empresarios y comerciantes locales.<br></br>
                    </p>
                        <h2><center>Algunos de nuestros asociados son:</center></h2>
                    <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={4}>
                    <Card>
                        <Link href="https://morixe.com.ar/"
                            target="_blank"
                            samesite="None" secure="true">

                            <CardMedia
                                component={"img"}
                                height="150"
                                src="https://media.licdn.com/dms/image/C4D0BAQGPTvsuC7oHog/company-logo_200_200/0/1579879290840?e=2147483647&v=beta&t=QiuRGw8qEnMu7vEcovhB1w9wKAn6YJMg88jHT-Tnon0"
                                alt="Morixe"
                                border="3px"
                                sx={{ borderColor: "#00316e", p:"3px" }}
                            />
                        </Link>
                    </Card>
                    <Card>
                        <Link href="https://www.campoamorhnos.com.ar/web2021/"
                            target="_blank"
                            samesite="None" secure="true">
                            <CardMedia
                                component={"img"}
                                height="150"
                                src="https://cebadacervecera.com.ar/wp-content/uploads/2022/06/LOGO-CAMPOAMOR-300-300-300x300.jpg"
                                alt="Campoamos Hnos."
                                border="3px"
                                sx={{ borderColor: "#00316e", p:"3px" }}
                            />
                        </Link>
                    </Card>
                    <Card>
                        <Link href="https://supermercadoacuario.com.ar/app/"
                            target="_blank"
                            samesite="None" secure="true">
                            <CardMedia
                                component={"img"}
                                src="https://www.supermercadoacuario.com.ar/app/branding/acuario/logo.png"
                                alt="Supermercado Acuario"
                                border="3px"
                                sx={{ borderColor: "#00316e", width:"150px", height:"150px", objectFit: "contain" }}
                            />
                        </Link>
                    </Card>
                    <Card>
                        <Link href="https://www.facebook.com/people/El-Le%C3%B1erito/100070696550643/"
                            target="_blank"
                            samesite="None" secure="true">
                            <CardMedia
                                component={"img"}
                                height="150"
                                src="/logos/jugos_el_leñerito.png"
                                alt="El Leñerito"
                                border="3px"
                                sx={{ borderColor: "#00316e", p:"3px" }}
                            />
                        </Link>
                    </Card>

                </Stack>
                    <p>A medida que la Cámara continúa su camino, esperamos contar con su continua presencia y
                        compromiso para enfrentar los desafíos y aprovechar las oportunidades de desarrollo que se
                        presenten. Juntos, podemos construir una comunidad más fuerte, próspera y equitativa para todos y
                        todas.<br></br>
                        De nuevo, muchas gracias por su compromiso y dedicación a la escena local. Su contribución es
                        invaluable y apreciada por todos.<br></br>

                    </p>
                </div>
            </div>
        </section>
    );
}

export default Section3;
