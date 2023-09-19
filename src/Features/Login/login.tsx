import React from 'react';
import { Container, Paper, TextField, Button, Checkbox, FormControlLabel, styled, Typography, Grid } from '@mui/material';

import { useDispatch } from 'react-redux';
import { loadBuildlogs } from './actions/login.actions';
// import { useSelector } from 'react-redux';
import { useSelector } from 'react-redux';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));



const LoginPage: React.FC = () => {
  const buildLogsData = useSelector((state:any) => state.login.data);
console.log(buildLogsData)
const dispatch:any = useDispatch();

  const CallLogin = () => {

    dispatch(loadBuildlogs('kminchelle', '0lelplR'));

  };


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
