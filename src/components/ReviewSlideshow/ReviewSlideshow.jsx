import React from 'react';
import Slider from "react-slick";
import Reviews from '../Reviews/Reviews';

// Slideshow Component
const ReviewSlideshow = () => {
  const props = [
    message = 'I love this product. Displaying customer reviews or testimonials on your website is a wise way to convert visitors into customers.', 
    name = "Daniels Fega"
            icon = {[
              <FaStar className='goldStar'/>,
              <FaStar className='goldStar'/>,
              <FaStar className='goldStar'/>,
              <FaStar/>,
              <FaStar />
            ]},
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="review-slideshow">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <Reviews key={index} review={review} />
        ))}
      </Slider>
    </div>
  );
};

export default ReviewSlideshow;
