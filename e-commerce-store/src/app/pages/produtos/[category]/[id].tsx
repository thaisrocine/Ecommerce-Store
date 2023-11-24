// pages/produtos/[category]/[id].tsx
import React from 'react';


const ProductDetails = ({ product }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      {/* Adicione mais detalhes do produto conforme necessário */}
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const { category, id } = params;

  // Simule a obtenção de detalhes do produto com base na categoria e no ID
  // Substitua esta lógica pela lógica real de busca de dados no seu aplicativo
  //const product = productsData[category][id];

  return {
    props: {
      //product,
    },
  };
}

export default ProductDetails;
