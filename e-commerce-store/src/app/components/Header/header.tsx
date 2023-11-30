import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
                CURTA NOSSAS PROMOÇÕES IMPERDÍVEIS!!!!! BAIXE AGORA NOSSO APP E FIQUE LIGADO EM TUDO!!
            </Alert>

            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flex: 1, color: '#ffffff', fontWeight: 'bold' }}>
                        <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            E-COMMERCE STORE
                        </a>
                    </Typography>
                    <nav>
                     
                    </nav>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};

export default Header;
