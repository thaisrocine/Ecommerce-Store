// components/SearchBar.js
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import { InputBase, Button } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ProductModalCart from '../ProductModalCart/productmodalcart';


const CardContainer = styled(Card)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  width: '100%',
  height: '100%',
});

const IconContainer = styled('div')({
  display: 'flex',
  gap: '10px',
  margin: '10px',
});

const SearchContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  border: '1px solid #ccc',
  borderRadius: '20px',
  padding: '8px',
  width: '50%',
});

const Divider = styled('div')({
  borderRight: '1px solid #ccc',
  height: '27px',
  margin: '0 8px',
});

function SearchBar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <CardContainer>
        <SearchContainer>
          <SearchOutlinedIcon />
          <Divider />
          <InputBase sx={{ flex: 1 }} placeholder="BUSQUE O QUE QUISER ACHAR..." />
        </SearchContainer>
        <IconContainer>
          <Button variant="text" onClick={handleOpenModal}>
            <Image src="/icons/carrinho.png" alt="Meu ícone" width={20} height={30} />
          </Button>
          <Button variant="text">
          <Image src="/icons/pessoa.png" alt="Meu ícone" width={20} height={30} />
          </Button>
         
          <Button variant="text">
          <Image src="/icons/coracao.png" alt="Meu ícone" width={20} height={30} />
          </Button>
        </IconContainer>
      </CardContainer>
      {/* Adicione o modal */}
      <ProductModalCart isOpen={modalIsOpen} onClose={handleCloseModal} onAddToCart={(quantity) => console.log(`Adicionando ${quantity} produtos ao carrinho`)} />
    </div>
  );
}

export default SearchBar;
