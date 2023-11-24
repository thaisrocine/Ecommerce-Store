import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid/Grid';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ProductData from '../../../../public/data/produtos.json';
import Link from 'next/link';




const theme = createTheme();

const produtos = [
  {
    id: 1,
    nome: 'Vestido Black | Original Store and Female Group',
    preco: 'R$50,00',
    imagem: 'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABf_vkYSzY2EsbRFAOJOS3_ZdreU4YoqzdzVZf-f1CEP9ndmI3705aHteXy3ZD7tLH4YbavoJT3lPK9luZDLgQxhQOBw1tLuBzxFG.jpg?r=b99'
  },
  {
    id: 2,
    nome: 'Calça moletom | Original Store and Female Group',
    preco: 'R$15,00',
    imagem: 'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABf_vkYSzY2EsbRFAOJOS3_ZdreU4YoqzdzVZf-f1CEP9ndmI3705aHteXy3ZD7tLH4YbavoJT3lPK9luZDLgQxhQOBw1tLuBzxFG.jpg?r=b99',
  },
  {
    id: 3,
    nome: 'Cropped azul | Original Store and Female Group',
    preco: 'R$15,00',
    imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ligapokemon.com.br%2F%3Fview%3Dartigos%2Fview%26aid%3D2569&psig=AOvVaw2S67SMLlS2orvCz1H5bG1M&ust=1698446978354000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPi4r5jmlIIDFQAAAAAdAAAAABAD'
  },
  {
    id: 4,
    nome: 'Vestido vermelho | Original Store and Female Group',
    preco: 'R$150,00',
    imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ligapokemon.com.br%2F%3Fview%3Dartigos%2Fview%26aid%3D2569&psig=AOvVaw2S67SMLlS2orvCz1H5bG1M&ust=1698446978354000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPi4r5jmlIIDFQAAAAAdAAAAABAD'
  },
  {
    id: 5,
    nome: 'Vestido vermelho | Original Store and Female Group',
    preco: 'R$150,00',
    imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ligapokemon.com.br%2F%3Fview%3Dartigos%2Fview%26aid%3D2569&psig=AOvVaw2S67SMLlS2orvCz1H5bG1M&ust=1698446978354000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPi4r5jmlIIDFQAAAAAdAAAAABAD'
  },
  {
    id: 6,
    nome: 'Vestido vermelho | Original Store and Female Group',
    preco: 'R$150,00',
    imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ligapokemon.com.br%2F%3Fview%3Dartigos%2Fview%26aid%3D2569&psig=AOvVaw2S67SMLlS2orvCz1H5bG1M&ust=1698446978354000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPi4r5jmlIIDFQAAAAAdAAAAABAD'
  },
  {
    id: 7,
    nome: 'Vestido vermelho | Original Store and Female Group',
    preco: 'R$150,00',
    imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ligapokemon.com.br%2F%3Fview%3Dartigos%2Fview%26aid%3D2569&psig=AOvVaw2S67SMLlS2orvCz1H5bG1M&ust=1698446978354000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPi4r5jmlIIDFQAAAAAdAAAAABAD'
  },
  {
    id: 8,
    nome: 'Vestido vermelho | Original Store and Female Group',
    preco: 'R$150,00',
    imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ligapokemon.com.br%2F%3Fview%3Dartigos%2Fview%26aid%3D2569&psig=AOvVaw2S67SMLlS2orvCz1H5bG1M&ust=1698446978354000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPi4r5jmlIIDFQAAAAAdAAAAABAD'
  }
];
const CardProduct = ({ id }: { id: number }) => {


  const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const gridStyle = {
    marginTop: '40px',
    marginLeft: '200px',
    marginRight: '200px',
  };

  const cardStyle = {
    height: '100%',
    width: '70%',
  };

  const mediaStyle = {
    height: 0,
    paddingTop: '80.00%',
  };

  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleMouseEnter = (productId: number | React.SetStateAction<null>) => {
    setHoveredProduct(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  const handleAddToProdutos = (categoriaId?: number, produtoId?: number) => {
    console.log('Categoria ID:', categoriaId);
    console.log('Produto ID:', produtoId);

  };


  const produtosFiltrados = ProductData.categorias;
  console.log(ProductData.categorias);
  const categoriaFilter = produtosFiltrados.find((produtosFiltrados) => produtosFiltrados.id === id);
  console.log(categoriaFilter, "filtro de categoria");
  console.log(categoriaFilter?.id);


  return (
    <ThemeProvider theme={theme}>
      <div style={centerStyle}>
        <Grid container spacing={2} style={gridStyle}>
          {categoriaFilter?.produtos.map((produto) => (
            <Grid item key={produto.id} xs={12} sm={8} md={3} lg={4}>
              <Link
                href="/pages/produtos/[category]/[id]"
                as={`/pages/produtos/${categoriaFilter?.id}/${produto?.id}`}
                passHref
              >


                <Card style={cardStyle}>
                  <CardMedia
                    component="img"
                    height="150"
                    image={produto.variacoes[0].fotos[0]}
                    alt={produto.nome}
                    style={{ width: '100%', height: '82%' }}
                  />
                  <CardContent
                    style={{
                      backgroundColor: 'white',
                      position: 'relative',
                    }}
                    onMouseEnter={() => handleMouseEnter(produto.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Typography variant="h6" component="div" color="black">
                      {produto.preco}
                    </Typography>
                    <Typography variant="body2" color="black">
                      {produto.nome}
                    </Typography>
                    <Typography variant="body2" color="black">
                      {produto.id}
                    </Typography>
                    {hoveredProduct === produto.id && (
                      <IconButton
                        style={{
                          position: 'absolute',
                          bottom: '8px',
                          right: '8px',
                          backgroundColor: 'black',
                        }}
                        onClick={() => handleAddToProdutos(id, produto.id)}
                      >
                        <ShoppingCartIcon style={{ color: 'white' }} />
                      </IconButton>
                    )}
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default CardProduct;

