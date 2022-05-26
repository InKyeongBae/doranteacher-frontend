import './App.css';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Mainpage from './pages/Mainpage';
import LoginPage from './pages/Loginpage';
import Signuppage from './pages/Signuppage';
import NotFound from './pages/NotFound';
import Setting from './pages/Setting';
import WritingStart from './pages/WritingStart';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Step1 from './pages/step1/Step1';
import Brainstorm from './pages/brainstorm/Brainstorm';
import DiaryType from './pages/DairyType';
import DiarySave from './pages/DiarySave';
import Title from './pages/title/Title';
import DiaryContentsView from './pages/diarycontentsview/DiaryContentsView';
import Step2 from './pages/step2/Step2';
import { Step1SentenceProvider } from './pages/step1/SentenceContext';
import { Step2SentenceProvider } from './pages/step2/SentenceContext';

const palette = {
    red: "#E75244",
    blue: "#367BBE",
    purple: "#8491E0",
    yellow: "#F9DE4B",
    green: "#5DCB83",
    white: "#ffffff",
    black: "#000000",
};

function Writing() {
    return (
        <>
            <Outlet />
        </>
    );
}

function App() {
	return (
		<BrowserRouter>
			<Step1SentenceProvider>
				<Step2SentenceProvider>
					<ThemeProvider theme={{ palette }}>
						<Routes>
							<Route path="/" element={<Mainpage />} />
							<Route path="/login" element={<LoginPage />} />
							<Route path="/signup" element={<Signuppage />} />
							<Route path="/setting" element={<Setting />} />
							<Route path="/writing" element={<Writing />}>
								<Route path="start" element={<WritingStart />} />
								<Route path="first-step" element={<Brainstorm />} />
								<Route path="diary-type" element={<DiaryType />} />
								<Route path="step1" element={<Step1 />} />
								<Route path="step2" element={<Step2 />} />
								<Route path="diary-contents-view" element={<DiaryContentsView />} />
								<Route path="title" element={<Title />} />
								<Route path="save" element={<DiarySave />} />
								{/* <Route path="*" element={<NotFound />} /> */}
							</Route>
							<Route path="*" element={<NotFound />} />
						</Routes>
					</ThemeProvider>
				</Step2SentenceProvider>
			</Step1SentenceProvider>
		</BrowserRouter>
	);
}

export default App;
