"use client"; 

import React, { useState } from 'react';
import Sidebar from './components/SiderBar/sidebar';
import Header from './components/Header/header';
import IconsHeader from './components/IconsHeader/iconsheader';
import SearchBar from './components/SearchBar/searchbar';
import CategoryHeader from './components/CategoryHeader/categoryheader';
import CardProduct from './components/CardProduct/cardproduct';
import { Typography } from '@mui/material';
import CustomTypography from './components/CustomTypography/customtypography';
import Card from 'material-ui/Card';
import MeuJson from '../../public/data/produtos.json';


const HomePage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  console.log(MeuJson);

  return (
    <div>

      <div>

        
      <Header />

      <IconsHeader />

      <SearchBar />

      </div>



      <CategoryHeader />

      <div style={{ display: 'flex',  alignItems: 'center', justifyContent: 'center', marginTop: '2px'}}>
      <CustomTypography>SE LIGA NOS QUERIDINHOS DO MOMENTO!!!!</CustomTypography>
    </div>




 


      <CardProduct /> 


      <main>
      
      </main>
    </div>
  );
};


export default HomePage;
