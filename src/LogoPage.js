import React from 'react';
import image from './images/My world.png';
import { Link } from 'react-router-dom';


const LogoPage = () => {  
  return (
    <div className="image-center" >
      <Link to="/home">
        <img src={image} />
      </Link>
    </div>
  )
}

export default LogoPage