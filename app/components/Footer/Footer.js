import React from 'react';
import styles from './Footer.module.css';

const Footer = ({id}) => {
  return (
    <footer id={id} className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h2>Keunas Travel</h2>
        </div>
        <div className={styles.links}>
          <a href="#about">Sobre Nosotros</a>
          <a href="#services">Servicios</a>
          <a href="https://wa.me/+51956342071?text=Quisiera%20más%20información%20acerca%20de%20los%20servicios%20de%20transporte.">Contacto</a>
        </div>
        <div className={styles.social}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
      </div>
      <div className={styles.copy}>
        <p>&copy; {new Date().getFullYear()} Keunas Travel. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;