import React, { useRef, useEffect }from 'react'
import Image from "next/image";
import styles from "./ImageCamioneta.module.css";
import Card from "../Card/Card";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const ImageCamioneta = () => {

   const [isVisible, suvImageRef] = useIntersectionObserver(0.5);
   const scrollContainerRef = useRef(null);
   const cars = [
    { src: "/suv.jpg", alt: "SUV" },
    { src: "/toyota.png", alt: "Toyota Car" },
    { src: "/car2.jpg", alt: "Car 2" },
    { src: "/sprinter.png", alt: "sprinter" },
  ];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        
        scrollContainer.scrollBy({
        //   left: 340,
          left: 355,
          behavior: "smooth", 
        });

        if (
          scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 3500);

    return () => clearInterval(scrollInterval);
  }, []);
  return (
    <div className={styles.containerDataSkill}>
        <div className={styles.containerCards}>
            <Card image={"/icon-keunas-comodidad.svg"} text="Comodidad" tipeAnimation="left"/>
            <Card image={"/icon-keunasauto.svg"} text="Seguridad" tipeAnimation="right"/>
        </div>

        <div
        className={`${styles.suvImage} ${isVisible ? styles.animate : ''}`}
            ref={suvImageRef}
        >
            <div className={styles.horizontalScrollContainer} ref={scrollContainerRef}>
                {cars.map((car, index) => (
                    <div key={index} className={styles.carCard}>
                        <Image
                            src={car.src}
                            alt={car.alt}
                            width={300}
                            height={200}
                            className={styles.carImage}
                        />
                    </div>
                ))}
            </div>
        </div>
        <div className={styles.containerCards}>
            <Card image={"/icons8-reloj.svg"} text="Puntualidad" tipeAnimation="left"/>
            <Card image={"/icons8-reloj.svg"} text="Puntualidad" tipeAnimation="right"/>
        </div>
    </div>
  )
}

export default ImageCamioneta