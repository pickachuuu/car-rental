import React from 'react';
import Logo from '../assets/Logo.png'; // Assuming your logo is an image

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={Logo} className='img' alt="Car Rental Logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample05">
          <ul className="navbar-nav ml-auto mr-5"> {/* Centered Links */}
            <li className="nav-item">
              <a className="nav-link active text-custom" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-custom" href="#">Fleet</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-custom" href="#">Contact</a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto"> {/* Right-side Login */}
            <li className="nav-item">
              <a className="nav-link text-custom" href="/Login">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
