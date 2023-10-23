"use client"; 

import React, { useState } from 'react';
import Sidebar from '../app/components/sidebar';
import Header from './components/header';


const HomePage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Header />


      <main>
      
      </main>
    </div>
  );
};


export default HomePage;
