import React from 'react';
import './VideoFondo.css';

function VideoFondo() {
  return (
    <div className="video-fondo-container">
      <video autoPlay loop muted className="video-fondo">
        <source src="/Home.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
      <div className="degradado-verde"></div> 
      <div className="degradado-verde"></div> 
      <div className="contenido-encima">
        <h1>Conozcamos Cusco</h1>
        <p>Contactanos para obtener movilidad por todo el Cusco</p>
      </div>
    </div>
  );
}

export default VideoFondo;