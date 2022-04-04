import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Mainpage from './pages/Mainpage';

const GlobalStyle = createGlobalStyle`
	body {
		margin : 0;
		background : #F9DE4B;
	}
`;

const palette = {
	red: '#E75244',
	blue: '#367BBE',
	purple: '#8491E0',
	yellow: '#F9DE4B',
	green: '#5DCB83',
	white: '#ffffff',
	black: '#000000',
};

function App() {
	return (
		<ThemeProvider theme={{ palette }}>
			<>
				<GlobalStyle />
				<Mainpage />
			</>
		</ThemeProvider>
	);
}

export default App;
