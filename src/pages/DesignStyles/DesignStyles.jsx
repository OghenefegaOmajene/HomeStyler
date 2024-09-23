import React from 'react';
import './DesignStyles.css';
import Sidebar from'../../components/Sidebar/Sidebar';
import DesignStyleProductList from '../../components/DesignStyleProductList/DesignStyleProductList'
import { IoFilterSharp } from "react-icons/io5";

const DesignStyles = ({addToWishlist}) => {
  
  return (
    
    <div className='designPage'>
        <Sidebar
            headTxt="Design Styles"
            txt1= "Living Room"
            txt2= "Dining Room"
            txt3= "Kitchen"
            txt4= "Bedroom"
        />

        <div className='renderProducts'>
          <div className="filterSearch">
              <h2>Design Styles</h2>
              <i className='filterIcon'><IoFilterSharp /></i>
          </div>

          <DesignStyleProductList addToWishlist={addToWishlist}></DesignStyleProductList>
        </div>

    </div>
  );
};

export default DesignStyles;
