import React, { useState } from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
import Header from '../../components/Header';
import Button from '../../components/Button';
import GlobalStyle from '../../components/GlobalStyle';
import { useNavigate, Link } from 'react-router-dom';
import LeftDoran from '../../components/LeftDoran';
import ProgressBar from '../../components/ProgressBar';

const MainBlock = styled.div`
	.buttons {
		margin-top: 30px;
		justify-content: center;
		// margin-right: 200px;
		display: flex;
		align-items: center;
	}

	.button {
		margin-right: 20px;
		margin-left: 20px;
	}

	.on {
		background: #e75244;
		transition: all 0.1s cubic-bezier(0, 0, 0.7, 1);
		top: 4px;
		left: 3.5px;
		&:before {
			top: -5px;
			left: -4.7px;
		}
	}

	.main {
		display: flex;
		justify-content: flex-start;
	}
`;
const BigDoran = styled.div`
	.bigDoran {
		margin-top: 50px;
		height: 550px;
	}
`;

function Book() {
	const navigate = useNavigate('');
	return (
		<>
			<GlobalStyle backColor="yellow" />
			<Header backColor="yellow" isLogout />
			<MainBlock>
				<div className="buttons">
					<div className="button">
						<Button
							buttonText="이달의 일기"
							width="250px"
							height="50px"
							onClick={() => navigate('/diary-list')}
						></Button>
					</div>
					<div className="button">
						<Button buttonText="책으로 엮어보기" width="250px" height="50px" extraClassName="on"></Button>
					</div>
					<div className="books">{/* 책 리스트 출력하는 곳 */}</div>
				</div>
				<div className="main">
					<div className="leftSide">
						<BigDoran>
							<img className="bigDoran" src="/img/big-doran-heart-right.png" />
						</BigDoran>
					</div>
					<div className="rightSide"></div>
				</div>
			</MainBlock>
		</>
	);
}

export default Book;
