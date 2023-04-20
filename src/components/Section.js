import React from "react";
import ReactPlayer from "react-player";
import "./Section.css";


function Section() {
    return (
        <section className="section">
            <div className="section-title">
                <h2>LA VOZ DE LA HISTORIA</h2>
            </div>
            <div className="section-content">
                <div className="section-text">
                <ReactPlayer className="section-video" controls url="https://youtu.be/fLkB7kc2uTI" playing loop autoplay muted 
                SameSite="None" Secure/>
                    <p>La Cámara nace en el año 1950, luego de celebrarse una asamblea general producto de la sinergia entre comerciantes, industriales
                        y vecinos de la ciudad.<br></br>
                        La necesidad de tener un espacio en común, de participación, alianza y cooperativismo sentó las bases de un camino donde el
                        apoyo mutuo sería la premisa característica de esta organización.<br></br>
                        Con más de 150 personas se pronunciaría, la primera junta directiva, dando inicio a la fundación de la Cámara Comercial,
                        Industrial y de Propietarios, (como su denominación de origen expresaba) que contribuiría a sostener y contener los derechos y
                        las necesidades de sus asociados y asociadas, tal como lo sigue realizando hasta la fecha.<br></br>
                        71 años pasaron de aquel evento relevante para la comunidad, siete décadas de prolíficas anécdotas donde atravesamos períodos
                        de vaivenes económicos, sin embargo, desde el comienzo nos enfocamos en acompañar y sostener a la comunidad empresarial y
                        comercial.<br></br>
                        La CEBJ acompaña a los comerciantes que, con tanto empeño y dedicación vieron crecer sus comercios y empresas que fueron, son
                        y serán el latido de una ciudad en constante crecimiento.<br></br>
                        Nos quedamos con los logros, con defender nuestra fuente laboral y el sostenimiento de una economía inclusiva, somos el
                        engranaje de un motor productivo al que elegimos preservar.<br></br>
                        A la Cámara la hacemos entre todos y todas, como una familia que se esfuerza por abrir las puertas de su comercio. Emprender es
                        aprender a dar los primeros pasos y estamos para nutrir en la acción comunitaria a la industria, la producción y el comercio local.
                        Festejamos el logro de cada sector comercial desde siempre, porque sabemos que nadie se salva sola ni solo, que cooperar es
                        sinónimo de colaboración y cuando colaboramos, el peso se distribuye para avanzar con los esfuerzos repartidos.<br></br>
                        Te estamos esperando para que la Cámara siga creciendo y alimentando esa reciprocidad que nació en aquella asamblea del 17 de
                        septiembre de 1950.<br></br>
                        Vimos pasar mucha historia por estas calles; en esta etapa de nuevos desafíos nos toca escribir con el objetivo claro y simple: la
                        Cámara Empresaria se compromete a asistirlos y asistirlas en cada paso del camino.<br></br>
                        <strong><center>Nos encantaría verte formar parte de nuestra comunidad de la Cámara</center></strong> 
                        <strong><center>¡Juntos podemos hacer realidad nuestros objetivos!</center></strong></p>
                    
                </div>
                
            </div>
        </section>
    );
}

export default Section;
