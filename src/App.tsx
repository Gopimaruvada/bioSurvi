import React from "react";
import theme from "./theme";
import "./App.css";

import { ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";
import LoginPage from "./Features/Login/login";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardPage from "./Features/Dashboard/dashboard";

function App() {
  return (
    <Provider store={store}>
   
      <ThemeProvider theme={theme}>
        <Grid className="App">
          <DashboardPage />
        </Grid>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
