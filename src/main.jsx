import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-aam4ll6dugq7hjfm.us.auth0.com"
     clientId="QWh3unrtHi4XIleWd0oeOBadQu5ReHwG"
     authorizationParams={{
      redirect_uri: "http://localhost:5173"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
    <App />
    </Auth0Provider>
    
  </React.StrictMode>
);
