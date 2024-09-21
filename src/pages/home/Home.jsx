import React from 'react';
import { useState } from 'react';
import './Home.css';
// import Navbar from '../../components/Navbar/Navbar';
import Counter from '../../components/Counter';
import ProductList from '../../components/ProductList/ProductList';
// import whyUs from '../../img/whyChooseUs.gif';
import Reviews from '../../components/Reviews/Reviews';
import Button from '../../components/Button/Button';
import { FaPlus } from "react-icons/fa";
import { FaStarHalfAlt, FaStar, FaUsers, FaUserTie } from "react-icons/fa";
import { BiSolidShoppingBags } from "react-icons/bi";
import { GiPaintRoller } from "react-icons/gi";
import { HiEmojiHappy } from "react-icons/hi";
import { PiChampagneFill } from "react-icons/pi";
import { useForm } from 'react-hook-form';
import { MdMail } from 'react-icons/md';
import Swal from 'sweetalert2';


const Home = ({addToCart}) => {
  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = data =>{
      console.log(data);
      Swal.fire({
        position: "middle",
        icon: "success",
        title: "Your Feedback has been delivered!",
        showConfirmButton: false,
        timer: 3000
      })
  }
  
  return (
    <div className='home'>
      <div className='heroSec'>
        <div className="heroSecTxt">
          <h1>"Transform Your Interior Space, Elevate Your Style"</h1>
          <h3>Discover exquisite decor designs that turn every room into a masterpiece. Whether it's a vintage look you desire or something modern, we've got you covered....  <br />Make your dream home come to life with HomeStyler!</h3>
          {/* <Button style={{width: "300px"}}btnName="View Interior Decor Designs"><i><FaPaintRoller /></i></Button> */}
          <Button className="heroSecBtn"
            width="300px" 
            height ="50px"
            backgroundColor= "#eeacff" 
            hoverBackgroundColor = "#dd54ff7a"
            color = "white" 
            hoverColor="#eeacff"
            btnName="View Interior Decor Designs" 
            icon={<GiPaintRoller />} 
          />

        </div>
      </div>


      <div className="portfolio">
          <div className="portfolioCard" id='portfolioCard1'>
              <i className='portfolioIcon'><GiPaintRoller /></i>
              <Counter stopAt={100}></Counter><FaPlus />
              <p>Completed Projects</p>
          </div>

          <div className="portfolioCard" id='portfolioCard2'>
            <i className='portfolioIcon'><FaUsers/></i>
            <Counter stopAt={258}></Counter>
            <FaPlus />
            <p> Employees</p>
          </div>

          <div className="portfolioCard" id='portfolioCard3'>
            <i className='portfolioIcon'><HiEmojiHappy /></i>
            <Counter stopAt={367}></Counter>
            <FaPlus/>
            <p>Satisfied Clients</p>
          </div>

      </div>


      <div className="popularDesigns">
          <h1>Check out some of the popular designs this season!</h1>
          <ProductList addToCart={addToCart}></ProductList>
      </div>


      <div className="whyUs">
        <div className="whyUsIntro">
          <h1>Why Us?</h1>
        </div>
        
        <div className="whyUsBox">

            <div className="box1" id='box1'>
              <i><PiChampagneFill /></i>
              <h1>Unique & Trendy Designs at your Fingertips</h1>
              <p>We offer a unique selection of home decor that combines beauty with functionality. Our collection is tailored to enhance your living space with timeless and trendy items you won’t find anywhere else.</p>
            </div>

            <div className="box1" id="box2">
              <i><BiSolidShoppingBags /></i>
              <h1>Affordable Luxury</h1>
              <p>We believe that stylish, high-quality home decor should be accessible to everyone. That’s why we offer a range of price points, ensuring you can find beautiful pieces that fit your budget.</p>
            </div>

            <div className="box1" id='box3'>
              <i><FaUserTie /></i>
              <h1>Exceptional Customer Service</h1>
              <p>Your satisfaction is our top priority. Our friendly and knowledgeable customer service team is always ready to assist with any questions or concerns, ensuring a seamless shopping experience from start to finish.</p>
            </div>
        </div>
      </div>


      <div className="reviews">
        <div className="reviewTxt">
          <h1>What People Think of our Work</h1>
        </div>

        <div className="reviewCards">
          {/* <Slider {...settings}> */}
            <Reviews 
              message='The team brings exquisite decors to your doorstep!' 
              name="Daniels Fega"
              icon={[
                <FaStar className='goldStar' />,
                <FaStar className='goldStar' />,
                <FaStar className='goldStar' />,
                <FaStarHalfAlt className='goldStar' />,
                <FaStar />
              ]}
            />

            <Reviews 
              message='This decor style fits my home perfectly!' 
              name="Alex Jane"
              icon={[
                <FaStar className='goldStar' />,
                <FaStar className='goldStar' />,
                <FaStar className='goldStar' />,
                <FaStar className='goldStar' />,
                <FaStar />
              ]}
            />

            <Reviews 
              message='Absolutely amazing design services!' 
              name="Chris R"
              icon={[
                <FaStar className='goldStar' />,
                <FaStar className='goldStar' />,
                <FaStar className='goldStar' />,
                <FaStar className='goldStar' />,
                <FaStar />
              ]}
            />

          
          {/* </Slider> */}
        </div>

      </div>

      <div className="feedback">
        
        <div className="feedbackTxt">
            <h1> <span id='feedbackSpan'> "User Experience Feedback"</span></h1>
            <p>Tell Us About Your Experience. We aim to make your experience seamless. 
              What did you enjoy, and where can we improve?. Please let us know what you think, what we’re doing right, or what we can do better!
              We’re committed to providing excellent service, and your feedback is crucial. Let us know how we did!
            </p>
            
            <ul>
              <li>How easy was it to navigate our website?</li>
              <li>Did you find what you were looking for?</li>
              <li>What features did you like the most?</li>
              <li>Any suggestions or comments?</li>
            </ul>
        </div>

          <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                  <label htmlFor="fullName">Name</label>
                  <input 
                      type="text" 
                      id='fullName' 
                      name='fullName' 
                      {...register('fullName',{
                          required: 'Fullname is required!'
                      })}
                  />
                  {errors.fullName && <span> {errors.fullName.message} </span>} 
              </div>

              <div>
                  <label htmlFor="email">Email</label>
                  <input 
                      type="email" 
                      id='email' 
                      name='email' 
                      {...register('email',{
                          required: 'Email is required!', 
                          pattern:{value: /^[^@]+@[^@]+\.[^@ .]{2,}$/, message:"Invalid Email Address"}
                      })}
                  />
                  {errors.email && <span> {errors.email.message} </span>}
              </div>

              <div>
                  <label htmlFor="feedBack">Feedback</label>
                  <input 
                      type="text" 
                      id='feedBack' 
                      name='feedBack' 
                      {...register('feedBack',{
                          required: 'Your Feedback is required!', 
                          
                      })}
                  />
                  {errors.feedBack && <span> {errors.feedBack.message} </span>}
              </div>

              <Button className="submitBtn"
                width="300px" 
                height ="50px"
                backgroundColor= "#eeacff" 
                hoverBackgroundColor = "#dd54ff7a"
                color = "white" 
                hoverColor="#eeacff"
                btnName="Submit" 
                icon={<MdMail />} 
               />
          </form>

        </div>

      
    </div>
  );
}

export default Home;
