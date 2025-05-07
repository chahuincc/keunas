import React from 'react'
import Image from "next/image";
import styles from "./Card.module.css";

const Card = ({image, text}) => {

    

  return (
    <div className={styles.skillsCard}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={image}
            alt="security icon"
            width={80}
            height={80}
          />
          {text}
        </a>
    </div>
  )
}

export default Card