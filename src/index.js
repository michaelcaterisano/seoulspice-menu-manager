import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {Auth0Provider} from "@auth0/auth0-react";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Auth0Provider
    domain="seoulspice.us.auth0.com"
    clientId="6GnBBRY6dxTpjTbxFNvqdhRCYEm09Vvl"
    redirectUri={`${window.location.origin}/about`}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
