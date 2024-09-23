import React from 'react'
import { useState } from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
import Logo from '../../img/logo1.png'
import { IoIosHeart } from 'react-icons/io'
import { FaShoppingCart } from "react-icons/fa";
// import Wishlist from '../../pages/WishList/WishList'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  return (
    <div className='navBar'>
      <div className="navLogo">
          <img src={Logo} alt="" />
      </div>

      <div className={`navLinks ${isMenuOpen ? 'open' : ''}`}>    
        <Link to="/Home" >Home</Link>
        <Link to="/" >About</Link>
        <Link to="/DesignStyles" >Design Styles</Link>
        <Link to="/ProductPage" >Products</Link>
      </div> 

      <div className="navBtn">
        <button id='favorites'>
          <Link to="/WishList"><i><IoIosHeart></IoIosHeart></i></Link>
          
          <span className="cart-count"></span>
        </button>

        <button id='cart'>
          <i><FaShoppingCart></FaShoppingCart></i>
          <span className="cart-count"></span>
        </button>

  
      </div>

      <div className="menu-toggle">
        <input type="checkbox" id="checkbox" checked={isMenuOpen} onChange={toggleMenu} />
        <label htmlFor="checkbox" className="toggle">
          <div className="bars" id="bar1"></div>
          <div className="bars" id="bar2"></div>
          <div className="bars" id="bar3"></div>
        </label>
      </div>
      
    </div>
  )
}

export default Navbar;