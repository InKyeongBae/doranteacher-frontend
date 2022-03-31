import React from "react";
import styled from "styled-components";

const HeaderButtons = styled.div`
	.container {
		height: 45px;
	}
	
	button {
		width : 160px;
		outline: 0;
		border: 0;
		letter-spacing: 1px;
		cursor: pointer;
		position: relative;
	}
	
	.button {
		width : 160px;
		padding: 3px 35px;
		color: black;
		font-family: '상상토끼 꽃집막내딸 OTF';
		font-style: normal;
		font-weight: 400;
		font-size: 25px;
		border-radius: 25px;
		border: 2px solid black;
		background: #F9DE4B;
		transition: transform 0.2s cubic-bezier(0, 0, 0.7, 1);
		&:before {
		z-index: -1;
		position: absolute;
		top: 0;
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
		background : #E75244;
		top: 4px;
		left: 3.5px;
		&:before {
			box-shadow: 4px 4px 0 1px rgba($orange, 0.4);
			top: -5.5px;
			left: -4.7px;
		}
		}
	}

`;

function Button({ buttonText }) {
	return (
		<HeaderButtons>
			<div class="container">
				<button class="button">{ buttonText }</button>
			</div>
		</HeaderButtons>
	)
}

export default Button;