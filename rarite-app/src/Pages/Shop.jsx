import React from 'react';
import Header from '../Components/Sections/Header';
import Footer from '../Components/Sections/Footer';
import MainShop from '../Components/Sections/MainShop';
import '../Styles/shop-style.css';

export default function Shop() {
  return (
    <div>
      <Header />
      <MainShop />
      <Footer />
    </div>
  );
}