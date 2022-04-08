import React from 'react';
import styled, { css } from 'styled-components';
import Header from '../components/Header';
import Paint from '../components/Paint';
import GlobalStyle from '../components/GlobalStyle';

function Brainstorm() {
	return (
		<>
			<GlobalStyle backColor="red" />
			<>
				<Header isIcon />
				<Paint />\
			</>
		</>
	);
}

export default Brainstorm;
