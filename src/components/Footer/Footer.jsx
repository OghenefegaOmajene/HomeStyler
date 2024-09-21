import React from 'react'
import './Footer.css'
import logo from '../../img/logo1.png'
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import {IoIosMail} from "react-icons/io"; 
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (

    <footer>

        <div className='footerContent'>
            <div className='footerTop'>
                <div className='footerlogo'>
                    <img src={logo} alt=""/>  
                </div>

                <div className='social'>
                    <button className="Btn">
                        <i><FaGithub/></i>                  
                    </button>

                    <button className="Btn">
                        <i><FaLinkedin/></i>                  
                    </button>

                    <button className="Btn">
                        <i><FaFacebook/></i>               
                    </button>

                    <button className="Btn">
                        <i><FaInstagram/></i>
                    </button>

                    <button className="Btn">
                        <i><BsTwitterX/></i>
                    </button>
                </div>

            </div>

            <div className='footerBottom'>
                <div className='box'>
                    <p id='headlink'>Company</p>
                    <a href="#">Home</a>
                    <a href="#">Team</a>
                    <a href="#">About us</a>
                </div>

                <div className='box'>
                    <p id='headlink'>Services</p>
                    <a href="#">Furniture Design</a>
                    <a href="#">TV Units</a>
                    <a href="#">Interior Lighting</a>
                </div>

                <div className='box'>
                    <p id='headlink'>Portfolio</p>
                    <a href="">Gallery</a>
                    <a href="">Work Sites</a>
                    <a href=""></a>

                </div>

                <div className='box'>
                    <p id='headlink'>Legal</p>
                    <a href="#">Privacy policy</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Copyright</a>
                </div>

                <div className='box'>
                    <p id='headlink'>Contacts</p>
                    <a href=''><IoIosMail></IoIosMail> gammadevs14@gmail.com</a>
                    <a href=''><BsFillTelephoneFill></BsFillTelephoneFill> +23470410494 07</a>
                </div>
                
            </div>

        </div>

    </footer>
    
  )
}

export default Footer;