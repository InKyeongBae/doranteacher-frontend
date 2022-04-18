import React from "react";
import { createGlobalStyle, ThemeProvider, css } from "styled-components";
import Mainpage from "./pages/Mainpage";
import LoginPage from "./pages/Loginpage";
import Signuppage from "./pages/Signuppage";
import NotFound from "./pages/NotFound";
import Setting from "./pages/Setting";
import WritingStart from "./pages/WritingStart";
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
                    <Route path="/setting" element={<Setting />} />
                    <Route path="/writing-start" element={<WritingStart />} />
                    <Route path="/first-step" element={<Brainstorm />} />
                    <Route path="*" element={<NotFound />} />
                    <Route
                        // path 를 따로 정의하지 않으면 모든 상황에 렌더링됨
                        render={({ location }) => (
                            <div>
                                <h2>이 페이지는 존재하지 않습니다:</h2>
                                <p>{location.pathname}</p>
                            </div>
                        )}
                    />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
