import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MainShop() {
  const [cartCount, setCartCount] = useState(0);
  const products = [
    {
      id: 1,
      title: 'Beauty of Joseon Cleanser',
      desc: 'Refresh your skin with Beauty of Joseon Green Plum Cleanser. A gentle gel cleanser with plum water and mung bean extract...',
      price: '13.29 JOD',
      imgSrc: '/Beauty of Joseon Green Plum Refreshing Cleanser 100mL.jpg'
    },
    {
      id: 2,
      title: 'SKIN1004 SunScreen',
      desc: 'SKIN1004 Hyalu-Cica Water-Fit Sun Serum SPF 50 PA++++ | Lightweight Korean Sunscreen f or All Skin Types...',
      price: '13.21 JOD',
      imgSrc: '/Comparing Korean SKIN1004 Sunscreens_ Which One is Right for You_.jpg'
    },
    {
      id: 3,
      title: 'Beauty of Joseon SunScreen',
      desc: 'Provides high-level protection against UVA and UVB rays with SPF50+ PA++++ Hydrates skin deeply with 30% rice seed water and soothing panthenol (Vitamin B5) Calms and revitalises skin stressed by sun exposure Lightweight, watery lotion texture absorbs quickly without white cast or greasy residue Leaves a fresh, semi-matte, dewy finish ideal for oily and combination skin Suitable for all skin types. 50ml',
      price: '15.85 JOD',
      imgSrc: '/Beauty of Joseon Relief Sun Aqua-Fresh_ Rice + B5 SPF50+PA++++.jpg'
    },
    {
      id: 4,
      title: 'Anua - Niacinamide 10 TXA 4 Serum',
      desc: 'If your skin regimen can only do so much, power it up with this Anua niacinamide serum.',
      price: '18.80 JOD',
      imgSrc: '/Not To Brag, But Since Prioritising These Korean Skincare Ingredients, My Skin.jpg'
    },
    {
      id: 5,
      title: 'Anua - Heartleaf 77 Soothing Toner',
      desc: 'Highly moisturizing, this toner is infused with 77% houttuynia cordata extract along with other natural ingredients.',
      price: '22 JOD',
      imgSrc: '/Anua Heartleaf 77_ Soothing Toner - Toner; Korean toner; Beauty awards.jpg'
    },
    {
      id: 6,
      title: 'medicube - Collagen Night Wrapping Mask',
      desc: "Don't be surprised if you end up purchasing this collagen mask again and again, as it gives skin an instant glass skin look.",
      price: '17.70 JOD',
      imgSrc: '/jpg(8).jpg'
    },
    {
      id: 7,
      title: 'Beauty of Joseon - Calming Serum Jumbo',
      desc: 'This serum is enriched with EWG green grade ingredients including 50% green tea leaf water, 30% mugwort extract and 2% panthenol.',
      price: '19.5 JOD',
      imgSrc: '/Beauty of Joseon - Calming Serum Green Tea + Panthenol - łagodzące Serum Do Twarzy Z Zieloną Herbatą I Pantenolem.jpg'
    },
    {
      id: 8,
      title: 'Dr. Althea - 345 Relief Cream',
      desc: 'Relief from troubled skin and irritation is finally in sight with the Dr. Althea 345 Relief Cream.',
      price: '20.2 JOD',
      imgSrc: '/Dr_ Althea - 345 Relief Cream _ YesStyle.jpg'
    },
    {
      id: 9,
      title: 'celimax - The Real Noni Moisture Balancing Toner',
      desc: 'Packed with over 80% noni extract, this pH-balanced toner delivers essential nutrients and deep hydration.',
      price: '19.80 JOD',
      imgSrc: '/Celimax - The Real Noni Moisture Balancing Toner.jpg'
    }
  ];

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

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
            <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <Link to="/cart" className="text-dark position-relative text-decoration-none p-3 fs-4">
              <i className="bi bi-cart3"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-6">
                {cartCount}
              </span>
            </Link>
          </div>
        </nav>
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
                      onClick={handleAddToCart} 
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