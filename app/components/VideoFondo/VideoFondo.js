import React from 'react';
import './VideoFondo.css'; // Importa un archivo CSS para estilos

function VideoFondo() {
  return (
    <div className="video-fondo-container">
      <video autoPlay loop muted className="video-fondo">
        <source src="/Home.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
      <div className="degradado-blanco"></div> {/* Nuevo div para el degradado */}
      <div className="contenido-encima">
        <h1>Bienvenido a mi sitio web</h1>
        <p>Este es el contenido que se mostrará sobre el video.</p>
        {/* Otros componentes o texto */}
      </div>
    </div>
  );
}

export default VideoFondo;