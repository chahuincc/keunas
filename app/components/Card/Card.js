import React from 'react'
import Image from "next/image";
import styles from "./Card.module.css";

const Card = ({image, text}) => {

  return (
    <div className={styles.skillsCard}>
          <Image
            aria-hidden
            src={image}
            alt="security icon"
            width={60}
            height={60}
          />
          <p>{text}</p>
    </div>
  )
}

export default Card