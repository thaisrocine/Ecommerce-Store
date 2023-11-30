import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Typography, Divider, Card, CardContent, CardMedia } from '@mui/material';

const ProductModalCart = ({ isOpen, onClose, onAddToCart, selectedProduct }) => {
    const [quantity, setQuantity] = useState(1);
    const [displayedProduct, setDisplayedProduct] = useState(selectedProduct);

    const getCartFromLocalStorage = () => {
        const cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
    };

    const updateCartInLocalStorage = (cart) => {
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    const addToCart = (product) => {
        const cart = getCartFromLocalStorage();
        const existingProductIndex = cart.findIndex((p) => p.id === product.id);
    
        if (existingProductIndex !== -1) {
           
            cart[existingProductIndex].quantidade += product.quantidade;
        } else {
            
            cart.push(product);
        }
    
        updateCartInLocalStorage(cart);
    };
    const removeFromCart = (productId) => {
        const cart = getCartFromLocalStorage();
        const updatedCart = cart.filter((product) => product.id !== productId);
        updateCartInLocalStorage(updatedCart);
    };

    useEffect(() => {
        const storedProduct = localStorage.getItem('selectedProduct');
        if (storedProduct) {
            const parsedProduct = JSON.parse(storedProduct);
            setDisplayedProduct(parsedProduct);
            setQuantity(parsedProduct?.quantidade || 1);
        } else {
            setDisplayedProduct(selectedProduct);
        }
    }, [selectedProduct]);

    const handleAddToCart = () => {
        onAddToCart(quantity);
        if (quantity >= 1) {
            addToCart(displayedProduct);
        }
        onClose();
    };

    const handleIncrement = () => {
        setQuantity((prevQuantidade) => prevQuantidade + 1);
        setDisplayedProduct((prevProduct) => ({
            ...prevProduct,
            quantidade: (prevProduct?.quantidade || 0) + 1,
        }));
    };

    const handleDecrement = () => {
        setQuantity((prevQuantidade) => (prevQuantidade > 1 ? prevQuantidade - 1 : 1));
        setDisplayedProduct((prevProduct) => ({
            ...prevProduct,
            quantidade: prevProduct?.quantidade ? prevProduct.quantidade - 1 : 0,
        }));
    };

    const handleRemoveFromCart = () => {
        removeFromCart(displayedProduct.id);
        onClose();
    };

    const corPersonalizada = '#958D8D';

    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 500,
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    border: '2px solid #000',
                    boxShadow: 24,
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 4,
                }}
            >
                <Typography
                    color="textPrimary"
                    style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        margin: '10px',
                        color: corPersonalizada,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    PRODUTOS DO CARRINHO
                </Typography>
                <Divider style={{ margin: '10px' }} />

                {displayedProduct && (
                    <Card sx={{ maxWidth: 100, marginBottom: '10px' }}>
                        <CardMedia
                            component="img"
                            alt={displayedProduct.nome}
                            height="140"
                            image={displayedProduct?.fotos?.[0]}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.primary">
                                {displayedProduct?.nome}
                            </Typography>

                            <Typography variant="h6" style={{ color: '#1976D2' }}>
                                {quantity}
                            </Typography>
                            <Button size="small" color="primary" onClick={handleIncrement}>
                                +
                            </Button>
                            <Button size="small" color="primary" onClick={handleDecrement}>
                                -
                            </Button>
                            <Button size="small" color="error" onClick={handleRemoveFromCart}>
                                Remover do Carrinho
                            </Button>
                        </CardContent>
                    </Card>
                )}

                <Button onClick={handleAddToCart} sx={{ mt: 2 }}>
                    Finalizar o carrinho
                </Button>

                <Button onClick={onClose} sx={{ mt: 2, ml: 2 }}>
                    Fechar
                </Button>
            </div>
        </Modal>
    );
};

export default ProductModalCart;
