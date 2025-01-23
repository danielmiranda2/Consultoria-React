import React, { useState } from 'react';
import { Link } from 'react-scroll'; 
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);



  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src='/images/Logo.png' alt='Logo' className='navbar-logo-img'/>          
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='hero' className='hover-effect-8' smooth={true} onClick={closeMobileMenu}>
                INÍCIO
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='aboutme' className='hover-effect-8' smooth={true} onClick={closeMobileMenu}>
                SOBRE
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='products' className='hover-effect-8' smooth={true} onClick={closeMobileMenu}>
                SERVIÇOS
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='cards' className='hover-effect-8' smooth={true} onClick={closeMobileMenu}>
                CONTATO
              </Link>
            </li>        
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
