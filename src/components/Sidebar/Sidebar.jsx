import React from "react";
// import { IoHome } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";
import { FaChartPie } from "react-icons/fa";
import {IoIosMailUnread} from "react-icons/io"; 
import { BiSolidDashboard } from "react-icons/bi";
import {IoMdSettings} from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
import logo from '../../img/logo1.png'
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sideBar">

      <div className="sideNavLogo">
        <img src={logo} alt="" />
      </div>
        

        <div className="sideNav">
          <button>
            <a href=""><BiSolidDashboard/>Dashboard</a>
          </button>

          <button>
            <a href=""><VscGraph />Analytics</a>
          </button>

          <button>
            <a href=""><FaChartPie />Graphs</a>
          </button>

          <button>
            <a href=""><IoIosMailUnread/>Inbox</a>
          </button>

          <button>
            <a href=""><IoMdSettings/>Settings</a>
          </button>

          
        </div>
        
    </div>
  )
}

export default Sidebar;