import { useState } from "react";
import "./Product.css";
import { FaShoppingBasket, FaHeart } from "react-icons/fa";
import Swal from "sweetalert2";
import Button from "../Button/Button";

const Product = (props) => {
  const handleClick = () => {
    props.addToCart();
    Swal.fire({
      position: "middle",
      icon: "success",
      title: "Added to Cart Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="Block">
      <div className="productImage">
        <img src={props.img} alt={props.name} />
        {/* Add to Cart and Add to Favorites buttons */}
        <div className="overlay-buttons">
          <Button
            className="addToCartBtn"
            onClick={handleClick}
            width="40px"
            height="40px"
            backgroundColor="#eeacff"
            hoverBackgroundColor="#dd54ff7a"
            color="white"
            hoverColor="#eeacff"
            icon={<FaShoppingBasket />}
          />
          <Button
            className="addToFavoritesBtn"
            onClick={() => alert("Added to Favorites")}
            width="40px"
            height="40px"
            backgroundColor="#f08080"
            hoverBackgroundColor="#ff6a6a"
            color="white"
            hoverColor="#f08080"
            icon={<FaHeart />}
          />
        </div>
      </div>

      <div className="productTxt">
        <h1 id="productName">
          <b>{props.name}</b>
        </h1>
        <p id="price">
          <b>{props.price}</b>
        </p>
        <i>{props.icon}</i>
      </div>
    </div>
  );
};

export default Product;
