import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Profile from "./components/Profile";
import {AppBar, Button, Container, Toolbar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    paddingTop: theme.spacing(10),
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
    <React.Fragment>
      <AppBar>
        <Toolbar>
          {!isAuthenticated && (
            <Button onClick={() => loginWithRedirect()}>Login</Button>
          )}
          {isAuthenticated && (
            <Button onClick={() => logout({returnTo: window.location.origin})}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <main className={classes.main}>
        <Container>{isAuthenticated && <Profile />}</Container>
      </main>
    </React.Fragment>
  );
}

function Home() {
  return <h2>home</h2>;
}
