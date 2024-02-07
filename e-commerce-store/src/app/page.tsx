"use client"; 

import React, { useEffect, useState } from 'react';
import Header from './components/Header/header';
import IconsHeader from './components/IconsHeader/iconsheader';
import SearchBar from './components/SearchBar/searchbar';
import CategoryHeader from './components/CategoryHeader/categoryheader';
import CardProduct from './components/CardProduct/cardproduct';
import CustomTypography from './components/CustomTypography/customtypography';
import MeuJson from '../../public/data/produtos.json';

const HomePage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
      (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "kxup1e69wc");
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>
        <CustomTypography>SE LIGA NOS QUERIDINHOS DO MOMENTO!!!!</CustomTypography>
      </div>
      <CardProduct id={0} />
      <main></main>
    </div>
  );
};

export default HomePage;
