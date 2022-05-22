import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import GlobalStyle from '../../components/GlobalStyle';
import ProgressBar from '../../components/ProgressBar';
import SentencePaint from '../diarycontents/SentencePaint';
import LeftDoran from '../../components/LeftDoran';
import { SentenceProvider, useSentenceDispatch, useSentenceState } from '../diarycontents/SentenceContext';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Step1List from './Step1List';

const MainBlock = styled.div`
	.literally {
		width: 862px;
		min-height: 453px;
	}

	.question,
	.btn {
		margin-left: 250px;
	}

	.trash {
		padding-left: 10px;
		cursor: pointer;
	}

	.centercontent {
		font-family: 'KOTRAHOPE';
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-around;
		font-style: normal;
		margin: 0 30px;
		font-weight: 380;
		font-size: 38px;
		line-height: 48px;
		text-align: center;

		div {
			display: inline-block;
			vertical-align: middle;
			margin: 40px 0;
		}

		button {
			display: inline-block;
			vertical-align: middle;
			margin: 10px 20px;
		}
	}

	.paint {
		text-align: center;
		width: 862px;
		margin: 0 auto;
		.canvas {
			.literally toolbar-at-top {
				text-align: center;
			}
		}
	}

	.buttonline {
		text-align: center;
		width: 212px;
		margin: 20px auto;
	}

	.sentencelist {
		padding: 15px;
		background: #f9de4b;
		border: 3px solid #000000;
		box-sizing: border-box;
		border-radius: 32px;
		font-family: 'KOTRAHOPE';
		font-style: normal;
		font-weight: 400;
		font-size: 40px;
		text-align: center;
		display: flex;
		align-items: center;
		color: #000000;
	}

	.answer {
		font-family: 'KOTRAHOPE';
		font-style: normal;
		font-weight: 400;
		font-size: 25px;
		line-height: 25px;
	}

	.answer {
		display: inline-flex;
		text-align: center;
		align-items: center;
	}

	.onedit,
	.offedit {
		background: white;
		box-sizing: border-box;
		border-radius: 32px;
		font-family: 'Cafe24Syongsyong';
		font-style: normal;
		font-size: 25px;
		display: inline-flex;
		width: 700px;
		align-items: center;
		color: #000000;
		padding: 30px 15px;
		margin-left: 10px;
	}

	.offedit {
		height: 38px;
	}

	.xbutton {
		z-index: 5;
		display: inline-block;
		font-family: 'soojin';
		font-size: 30px;
		background: #e75244;
		width: 50px;
		height: 50px;
		border-radius: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: white;
		margin-left: 5px;
	}

	.description {
		font-family: 'Cafe24Syongsyong';
		font-style: normal;
		font-size: 25px;
		color: white;
		line-height: 35px;
	}

	.btn {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-around;
	}
`;

const NextButtonStyle = styled.div`
	text-align: center;
	padding: 20px 0;
`;

function Step1() {
	const navigate = useNavigate('');
	const StyledContainer = styled(ToastContainer)`
		&&&.Toastify__toast-container {
			bottom: 80px;
			right: 20px;
		}
		.Toastify__toast {
			font-size: 30px;
		}
		.Toastify__toast-body {
			font-family: 'KOTRAHOPE';
			font-style: normal;
			font-size: 24px;
			color: black;
		}
		.Toastify__progress-bar {
		}
	`;

	const lessNotify = () => {
		toast.error('대답을 써야 다음 질문을 볼 수 있어요!', {
			position: toast.POSITION.BOTTOM_RIGHT,
			autoClose: 3000,
		});
	};

	return (
		<SentenceProvider>
			<GlobalStyle backColor="purple" />
			<Header
				isProgress
				isLogout
				isImgBtn
				progress={
					<ProgressBar
						progressText={'4.일기쓰기'}
						progressWidth={'50'}
						progressColor={'#E75244'}
					></ProgressBar>
				}
				backColor="purple"
			/>
			<MainBlock>
				<LeftDoran />
				<Step1List />
				<div className="paint" style={{ paddingLeft: '250px' }}>
					<SentencePaint />
				</div>
			</MainBlock>
			<StyledContainer>
				<ToastContainer />
			</StyledContainer>
		</SentenceProvider>
	);
}

export default Step1;
