import React from 'react';
import { QuestionCircleOutlined, SearchOutlined, UsergroupDeleteOutlined } from '@ant-design/icons';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <ul className='cards__items'>
          <li className='cards__item'>
            <QuestionCircleOutlined className='icon' />
            <h2>O que é?</h2>
            <p>É um processo de autoconhecimento, voce olhar pra dentro de si e entender sua personalidade e replicar isso em seus vestir.</p>
          </li>
          <li className='cards__item'>
          <UsergroupDeleteOutlined className='icon'/>
            <h2>Para quem é?</h2>
            <p>A consultoria de imagem é a ferramenta ideal para quem busca transformar, melhorar ou readequar sua imagem.</p>
          </li>
          <li className='cards__item'>
            <SearchOutlined className='icon' />
            <h2>Como funciona?</h2>
            <p>Suelen vai te encaminhar em passo a passo do que você deve fazer para representar aquilo que de fato você quer representar. Começando por seu estilo e terminando em novas compras para o seu guarda roupa.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cards;
