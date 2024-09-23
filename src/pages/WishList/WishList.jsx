import React from "react";
import "./Wishlist.css";

const Wishlist = ({ wishListItems }) => {
  return (
    <div className="wishlistContainer">
      <h2>My Wishlist</h2>
      {wishListItems.length === 0 ? (
        <p>Your wishlist is empty</p>
      ) : (
        <div className="wishlistGrid">
          {wishListItems.map((item, index) => (
            <div key={index} className="wishlistItem">
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
