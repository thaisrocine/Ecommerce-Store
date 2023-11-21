import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import ColorBalls from '../ColorBalls/colorballs';
import SizeProduct from '../SizeProducts/sizeproducts';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

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

const corPersonalizada = '#686262';

const DetailProduct = () => {
    return (
        <ThemeProvider theme={theme}>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '50px',  marginLeft: '550px' }}>
                {/* Cards */}
                <div style={{ marginRight: '20px' }}>
                    <Card style={{ backgroundColor: '#f0f0f0', height: '432px', width: '500px', marginBottom: '20px' }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Card Principal Maior
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Conteúdo do card principal aqui.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Grid container justifyContent="center">
                        {[1, 2, 3, 4].map((index) => (
                            <Grid item key={index} style={{ marginRight: '10px', marginBottom: '10px' }}>
                                <Card style={{ backgroundColor: '#f0f0f0', height: '120px', width: '115px'}}>
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
                    <Typography variant="h6" style={{ color: corPersonalizada, marginBottom: '10px' }}>
                        VESTIDO FEMININO | Vestido Princesinha do Oeste | E-commerce Store

                    </Typography>
                    <Typography variant="h5" style={{ color: corPersonalizada, marginBottom: '10px' }}>
                        R$ 200,00
                    </Typography>
                    <Typography style={{ color: corPersonalizada, marginBottom: '5px' }}>
                        Cores
                    </Typography>

                    <div style={{marginBottom: '5px'}}>
                    <ColorBalls />

                    </div>

         
                    <Typography style={{ color: corPersonalizada, marginBottom: '5px' }}>
                        Tamanho
                    </Typography>

                    <div style={{marginBottom: '5px'}}> 
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