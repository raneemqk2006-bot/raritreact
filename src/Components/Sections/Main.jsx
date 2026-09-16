import { Link } from 'react-router-dom';
import heroImage from '../../assets/images/hero-bg.jpg';
export default function Main(){
    return <>
     <main className="hero-section d-flex vh-100 p-0">
        <div className="hero-left position-relative col-6 p-0 h-100">
           <Link className="navbar-brand text-dark position-absolute top-0 start-0 m-4 fs-1 fw-bold z-3" to="/">
           Rarité
           </Link>
           <img src={heroImage} alt="Rarité Hero" className="img-fluid h-100 w-100" style={{ objectFit: 'cover'}} />
        </div>
        <div className="hero-right coi-6 d-flex flex-column justify-content-between p-5 bg-light h-100">
            <nav className="hero-section-nav d-flex justify-content-end gap-4">
                <Link className="nav-link text-uppercase" to="/about">About</Link>
                <Link className="nav-link text-uppercase" to="/shop">Shop</Link>
                <Link  className="nav-link text-uppercase" to="/log">Login</Link>
                <Link className='nav-link text-uppercase'to="/reg">Register</Link>    
            </nav>
        <div className="content-wrapper my-auto px-4">
            <h1 className="hero-title mb-4 display-5">Science Meets<br/>Pure Natural.</h1>
            <p className="hero-text mb-4 text-muted"> Two mind. Two worlds.One shared vision.<br/>Born from a unique partnership between a computer engineer and a future doctor of pharmacy, 
            <br/> Rarité bridges the gap between scientific precision and digital innovation.<br/> We bring you to essence of premium korean skincare, curated with expert knowledge to unveil your skin's rarest glow.
            </p>
            <Link to="/shop" className="btn btn-luxury mt-2">Shop Now
            </Link>
        </div>
      </div>
     </main>
    </>
};