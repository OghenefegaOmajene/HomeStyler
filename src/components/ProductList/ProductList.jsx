// ProductList.js
import React, { useState } from 'react';
import './ProductList.css';
import Product from '../Product/Product';
import Room from '../../img/room.avif';
import { FaStarHalfAlt, FaStar, FaCircle } from "react-icons/fa";

const ProductList = ({ addToCart }) => {
  const products = [
    {
      img: Room,
      name: "Modern TV Unit",
      price: "$3.76",
      icon: [
        <FaStar className="goldStar" />,
        <FaStar className="goldStar" />,
        <FaStar className="goldStar" />,
        <FaStar className="goldStar" />,
        <FaStar />
      ]
    },
    {
      img: Room,
      name: "Modern TV Unit",
      price: "$3.76",
      icon: [
        <FaStar className="goldStar" />,
        <FaStar className="goldStar" />,
        <FaStarHalfAlt className="goldStar" />,
        <FaStar />,
        <FaStar />
      ]
    },
    {
      img: Room,
      name: "Modern TV Unit",
      price: "$3.76",
      icon: [
        <FaStar className="goldStar" />,
        <FaStar className="goldStar" />,
        <FaStarHalfAlt className="goldStar" />,
        <FaStar />,
        <FaStar />
      ]
    },
    {
      img: Room,
      name: "Modern TV Unit",
      price: "$3.76",
      icon: [
        <FaStar className="goldStar" />,
        <FaStar className="goldStar" />,
        <FaStar className="goldStar" />,
        <FaStar className="goldStar" />,
        <FaStar />
      ]
    },
    {
      img: Room,
      name: "Modern TV Unit",
      price: "$3.76",
      icon: [
        <FaStar className="goldStar" />,
        <FaStar className="goldStar" />,
        <FaStarHalfAlt className="goldStar" />,
        <FaStar />,
        <FaStar />
      ]
    },
    {
      img: Room,
      name: "Modern TV Unit",
      price: "$3.76",
      icon: [
        <FaStar className="goldStar" />,
        <FaStar className="goldStar" />,
        <FaStarHalfAlt className="goldStar" />,
        <FaStar />,
        <FaStar />
      ]
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const totalTickers = Math.ceil(products.length / 3); // Calculate total tickers

  const handlePrevClick = () => {
    const newIndex = (activeIndex - 1 + totalTickers) % totalTickers;
    setActiveIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = (activeIndex + 1) % totalTickers;
    setActiveIndex(newIndex);
  };

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  const displayedProducts = products.slice(activeIndex * 3, activeIndex * 3 + 3); // Get 3 products per ticker

  return (
    <div className="carousel-container">
      <div className="carousel">
        <button className="carousel-control prev" onClick={handlePrevClick}>
          {"<"}
        </button>
        <div className="carousel-products">
          {displayedProducts.map((product, index) => (
            <div
              key={index}
              className={`carousel-item ${index === activeIndex ? "active" : ""}`}
            >
              <Product key={index} {...product} addToCart={() => addToCart(product)} />
            </div>
          ))}
        </div>
        <button className="carousel-control next" onClick={handleNextClick}>
          {">"}
        </button>
      </div>
      <div className="carousel-indicators">
        {Array.from({ length: totalTickers }).map((_, index) => (
          <FaCircle
            key={index}
            className={`indicator ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
