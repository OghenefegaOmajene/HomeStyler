import React from 'react'
import { useState } from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
import Logo from '../../img/logo1.png'
import { IoIosHeart } from 'react-icons/io'
import { FaShoppingCart } from "react-icons/fa";
import Cart from '../Cart/Cart'

const Navbar = ({ cartItemCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
  
    
    const updateQuantity = (productName, quantity) => {
      setCartItems(cartItems.map(item =>
        item.name === productName ? { ...item, quantity: quantity } : item
      ));
    };
  
    const removeFromCart = (productName) => {
      setCartItems(cartItems.filter(item => item.name !== productName));
    };
  
    const toggleCart = () => {
      setIsCartOpen(!isCartOpen);
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
        <Link to="/" >Products</Link>
        <Link to="/" >Gallery</Link>
      </div> 

      <div className="navBtn">
        <button id='favorites'>
          <i><IoIosHeart></IoIosHeart></i>
        </button>

        <button id='cart' onClick={toggleCart}>
          <i><FaShoppingCart></FaShoppingCart></i>
          <span className="cart-count">{cartItemCount}</span>
        </button>

        {isCartOpen && (
            <Cart
              cartItems={cartItems}
              toggleCart={toggleCart}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
        )}
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