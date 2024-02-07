// components/SearchBar.js
import React, { useState, useEffect } from 'react';
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
  position: 'relative', // Adiciona posição relativa para o ícone de notificação
});

const NotificationDot = styled('div')({
  backgroundColor: 'red',
  borderRadius: '50%',
  height: '10px',
  width: '10px',
  position: 'absolute',
  top: '0',
  right: '0',
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
  const [newItemsInCart, setNewItemsInCart] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
    // Ao abrir o modal, resete o estado de novos itens no carrinho e remova a notificação
    setNewItemsInCart(false);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const checkForNewItems = () => {
    // Verifica se há itens no carrinho no localStorage
    const storedCart = localStorage.getItem('cart');
    const cartItems = storedCart ? JSON.parse(storedCart) : [];
    setNewItemsInCart(cartItems.length > 0);
  };

  useEffect(() => {
    // Verifica inicialmente se há novos itens ao carregar o componente
    checkForNewItems();

    // Configura um intervalo para verificar periodicamente se há novos itens
    const intervalId = setInterval(checkForNewItems, 5000); // Verifica a cada 5 segundos (ajuste conforme necessário)

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(intervalId);
  }, [modalIsOpen]);

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
            {newItemsInCart && <NotificationDot />}
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
      <ProductModalCart isOpen={modalIsOpen} onClose={handleCloseModal} onAddToCart={(quantity: number) => console.log(`Adicionando ${quantity} produtos ao carrinho`)} />
    </div>
  );
}

export default SearchBar;
