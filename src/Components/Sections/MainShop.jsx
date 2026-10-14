import { useState } from 'react';
import { Link } from 'react-router-dom';
import {MenuContext } from '../../Context/MenuContext';
import { useContext } from 'react';
import AddItem from './AddItem';

export default function MainShop() {
  const {products , cartCount, handleAddToCart}= useContext(MenuContext);
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="hero-section-container">
      <section className="hero-section text-center py-4">
        <div className="hero-content">
          <nav className="nav-shop mb-3">
            <div className="nav-shop-a d-flex justify-content-center gap-3">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/log">Login</Link>
              <Link to="/reg">Register</Link>
            </div>
          </nav>
          <h1 className="logo">Rarité</h1>
          <h2 className="logobrand">Shop</h2>
        </div>

      
        <nav className="navbar style-nav px-3 py-2 mt-3" style={{ backgroundColor: 'rgb(201, 201, 199)' }}>
          <div className="container-fluid d-flex justify-content-between align-items-center">
            <Link to="/cart" className="text-dark position-relative text-decoration-none p-3 fs-4">
            <img
            src="public/shopping-cart.png"
            alt="cart"
            style={{width:"30px", height:"30px"}}
            />
            {cartCount > 0 && (
               <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-6">
                {cartCount}
              </span>
            )}
             
            </Link>
            <button 
            onClick={() => setShowForm(!showForm)} 
            className="btn btn-outline-dark btn-sm fw-semibold"
          >
            {showForm ? '✕ Close Admin Panel' : '+ Add New Product (Admin)'}
          </button>
          </div>
        </nav>
        {showForm && (
        <div className="container my-4">
          <AddItem />
        </div>
      )}
      
        
      </section>

      <section className="container my-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
          {products.map((product) => (
            <div className="col" style={{ maxWidth: '22rem' }} key={product.id}>
              <div className="card h-100 shadow-sm p-3 d-flex flex-column align-items-center">
                <div className="w-100 d-flex align-items-center justify-content-center mb-3" style={{height:'200px', background:'#f0ede9', borderRadius:'4px'}}>
                  <img 
                  src={product.imgSrc} 
                  alt={product.title}
                  className="card-img-top" 
                  style={{maxHeight:'100%',maxWidth:'100%',objectFit: 'contain' }} 
                />
                  </div>
                
                <div className="card-body d-flex flex-column justify-content-between w-100 p-0 text-center">
                  <div>
                    <h5 className="card-title fs-6 fw-bold mb-2">{product.title}</h5>
                    <p className="card-text text-muted small mb-3">{product.desc}</p>
                  </div>
                  <div className="mt-auto pt-2">
                    <button 
                      onClick={() => handleAddToCart(product)} 
                      className="btn btn-primary w-100 mb-2"
                    >
                      ADD TO CART
                    </button>
                    <h5 className="text-primary text-center m-0 fs-6 fw-bold" style={{color:'#666'}}>{product.price}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <br />
      <hr />
      <br />

      <section className="text-center">
        <h1 style={{ display: 'flex', justifyContent: 'center', fontFamily: "'MonteCarlo', serif" }}>
          Rarité
        </h1>
      </section>
    </main>
  );
}