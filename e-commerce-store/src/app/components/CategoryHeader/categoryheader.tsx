import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Link from 'next/link';



const HeaderCard = styled(Card)({
  backgroundColor: '#FFFFFF',
  color: '#686262',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
});

const categories = [
  'feminino',
  'masculino', 
  'crianca',
  'verao',
  'acessorios',
  'paracasa', 
  'perfume'
 
];

const CategorySpan = styled('span')({
  cursor: 'pointer',
  '&:hover': {
    color: '#D5CF98',
  },
});

function CategoryHeader() {
  return (
    <HeaderCard>
      <CardContent>
        {categories.map((category, index) => (
           <Link href={`http://localhost:3000/pages/${category}`} key={index}>
           <CategorySpan> {category.toUpperCase()} |</CategorySpan>
         </Link>

      
        ))}
      </CardContent>
    </HeaderCard>
  );
}

export default CategoryHeader;
