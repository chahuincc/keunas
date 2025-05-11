"use client"
import React from 'react';
import styles from "./page.module.css";
import NavBar from "./components/NavBar/NavBar";
import Banners from "./components/Banner/Banners";
import DetailService from "./components/DetailService/DetailService";
import VideoFondo from "./components/VideoFondo/VideoFondo";
import ImageCamioneta from './components/ImageCamioneta/ImageCamioneta';
import WhatsappButton from './components/whatsappButton/WhatsappButton';

export default function Home() {
  const data = [
    {url: '/circular-inca-terraces-of-moray.jpg', type: 'square', subtitle: 'Moray'},
    {url: '/ollantaytambo-cusco-peru.jpg', type: 'square', subtitle: 'Ollantaytambo'},
    {url: '/Vinicunca.jpg', type: 'high', subtitle: 'Vinicunca'},
    {url: '/visitando-el-machupicchu.jpg', type: 'long', subtitle: 'Machu Picchu'},
  ];

  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <VideoFondo/>
        <ImageCamioneta/>
        <DetailService />
        <Banners data={data}/>
        <WhatsappButton /> 
      </main>
      <footer >
      </footer>
    </div>
  );
}
