import React from 'react';
import Image from "next/image";
import styles from "./WhatsappButton.module.css";

const WhatsappButton = () => {
  return (
    <div className={styles.whatsappContainer}>
          <a
            href="https://wa.me/1234567890?text=Hola,%20me%20gustaría%20obtener%20más%20información."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            <Image
              src="/wp.png"
              alt="WhatsApp"
              width={70}
              height={70}
            />
          </a>
        </div>  
  )
}

export default WhatsappButton