import React from 'react';
import styled, { css } from 'styled-components';
import Header from '../components/Header';
import Paint from '../components/Paint';
import GlobalStyle from '../components/GlobalStyle';
import Progressbar from '../components/Progressbar';

function Brainstorm() {
	return (
		<>
			<GlobalStyle backColor="red" />
			<>
				<>
					<Header />
				</>
				<br />
				<br />
				<Paint />\
			</>
		</>
	);
}

export default Brainstorm;
