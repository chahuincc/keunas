import React from 'react'
import Image from "next/image";
import styles from "./ImageCamioneta.module.css";
import Card from "../Card/Card";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const ImageCamioneta = () => {

   const [isVisible, suvImageRef] = useIntersectionObserver(0.5);

  return (
    <div className={styles.containerDataSkill} >
        <div
        className={`${styles.suvImage} ${isVisible ? styles.animate : ''}`}
            ref={suvImageRef}
        >
            <Image
            className={styles.suvImageStyle}
                aria-hidden
                src="/suv.jpg"
                alt="security icon"
                fill
                />
        </div>
        <div className={styles.containerCards}>
            <Card image={"/icon-keunas-comodidad.svg"} text="Comodidad"/>
            <Card image={"/icon-keunasauto.svg"} text="Seguridad"/>
            <Card image={"/icons8-reloj.svg"} text="Puntualidad"/>
        </div>
    </div>
  )
}

export default ImageCamioneta