import React from "react";
import ReactPlayer from "react-player";
import "./Section.css";


function Section2() {
    return (
        <section className="section">
            <div className="section-title">
                <h2>En primera persona</h2>
            </div>
            <div className="section-content">
                <div className="section-text">
                    <p>Relatos de socios y socias que convocan a sumarse a la Cámara y por qué.
                        un día en su jornada laboral . El caso de juntos a la par es el ejemplo de la
                        convocatoria a la acción.
                        Un texto que desarrolle la cantidad de socios y socias que ya están ( no es
                        un número exacto) la idea de unir fuerzas es la premisa del nacimiento de
                        la cámara. y en este apartado enumerar los beneficios.
                        Todo estará redireccionado de Yotube.
                    </p>
                </div>
                <div >
                    <ReactPlayer className="section-video" controls url="https://www.youtube.com/watch?v=DiA77hnGg3A&ab_channel=tresmiradasmedia" playing loop muted />
                </div>
            </div>
        </section>
    );
}

export default Section2;
