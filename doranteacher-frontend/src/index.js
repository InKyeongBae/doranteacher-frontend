import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";
import { CookiesProvider } from "react-cookie";

https: ReactDOM.render(
    <CookiesProvider>
        <App />
    </CookiesProvider>,
    document.getElementById("root")
);

// axios.defaults.baseURL = "https://www.abc.com";
axios.defaults.withCredentials = true;
