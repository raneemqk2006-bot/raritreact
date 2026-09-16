export default function MainAbout() {
  return (
    <main>
     
      <section className="container my-5">
        <div className="text-center mb-4">
          <h5 className="found-italic">TECH MEET CLINICAL SKINCARE</h5>
        </div>

        <div className="row justify-content-center g-5 px-4">
        
          <div className="col-md-5">
            <div 
              className="p-4" 
              style={{ backgroundColor: 'rgba(26, 26, 26, 0.02)', borderRadius: '12px' }}
            >
              <img 
                src="/Analyse de la peau du visage selon l'expertise Celestetic en dermocosmetique.jpg" 
                alt="Tech Skincare" 
                className="img-fluid rounded-3 mb-4"
              />
              <span className="text-muted small text-uppercase" style={{ letterSpacing: '1px' }}>
                01 / Engineering
              </span>
              <h4 className="mt-2 mb-3" style={{ fontFamily: "'Times New Roman', serif", fontSize: '1.25rem' }}>
                Bringing digital precision to the world of beauty.
              </h4>
              <p className="text-secondary lh-lg" style={{ fontSize: '0.9rem' }}>
                With a background in computer engineering...
              </p>
            </div>
          </div>

        
          <div className="col-md-5">
            <div 
              className="p-4" 
              style={{ backgroundColor: 'rgba(26, 26, 26, 0.02)', borderRadius: '12px' }}
            >
              <img 
                src="/Midjourney Feed.jpg" 
                alt="Clinical Science" 
                className="img-fluid rounded-3 mb-4"
                style={{ width: '100%' }}
              />
              <span className="text-muted small text-uppercase" style={{ letterSpacing: '1px' }}>
                02 / Science
              </span>
              <h4 className="mt-2 mb-3" style={{ fontFamily: "'Times New Roman', serif", fontSize: '1.25rem' }}>
                Bridging the gap between clinical efficacy and glowing skin.
              </h4>
              <p className="text-secondary lh-lg" style={{ fontSize: '0.9rem' }}>
                As a future doctor of pharmacy...
              </p>
            </div>
          </div>
        </div>
      </section>

    
      <section className="container my-5">
        <div className="text-center mb-4">
          <h5 className="val">OUR CORE VALUES</h5>
        </div>

        <div className="row justify-content-center text-center gap-4">
          <div className="col-md-3">
            <h6 className="val1">01 / Authenticity</h6>
            <p className="p1">100% authentic, curated premium Korean skincare sourced directly for your skin's health.</p>
          </div>
          <div className="col-md-3">
            <h6 className="val2">02 / Science Backed</h6>
            <p className="p2">Formulas checked and approved through strict pharmaceutical standards to ensure absolute safety.</p>
          </div>
          <div className="col-md-3">
            <h6 className="val3">03 / Tech Innovation</h6>
            <p className="p3">A modern digital shopping experience designed meticulously to simplify your daily beauty routine.</p>
          </div>
        </div>
      </section>

     
      <section className="container my-5">
        <div className="text-center mb-4">
          <h5 className="aes">THE AESTHETIC</h5>
        </div>

        <div className="row justify-content-center g-5 px-4 mb-4">
          <div className="col-md-5">
            <div className="p-4" style={{ backgroundColor: 'rgba(26, 26, 26, 0.02)', borderRadius: '12px' }}>
              <img src="/You've probably seen Centella Asiatica in your favorite calming serum.jpg" className="img-fluid rounded" alt="Aesthetic 1" />
            </div>
          </div>
          <div className="col-md-5">
            <div className="p-4" style={{ backgroundColor: 'rgba(26, 26, 26, 0.02)', borderRadius: '12px' }}>
              <img src="fisetin.jpg" className="img-fluid rounded" alt="Aesthetic 2" />
            </div>
          </div>
        </div>

        <div className="row justify-content-center g-5 px-4">
          <div className="col-md-5">
            <div className="p-4" style={{ backgroundColor: 'rgba(26, 26, 26, 0.02)', borderRadius: '12px' }}>
              <img src="/Beauty of Joseon Revive Eye Serum _ Ginseng + Retinal - 30 ml.jpg" className="img-fluid rounded" alt="Aesthetic 3" />
            </div>
          </div>
          <div className="col-md-5">
            <div className="p-4" style={{ backgroundColor: 'rgba(26, 26, 26, 0.02)', borderRadius: '12px' }}>
              <img src="/Complice - Artist _ Gallery - Florian Sommet - Still life.jpg" className="img-fluid rounded" alt="Aesthetic 4" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}