import React from 'react';
import styled, { css } from 'styled-components';
import { MdSettings, MdUndo, MdOutlineSpellcheck } from 'react-icons/md';
import { GoChevronRight, GoChevronLeft } from 'react-icons/go';

const ColorStyles = css`
	${({ theme, inputColor, outputColor }) => {
		const incolor = theme.palette[inputColor];
		const outcolor = theme.palette[outputColor];
		return css`
			color: black;
			background: ${incolor};
			&:hover {
				background: ${outcolor};
			}
		`;
	}}
`;

const ImgButtons = styled.div`
	--yellow: #ffe800;
	--brown: #404040;
	/* --brown: white; */
	--angle: 0px;
	--angle-o: 0px;
	svg {
		width: 30px;
		height: 30px;
		margin: 0px;
	}

	#btn {
		top: 0;
		left: 0;
		transition: all 0.15s linear 0s;
		position: relative;
		display: inline-block;
		min-width: 60px;
		padding: 6px 0;
		border-radius: 25px;
		border: 2px solid #404040;
		background-color: var(--yellow);
		${ColorStyles};
		text-transform: uppercase;
		color: black;
		font-family: arial;
		letter-spacing: 1px;
		margin: 0 7px;

		box-shadow: -6px 6px 0 var(--brown);
		text-decoration: none;

		font-family: 'Cafe24Syongsyong';
		font-style: normal;
		font-weight: 400;
		font-size: 25px;

		&:hover {
			top: 3px;
			left: -3px;
			box-shadow: -3px 3px 0 var(--brown);

			&::after {
				top: 1px;
				left: -2px;
				width: var(--angle);
				height: var(--angle);
			}

			&::before {
				bottom: -2px;
				right: 1px;
				width: var(--angle);
				height: var(--angle);
			}
		}

		&::after {
			transition: all 0.15s linear 0s;
			content: '';
			position: absolute;
			top: 2px;
			left: -4px;
			width: var(--angle);
			height: var(--angle);
			background-color: var(--brown);
			transform: rotate(45deg);
			z-index: -1;
		}

		&::before {
			transition: all 0.15s linear 0s;
			content: '';
			position: absolute;
			bottom: -4px;
			right: 2px;
			width: var(--angle);
			height: var(--angle);
			background-color: var(--brown);
			transform: rotate(45deg);
			z-index: -1;
		}
	}

	a.btn {
		position: relative;
	}

	a:active.btn {
		top: 6px;
		left: -6px;
		box-shadow: none;

		&:before {
			bottom: 1px;
			right: 1px;
		}

		&:after {
			top: 1px;
			left: 1px;
		}
	}
`;

function ImgButton({ extraClassName, setting, undo, next, prev, check, onClick, ...rest }) {
	const className = extraClassName ? 'button' + extraClassName : 'button';
	return (
		<ImgButtons {...rest}>
			<button className={className} id="btn" onClick={onClick}>
				{setting && <MdSettings />}
				{undo && <MdUndo />}
				{next && <GoChevronRight />}
				{prev && <GoChevronLeft />}
				{check && <MdOutlineSpellcheck />}
			</button>
		</ImgButtons>
	);
}

ImgButton.defaultProps = {
	inputColor: 'yellow',
	outputColor: 'red',
};

export default ImgButton;
