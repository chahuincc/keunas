import React from 'react'
import styles from "./DetailService.module.css";

const DetailService = ({id}) => {
  return (
    <div id={id} className={styles.containerDataService}>
        <h1>Servicio de transporte en Cusco </h1>
        <p>Para que tu exploración de Cusco y sus alrededores sea aún más placentera, ponemos a tu disposición <span className={styles.important}>servicios de transporte privado y seguro.</span> Ya sea que necesites un traslado desde el aeropuerto, transporte para tus tours o movilidad interurbana, estamos aquí para facilitarte el viaje. ¡Contáctanos por WhatsApp para coordinar tus traslados!</p>
      </div>
  )
}

export default DetailService