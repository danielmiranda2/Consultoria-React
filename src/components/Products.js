import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Products.css';

const ProductCard = ({ name, description, image, paragraph }) => (
  <div className='bodyslider'>
    <div className='slider'>
      <div className='slides'>
        <img src={image} alt={name} className='slides'/>
      </div>
      </div>
    </div>  
);

const Products = () => {
  const productData = [
  
    {
      name: 'ABOUT',
      description: 'Coloração Pessoal',
      paragraph:'Beleza é harmonia e a harmonia traz repetição. Na análise de coloração pessoal, iremos encontrar quais cores já estão na sua beleza e repeti-las no seu vestir para trazer harmonia. Verificamos as caracteristicas das cores de seu rosto e replicamos numa cartela para uso de roupas, acessórios, coloração de cabelo e maquiagem, sempre buscando o que fica melhor para você.',
      image: '/images/productImage2.jpg',
    },
    {
      name: 'ABOUT',
      description: 'Análise de Estilo',
      paragraph: 'Entendemos seu estilo de vida, gostos pessoais e o que você deseja transmitir com a sua imagem. A partir disso, identificamos seu estilo predominante no vestir e criamos sugestões para você se expressar de forma autêntica e confiante.',
      image: '/images/productImage1.jpg',
    },
    {
      name: 'ABOUT',
      description: 'Proporção Corporal',
      paragraph: 'Avaliação do seu tipo de corpo para ajudar a identificar cortes, tecidos e modelos que mais valorizam sua silhueta.',
      image: '/images/productImage3.png',
    },
    {
      name: 'ABOUT',
      description: 'Close Detox',
      paragraph: 'Uma análise completa do seu guarda-roupa para organizar e otimizar suas peças. Mantemos o que combina com você, substituímos o que não representa mais e identificamos o que está faltando.',
      image: '/images/productImage4.png',
    },
    {
      name: 'ABOUT',
      description: 'Montagem de Looks',
      paragraph: 'Criação de combinações de roupas para diferentes ocasiões,usando peças que você já tem e sugerindo novas aquisiçõespara completar seu guarda-roupa.',
      image:'/images/productImage5.jpg'
    },
    {
      name: 'ABOUT',
      description: 'Personal Shopping',
      paragraph: 'Acompanhamento personalizado para ajudar você a escolher peças que complementem seu estilo e seu guarda-roupa. Ideal para quem quer renovar o closet de forma assertiva.',
      image:'/images/productImage6.jpg'
    },
    {
      name: 'ABOUT',
      description: 'Mala de Viagem',
      paragraph: 'Planejamento de uma mala prática e funcional para suas viagens, com combinações versáteis que otimizam espaço e garantem estilo em qualquer destino.',
      image:'/images/productImage7.jpg'
    },
    {
      name: 'ABOUT',
      description: 'Acompanhamento Fotográfico',
      paragraph: 'Após entender seu objetivo para ensaio, criamos uma estratégia personalizada para alinhar sua identidade, estilo e objetivos, e assim montar uma imagem que seja adequada com suas intenções e refletir isto na fotografia.',
      image:'/images/productImage8.jpg'
    }
  ];

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  
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
