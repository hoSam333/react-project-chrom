import React from 'react'
import "./Navbar.css"
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaMoon } from "react-icons/fa6";


function Navbar({cartItems , isDark}) {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Bravo Project</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-center">
          <li className="nav-item">
            <Link to={""} className="nav-link active" aria-current="page" href="#">Home</Link>
          </li>
          <li className="nav-item">
            <Link to={"about"} className="nav-link" href="#">About</Link>
          </li>
          <li className="nav-item">
            <Link to={"shop"} className="nav-link" href="#">Shop</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Products
            </a>
            <ul className="dropdown-menu">
              <li><Link to={"fakeapi"} className="dropdown-item" href="#">Fake Api</Link></li>
              <li><Link to={"dummyapi"} className="dropdown-item" href="#">Dummy Api</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to={"contact"} className="nav-link" href="#">Contact</Link>
          </li>
          <li className="nav-item">
            < FaMoon onClick={isDark} className='moon'  />
          </li>

        </ul>

        <div className='icons d-flex align-items-center justifay-content-center  gap-3 '>
          <Link>
            <FaHeart className='icon' />
            <sub> ( 0 ) </sub>
          </Link>
          <Link to={"cart"}>
            <FaCartShopping className='icon' />
            <sub> ( { cartItems.length } ) </sub>
          </Link>
        </div>

      </div>
    </div>
  </nav>
  )
}

export default Navbar
