// pages/produtos/[category]/[id].tsx
import React from 'react';



const ProductDetails = ({ productId }) => {
  return (
    <div>
      <h1>Hello, World! Produto ID: {productId}</h1>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;

  return {
    props: {
      productId: id,
    },
  };
}

export default ProductDetails;