// import React from 'react'
// import './DesignStyles.css'
// import Button from '../../components/Button/Button';
// import { FaPaintRoller } from "react-icons/fa6";
// import vid from '../../img/techwizvid1.mp4'

// const DesignStyles = () => {
//   return (
//     <div className='body'>
        
//             <video src={vid} autoPlay loop muted>
//               <div className="videoTxt">
//                 <h1>"Choose From a Variety of Interior Decor Combinations"</h1>
//                 <h3>Discover exquisite decor designs that turn every room into a masterpiece. Whether it's a vintage look you desire or something modern, we've got you covered....  <br />Make your dream home come to life with HomeStyler!</h3>
//                 {/* <Button style={{width: "300px"}}btnName="View Interior Decor Designs"><i><FaPaintRoller /></i></Button> */}
//                 <Button className="heroSecBtn"
//                     width="300px" 
//                     backgroundColor= "#eeacff" 
//                     hoverBackgroundColor = "#dd54ff7a"
//                     color = "white" 
//                     hoverColor="#eeacff"
//                     btnName="View Interior Decor Designs" 
//                     icon={<FaPaintRoller />} 
//                 />
//               </div>
//             </video>
            

//         <div className="categories">
//             <div className="search">

//             </div>
//         </div>
//     </div>
//   )
// }

// export default DesignStyles


import React from 'react';
import './DesignStyles.css';
import Button from '../../components/Button/Button';
import { FaPaintRoller } from "react-icons/fa6";
import vid from '../../img/techwizvid1.mp4';

const DesignStyles = () => {
  return (
    <div className='body'>
      <div className='video-container'>
        <video src={vid} autoPlay loop muted />
        <div className="vidTxt">
          <h1>"Choose From a Variety of Interior Decor Combinations"</h1>
          <h3>Discover exquisite decor designs that turn every room into a masterpiece. Whether it's a vintage look you desire or something modern, we've got you covered....  <br />Make your dream home come to life with HomeStyler!</h3>
          
        </div>
      </div>

      <div className="categories">
        <div className="search">
        </div>
      </div>
    </div>
  );
};

export default DesignStyles;
