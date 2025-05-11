import React from 'react';
import './VideoFondo.css';

function VideoFondo() {
  return (
    <div className="video-fondo-container">
      <video autoPlay loop muted className="video-fondo">
        <source src="/Home.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
      {/* <div className="degradado-verde"></div>  */}
      <div className="degradado-verde"></div> 
      <div className="contenido-encima">
        <h1>Transporte en Cusco</h1>
        <p>Experiencias Auténticas en el Corazón de los Andes Planifica tu Viaje a Cusco con Nosotros.</p>
      </div>
    </div>
  );
}

export default VideoFondo;