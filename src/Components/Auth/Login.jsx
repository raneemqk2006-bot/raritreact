import { useState } from 'react';
import { Container, TextField, Paper, Button, Typography, Box } from '@mui/material';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
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
            variant="h4" 
            align="center" 
            sx={{ 
              fontFamily: 'serif', 
              fontStyle: 'italic',
              fontWeight: 500, 
              color: '#222', 
              mb: 1 
            }}
          >
            Rarité
          </Typography>

          <Typography 
            variant="caption" 
            display="block" 
            align="center" 
            sx={{ 
              letterSpacing: '2px', 
              color: '#666', 
              textTransform: 'uppercase', 
              mb: 4 
            }}
          >
            Welcome Back
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            <TextField 
              label="EMAIL ADDRESS" 
              type="email" 
              variant="filled" 
              fullWidth 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{ disableUnderline: true }}
              sx={{ 
                bgcolor: '#ffffff', 
                borderRadius: '12px',
                '& .MuiInputBase-root': { borderRadius: '12px' },
                '& .MuiInputLabel-root': { fontSize: '0.75rem', letterSpacing: '1px' }
              }}
            />

            <TextField 
              label="PASSWORD" 
              type="password" 
              variant="filled" 
              fullWidth 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{ disableUnderline: true }}
              sx={{ 
                bgcolor: '#ffffff', 
                borderRadius: '12px',
                '& .MuiInputBase-root': { borderRadius: '12px' },
                '& .MuiInputLabel-root': { fontSize: '0.75rem', letterSpacing: '1px' }
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
              Sign In
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}