import React from 'react';
import { NavLink } from 'react-router-dom';
import Login from '../Button/Login';
import logo from '../../images/logo.png'
import CartBtn from '../Button/CartBtn';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid py-2">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <img style={{width:'70px',}} src={logo} alt="" />
      {/* <NavLink className="navbar-brand mx-auto fw-bold" to="/">hssj</NavLink> */}
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
    <Login/>
    {/* <SignUp/> */}
    <CartBtn/>
    </div>
  </div>
</nav>
    </>
  );
};

export default Header;