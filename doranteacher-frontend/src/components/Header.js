import React from 'react';
import styled, { ThemeConsumer, ThemeProvider } from 'styled-components';
import Button from './Button';
import ImgButton from './ImgButton';
import Progressbar from './Progressbar';
import { Link } from 'react-router-dom';

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
        font-family: "Cafe24 Ssurround";
		font-color:black
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

const StyledLink = styled(Link)`
	text-decoration: none;
	color: black;
	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
		color: black;
	}
`;

function Header({ isIcon, isProgress, isSignup, isLogin, isLogout, isSetting }) {
	return (
		<HeaderBlock>
			<HeaderIcon className="mainIcon">
				<StyledLink to="/">
					{isIcon ? (
						<>
							<img className="doranIcon" src="/img/header-doran-face.png" />
							<span className="doranIconName">도란쌤</span>
						</>
					) : (
						<img className="doranIcon" src="/img/doranlogo.png" />
					)}
				</StyledLink>
			</HeaderIcon>

			<HeaderButtons className="mainHeader">
				{isProgress ? <Progressbar buttonText="2. 글감 찾기"></Progressbar> : null}
				<Link to="/signup">{isSignup ? <Button buttonText="회원가입" outputColor="red"></Button> : null}</Link>
				<Link to="/login">{isLogin ? <Button buttonText="로그인" outputColor="purple"></Button> : null}</Link>
				{isLogout ? <Button buttonText="로그아웃" outputColor="purple"></Button> : null}
				<Link to="/setting">{isSetting ? <ImgButton setting={true} undo={false} outputColor="white"></ImgButton> : null}</Link>
			</HeaderButtons>
		</HeaderBlock>
	);
}

export default Header;
