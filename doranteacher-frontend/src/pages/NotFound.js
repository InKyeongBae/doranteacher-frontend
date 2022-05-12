import React from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import Button from '../components/Button';
import GlobalStyle from '../components/GlobalStyle';
import { useNavigate, Link } from 'react-router-dom';

const MainBlock = styled.div`
	padding: 20px 50px 15px 50px;
	.doran {
		height: 45px;
		vertical-align: middle;
		padding-bottom: 5px;
		cursor: pointer;
	}

	.main {
		margin-top: 200px;
		display: flex;
		justify-content: center;
	}
	.error {
		padding-top: 20px;
		font-family: 'neodgm';
		font-style: normal;
		font-weight: 400;
		font-size: 120px;
		align-self: center;
		text-align: center;
		align-items: center;
	}
	.sadDoran {
		height: 150px;
		vertical-align: middle;
		padding-bottom: 5px;
		margin-right: 20px;
	}
	.comment {
		margin-top: 40px;
		font-family: 'Cafe24Syongsyong';
		font-style: normal;
		font-weight: 200;
		font-size: 35px;
		text-align: center;
	}
`;
function NotFound() {
	const navigate = useNavigate();
	return (
		<MainBlock>
			<GlobalStyle backColor="yellow" />
			<div className="header">
				<img className="doran" src="/img/doranlogo.png" onClick={() => navigate('/')} />
			</div>
			<div className="main">
				<img className="sadDoran" src="/img/sad_doran.png" />
				<div className="error">404</div>
			</div>
			<div className="comment">
				요청한 페이지를 <br /> 찾을 수 없습니다.
			</div>
		</MainBlock>
	);
}
export default NotFound;
