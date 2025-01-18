import React from "react";
import styles from "./ButtonMenu.module.css";

const ButtonMenu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menuIcon}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </div>
  )
}

export default ButtonMenu