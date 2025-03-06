import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div id= 'footer' className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src='/images/Logo.png' alt='logofooter' className='footer-logo-image'></img>
            </Link>
          </div>
          <small className='website-rights'>Suelen Velasco Consultoria         © 2025</small>
          <div className='social-icons'>
            <Link className='social-icon-link instagram' to={{pathname: 'https://www.instagram.com/suelenvelasconsultoria/'}} target='_blank' aria-label='Instagram'>
              <i className='fab fa-instagram' />
            </Link>
            <Link className='social-icon-link whatsapp' to={{ pathname: 'https://wa.me/5521979953826' }} target='_blank' aria-label='WhatsApp'>
              <i className='fab fa-whatsapp' />
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
