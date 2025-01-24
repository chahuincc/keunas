import React from 'react'
import styles from "./Banners.module.css";
import Image from "next/image";

const Banners = ({data}) => {
  return (
    <div className={styles.banners}>
      <div className={styles.bannerContainer}>
        <Image
          className={`${styles.bannerPrincipal} ${data[0].imgStyle} ${styles.banner}`}
          src={data[0].url}
          alt="Next.js logo"
          layout="fill"
          objectFit="cover" 
          />
        <div className={styles.subtitle}>{data[0].subtitle}</div>
      </div>
      <div className={styles.bannerContainer}>
        <Image
            className={`${data[1].imgStyle} ${styles.banner}`}
            src={data[1].url}
            alt="Next.js logo"
            layout="fill"
            objectFit="cover" 
            priority
            />
        <div className={styles.subtitle}>{data[1].subtitle}</div>
      </div>
      <div className={styles.bannerContainer}>
        <Image
            className={`${data[2].imgStyle} ${styles.banner}`}
            src={data[2].url}
            alt="Next.js logo"
            layout="fill"
          objectFit="cover" 
            priority
        />
        <div className={styles.subtitle}>{data[2].subtitle}</div>
      </div>
      <div className={styles.bannerContainer}>
        <Image
            className={`${data[3].imgStyle} ${styles.banner}`}
            src={data[3].url}
            alt="Next.js logo"
            width={180}
            height={38}
            priority
            />
        <div className={styles.subtitle}>{data[3].subtitle}</div>
      </div>
    </div>
  )
}

export default Banners