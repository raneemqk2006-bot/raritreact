import React from 'react';
import Header from '../Components/Sections/Header';
import Footer from '../Components/Sections/Footer';
import LoginForm from '../Components/Sections/LoginForm';
import '../Styles/login-style.css';

export default function Login() {
  return (
   <div>
      <Header />
      
      <main className="hero-section-d-flex justify-content-center align-items-center vh-100">
        <div className="w-100 text-center" style={{ maxWidth: '450px', padding: '20px' }}>
          
          <header style={{ textAlign: 'center', color: '#555', letterSpacing: '2px' }}>
            <p style={{ fontSize: '80px', letterSpacing: '2px', fontFamily: "'Times New Roman', Times, serif", margin: 0 }}>
              rarité
            </p>
          </header>

          <hr className="my-4" />

          <section className="mb-4">
            <nav className="section-nav d-flex justify-content-center gap-3">
              <Link href="/" className="text-decoration-none text-dark">Home</Link>
              <Link href="/shop" className="text-decoration-none text-dark">Shop</Link>
              <Link href="/about" className="text-decoration-none text-dark">About</Link>
            </nav>
          </section>

          <LoginForm />

        </div>
      </main>

      <Footer />
    </div>
  );
}