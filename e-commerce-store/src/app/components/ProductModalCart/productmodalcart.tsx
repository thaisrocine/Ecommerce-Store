import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Typography, Divider, Card, CardContent, CardMedia, Alert } from '@mui/material';

const ProductModalCart = ({ isOpen, onClose, onAddToCart, selectedProduct, cartProduct }) => {
    const [quantity, setQuantity] = useState(0);
    const [displayedProduct, setDisplayedProduct] = useState(selectedProduct);
    const [cart, setCart] = useState([]);
    const [alertOpen, setAlertOpen] = useState(false);

    const getCartFromLocalStorage = () => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    };

    const updateCartInLocalStorage = (newCart) => {
        localStorage.setItem('cart', JSON.stringify(newCart));
    };

    useEffect(() => {
        setCart(cart);
    }, [cart]);

    const handleAddToCart = () => {
        onAddToCart(quantity);
        addToCart(displayedProduct);
        onClose();
        window.location.reload();
    };


    const addToCart = (selectedProduct) => {
        const productInCart = cart.find((product) => product.id === selectedProduct.id);

        if (productInCart) {

            console.log('Product already in the cart');
        } else {
            const updatedCart = [...cart, selectedProduct];
            setCart(updatedCart);
            updateCartInLocalStorage(updatedCart);
            setAlertOpen(true);
        }
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((product) => product.id !== productId);
        setCart(updatedCart);
        updateCartInLocalStorage(updatedCart);
        window.location.reload();
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

        const storedCart = getCartFromLocalStorage();
        setCart(storedCart);
    }, [selectedProduct]);



    console.log(selectedProduct?.variacoes[0]?.fotos, "sla");

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

                {cart.length === 0 ? (
                    <Typography variant="body2" color="text.primary">
                        Não há produtos no momento.
                    </Typography>
                ) : (
                    cart.map((product) => (
                        <Card key={product.id} sx={{ maxWidth: 100, marginBottom: '10px' }}>
                            <CardMedia
                                component="img"
                                alt={product.nome}
                                height="140"
                                image={product?.variacoes[0]?.fotos[0]}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.primary">
                                    {product?.nome}
                                </Typography>

                                <Typography variant="h6" style={{ color: '#1976D2' }}>
                                    {product?.quantidade}
                                </Typography>
                                <Button
                                    size="small"
                                    color="error"
                                    onClick={() => removeFromCart(product.id)}
                                >
                                    Remover do Carrinho
                                </Button>
                            </CardContent>
                        </Card>
                    ))
                )}
                {displayedProduct && (
                    <Card sx={{ maxWidth: 100, marginBottom: '10px' }}>
                        <CardMedia
                            component="img"
                            alt={selectedProduct?.nome}
                            height="140"
                            image={selectedProduct?.variacoes[0]?.fotos[0]}
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
                    Adicionar ao carrinho
                </Button>

                <Button onClick={onClose} sx={{ mt: 2, ml: 2 }}>
                    Fechar
                </Button>


            </div>
        </Modal>
    );
};

export default ProductModalCart;
