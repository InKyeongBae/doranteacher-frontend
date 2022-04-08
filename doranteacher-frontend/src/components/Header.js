import React from 'react';
import styled, { ThemeConsumer, ThemeProvider } from 'styled-components';
import Button from './Button';
import ImgButton from './ImgButton';
import Progressbar from './Progressbar';

const HeaderBlock = styled.div`
	position: sticky;
	top: 0;
	color: black;
	padding: 20px 50px 15px 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const HeaderIcon = styled.div`
	.doranIcon {
		height: 45px;
		vertical-align: middle;
		padding-bottom: 5px;
	}
	.doranIconName {
		font-family: 'Cafe24 Ssurround';
		font-style: normal;
		font-weight: 700;
		font-size: 33px;
		padding-left: 5px;
		vertical-align: middle;
	}
`;

const HeaderButtons = styled.div`
	div {
		display: inline-block;
		padding-left: 20px;
		padding-bottom: 5px;
	}
`;

function Header({ isIcon, isProgress, isSignup, isLogin, isLogout, isImgBtn }) {
	return (
		<HeaderBlock>
			<HeaderIcon className="mainIcon" >
				{isIcon ? (
					<>
						<img className="doranIcon" src="/img/header-doran-face.png" />
						<span className="doranIconName">도란쌤</span>
					</>
				) : (
					<img className="doranIcon" src="/img/doranlogo.png" />
				)}
			</HeaderIcon>

			<HeaderButtons className="mainHeader">
				{isProgress ? <Progressbar buttonText="6. 사진 선택하기"></Progressbar> : null}
				{isSignup ? <Button buttonText="회원가입" outputColor="red"></Button> : null}
				{isLogin ? <Button buttonText="로그인" outputColor="purple"></Button> : null}
				{isLogout ? <Button buttonText="로그아웃" outputColor="purple"></Button> : null}
				{isImgBtn ? <ImgButton setting={true} undo={false} outputColor="white"></ImgButton> : null}
			</HeaderButtons>
		</HeaderBlock>
	);
}

export default Header;
