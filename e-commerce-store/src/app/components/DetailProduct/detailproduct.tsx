import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Button, Card, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material';
import ColorBalls from '../ColorBalls/colorballs';
import SizeProduct from '../SizeProducts/sizeproducts';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ProductData from '../../../../public/data/produtos.json';


const theme = createTheme({
    palette: {
        primary: {
            main: '#0F0E0E',
        },
        text: {
            primary: '#ffffff',
        },
    },
});

const corPersonalizada = '#958D8D';

const DetailProduct = ({ id, categoryId }: { id: number, categoryId: number }) => {


    console.log(id);
    console.log(categoryId);




    const produtosFiltrados = ProductData.categorias;
    const categoriaFilter = produtosFiltrados.find((categoria) => categoria.id === categoryId);
    const produtosDaCategoria = categoriaFilter?.produtos || [];
    const produtoFiltrado = produtosDaCategoria.find((produto) => produto.id === id);
    const fotosDoEcommerce = produtoFiltrado?.variacoes[0]?.fotos || [];

    console.log(produtoFiltrado?.variacoes?.fotos)

    console.log(fotosDoEcommerce)














    return (
        <ThemeProvider theme={theme}>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '50px', marginLeft: '550px' }}>
                <div style={{ marginRight: '20px' }}>
                    <Card style={{ backgroundColor: '#f0f0f0', height: '600px', width: '500px', marginBottom: '20px' }}>
                        <CardMedia
                            component="img"
                            alt="Imagem"
                            height="140"
                            image={fotosDoEcommerce[0]} 
                        />
                   
                    </Card>
                    <Grid container justifyContent="center">
                        {[1, 2, 3, 4].map((index) => (
                            <Grid item key={index} style={{ marginRight: '10px', marginBottom: '10px' }}>
                                <Card style={{ backgroundColor: '#f0f0f0', height: '120px', width: '115px' }}>
                                    <CardContent>
                                        <Typography variant="h6" component="div">
                                            Mini Card {index}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Conteúdo do mini card {index}.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>


                <div style={{ textAlign: 'left' }}>
                    <Typography variant="h6" style={{ color: corPersonalizada, marginBottom: '10px', borderBottom: '1px solid #ccc' }}>
                        SEÇÃO {categoriaFilter?.nome} | {produtoFiltrado?.nome}| E-commerce Store
                    </Typography>

                    <Typography variant="h5" style={{ color: corPersonalizada, marginBottom: '20px' }}>
                        R$ {produtoFiltrado?.preco}
                    </Typography>
                    <Typography style={{ color: corPersonalizada, marginBottom: '15px' }}>
                        Cores
                    </Typography>

                    <div style={{ marginBottom: '10px' }}>
                        <ColorBalls />

                    </div>


                    <Typography style={{ color: corPersonalizada, marginBottom: '10px' }}>
                        Tamanho
                    </Typography>

                    <div style={{ marginBottom: '10px' }}>
                        <SizeProduct />
                    </div>


                    <Button
                        color="primary"
                        startIcon={<AddShoppingCartIcon />}
                        style={{ backgroundColor: '#055A1D', color: 'white', fontSize: '1.2rem', padding: '10px 20px' }}
                    >
                        Adicionar ao Carrinho
                    </Button>






                </div>
            </div>
        </ThemeProvider>
    );
};

export default DetailProduct;
