import React from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';
import ImgButton from './ImgButton';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const HeaderBlock = styled.div`
	z-index: 15;
	position: sticky;
	top: 0;
	color: black;
	padding: 20px 30px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	${({ theme, backColor }) => {
		const colorstyle = theme.palette[backColor];
		return css`
			background: ${colorstyle};
		`;
	}}
	.link {
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
		cursor: pointer;
	}
`;

const HeaderIcon = styled.div`
	.doranIcon {
		height: 45px;
		vertical-align: middle;
		padding-bottom: 5px;
	}
	.doranIconName {
		font-family: 'cafe24';
		color: black;
		font-style: normal;
		font-weight: 700;
		font-size: 33px;
		padding-left: 5px;
		vertical-align: middle;
	}
`;

const HeaderButtons = styled.div`
	display: flex;
	.button {
		margin: auto 5px;
	}
`;

function Header({ isIcon, isProgress, isSignup, isLogin, isLogout, isSetting, isUndo, progress, backColor }) {
	const navigate = useNavigate();
	// const [Cookies] = useCookies(["acessToken"]);
	const [cookies, setCookie, removeCookie] = useCookies(['acessToken']);
	// navigate('/')
	//

	function returnMain() {
		console.log('!!');
		const remain = localStorage.getItem('refreshToken');
		localStorage.clear();
		localStorage.setItem('refreshToken', remain);
		navigate('/');
	}
	return (
		<HeaderBlock backColor={backColor}>
			<HeaderIcon className="mainIcon">
				<>
					{isIcon ? (
						<div className="link" onClick={() => navigate('/')}>
							<img className="doranIcon" src="/img/header-doran-face.png" />
							<span className="doranIconName">도란쌤</span>
						</div>
					) : (
						<div className="link" onClick={returnMain}>
							<img className="doranIcon" src="/img/doranlogo.png" />
						</div>
					)}
				</>
			</HeaderIcon>

			<HeaderButtons className="mainHeader">
				<div className="progressdiv" style={{ paddingRight: '35px' }}>
					{isProgress ? progress : null}
				</div>
				{isSignup ? (
					<Button buttonText="회원가입" outputColor="red" onClick={() => navigate('/signup')}></Button>
				) : null}
				{isLogin ? (
					<Button buttonText="로그인" outputColor="purple" onClick={() => navigate('/login')}></Button>
				) : null}
				{isLogout ? (
					<Button
						buttonText="로그아웃"
						outputColor="purple"
						onClick={() => {
							removeCookie('accessToken');
							localStorage.clear();
							navigate('/'); //메인페이지로 이동
						}}
					></Button>
				) : null}
				{isSetting ? (
					<ImgButton
						setting={true}
						undo={false}
						outputColor="white"
						onClick={() => navigate('/setting')}
					></ImgButton>
				) : null}

				{isUndo ? (
					<ImgButton setting={false} undo={true} outputColor="white" onClick={() => navigate(-1)}></ImgButton>
				) : null}
			</HeaderButtons>
		</HeaderBlock>
	);
}

export default Header;
