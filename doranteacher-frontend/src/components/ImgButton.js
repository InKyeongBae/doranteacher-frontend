import React from "react";
import styled, { css } from "styled-components";
import { MdSettings, MdUndo } from "react-icons/md";

const ColorStyles = css`
	${({theme, inputColor, outputColor}) => {
			const incolor = theme.palette[inputColor];
			const outcolor = theme.palette[outputColor];
			return css`
				color : black;
				background: ${incolor};
				&:hover {
					background : ${outcolor};
				}
			`;
		}}
`;

const ImgButtons = styled.div`

	svg {
		width: 30px;
		height: 30px;
		margin : 0px;
	}
	
	button {
		top : 5px;
		height: 42.5px;
		${ColorStyles};
		outline: 0;
		border: 0;
		letter-spacing: 1px;
		cursor: pointer;
		position: relative;
		padding: 3px 5px;
		border-radius: 25px;
		border: 2px solid black;
		transition: transform 0.2s cubic-bezier(0, 0, 0.7, 1);

		&:before {
			z-index: -1;
			position: absolute;
			top: 1px;
			right: 0;
			bottom: 0;
			left: 0;
			content: "";
			width: 98%;
			height: 98%;
			position: absolute;
			background: white;
			transform: translate3d(0.2em, 0.15em, 1em);
			border-radius: 25px;
			border: 2px solid black;
			transition: transform 0.2s cubic-bezier(0, 0, 0.7, 1);
			&:active {
				z-index: -1;
			}
		}

		&:hover {
			transition: all 0.1s cubic-bezier(0, 0, 0.7, 1);
			top: 9px;
			left: 3.5px;
			&:before {
				top: -2.5px;
				left: -4.7px;
			}
		}
	}

`;


function ImgButton({ setting, undo, ...rest }) {
	return (
		<ImgButtons {...rest}>
			<button className="button" setting={setting} undo={undo}>{setting && <MdSettings />}{undo && <MdUndo />}</button>
		</ImgButtons>
	)
}

ImgButton.defaultProps = {
	inputColor : 'yellow',
	outputColor : 'red',
}

export default ImgButton;