import logo from "./logo.svg";
import {useAuth0} from "@auth0/auth0-react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import "./App.css";

export default function App() {
  const {user, isAuthenticated, isLoading} = useAuth0();

  return (
    <Router>
      <div>
        <nav>
          {!isAuthenticated && <LoginButton />}
          {isAuthenticated && <LogoutButton />}

          {isAuthenticated && (
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          )}
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
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

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
