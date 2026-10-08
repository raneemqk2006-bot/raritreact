import React, {useState, useContext} from 'react';
import {MenuContext} from "../../Context/MenuContext";

export default function AddItem(){
    const {addItem} = useContext(MenuContext);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [imgSrc, setImgSrc] = useState('');

    const handleSubmit =(e) =>{
        e.preventDefault();
        if( !title || !price ) return;
        addItem({title , price: parseFloat(price) ,imgSrc: imgSrc || 'https://via.placeholder.com/200'});
        setTitle('');
        setDesc('');
        setPrice('');
        setImgSrc('');
    };
    return (
     <div className="row justify-content-center my-4">
      <div className="col-md-8 col-lg-6">
        <div 
          className="p-4 rounded-4 shadow-sm border-0" 
          style={{ backgroundColor: 'rgb(245, 244, 240)' }}
        >
          <h4 
            className="mb-4 text-center fw-bold" 
            style={{ fontFamily: "'MonteCarlo', serif", fontSize: '2rem', color: '#333' }}
          >
            Add New Product
          </h4>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label small text-muted text-uppercase fw-semibold">
                Product Title
              </label>
              <input
                type="text"
                className="form-control border-0 py-2 rounded-3 shadow-none bg-white"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Cleansing Gel"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label small text-muted text-uppercase fw-semibold">
                Description
              </label>
              <input
                type="text"
                className="form-control border-0 py-2 rounded-3 shadow-none bg-white"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="e.g. Gentle daily cleanser"
              />
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label small text-muted text-uppercase fw-semibold">
                  Price ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  className="form-control border-0 py-2 rounded-3 shadow-none bg-white"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="25.00"
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label small text-muted text-uppercase fw-semibold">
                  Image URL / Path
                </label>
                <input
                  type="text"
                  className="form-control border-0 py-2 rounded-3 shadow-none bg-white"
                  value={imgSrc}
                  onChange={(e) => setImgSrc(e.target.value)}
                  placeholder="/images/product.jpg"
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="btn btn-dark w-100 py-2 mt-3 rounded-pill fw-semibold border-0"
              style={{ backgroundColor: '#2b2b2b' }}
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
    );
}