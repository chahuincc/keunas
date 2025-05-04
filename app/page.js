"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/NavBar/NavBar";
import Banners from "./components/Banner/Banners";
import DetailService from "./components/DetailService/DetailService";
import VideoFondo from "./components/VideoFondo/VideoFondo";

export default function Home() {
  const imgSrc = [
    {url: '/circular-inca-terraces-of-moray.jpg', type: 'square', subtitle: 'Moray'},
    {url: '/ollantaytambo-cusco-peru.jpg', type: 'square', subtitle: 'Ollantaytambo'},
    {url: '/Vinicunca.jpg', type: 'high', subtitle: 'Vinicunca'},
    {url: '/visitando-el-machupicchu.jpg', type: 'long', subtitle: 'Machu Picchu'},
  ];

  const suvImageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Se activa cuando el 50% del elemento es visible
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
    <div className={styles.page}>
      <NavBar />
         <div className={styles.imgContainer}>
            {/* <Image 
            className={styles.imgManta}
            src="/manta.svg"
            alt="Next.js logo"
            height={25}
            width={500}
            /> */}
        </div>
      <main className={styles.main}>
        <VideoFondo/>
        {/* <div className="degradado-verde"></div> Nuevo div para el degradado */}
        <div
          className={`${styles.suvImage} ${isVisible ? styles.animate : ''}`}
          ref={suvImageRef}
        >
            <Image
              aria-hidden
              src="/suv.jpg"
              alt="security icon"
              width={800}
              height={600}
            />
        </div>
        <div className={styles.skills}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/icon-keunasid-verified.svg"
            alt="security icon"
            width={20}
            height={20}
          />
          Seguridad
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/icon-keunas-comodidad.svg"
            alt="comodidad icon"
            width={20}
            height={20}
          />
          Comodidad
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/icon-keunasauto.svg"
            alt="Globe icon"
            width={20}
            height={20}
          />
          Puntualidad
        </a>
        </div>
          <Banners data={imgSrc}/>
          <DetailService />
          <DetailService />
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="www.google.com.ar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/descargar.png"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Ver mas
          </a>
          {/* <a
            className={styles.secondary}
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a> */}
        </div> 
      </main>
      <footer >
        
      </footer>
    </div>
  );
}
