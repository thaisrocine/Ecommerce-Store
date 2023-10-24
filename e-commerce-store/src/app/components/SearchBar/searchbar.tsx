import React from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import { IconButton } from 'material-ui';
import { InputBase } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

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
  margin: '10px'
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
  return (
    <div>
      <CardContainer>
        <SearchContainer>
          <SearchOutlinedIcon />
          <Divider />
          <InputBase sx={{ flex: 1 }} placeholder="Digite algo para procurar" />
        </SearchContainer>
        <IconContainer>
          <Image src="/icons/sacola-de-compras.png" alt="Meu ícone" width={20} height={20} />
          <Image src="/icons/pessoa.png" alt="Meu ícone" width={20} height={20} />
          <Image src="/icons/coracao.png" alt="Meu ícone" width={20} height={20} />
        </IconContainer>
      </CardContainer>
    </div>
  );
}

export default SearchBar;
