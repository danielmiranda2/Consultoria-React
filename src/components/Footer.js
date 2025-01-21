import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-content'>
        <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
            Inscreva-se na nossa newsletter para receber dicas de estilo e novidades!
          </p>
          <p className='footer-subscription-text'>
            Você pode cancelar a inscrição a qualquer momento.
          </p>
          <div className='input-areas'>
            <form>
              <input
                className='footer-input'
                name='email'
                type='email'
                placeholder='Seu Email'
              />
              <Button buttonStyle='btn--outline'>Inscrever-se</Button>
            </form>
          </div>
        </section>
        <div className='footer-divider' />
        <div className='footer-links'>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>Sobre Nós</h2>
              <Link to='/about'>Quem Somos</Link>
              <Link to='/services'>Nossos Serviços</Link>
              <Link to='/testimonials'>Depoimentos</Link>
              <Link to='/contact'>Contato</Link>
            </div>
            <div className='footer-link-items'>
              <h2>Ajuda</h2>
              <Link to='/faq'>Perguntas Frequentes</Link>
              <Link to='/support'>Suporte</Link>
              <Link to='/terms'>Termos de Serviço</Link>
              <Link to='/privacy'>Política de Privacidade</Link>
            </div>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src='/images/Logo.png' alt='logofooter' className='footer-logo-image'></img>
            </Link>
          </div>
          <small className='website-rights'>Suelen Velasco Consultoria © 2025</small>
          <div className='social-icons'>
            <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
              <i className='fab fa-facebook-f' />
            </Link>
            <Link className='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'>
              <i className='fab fa-instagram' />
            </Link>
            <Link className='social-icon-link linkedin' to='/' target='_blank' aria-label='LinkedIn'>
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
