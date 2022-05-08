import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import GlobalStyle from '../../components/GlobalStyle';
import ProgressBar from '../../components/ProgressBar';
import SentencePaint from '../diarycontents/SentencePaint';
import LeftDoran from '../../components/LeftDoran';
import { SentenceProvider } from '../diarycontents/SentenceContext';
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
	
	.question {
		margin-left: 250px;
	}

	.centercontent {
		font-family: 'NeoDunggeunmo';
		font-style: normal;
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
		font-family: 'NeoDunggeunmo';
		font-style: normal;
		font-weight: 400;
		font-size: 40px;
		text-align: center;
		display: flex;
		align-items: center;
		color: #000000;
	}

	.onedit {
		background: white;
		box-sizing: border-box;
		border-radius: 32px;
		font-family: 'NeoDunggeunmo';
		font-style: normal;
		font-weight: 400;
		font-size: 40px;
		text-align: center;
		display: inline-block;
		max-width: calc(100% - 32px);
		align-items: center;
		color: #000000;
	}

	.xbutton {
		z-index: 5;
		display: inline-block;
		font-family: 'ImcreSoojin OTF';
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
		font-family: '상상토끼 꽃집막내딸 OTF';
		font-style: normal;
		font-size: 25px;
		color: white;
		line-height: 35px;
	}

`;

const NextButtonStyle = styled.div`
	text-align: center;
	padding: 20px 0;
`;

function Step1() {
	const [step1Qs, setStep1Qs] = useState([
		{
			id: 1,
			question: '오늘 일기로 쓰고 싶은 일이 있었나요?',
			active: true,
		},
		{
			id: 2,
			question: '오늘 아침을 생각하면 무엇이 가장 떠오르나요?',
			active: false,
		},
		{
			id: 3,
			question: '오늘 점심을 생각하면 무엇이 가장 떠오르나요?',
			active: false,
		},
		{
			id: 4,
			question: '오늘 저녁을 생각하면 무엇이 가장 떠오르나요?',
			active: false,
		},
		{
			id: 5,
			question: '지금 눈 앞에 무엇이 보이나요?',
			active: false,
		}
	]);

	function onChange(originId, nextId) {
		setStep1Qs(
			step1Qs.map((step1Qs) =>
				step1Qs.id === originId
					? { ...step1Qs, active: false }
					: step1Qs.id === nextId
					? { ...step1Qs, active: true }
					: step1Qs,
			),
		);
	}

	const nowText = step1Qs.filter((step1Qs) => step1Qs.active);

	const [lenSentences, setLenSentences] = useState(0);
	const countSentences = (x) => {
		console.log(x);
		setLenSentences(x);
	};

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
			font-family: 'NeoDunggeunmo';
			font-style: normal;
			font-size: 24px;
			color: black;
		}
		.Toastify__progress-bar {
		}
	`;

	const lessNotify = () => {
		toast.error('단어가 부족해요!', {
			position: toast.POSITION.BOTTOM_RIGHT,
			autoClose: 3000,
		});
	};

	const moreNotify = () => {
		toast.error('단어가 너무 많아요!', {
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
				<Step1List step1Qs={step1Qs} onChange={onChange} countSentences={countSentences} />
				<div className="paint" style={{ paddingLeft: '250px' }}>
					<SentencePaint />
				</div>
				<div className="nextBtn">
					<NextButtonStyle>
						<Button
							buttonText="다음"
							type="submit"
							outputColor="red"
							className="button"
							onClick={lessNotify}
						></Button>
					</NextButtonStyle>
				</div>
			</MainBlock>
			<StyledContainer>
				<ToastContainer />
			</StyledContainer>
		</SentenceProvider>
	);
}

export default Step1;
