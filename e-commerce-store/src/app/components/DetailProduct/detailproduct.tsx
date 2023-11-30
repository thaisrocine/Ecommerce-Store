import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ProductData from '../../../../public/data/produtos.json';
import SizeProduct from '../SizeProducts/sizeproducts';
import ColorBalls from '../ColorBalls/colorballs';
import ProductModalCart from '../ProductModalCart/productmodalcart';

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

const DetailProduct = ({ id, categoryId, onProductSelect }: { id: number, categoryId: number, onProductSelect: (categoryId: number, productId: number) => void }) => {
    const produtosFiltrados = ProductData.categorias;
    const categoriaFilter = produtosFiltrados.find((categoria) => categoria.id === categoryId);
    const produtosDaCategoria = categoriaFilter?.produtos || [];
    const produtoFiltrado = produtosDaCategoria.find((produto) => produto.id === id);
    const fotosDoEcommerce = produtoFiltrado?.variacoes[0]?.fotos || [];

    const [selectedImage, setSelectedImage] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cartProduct, setCartProduct] = useState([]);

    const handleImageClick = (index: number) => {
        setSelectedImage(index);
    };

    const handleAddToCartClick = () => {
        setIsModalOpen(true);
    };

    return (
        <ThemeProvider theme={theme}>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '50px', marginLeft: '550px' }}>
                <div style={{ marginRight: '20px' }}>
                <Card style={{ backgroundColor: '#f0f0f0', height: '600px', width: '500px', marginBottom: '20px' }}>
                        <CardMedia
                            component="img"
                            alt="Imagem"
                            height="140"
                            image={fotosDoEcommerce[selectedImage]}
                        />
                    </Card>
                    <Grid container justifyContent="center">
                        {fotosDoEcommerce.map((image, index) => (
                            <Grid
                                item
                                key={index}
                                style={{ marginRight: '10px', marginBottom: '10px', cursor: 'pointer' }}
                                onClick={() => handleImageClick(index)}
                            >
                                <Card
                                    style={{
                                        backgroundColor: '#f0f0f0',
                                        height: '120px',
                                        width: '115px',
                                        border: index === selectedImage ? '2px solid blue' : 'none',
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        alt="Imagem"
                                        height="500"
                                        image={image}
                                    />
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
                        onClick={handleAddToCartClick}
                    >
                        Adicionar ao Carrinho
                    </Button>

                    <ProductModalCart
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onAddToCart={(quantity) => {
                            onProductSelect(categoryId, id);
                            setIsModalOpen(false);
                        }}
                        selectedProduct={produtoFiltrado}
                        cart={cartProduct}
                    />
                </div>
            </div>
        </ThemeProvider>
    );
};

export default DetailProduct;
