import React from "react";
import ReactPlayer from "react-player";
import "./Section.css";


function Section2() {
    return (
        <section className="section">
            <div className="section-title">
                <h2>EN PRIMERA PERSONA</h2>
            </div>
            <div className="section-content">
                <div className="section-text">
                <iframe id="section-video" width="560" height="315" src="https://www.youtube.com/embed/I4uCTXCoLE8?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <p>Conozcamos a las personas que inician, organizan y gestionan su propio negocio o empresa,
                        asumiendo los riesgos financieros y personales asociados al proyecto que eligieron desarrollar. Ellas
                        y ellos son quienes emprenden su labor diaria, son la voz de la experiencia. Comerciantes que
                        decidieron unirse a la Cámara, para sumar y sentirse apoyados por nuestra institución.<br></br>
                        Las y los emprendedores son personas que tienen una visión creativa y una actitud proactiva para
                        identificar oportunidades y crear soluciones innovadoras a los problemas. Además, suelen ser
                        personas con capacidad de liderazgo, perseverancia y capacidad para tomar decisiones.<br></br>
                        Los emprendedores y emprendedoras trabajan, en ocasiones, en solitario y otras lideran equipos de
                        trabajo para llevar a cabo sus proyectos. Pueden estar motivados por diversas razones, como la
                        búsqueda de independencia financiera, la realización personal, la creación de empleo y la solución de
                        problemas sociales. En cualquier caso, los emprendedores juegan un papel crucial en el desarrollo
                        económico y social de nuestra comunidad juarense.<br></br>
                        Queremos recordarles lo importante que es su trabajo y el impacto que tienen en la comunidad. Su
                        valentía, creatividad y perseverancia son las herramientas que les permiten enfrentar los desafíos
                        diarios y continuar construyendo sus sueños.<br></br>
                        No siempre será fácil emprender y habrá momentos en los que se sientan cansados y frustrados.
                        Pero es en esos momentos cuando deben recordar que estamos trabajando a la par por un propósito,
                        motivación y pasión compartida. No dejen que los obstáculos los detengan, encontraremos
                        soluciones creativas y efectivas unidos en una sola Cámara empresaria.<br></br>
                        Aprovechemos estas relaciones y construyamos una comunidad de emprendedores que se ayuden y
                        se apoyen mutuamente.<br></br>
                        El mundo necesita más emprendedores como ustedes. Personas que tengan la valentía de seguir sus
                        sueños, que creen oportunidades y que contribuyan a la creación de empleo y al desarrollo
                        económico y social de sus comunidades. Ustedes son los motores de cambio y los agentes de
                        progreso que pueden transformar no solo su lugar de residencia sino un territorio entero.<br></br>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Section2;
