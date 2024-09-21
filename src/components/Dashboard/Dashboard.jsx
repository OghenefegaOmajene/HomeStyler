import React from 'react'
import ProfilePic from '../../img/ai-avatar.webp'
import './Dashboard.css'
import Sidebar from '../Sidebar/Sidebar'

const Dashboard = () => {
  return (
    <div  className='dashboard'>
        <Sidebar></Sidebar>

        <div className='body'>
            <div className="profile">
              <img src={ProfilePic} alt="" />
              <p>Admin Gamma</p>
            </div>
        </div>
    </div>
  )
}

export default Dashboard