// ProductList.js
import React, { useState } from 'react';
import './HomeProductList.css';
import Product from '../Product/Product';
import Room from '../../img/room.avif';
import Lounge from '../../img/purpleLounge.jpg'
import Ceiling from '../../img/POPCeiling.webp'
import { FaStarHalfAlt, FaStar } from "react-icons/fa";

const HomeProductList = () => {
  const products = [
    {
      img: Room,
      name: "Modern TV Unit",
      price: "$1200",
      icon: [
        <FaStar className="goldStar" />,
        <FaStar className="goldStar" />,
        <FaStar className="goldStar" />,
        <FaStar className="goldStar" />,
        <FaStar />
      ]
    },
    {
      img: Ceiling,
      name: "Interior Ceiling with Lighting",
      price: "$98",
      icon: [
        <FaStar className="goldStar" />,
        <FaStar className="goldStar" />,
        <FaStarHalfAlt className="goldStar" />,
        <FaStar />,
        <FaStar />
      ]
    },
    {
      img: Lounge,
      name: "Blue LED Living Room",
      price: "$1200",
      icon: [
        <FaStar className="goldStar" />,
        <FaStar className="goldStar" />,
        <FaStar className="goldStar" />,
        <FaStar className='goldStar'/>,
        <FaStar />
      ]
    },


  ];

  

  return (
      <div className='products'>
        {products.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
  );
};

export default HomeProductList;
