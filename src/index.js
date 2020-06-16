import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import muiTheme from "./theme/muiTheme";
import "typeface-roboto";
import "./index.css";
import { Typography, Link, Container } from '@material-ui/core'

const MyApp = React.lazy(() => import(/* webpackChunkName: "App" */ "./components/index"));


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://tiagocosmai.wordpress.com/">
        Tiago Cosmai Tecnologia ME
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

ReactDOM.render(
  <MuiThemeProvider theme={muiTheme}>
    <CssBaseline />
    <Suspense
      fallback={
        <p>Loading...</p>
      }
    >
      <Container maxWidth="lg">
        <div style={{ marginTop: '24px' }} >
          <MyApp />
          <Copyright />
        </div>
      </Container>

    </Suspense>
  </MuiThemeProvider>,
  document.getElementById("root")
);