import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

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

const Header = () => {
    return (
        <ThemeProvider theme={theme}>

            <Alert severity="info" style={{ marginBottom: 0, backgroundColor: '#D6CBC6' }}>
                CURTA NOSSAS PROMOÇÕES IMPERDÍVEIS
            </Alert>

            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flex: 1, color: '#ffffff', fontWeight: 'bold' }}>
                        <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            E-COMMERCE STORE
                        </a>
                    </Typography>
                    <nav>
                        {/* Adicione seus itens de navegação aqui */}
                    </nav>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};

export default Header;
