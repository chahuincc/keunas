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
        <p>Facilitamos tu movilidad en Cusco y sus alrededores con nuestros servicios de transporte privado y personalizado.</p>
      </div>
    </div>
  );
}

export default VideoFondo;