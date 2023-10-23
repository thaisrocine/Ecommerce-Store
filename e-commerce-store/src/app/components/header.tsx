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
            main: '#FF69B4', // Cor de fundo rosa
        },
        text: {
            primary: '#ffffff', // Cor do texto branco
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
                        <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
                            <li style={{ marginRight: '20px' }}>
                                <Link href="/">
                                    <Typography style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '16px' }}>
                                        Página Inicial  | 
                                    </Typography>
                                </Link>
                            </li>
                            <li style={{ marginRight: '20px' }}>
                                <Link href="/produtos">
                                    <Typography style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '16px' }}>
                                        Produtos  | 
                                    </Typography>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contato">
                                    <Typography style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '16px' }}>
                                        Contato
                                    </Typography>
                                </Link>
                            </li>
                        </ul>

                    </nav>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};

export default Header;
