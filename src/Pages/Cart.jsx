import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Button, Paper, IconButton } from '@mui/material';
import { MenuContext } from '../Context/MenuContext';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const { setCartCount } = useContext(MenuContext) || {};
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    const newTotalCount = updatedCart.reduce((total, item) => total + (item.quantity || 1), 0);
    if (setCartCount) setCartCount(newTotalCount);
  };
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
        const cleanPrice = typeof item.price === 'string' 
        ? parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0 
        : Number(item.price) || 0;
        return total + (cleanPrice * (item.quantity || 1));
    }, 0).toFixed(2)
};
    const handleCheckout = () => {
    if (cartItems.length === 0) return;
    
    alert('Order placed successfully! Thank you for shopping with us.');

    localStorage.removeItem('cart');
    setCartItems([]);
    if (setCartCount) setCartCount(0);

    navigate('/');
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f4f4f2', py: 5 }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          align="center"
          sx={{ fontFamily: 'serif', fontStyle: 'italic', mb: 4, fontWeight: 500, color: '#222' }}
        >
          Shopping Cart
        </Typography>

        {cartItems.length === 0 ? (
          <Paper
            elevation={0}
            sx={{ p: 5, textAlign: 'center', borderRadius: '24px', bgcolor: 'rgba(255, 255, 255, 0.75)' }}
          >
            <Typography variant="body1" sx={{ color: '#666', mb: 3 }}>
              Your cart is currently empty.
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate('/')}
              sx={{
                bgcolor: '#222',
                color: '#fff',
                borderRadius: '50px',
                px: 4,
                py: 1.2,
                textTransform: 'uppercase',
                '&:hover': { bgcolor: '#000' },
              }}
            >
              Continue Shopping
            </Button>
          </Paper>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {cartItems.map((item) => (
              <Paper
                key={item.id}
                elevation={0}
                sx={{
                  p: 3,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderRadius: '16px',
                  bgcolor: '#ffffff',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                }}
              >
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#222' }}>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    Price: {item.price}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    Quantity: {item.quantity || 1}
                  </Typography>
                </Box>

                <Button
                  variant="outlined"
                  color="error"
                  size="small"
                  onClick={() => handleRemoveItem(item.id)}
                  sx={{ borderRadius: '20px', textTransform: 'none' }}
                >
                  Remove
                </Button>
              </Paper>
            ))}
            <Paper
              elevation={0}
              sx={{
                p: 3,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: '16px',
                bgcolor: '#ffffff',
                mt: 2,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#222' }}>
                Total: {calculateTotal()} JOD
              </Typography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#222',
                  color: '#fff',
                  borderRadius: '50px',
                  px: 4,
                  py: 1.5,
                  textTransform: 'uppercase',
                  '&:hover': { bgcolor: '#000' },
                }}
                onClick={() => alert('Proceeding to checkout...')}
              >
                Checkout
              </Button>
            </Paper>
          </Box>
        )}
      </Container>
    </Box>
  );

}