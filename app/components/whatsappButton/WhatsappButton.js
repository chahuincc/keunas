import React, { useState, useEffect } from 'react';
import Image from "next/image";
import styles from "./WhatsappButton.module.css";

const WhatsappButton = () => {
  const [showText, setShowText] = useState(false);
  let timeoutId = null;

  useEffect(() => {
    const handleScroll = () => {
      setShowText(true); 

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        setShowText(false); 
      }, 5000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <div className={styles.whatsappContainer}>
      {showText && <div className={styles.floatingText}>¿Tiene alguna duda?</div>}
      <a
        href="https://wa.me/+51956342071?text=Hola,%20me%20gustaría%20obtener%20más%20información."
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappButton}
      >
        <Image
          src="/msg.svg"
          alt="WhatsApp"
          width={50}
          height={50}
        />
      </a>
    </div>
  );
};

export default WhatsappButton;


