import React, { useState } from 'react';
import { Container, TextField, Paper, Button, Typography, Box, Alert } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import {useAuth} from '../../Hooks/useAuth';


export default function Register() {
  const { register }= useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = async(e) => {
    e.preventDefault();
    setError('');
    if(!name || !email || !password || !confirmPassword){
      setError('Please fill in all fields.');
      return;
    }
    if(password.length < 6){
      setError('Password must be at least 6 Characters long.');
      return;
    }
    if(password != confirmPassword){
      setError('Password do not match.');
      return;
    }
    try{
      const res = await register({name , email, password, confirmPassword});
      if(res?.error){
        setError(res.error);
      }
      else{
        navigate('/log')
      }
    }
    catch(err){
      setError('Failed to creat an account. Please try again.');

    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#f4f4f2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4
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
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.03)'
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
              color: '#222'
            }}
          >
            Register
          </Typography>

          <Typography
            variant="caption"
            display="block"
            align="center"
            sx={{
              letterSpacing: '2px',
              color: '#666',
              textTransform: 'uppercase',
              mb: 3
            }}
          >
            Create your account
            </Typography>
            {error && (
            <Alert severity="error" sx={{ mb: 2, borderRadius: '12px', fontSize: '0.85rem' }}>
              {error}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            <TextField
              label="Name"
              variant="filled"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              slotProps={{ disableUnderline: true }}
              sx={{
                bgcolor: '#ffffff',
                borderRadius: '12px',
                '& .MuiInputBase-root': { borderRadius: '12px' }
              }}
            />

            <TextField
              label="Email"
              type="email"
              variant="filled"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              slotProps={{ disableUnderline: true }}
              sx={{
                bgcolor: '#ffffff',
                borderRadius: '12px',
                '& .MuiInputBase-root': { borderRadius: '12px' }
              }}
            />

            <TextField
              label="Password"
              type="password"
              variant="filled"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              slotProps={{ disableUnderline: true }}
              sx={{
                bgcolor: '#ffffff',
                borderRadius: '12px',
                '& .MuiInputBase-root': { borderRadius: '12px' }
              }}
            />

            <TextField
              label="Confirm Password"
              type="password"
              variant="filled"
              fullWidth
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              slotProps={{ disableUnderline: true }}
              sx={{
                bgcolor: '#ffffff',
                borderRadius: '12px',
                '& .MuiInputBase-root': { borderRadius: '12px' }
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
                '&:hover': { bgcolor: '#000000', boxShadow: 'none' }
              }}
            >
              Register
            </Button>

            <Typography variant="body2" align="center" sx={{ mt: 1, color: '#666', fontSize: '0.8rem' }}>
              Already have an account?{' '}
              <Link to="/log" style={{ color: '#222', fontWeight: 600, textDecoration: 'none' }}>
                Sign In
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}