"use client"
import React, { useState } from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <><div className={styles.container}>
      <div className={styles.logo}>Purisun</div>
      <div className={`${styles.menuIcon} ${isOpen ? styles.open : ""}`} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <nav className={`${styles.navMenu} ${isOpen ? styles.showMenu : ""}`}>
        <ul>
          <li  >Servicios</li>
          <li>Galeria</li>
          <li>Quienes somos</li>
        </ul>
      </nav>
    </div>
   
      </>
  );
};

export default NavBar;