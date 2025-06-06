import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h2>Keunas Travel</h2>
        </div>
        <div className={styles.links}>
          <a href="#about">Sobre Nosotros</a>
          <a href="#services">Servicios</a>
          <a href="#contact">Contacto</a>
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