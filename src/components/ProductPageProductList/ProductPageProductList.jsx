import React from 'react';
import './ProductPageProductList.css';
import Product from '../Product/Product';
import TVUnit from '../../img/room.avif';
import Fireplace from '../../img/fireplace.jpg';
import Sofa from '../../img/sofa.jpg'
import Sink from '../../img/sink.jpg'
import Wall from '../../img/wall.webp'
import Wardrobe from '../../img/wardrobe.webp'
import { FaStarHalfAlt, FaStar } from "react-icons/fa";

const ProductPageProductList = ({addToWishList}) => {

  const products = [
    {
      img: TVUnit,
      name: "Modern TV Unit",
      price: "$1200",
      icon: [<FaStar className="goldStar" />, <FaStar className="goldStar" />, <FaStar className="goldStar" />, <FaStar className="goldStar" />, <FaStar />]
    },
    {
      img: Fireplace,
      name: "Exotic Irish Fireplace",
      price: "$143",
      icon: [<FaStar className="goldStar" />, <FaStar className="goldStar" />, <FaStarHalfAlt className="goldStar" />, <FaStar />, <FaStar />]
    },
    {
      img: Sofa,
      name: "Hardwood Sofa",
      price: "$76",
      icon: [<FaStar className="goldStar" />, <FaStar className="goldStar" />, <FaStar className="goldStar" />, <FaStar className="goldStar" />, <FaStar />]
    },
    {
      img: Sink,
      name: "Black Kitchen Sink",
      price: "$78",
      icon: [<FaStar className="goldStar" />, <FaStar className="goldStar" />, <FaStarHalfAlt className="goldStar" />, <FaStar />, <FaStar />]
    },
    {
      img: Wall,
      name: "Living Room Wallpaper",
      price: "$93",
      icon: [<FaStar className="goldStar" />, <FaStar className="goldStar" />, <FaStarHalfAlt className="goldStar" />, <FaStar />, <FaStar />]
    },
    {
      img: Wardrobe,
      name: "Classy Designer Closet",
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

export default ProductPageProductList;
