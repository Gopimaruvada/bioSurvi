import React from 'react';
import { Container, Paper, TextField, Button, Checkbox, FormControlLabel, styled, Typography, Grid } from '@mui/material';
import { login } from '../API/api';
import { useSelector } from 'react-redux';


const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const CallLogin = () => {
    // Call the API function.
    const subscription = login('kminchelle', '0lelplR').subscribe({
      next: (data) => {
        // Handle the API response data here.
        console.log('API Response:', data);
      },
      error: (error) => {
        // Handle API errors here.
        console.error('API Error:', error);
      },
    });

    // Clean up the subscription when the component unmounts.
    return () => {
      subscription.unsubscribe();
    };
  };

const LoginPage: React.FC = () => {

  const Userdetails = useSelector(((state :any )=> (state.login.data)));

  return (
    <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Container maxWidth="xs">
        <StyledPaper elevation={3}>
        <Typography variant="h5" gutterBottom>
            Login
          </Typography>
          <form>
            <TextField
              label="Email ID"
              variant="outlined"
              margin="normal"
              fullWidth
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Remember Me"
            />
            <Typography >
            Need Password Assistance ?
          </Typography>
          <Typography >
           New User Click to Register
          </Typography>
            <Button onClick={CallLogin} 
              variant="contained"
              color="primary"
              fullWidth
            >
              Login
            </Button>

          </form>
        </StyledPaper>
      </Container>
    </Grid>
  );
};

export default LoginPage;
