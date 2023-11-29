"use client";

import React, { useEffect, useState } from 'react';
import CategoryHeader from '@/app/components/CategoryHeader/categoryheader';
import Header from '@/app/components/Header/header';
import IconsHeader from '@/app/components/IconsHeader/iconsheader';
import SearchBar from '@/app/components/SearchBar/searchbar';
import DetailProduct from '@/app/components/DetailProduct/detailproduct';
import { usePathname } from 'next/dist/client/components/navigation';


const Produtos = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const pathName = usePathname();

  const segments = pathName?.split('/');
  console.log(segments);

  const categoryId = parseInt(segments[3], 10) || undefined;
  const prodId = parseInt(segments[4], 10) || undefined;

  const [selectedProduct, setSelectedProduct] = useState({
    categoryId: null,
    productId: null,
  });

  const handleProductSelect = (categoryId, productId) => {
    setSelectedProduct({ categoryId, productId });
  };











  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>

      <div>


        <Header />

        <IconsHeader />

        <SearchBar />

      </div>



      <CategoryHeader />
      <DetailProduct id={prodId} categoryId={categoryId}   onProductSelect={handleProductSelect}/>



      <main>

      </main>
    </div>
  );
};



export default Produtos;
