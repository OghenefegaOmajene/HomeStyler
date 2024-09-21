import React from 'react';
import './Cart.css';
import { FaTimes, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const Cart = ({ cartItems, toggleCart, updateQuantity, removeFromCart }) => {


    const handleClick = () =>{
        Swal.fire({
          position: "middle",
          icon: "success",
          title: "Thanks for shopping with us. Your purchase will be delivered shortly",
          showConfirmButton: false,
          timer: 3000
        })
    }  

    // Handles the deletion of a product with SweetAlert confirmation
    const handleDelete = (item) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              removeFromCart(item.name)
              Swal.fire({
                title: "Deleted!",
                text: "The product has been removed from your cart.",
                icon: "success"
              });
            }
          });
    }


    const isCartEmpty = () => {
      return cartItems.length === 0;
    };


  // Function to calculate total price of all items in the cart
  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => {
      const itemTotal = parseFloat(item.price.replace('$', '')) * item.quantity;
      return sum + itemTotal;
    }, 0).toFixed(2);
  };

  const handleQuantityChange = (productName, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(productName, newQuantity);
    } else {
      removeFromCart(productName);
    }
  };

  return (
    <div className="cartSidebar">
      <div className="cartHeader">
        <h2>Your Cart</h2>
        <button onClick={toggleCart}><FaTimes /></button>
      </div>
      <div className="cartItems">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item, index) => {
            const itemTotalPrice = (parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2);
            return (
              <div key={index} className="cartItem">
                <img src={item.img} alt={item.name} />
                <div className="cartItemDetails">
                  <h4>{item.name}</h4>
                  <p>${itemTotalPrice}</p> {/* Display the total price for this item */}
                  <div className="cartQuantity">
                    <button onClick={() => handleQuantityChange(item.name, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.name, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <button className="removeBtn" onClick={() => handleDelete(item)}>
                  <FaTrashAlt />
                </button>
              </div>
            );
          })
        )}
      </div>

      {!isCartEmpty() && (
        <div className="cartTotal">
          <h3>Total: ${calculateTotal()}</h3> {/* Display the total sum */}
        </div>
      )}

      {!isCartEmpty() && (
        <button className='buy' onClick={handleClick}>Buy Now</button>
      )}
    </div>
  );
}

export default Cart;
