import { useState } from 'react';
import { Container, TextField, Paper, Button, Typography, Box } from '@mui/material';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password, confirmPassword });
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={0} sx={{ p: 4,m: 4, borederRadius:'24px',bgcolor:'rgba(255,255,255,0.75)' ,backdropFilter:'blur(10px)',border: '1px solid rgba(255,255,255,0.8)',boxShadow:'0 8px 32px rgba(0,0,0,0)' }}>
        <Typography variant="h5" align="center" sx={{ fontFamily:'serif',fontStyle:'italic',mb: 1, fontWeight: '500',color:'#222' }}>
          Register
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
          <TextField 
            label="Name" 
            variant="filled" 
            fullWidth 
            value={name}
            onChange={(e) => setName(e.target.value)}
            InputProps={{ disableUnderline: true }}
              sx={{ 
                bgcolor: '#ffffff', 
                borderRadius: '12px'}}
            
          />

          <TextField 
            label="Email" 
            type="email" 
            variant="outlined" 
            fullWidth 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{ disableUnderline: true }}
              sx={{ 
                bgcolor: '#ffffff', 
                borderRadius: '12px'}}

          />

          <TextField 
            label="Password" 
            type="password" 
            variant="outlined" 
            fullWidth 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{ disableUnderline: true }}
              sx={{ 
                bgcolor: '#ffffff', 
                borderRadius: '12px'}}
          />

          <TextField 
            label="Confirmpassword" 
            type="password" 
            variant="outlined" 
            fullWidth 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            InputProps={{ disableUnderline: true }}
              sx={{ 
                bgcolor: '#ffffff', 
                borderRadius: '12px'}}
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
              }}
            >
            Register
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}