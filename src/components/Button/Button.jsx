import React, { useState } from 'react';
import './Button.css';

const Button = (props) => {
  const { 
    width, 
    height,
    backgroundColor, 
    color, 
    hoverBackgroundColor, 
    hoverColor, 
    btnName, 
    icon 
  } = props;

  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    width: width || 'auto',
    height: height || 'auto',
    backgroundColor: isHovered ? hoverBackgroundColor || backgroundColor : backgroundColor,
    color: isHovered ? hoverColor || color : color,
    transition: 'all 0.3s ease', // Smooth transition for hover effect
    transform: isHovered ? 'scale(1.05)' : 'scale(1)', // Pop animation on hover
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon && <span className="button-icon">{icon}</span>}
      <p>{btnName}</p>
    </button>
  );
};

export default Button;
