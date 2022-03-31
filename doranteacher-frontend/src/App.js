import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Mainpage from './pages/Mainpage';

const GlobalStyle = createGlobalStyle`
	body {
		margin : 0;
		background : #F9DE4B;
	}
`;


function App() {
  return (
	<>
	  <GlobalStyle />
	  <Mainpage />
	</>
  );
}

export default App;
