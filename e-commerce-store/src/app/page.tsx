"use client"; 

import React, { useState } from 'react';
import Sidebar from './components/SiderBar/sidebar';
import Header from './components/Header/header';
import IconsHeader from './components/IconsHeader/iconsheader';


const HomePage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>


      <Header />

      <IconsHeader />


      <main>
      
      </main>
    </div>
  );
};


export default HomePage;
