import React from "react";
import ReactPlayer from "react-player";
import "./Section.css";


function Section3() {
    return (
        <section className="section">
            <div className="section-title">
                <h2>Desde adentro - Como se hace? Como lo hicieron?</h2>
            </div>
            <div className="section-content">
                <div className="section-text">
                    <p>Testimonios de Empresarios y empresarias, gerentes, dueños de fábricas y
                        comercios locales, renombrando los años que están con la Cámara.
                        Además, demostrar con pequeños videos como es hacer parte de su
                        producción.
                    </p>
                </div>
                <div >
                    <ReactPlayer className="section-video" controls url="https://www.youtube.com/watch?v=DiA77hnGg3A&ab_channel=tresmiradasmedia" playing loop muted />
                </div>
            </div>
        </section>
    );
}

export default Section3;
