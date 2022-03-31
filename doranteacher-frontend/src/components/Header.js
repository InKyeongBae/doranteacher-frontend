import React from "react";
import styled from "styled-components";
import Button from "./Button";

const HeaderBlock = styled.div`
	position: sticky;
	top: 0;

	background : deeppink;
	color: black;
	padding: 20px 50px 15px 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const HeaderIcon = styled.div`
	.doranIcon {
		height : 45px;
		vertical-align:middle;
		padding-bottom : 5px;
	}
	.doranIconName {
		font-family: 'Cafe24 Ssurround';
		font-style: normal;
		font-weight: 700;
		font-size: 33px;
		padding-left : 5px;
		vertical-align:middle;
	}
`;

const HeaderButtons = styled.div`
	div {
		display: inline-block;
		padding-left:20px;
	}

`;


function Header() {
	return (
		<HeaderBlock>
			<HeaderIcon className="mainIcon">
				<img className="doranIcon" src="/img/header-doran-face.png" />
				<span className="doranIconName">도란쌤</span>
			</HeaderIcon>

			<HeaderButtons>
				<Button buttonText="회원가입"></Button>
				<Button buttonText="로그인"></Button>
				<Button buttonText="설정"></Button>
			</HeaderButtons>

		</HeaderBlock>
	);
}

export default Header;