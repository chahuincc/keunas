import React from 'react';
import './VideoFondo.css';

function VideoFondo({id}) {
  return (
    <div id={id} className="video-fondo-container">
      <video autoPlay loop muted className="video-fondo">
        <source src="/cusco.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
      {/* <div className="degradado-verde"></div>  */}
      <div className="degradado"></div> 
      <div className="contenido-encima">
        <h1>Turismo en Cusco</h1>
        <p>Facilitamos tu movilidad en Cusco y sus alrededores con nuestros servicios de transporte privado y personalizado.</p>
      </div>
    </div>
  );
}

export default VideoFondo;