import React from 'react';
import Header from '../Components/Sections/Header';
import Footer from '../Components/Sections/Footer'; 
import AboutHeader from '../Components/Sections/AboutHeader';
import MainAbout from '../Components/Layout/MainAbout';
import '../Styles/about-style.css'; 

export default function About() {
  return (
      <div>
      <Header />
      <AboutHeader />
      <MainAbout />
      <Footer />
    </div>
  );
}