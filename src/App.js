import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import {AppBar, Box, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/core/styles";
import {createMuiTheme} from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const theme = createMuiTheme();

const useStyles = makeStyles((theme) => ({
  main: {
    paddingTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  root: {
    // flexGrow: 1,
    // maxWidth: "600px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();

  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
    isLoading,
  } = useAuth0();

  return (
    <ThemeProvider theme={theme}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Seoulspice Menu Manager
          </Typography>
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </Toolbar>
      </AppBar>
      <main className={classes.main}>
        {isLoading && <CircularProgress />}
        {!isLoading && !isAuthenticated && (
          <Box component="h1">Login to edit menu</Box>
        )}
        {isAuthenticated && <Profile />}
      </main>
    </ThemeProvider>
  );
}

function Home() {
  return <h2>home</h2>;
}
