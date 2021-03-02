import {useAuth0} from "@auth0/auth0-react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./components/Profile";
import ChooseLocation from "./components/ChooseLocation";

import "./App.css";

export default function App() {
  const {user, isAuthenticated, isLoading} = useAuth0();

  return (
    <Router>
      <div>
        <nav>
          {!isAuthenticated && <LoginButton />}
          {isAuthenticated && <LogoutButton />}
        </nav>
        <Switch>
          <Route path="/about">
            <Profile />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>home</h2>;
}
