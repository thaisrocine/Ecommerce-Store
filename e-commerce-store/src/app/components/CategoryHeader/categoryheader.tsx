import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';

const HeaderCard = styled(Card)({
  backgroundColor: '#FFFFFF',
  color: '#686262',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
});

const categories = [
  'MASCULINO |',
  'FEMININO |',
  'CALÇAS |',
  'VESTIDOS |',
  'CRIANÇAS |',
  'TENDÊNCIA DOS VERÃO |',
  'ACESSÓRIOS E RELÓGIOS |',
  'PERFUME |',
  'PARA CASA',
];

const CategorySpan = styled('span')({
  cursor: 'pointer',
  '&:hover': {
    color: '#D5CF98', // Cor que desejar ao passar o mouse
  },
});

function CategoryHeader() {
  return (
    <HeaderCard>
      <CardContent>
        {categories.map((category, index) => (
          <CategorySpan key={index}>{category} </CategorySpan>
        ))}
      </CardContent>
    </HeaderCard>
  );
}

export default CategoryHeader;
