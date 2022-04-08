import React from 'react';
import styled, { css } from 'styled-components';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from '../components/Header';
import Paint from '../components/Paint';

const MainBlock = styled.body`
	background: '#E75244';
`;

function Brainstorm() {
  return (
	<>
		<Header isIcon />
		<MainBlock>
			<Paint />
		</MainBlock>
	</>
  );
}

export default Brainstorm;