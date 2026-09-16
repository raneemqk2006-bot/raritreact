import {Link} from 'react-router-dom';

export default function Footer(){
    return <>
    <nav>
             <div className="row text-center g-4">
            <div className="col-md-5 ">
                <p className="text-uppercase small fw-bold text-muted mb-3" style={{letterspacing: '6px',}}>Navigate</p>
                <ul className="list-unstyled d-flex justify-content-center gap-3 small">
                    <li><Link to="/about" class="text-decoration-none text-secondary">About Us</Link></li>
                    <li><Link to="/shop" class="text-decoration-none text-secondary">Shop</Link></li>
                    <li><Link to="/log" class="text-decoration-none text-secondary">Login</Link></li>
                </ul>
            </div>
            <div className="col-md-5 text-md-end">
                <p className="text-uppercase small fw-bold text-muted mb-3" style={{letterspacing: '2px'}}>Official</p>
                <ul className="list-unstyled d-flex justify-content-center justify-content-md-end gap-3 small">
                    <li><a href="#" class="text-decoration-none text-secondary">Contact Us</a></li>
                    <li><a href="#" class="text-decoration-none text-secondary">Privacy</a></li>
                    <li><a href="#" class="text-decoration-none text-secondary">Terms</a></li>
                </ul>
            </div>
        </div>
        <hr className="my-4 opacity-25"/>
        <div className="text-center">
            <p className="small text-muted m-0">&copy; 2026 Rarité. Crafted with Science & Technology.</p>
        </div>


    </nav>

    
    </>
}