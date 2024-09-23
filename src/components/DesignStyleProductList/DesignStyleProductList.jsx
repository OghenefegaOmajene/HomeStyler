import React from 'react';
import './DesignStyleProductList.css';
import Product from '../Product/Product';
import LEDLivingRooom from '../../img/ledlivingroom.webp'
import Lounge from '../../img/purpleLounge.jpg'
import Kitchen from '../../img/kitchen.jpg';
import LivingRoom from '../../img/livingRoom.webp';
import Bathroom from '../../img/bathroom.jpg';
import DiningRoom from '../../img/diningRoom.jpg';
import { FaStarHalfAlt, FaStar } from "react-icons/fa";

const DesignStyleProductList = ({addToWishList}) => {

  const products = [
    {
      img: LEDLivingRooom,
      name: "Blue LED Living Room",
      price: "$1200",
      icon: [<FaStar className="goldStar" />, <FaStar className="goldStar" />, <FaStar className="goldStar" />, <FaStar className="goldStar" />, <FaStar />]
    },
    {
      img: Lounge,
      name: "Violet Lounge",
      price: "$143",
      icon: [<FaStar className="goldStar" />, <FaStar className="goldStar" />, <FaStarHalfAlt className="goldStar" />, <FaStar />, <FaStar />]
    },
    {
      img: LivingRoom,
      name: "Luxurious Modern Living Room",
      price: "$476",
      icon: [<FaStar className="goldStar" />, <FaStar className="goldStar" />, <FaStar className="goldStar" />, <FaStar className="goldStar" />, <FaStar />]
    },
    {
      img: DiningRoom,
      name: "Natural Themed Dining Area",
      price: "$302",
      icon: [<FaStar className="goldStar" />, <FaStar className="goldStar" />, <FaStar />, <FaStar />, <FaStar />]
    },
    {
      img: Bathroom,
      name: "Polish Bathroom Decor",
      price: "$783",
      icon: [<FaStar className="goldStar" />, <FaStar className="goldStar" />, <FaStarHalfAlt className="goldStar" />, <FaStar />, <FaStar />]
    },
    {
      img: Kitchen,
      name: "Belgian Kitchen Setup",
      price: "$2354",
      icon: [<FaStar className="goldStar" />, <FaStar className="goldStar" />, <FaStar className="goldStar" />, <FaStar />, <FaStar />]
    },
  ];

  return (
    <div className='designStyleProducts'>
      <div className='productColumn'>
        {products.slice(0, 3).map((product, index) => (
          <Product
            key={index}
            {...product}
            addToWishList={() => addToWishList(product)}  // Pass the addToWishlist function
          />
        ))}
      </div>
      <div className='productColumn'>
        {products.slice(3, 6).map((product, index) => (
          <Product
            key={index}
            {...product}
            addToWishList={() => addToWishList(product)}  // Pass the addToWishlist function
          />
        ))}
      </div>
      
    </div>
  );
};

export default DesignStyleProductList;
