// components/ProductModalCart.js
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Typography, Divider, Card, CardContent, CardMedia } from '@mui/material';

const ProductModalCart = ({ isOpen, onClose, onAddToCart, selectedProduct }) => {
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        onAddToCart(quantity);
        onClose();
    };

    console.log(selectedProduct, "estamos com problemas")


    const [quantidade, setQuantidade] = useState(1);

    const handleIncrement = () => {
        setQuantidade(quantidade + 1);
    };

    const handleDecrement = () => {
        setQuantidade(quantidade > 0 ? quantidade - 1 : 0);
    };


    const corPersonalizada = '#958D8D';

    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div style={{
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
                p: 4
            }}>
                <Typography color="textPrimary" style={{ fontSize: '16px', fontWeight: 'bold', margin: '10px', color: corPersonalizada, alignItems: 'center', justifyContent: 'center' }}>
                    PRODUTOS DO CARRINHO
                </Typography>
                <Divider style={{ margin: '10px' }} />

                {selectedProduct && (
                    <Card sx={{ maxWidth: 100, marginBottom: '10px' }}>
                        <CardMedia
                            component="img"
                            alt={selectedProduct.nome}
                            height="140"
                            image={selectedProduct.variacoes[0].fotos[0]}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.primary">
                                {selectedProduct.nome}
                            </Typography>
                           
                            <Typography variant="h6" style={{ color: '#1976D2' }}>
                               {quantidade}
                            </Typography>
                            <Button size="small" color="primary" onClick={handleIncrement}>
                                +
                            </Button>
                            <Button size="small" color="primary" onClick={handleDecrement}>
                                -
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
