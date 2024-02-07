// pages/produtos/[category]/[id].tsx
import React from 'react';



const ProductDetails = ({ }) => {
  return (
    <div>
      <h1>Hello, World! Produto ID: </h1>
    </div>
  );
};

export async function getServerSideProps(context: { params: any; }) {
  const { params } = context;
  const { id } = params;

  return {
    props: {
      productId: id,
    },
  };
}

export default ProductDetails;