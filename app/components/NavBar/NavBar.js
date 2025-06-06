"use client"
import React, { useState } from "react";
import styles from "./NavBar.module.css";
import Link from 'next/link'


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <><div className={styles.container}>
      <div className={styles.containerLogo}>
        <div className={styles.logo}>Keunas</div>
        <div className={styles.logo_decorator}>Travel</div>
      </div>
      <div className={`${styles.menuIcon} ${isOpen ? styles.open : ""}`} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <nav className={`${styles.navMenu} ${isOpen ? styles.showMenu : styles.noShowMenu}`}>
        <ul>
          <Link onClick={toggleMenu} className={styles.li} href="#home" >Inicio</Link>
          <Link onClick={toggleMenu} className={styles.li} href="#galery" >Galeria</Link>
          <Link onClick={toggleMenu} className={styles.li} href="https://wa.me/+51956342071?text=Quisiera%20más%20información%20acerca%20de%20los%20servicios%20de%20transporte.">Contactos</Link>
          <Link onClick={toggleMenu} className={styles.li} href="#about" >Servicios</Link>
        </ul>
      </nav>
    </div>
   
      </>
  );
};

export default NavBar;
