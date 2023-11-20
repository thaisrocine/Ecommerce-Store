"use client"; 

import React, { useState } from 'react';
import CategoryHeader from '@/app/components/CategoryHeader/categoryheader';
import Header from '@/app/components/Header/header';
import IconsHeader from '@/app/components/IconsHeader/iconsheader';
import SearchBar from '@/app/components/SearchBar/searchbar';
import CardProduct from '@/app/components/CardProduct/cardproduct';


const Masculino = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

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
      <CardProduct id={2}/> 


     
      <main>
      
      </main>
    </div>
  );
};


export default Masculino;
