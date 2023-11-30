import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid/Grid';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ProductData from '../../../../public/data/produtos.json';
import Link from 'next/link';





const theme = createTheme();

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


  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  const handleAddToProdutos = (categoriaId?: number, produtoId?: number) => {
    console.log('Categoria ID:', categoriaId);
    console.log('Produto ID:', produtoId);

  };


  const produtosFiltrados = ProductData.categorias;
  const categoriaFilter = produtosFiltrados.find((produtosFiltrados) => produtosFiltrados.id === id);


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

                    onMouseLeave={handleMouseLeave}
                  >
                    <Typography variant="h6" component="div" color="black">
                      {produto.preco}
                    </Typography>
                    <Typography variant="body2" color="black">
                      {produto.nome}
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

