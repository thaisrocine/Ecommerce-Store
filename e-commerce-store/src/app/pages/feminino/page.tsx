"use client"; 

import React, { useState } from 'react';
import CategoryHeader from '@/app/components/CategoryHeader/categoryheader';
import Header from '@/app/components/Header/header';
import IconsHeader from '@/app/components/IconsHeader/iconsheader';
import SearchBar from '@/app/components/SearchBar/searchbar';
import ProductData from '../../../../public/data/produtos.json'
import CardProduct from '@/app/components/CardProduct/cardproduct';



const Feminino = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("thais")
    console.log("meu json aqui");
    console.log(ProductData.categorias)
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

      <CardProduct id={1}/> 

     
      <main>
      
      </main>
    </div>
  );
};


export default Feminino;
