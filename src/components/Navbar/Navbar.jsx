import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../Assets/logo-dark.webp';
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" to="#">
      <img src={logo} className='' alt=''/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
                  <Link className="nav-link active" to="">home</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link active" to="/movis">PizZa</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/tvshow">Meat Section</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/people">Grill Siction</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/about">Drinks</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/Chicken">Chicken Section</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/signup">signup</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link active" to="/regester">Regester</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link active" to="/login">Login</Link>
                </li>
      </ul> 

      <ul className="navbar-nav ms-auto mb-2 mb-1g-0">
                  
                <li className="nav-item">
                  <Link className="nav-link active" to="https://www.facebook.com/profile.php?id=100010178802930"><i className='fa-brands fa-facebook'></i></Link>
                </li>
                
                
                <li className="nav-item">
                  <Link className="nav-link active" to=""><i className='fa-brands fa-instagram'></i></Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link active" to=""><i className='fa-brands fa-twitter'></i></Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link active" to="/logout">logout</Link>
                </li>




      </ul>
  
    </div>
  </div>
</nav>
    </div>
  )
}
