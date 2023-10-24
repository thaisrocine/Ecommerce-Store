"use client"; 

import React, { useState } from 'react';
import Sidebar from './components/SiderBar/sidebar';
import Header from './components/Header/header';
import IconsHeader from './components/IconsHeader/iconsheader';
import SearchBar from './components/SearchBar/searchbar';
import CategoryHeader from './components/CategoryHeader/categoryheader';


const HomePage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>


      <Header />

      <IconsHeader />

      <SearchBar />

      <CategoryHeader />


      <main>
      
      </main>
    </div>
  );
};


export default HomePage;
