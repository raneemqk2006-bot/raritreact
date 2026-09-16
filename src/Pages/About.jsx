import React from 'react';
import Header from '../Components/Sections/Header';
import Footer from '../Components/Sections/Footer'; 
import MainAbout from '../Components/Layout/MainAbout';
import '../Styles/about-style.css'; 

export default function About() {
  return (
      <div>
      <Header />
      <MainAbout />
      <Footer />
    </div>
  );
}