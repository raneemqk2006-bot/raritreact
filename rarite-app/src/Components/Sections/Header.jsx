import {Link} from 'react-router-dom';
export default function Header(){
    return <>
        <nav className="nav">
            <div className="nav-container">
            <Link to="index.html">Home</Link>
             <Link to="shop.html">Shop</Link>
              <Link to="login.html">Login</Link>

            </div>
          </nav>
        <h2 className="header">About</h2>
         <nav className="navbar">
        <p>
            "Born from a unique partnership between a computer engineer and a future doctor of pharmacy, Rarité bridges the gap between scientific precision and digital innovation. Our mission is to simplify the world of premium Korean skincare by curating high-performance, expert-tested products. We combine deep pharmaceutical knowledge with a seamless modern experience to bring you your skin’s rarest, healthiest glow. Welcome to a space created by girls, for girls who refuse to settle for anything less than extraordinary."
        </p>
        </nav>
        <br/>
        <br/>
        <br/>
    </>
 }
