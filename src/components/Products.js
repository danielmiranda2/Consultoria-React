import React from 'react';
import './Products.css';

const ProductCard = ({ name, description, image, paragraph }) => (
  <div className="product-card">
    <div className='product-content'>
      <div className='product-text-container'>
        <h1 className="product-name">{name}</h1>
        <h2 className="product-description">{description}</h2>
        <p className="product-paragraph">{paragraph}</p>
      </div>
      <div className='product-image-container'>
        <img src={image} alt={name} className='product-image' />
      </div>
    </div>
  </div>
);

const Products = () => {
  const productData = [
    
    {
      name: 'ABOUT',
      description: 'Coloração Pessoal',
      paragraph:'Descubra a paleta de cores que mais harmoniza com sua pele, olhos e cabelo. Aprenda a usar as cores a seu favor, trazendo mais vida e leveza para o seu visual. Escolha cores que iluminem seu rosto e melhorem sua aparência naturalmente.',
      image: '/images/productImage2.jpg',
    },
    {
      name: 'ABOUT',
      description: 'Análise de Estilo',
      paragraph: 'Entendemos seu estilo de vida, gostos pessoais e o que você deseja transmitir com a sua imagem.\nA partir disso, identificamos seu estilo predominante e criamos sugestões para você se expressar de forma autêntica e confiante. Descubra seu estilo único e aprenda a escolher roupas que valorizam sua personalidade.',
      image: '/images/productImage1.jpg',
    },
    {
      name: 'ABOUT',
      description: 'Análise de Biotipo',
      paragraph: 'Avaliação do seu tipo de corpo para ajudar a identificar cortes, tecidos e modelos que mais valorizam sua silhueta. Escolha peças que destacam suas melhores características e sinta-se segura em qualquer ocasião.',
      image: '/images/productImage3.png',
    },
  ];

  return (
    <div className="products-container">
      <div className="products-grid">
        {productData.map((product, index) => (
          <ProductCard 
            key={index}
            name={product.name}
            description={product.description}
            paragraph={product.paragraph}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
