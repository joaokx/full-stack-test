import React from 'react';
import './Footer.css';
import BG3 from "../../assets/BG (3).png";
import BG4 from "../../assets/BG@2x.png"
function Footer() {
  return (
      <div className="footer">
      <img src={BG3} alt="Footer Background" className="footerImage" />
      <h1 className='footer-title'>Need help?</h1>
      <h2 className="footer-subtitle">coopers@coopers.pro</h2>
      <p className='footer-text'>© 2021 Coopers. All rights reserved. </p>
      <img className='footer-bg' src={BG4} alt="Footer Background"/>
      </div>
  );
}

export default Footer;
