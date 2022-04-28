import { createGlobalStyle, css } from 'styled-components';
import React from 'react';

const BackgroundStyle = createGlobalStyle`
	body {
		margin : 0;
		${({ theme, backColor }) => {
			const colorstyle = theme.palette[backColor];
			return css`
				background: ${colorstyle};
			`;
		}}
	}
`;

function GlobalStyle({ backColor }) {
	return <BackgroundStyle backColor={backColor} />;
}

export default GlobalStyle;
