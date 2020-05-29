import React from 'react';
import Tilt from 'react-tilt';
import logo from './logo.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 45 }} style={{ height: 120, width: 120 }} >
        <div className="Tilt-inner pa3">
          <img style={{paddingTop: '5px'}} alt='logo' src={logo}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;