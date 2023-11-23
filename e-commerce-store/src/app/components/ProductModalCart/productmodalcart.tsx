// components/ProductModalCart.js
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Typography, Divider, Card, CardContent, CardMedia } from '@mui/material';

const ProductModalCart = ({ isOpen, onClose, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);
  
    const handleAddToCart = () => {
      onAddToCart(quantity);
      onClose();
    };
  
    const corPersonalizada = '#958D8D';
  
    // Simulando dados de produtos (substitua com seus dados reais)
    const products = [
      { id: 1, name: 'Burkini estiloso', image: '/imagem/produtos/verão/burkini-01.PNG' },
      { id: 2, name: 'Saída de praia', image: '/imagem/produtos/verão/saida-de-praia-feminina-laranja-01.PNG' },
    ];
  
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
          <Typography color="textPrimary" style={{ fontSize: '16px', fontWeight: 'bold', margin: '10px', color: corPersonalizada, alignItems: 'center',  justifyContent: 'center'  }}>
            PRODUTOS DO CARRINHO
          </Typography>
          <Divider style={{ margin: '10px' }} />
          
          {products.map((product) => (
            <Card key={product.id} sx={{ maxWidth: 100, marginBottom: '10px' }}>
              <CardMedia
                component="img"
                alt={product.name}
                height="5" 
                width="5"
                image={product.image}
              />
              <CardContent>
                <Typography variant="body2" color="text.primary">
                  {product.name}
                </Typography>
                <TextField
                  label="Quantidade"
                  type="number"
                  InputProps={{ inputProps: { min: 1 } }}
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  sx={{ marginTop: '10px', width: '60px' }}
                />
              </CardContent>
            </Card>
          ))}
          
          <Button onClick={handleAddToCart} sx={{ mt: 2 }}>
            Adicionar ao Carrinho
          </Button>
  
          <Button onClick={handleAddToCart} sx={{ mt: 2 }}>
            Finalizar Carrinho
          </Button>
  
          <Button onClick={onClose} sx={{ mt: 2, ml: 2 }}>
            Fechar
          </Button>
        </div>
      </Modal>
    );
  };
  
  export default ProductModalCart;