import React from 'react'
import './ProductPage.css'
import Sidebar from'../../components/Sidebar/Sidebar';
import ProductPageProductList from '../../components/ProductPageProductList/ProductPageProductList.jsx'
import { IoFilterSharp } from "react-icons/io5";

const ProductPage = ({addToWishlist}) => {
  return (
    <div className='designPage'>
        <Sidebar
            headTxt="All Products"
            txt1= "Exotic Sofas"
            txt2= "LED Lights"
            txt3= "Italian Sinks"
            txt4= "Custom TV Units"
        />

        <div className='renderProducts'>
        <div className="filterSearch">
            <h2>All Products</h2>
            <i className='filterIcon'><IoFilterSharp /></i>
        </div>

        <ProductPageProductList addToWishlist={addToWishlist}></ProductPageProductList>
        </div>

    </div>
  )
}

export default ProductPage;