import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid/Grid';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const theme = createTheme();

const produtos = [
    {
        id: 1,
        nome: 'Vestido Black | Original Store and Female Group',
        preco: 'R$50,00',
        imagem: '"/imagem/perfume/perfume01feminino.PNG"'
    },
    {
        id: 2,
        nome: 'Calça moletom | Original Store and Female Group',
        preco: 'R$15,00',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ligapokemon.com.br%2F%3Fview%3Dartigos%2Fview%26aid%3D2569&psig=AOvVaw2S67SMLlS2orvCz1H5bG1M&ust=1698446978354000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPi4r5jmlIIDFQAAAAAdAAAAABAD',
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

const CardProduct = () => {
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
      paddingTop: '80.00%', // Proporção da imagem (16:9)
    };
  
    const [hoveredProduct, setHoveredProduct] = useState(null);
  
    const handleMouseEnter = (productId: number | React.SetStateAction<null>) => {
      setHoveredProduct(productId);
    };
  
    const handleMouseLeave = () => {
      setHoveredProduct(null);
    };
  
    return (
      <ThemeProvider theme={theme}>
        <div style={centerStyle}>
          <Grid container spacing={2} style={gridStyle}>
            {produtos.map((produto) => (
              <Grid item key={produto.id} xs={12} sm={6} md={2} lg={3}>
                <Card style={cardStyle}>
                  <CardMedia
                    component="img"
                    alt={produto.nome}
                    image={produto.imagem}
                    style={mediaStyle}
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
                    {hoveredProduct === produto.id && (
                      <IconButton
                        style={{
                          position: 'absolute',
                          bottom: '8px',
                          right: '8px',
                          backgroundColor: 'black',
                        }}
                      >
                        <ShoppingCartIcon style={{ color: 'white' }} />
                      </IconButton>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </ThemeProvider>
    );
  };
  
  export default CardProduct;