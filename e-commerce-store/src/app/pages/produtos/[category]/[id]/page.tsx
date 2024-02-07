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
  const segments = pathName ? pathName.split('/') : [];

  const [categoryId, setCategoryId] = useState<number | undefined>(undefined);
  const [prodId, setProdId] = useState<number | undefined>(undefined);

  const [selectedProduct, setSelectedProduct] = useState<{ categoryId: number | null, productId: number | null }>({
    categoryId: null,
    productId: null,
  });


  const handleProductSelect = (categoryId: number, productId: number) => {
    setSelectedProduct({ categoryId, productId });
  };

  useEffect(() => {
    const parsedCategoryId = parseInt(segments[3], 10);
    const parsedProdId = parseInt(segments[4], 10);

    setCategoryId(isNaN(parsedCategoryId) ? undefined : parsedCategoryId);
    setProdId(isNaN(parsedProdId) ? undefined : parsedProdId);
  }, [segments]);

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
      <DetailProduct
        id={prodId || 0}
        categoryId={categoryId || 0} // Providing a default value (0 in this case) when categoryId is undefined
        onProductSelect={handleProductSelect}
      />


      <main></main>
    </div>
  );
};

export default Produtos;
