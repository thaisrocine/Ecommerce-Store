import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flex: 1, color: '#ffffff', fontWeight: 'bold' }}>
                        E-COMMERCE STORE
                    </Typography>
                    <nav>
                       
                    </nav>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};

export default Header;
