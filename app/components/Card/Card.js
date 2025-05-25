import React from 'react'
import Image from "next/image";
import styles from "./Card.module.css";
import useIntersectionObserver from '@/app/hooks/useIntersectionObserver';

const Card = ({image, text, tipeAnimation}) => {

    const [isVisible, cardRef] = useIntersectionObserver(0.5);

  return (
    <div className={`${styles.skillsCard} ${tipeAnimation == 'left' ? styles.skillsCardLeft : styles.skillsCardRight} ${isVisible ? styles.animate : ''}`} ref={cardRef}>
          <Image
            aria-hidden
            src={image}
            alt="icon_app"
            width={60}
            height={60}
            className={styles.icon}
          />
          <p>{text}</p>
    </div>
  )
}

export default Card