import React from "react";
import ReactPlayer from "react-player";
import "./Section.css";


function Section() {
    return (
        <section className="section">
            <div className="section-title">
                <h2>La voz de la historia</h2>
            </div>
            <div className="section-content">
                <div className="section-text">
                    <p>La Cámara nace en el año 1950, luego de celebrarse una asamblea general
                        producto de la sinergia entre comerciantes, industriales y vecinos de la
                        ciudad.
                        La necesidad de tener un espacio en común, de participación, alianza
                        y cooperativismo sentó las bases de un camino donde el apoyo mutuo
                        sería la premisa caracteristica de esta organización.
                        Con más de 150 personas se pronuncia así, la primera junta directiva,
                        dando inicio a un espacio para la organización de emprendedores y
                        emprendedoras juarenses.
                        La Cámara Comercial, Industrial y de Propietarios, (como su denominación
                        de origen expresaba) contribuiría a sostener y contener los derechos y las
                        necesidades de sus asociados y asociadas.
                        71 años pasaron de aquel evento relevante para nuestra ciudad, siete
                        decadas de prolíficas anécdotas. Atravesamos períodos con vaivenes
                        económicos, sin embargo desde los comienzos, nos enfocamos en
                        acompañar y sostener a la comunidad empresarial y comercial.
                        Toda la vivencia nos sirvió para ser quienes somos hoy, una organización
                        sólida y confiable</p>
                </div>
                <div >
                    <ReactPlayer className="section-video" controls url="https://www.youtube.com/watch?v=DiA77hnGg3A&ab_channel=tresmiradasmedia" playing loop muted/>
                </div>
            </div>
        </section>
    );
}

export default Section;
