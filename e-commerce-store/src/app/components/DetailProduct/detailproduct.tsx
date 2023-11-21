import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Card, CardContent, Grid, Typography } from '@mui/material';

// Crie um tema personalizado para o cabeçalho
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
            <div style={{ textAlign: 'center', marginTop: '50px', alignItems: 'flex-start' }}>
                <Typography variant="h6" style={{ color: corPersonalizada, marginBottom: '20px' }}>
                    SEÇÃO FEMININA / VESTIDO PRINCESINHA DO OESTE  | E-commerce Store
                </Typography>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '360px'}}>

                    <Card style={{ backgroundColor: '#f0f0f0', height: '432px', width: '364px', marginBottom: '20px' }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Card Principal Maior
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Conteúdo do card principal aqui.
                            </Typography>
                        </CardContent>
                    </Card>

                    {/* Mini Cards abaixo do Card Principal */}
                    <Grid container justifyContent="center">
                        {[1, 2, 3, 4].map((index) => (
                            <Grid item key={index} style={{ marginRight: '10px', marginBottom: '10px' }}>
                                <Card style={{ backgroundColor: '#f0f0f0', height: '114px', width: '84px' }}>
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
            </div>
        </ThemeProvider>
    );
};

export default DetailProduct;
