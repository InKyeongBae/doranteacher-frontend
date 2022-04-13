import React from "react";
import { createGlobalStyle, ThemeProvider, css } from "styled-components";
import Mainpage from "./pages/Mainpage";
import LoginPage from "./pages/Loginpage";
import Signuppage from "./pages/Signuppage";
import Paint from "./components/Paint";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Brainstorm from "./pages/Brainstorm";

const palette = {
    red: "#E75244",
    blue: "#367BBE",
    purple: "#8491E0",
    yellow: "#F9DE4B",
    green: "#5DCB83",
    white: "#ffffff",
    black: "#000000",
};

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={{ palette }}>
                <Routes>
                    <Route path="/" element={<Mainpage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<Signuppage />} />
                    <Route path="/paint" element={<Paint />} />
                    <Route path="/first-step" element={<Brainstorm />} />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
