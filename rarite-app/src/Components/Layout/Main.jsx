import { Link } from 'react-router-dom';
import heroImage from '../../assets/images/hero-bg.jpg';
export default function Main(){
    return <>
     <main className="hero-section">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4">
            <div className="container">
                <Link className="navbar-brand text-dark">Rarité</Link>
            </div>
        </nav>
        <nav className="hero-section-nav">
            <div className="ms-auto d-flex gap-3">
                <Link className="nav-link" to="/about.html">About</Link>
                <Link className="nav-link" to="/shop.html">Shop</Link>
                <Link  className="nav-link" to="/login.html">Login</Link>
            </div>
        </nav>
        <div className="container content-wrapper text-center my-5">
            <h1 className="hero-title mb-4">Science Meets<br/>Pure Natural.</h1>
            <p className="hero-text mb-4"> Two mind. Two worlds.One shared vision.<br/>Born from a unique partnership between a computer engineer and a future doctor of pharmacy, 
            <br/> Rarité bridges the gap between scientific precision and digital innovation.<br/> We bring you to essence of premium korean skincare, curated with expert knowledge to unveil your skin's rarest glow.
            </p>
            <Link to="/shop" className="btn btn-luxury mt-2">Shop Now</Link>
        </div>
        <div className="container text-center my-4">
        <img src={heroImage} alt="Rarité Hero" className="img-fluid" />
      </div>
     </main>
    </>
};