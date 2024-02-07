import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Typography, Divider, Card, CardContent, CardMedia } from '@mui/material';

interface Product {
    id: number;
    nome: string;
    variacoes: {
        fotos: string[];
    }[];
}

interface ProductModalCartProps {
    isOpen: boolean;
    onClose: () => void;
    onAddToCart: (quantity: number) => void;
    selectedProduct?: Product;
}

const ProductModalCart: React.FC<ProductModalCartProps> = ({ isOpen, onClose, onAddToCart, selectedProduct }) => {
    const [quantity, setQuantity] = useState(0);
    const [cart, setCart] = useState<Product[]>([]);
    const [displayedProduct, setDisplayedProduct] = useState<Product | null>(null);
    const [alertOpen, setAlertOpen] = useState(false);

    const getCartFromLocalStorage = (): Product[] => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    };

    const updateCartInLocalStorage = (newCart: Product[]): void => {
        localStorage.setItem('cart', JSON.stringify(newCart));
    };

    useEffect(() => {
        setCart(getCartFromLocalStorage());
    }, []);

    const handleAddToCart = (): void => {
        onAddToCart(quantity);
        addToCart(displayedProduct!);
        onClose();
    };

    const addToCart = (product: Product): void => {
        const productInCart = cart.find((item) => item.id === product.id);
        if (productInCart) {
            console.log('Product already in the cart');
        } else {
            const updatedCart = [...cart, product];
            setCart(updatedCart);
            updateCartInLocalStorage(updatedCart);
            setAlertOpen(true);
        }
    };

    const removeFromCart = (productId: number): void => {
        const updatedCart = cart.filter((item) => item.id !== productId);
        setCart(updatedCart);
        updateCartInLocalStorage(updatedCart);
    };

    useEffect(() => {
        if (selectedProduct) {
            setDisplayedProduct(selectedProduct);
            setQuantity(selectedProduct?.variacoes[0]?.fotos?.length || 1);
        }
    }, [selectedProduct]);

    const handleIncrement = (): void => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrement = (): void => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const handleRemoveFromCart = (): void => {
        removeFromCart(displayedProduct!.id);
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
               
                    justifyContent: 'center',
                    alignItems: 'center',
                  
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
                                image={product.variacoes[0].fotos[0]}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.primary">
                                    {product.nome}
                                </Typography>
                                <Typography variant="h6" style={{ color: '#1976D2' }}>
                                    {quantity}
                                </Typography>
                                <Button size="small" color="error" onClick={() => removeFromCart(product.id)}>
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
                            alt={displayedProduct.nome}
                            height="140"
                            image={displayedProduct.variacoes[0].fotos[0]}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.primary">
                                {displayedProduct.nome}
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
