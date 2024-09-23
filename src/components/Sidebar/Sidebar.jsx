import React from "react";
import { FaEyeSlash } from "react-icons/fa";
// import { SlArrowRight } from "react-icons/sl";
import './Sidebar.css';

const Sidebar = (props) => {
  return (
    <div className="sideBar">

      <div className="sideBarHeadTxt">
        <h1>{props.headTxt}</h1>
      </div>
        

        <div className="sideNav">
            <a href=""><FaEyeSlash />{props.txt1}</a>
            <a href=""><FaEyeSlash />{props.txt2}</a>
            <a href=""><FaEyeSlash />{props.txt3}</a>
            <a href=""><FaEyeSlash />{props.txt4}</a>
        </div>
        
    </div>
  )
}

export default Sidebar;