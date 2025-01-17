import React from 'react';
import { UserOutlined, QuestionCircleOutlined, SearchOutlined, UsergroupDeleteOutlined } from '@ant-design/icons';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <ul className='cards__items'>
          <li className='cards__item'>
            <UserOutlined className='icon' />
            <h2>Quem é?</h2>
            <p>Amante declarada da moda, Flavia Christina iniciou a sua história no segmento em 1997…</p>
          </li>
          <li className='cards__item'>
            <QuestionCircleOutlined className='icon' />
            <h2>O que é?</h2>
            <p>É um verdadeiro processo de autoconhecimento, em que você vai aprender a ressaltar seus pontos fortes…</p>
          </li>
          <li className='cards__item'>
          <UsergroupDeleteOutlined className='icon'/>
            <h2>Para quem é?</h2>
            <p>A consultoria de imagem é a ferramenta ideal para quem busca transformar, melhorar ou readequar sua imagem…</p>
          </li>
          <li className='cards__item'>
            <SearchOutlined className='icon' />
            <h2>Como funciona?</h2>
            <p>Flavia Christina vai revelar os passos que você deve seguir para conquistar a impressão desejada…</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cards;
