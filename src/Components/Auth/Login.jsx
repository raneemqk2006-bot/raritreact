import { useState } from 'react';
import { Container, TextField, Paper, Button, Typography, Box , Alert} from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if(!email || !password){
      setError('Please fill in all fields.');
      return;
    }
    if(password.length < 6){
      setError('Password must be at least 6 characters long.');
      return;
    }
      const adminEmail = 'raneem1234@gmail.com';
      const role =(email.trim().toLowerCase() === adminEmail.toLowerCase()) ? 'admin' :'user';
      const userData = {email, role};

      localStorage.setItem('user', JSON.stringify(userData));

      if(role === 'admin'){
        navigate('/admin')
      }
      else{
        navigate('/profile');
      }
    };
  



  return <>
  
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

          {error && (
            <Alert severity='error' sx={{ mb: 2, borderRadius: '12px'}}>
              {error}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            <TextField 
              label="EMAIL ADDRESS" 
              type="email" 
              variant="filled" 
              fullWidth 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              slotProps={{ disableUnderline: true }}
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
              slotProps={{ disableUnderline: true }}
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
  </>

}