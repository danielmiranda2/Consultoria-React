import React from 'react';
import './Aboutme.css';

function Aboutme() {
    return (
        <div id='aboutme' className='about-me-container'>
            <img src='/images/background-about.jpeg' alt='about-me' className='about-me-image' />
            <div className='text-container'>
                <h1>SOBRE MIM</h1>
                <p>Após enfrentar um período desafiador de ansiedade e desmotivação no ambiente corporativo, encontrei na Consultoria de Imagem uma forma de autoconhecimento e libertação. Com formação na escola da Dede Leme, agora ajudo mulheres a redescobrirem sua essência e conquistarem liberdade através da imagem pessoal. Venha transformar sua vida e descubra o poder da consultoria</p>               
            </div>
        </div>
    );
}

export default Aboutme;
