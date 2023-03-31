import React from "react";
import "./Header.css";
import * as FaIcons from "react-icons/fa"

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="/logos/logo_camara_header.png" alt="Logo de la empresa" />
      </div>
      <div className="consigna">
        <h1>1950 -2023</h1>
        <h1>70 años al servicio de la producción</h1>
      </div>
      <div className="redes-sociales">
        <a href="enlace-a-youtubehttps://www.youtube.com/@ministeriodeambienteydesar2599"><FaIcons.FaFacebook className="fab fa-youtube"/></a>
        <a href="https://www.instagram.com/ambientenacion/?hl=es"><i className="fab fa-instagram"><FaIcons.FaTwitter/></i></a>
        <a href="https://www.facebook.com/AmbienteNacion/?locale=es_LA"><i className="fab fa-facebook"></i><FaIcons.FaYoutube/></a>
      </div>
    </header>
  );
}

export default Header;