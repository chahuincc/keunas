import React, { useEffect, useRef, useState }  from 'react'
import Image from "next/image";
import styles from "./ImageCamioneta.module.css";
import Card from "../Card/Card";

const ImageCamioneta = () => {

    const suvImageRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          },
          { threshold: 0.5 }
        );
    
        if (suvImageRef.current) {
          observer.observe(suvImageRef.current);
        }
    
        return () => {
          if (suvImageRef.current) {
            observer.unobserve(suvImageRef.current);
          }
        };
      }, []);

  return (
    <div className={styles.containerDataSkill} >
        <div
        className={`${styles.suvImage} ${isVisible ? styles.animate : ''}`}
        ref={suvImageRef}
        >
            <Image
                aria-hidden
                src="/suv.jpg"
                alt="security icon"
                width={600}
                height={450}
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