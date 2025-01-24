import React from 'react'
import Image from "next/image";
import styles from "./DetailService.module.css";

const DetailService = () => {
  return (
    <>
    <div className={styles.container}>
        <Image 
                className={styles.image}
                src="/machupicchu.jpg"
                alt='machupicchu'
                width={1000}
                height={1000}
            />
        <h1>Montaña 7 colores</h1>
        <p>Viaja a montaña 7 colores con nosotros, la mejor eleccion para pasar un lindo domingo de caminata por las alturas.</p>
      </div>
        <div className={styles.containerTag}>
         <div className={styles.containerRowTag}>
                <Image
                    aria-hidden
                    src="/icons8-par.svg"
                    alt="Globe icon"
                    width={25}
                    height={25}
                    />
                    <p>

            Nuestras unidades estaran en la puerta de su hotel
            esperando su llegada.
                    </p>
        </div>
        <div className={styles.containerRowTag}>
                <Image
                    aria-hidden
                    src="/icons8-plan.svg"
                    alt="Globe icon"
                    width={25}
                    height={25}
                />
                <p>

            Partiremos en horario pactado, nos dirigiremos al
            mejor restaurante para que usted pueda preparasre con un buen te de coca.
                </p>
        </div>
        <div className={styles.containerRowTag}>
                <Image
                    aria-hidden
                    src="/icons8-reloj.svg"
                    alt="Globe icon"
                    width={25}
                    height={25}
                    />
                    <p>

            Contaremos con guia abordo para hacer mas amena 
            su caminata.
                    </p>
        </div>
    </div>
            
    </>
  )
}

export default DetailService