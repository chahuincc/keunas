"use client"
import React from 'react';
import styles from "./page.module.css";
import NavBar from "./components/NavBar/NavBar";
import Banners from "./components/Banner/Banners";
import DetailService from "./components/DetailService/DetailService";
import VideoFondo from "./components/VideoFondo/VideoFondo";
import ImageCamioneta from './components/ImageCamioneta/ImageCamioneta';
import WhatsappButton from './components/whatsappButton/WhatsappButton';
import Footer from './components/Footer/Footer';

export default function Home() {
  const data = [
    {url: '/moray.jpg', type: 'square', subtitle: 'Moray'},
    {url: '/cuscoWomen.jpg', type: 'square', subtitle: 'cultura'},
    {url: '/Vinicunca.jpg', type: 'high', subtitle: 'Vinicunca'},
    {url: '/machupicchu.jpg', type: 'long', subtitle: 'Machu Picchu'},
  ];

  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <VideoFondo id="home"/>
        <ImageCamioneta id="skills"/>
        <DetailService id="about"/>
        <Banners id="galery" data={data}/>
        <WhatsappButton /> 
      </main>
      <footer >
        <Footer id="contac"/>
      </footer>
    </div>
  );
}
