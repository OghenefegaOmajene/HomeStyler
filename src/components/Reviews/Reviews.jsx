import React from 'react'
import "./Reviews.css"


const Reviews = (props) => {
  return (
    <>
        <div className="reviewBox">
            <p>"{props.message}"</p>

            <div className="credentials">
                <p className='coloredText'>{props.name}</p>
                <i>{props.icon}</i>
            </div>
        </div>
    </>
  )
}



export default Reviews;