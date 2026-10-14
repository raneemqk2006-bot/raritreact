import React, {useState, useEffect} from 'react';
import {Container, TextField, Paper, Button, Typography, Box, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function UserProfile(){
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  useEffect(() =>{
    const savedUser = localStorage.getItem('user');
    if(savedUser){
        const parsedUser = JSON.parse(savedUser);
        setName(parsedUser.name || '');
        setEmail(parsedUser.email || '' );
    }
    else{
        navigate('/log');
    }

  }, [navigate]);

  const handleUpdate = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!name || !email) {
      setError('Please fill in all fields.');
      return;
  }
  const savedUser = localStorage.getItem('user');
  const parsedUser = savedUser ? JSON.parse(savedUser) : {};

  const updatedUser = {
      ...parsedUser,
      name: name,
      email: email,
    };

    localStorage.setItem('user', JSON.stringify(updatedUser));
    setSuccess('Profile updated successfully!');
};
   return(
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#f4f4f2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: '24px',
            bgcolor: 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.03)',
          }}
        >
          <Typography
            variant="h5"
            align="center"
            sx={{
              fontFamily: 'serif',
              fontStyle: 'italic',
              mb: 1,
              fontWeight: 500,
              color: '#222',
            }}
          >
            My Profile
          </Typography>

          <Typography
            variant="caption"
            display="block"
            align="center"
            sx={{
              letterSpacing: '2px',
              color: '#666',
              textTransform: 'uppercase',
              mb: 3,
            }}
          >
            Manage your account
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2, borderRadius: '12px', fontSize: '0.85rem' }}>
              {error}
            </Alert>
          )}

          {success && (
            <Alert severity="success" sx={{ mb: 2, borderRadius: '12px', fontSize: '0.85rem' }}>
              {success}
            </Alert>
          )}

          <Box component="form" onSubmit={handleUpdate} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            <TextField
              label="Full Name"
              type="text"
              variant="filled"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              slotProps={{ input: { disableUnderline: true } }}
              sx={{
                bgcolor: '#ffffff',
                borderRadius: '12px',
                '& .MuiInputBase-root': { borderRadius: '12px' },
              }}
            />

            <TextField
              label="Email"
              type="email"
              variant="filled"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              slotProps={{ input: { disableUnderline: true } }}
              sx={{
                bgcolor: '#ffffff',
                borderRadius: '12px',
                '& .MuiInputBase-root': { borderRadius: '12px' },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 1,
                py: 1.5,
                bgcolor: '#222222',
                color: '#ffffff',
                borderRadius: '50px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontSize: '0.8rem',
                boxShadow: 'none',
                '&:hover': { bgcolor: '#000000', boxShadow: 'none' },
              }}
            >
              Save Changes
            </Button>

            <Button
              variant="outlined"
              fullWidth
              onClick={() => navigate('/')}
              sx={{
                py: 1.5,
                color: '#222',
                borderColor: '#222',
                borderRadius: '50px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontSize: '0.8rem',
                '&:hover': { borderColor: '#000', bgcolor: 'rgba(0,0,0,0.02)' },
              }}
            >
              Back to Home
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
   )
}