import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Button from '../../components/Button';
import GlobalStyle from '../../components/GlobalStyle';
import Header from '../../components/Header';
import LeftDoran from '../../components/LeftDoran';
import NextButton from '../../components/NextButton';
import ProgressBar from '../../components/ProgressBar';
import { useSentenceState } from '../step1/SentenceContext';

const MainBlock = styled.div`
	.question {
		margin-left: 250px;
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

	.diarycontents {
		margin-top: 20px;
		margin-left: 360px;
		margin-right: 110px;
	}

	.contents-box {
		background-color: white;
		border-radius: 15px;
		min-height: 60vh;

		box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
			rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
	}

	.answers {
		padding: 30px;
	}
	.answer {
		font-family: 'Cafe24Syongsyong';
		font-style: normal;
		font-weight: 400;
		font-size: 40px;
		line-height: 40px;
		word-wrap: break-word;
		/* padding: 7px 0; */
		text-decoration: underline;
		text-underline-offset: 17px;
		text-decoration-thickness: 2px;
		line-height: 60px;
		border-bottom: 2px solid black;
	}

	.container {
		margin-top: 30px;
		margin-right: 100px;
	}
`;

const NextButtonStyle = styled.div`
	text-align: center;
	padding: 20px 0;
`;

function DiaryContentsViewStep1() {
	const [state, setState] = useState(false);
	const answer = localStorage.getItem('text');
	const navigate = useNavigate('');

	function setAnimation() {
		setState(true);
		setTimeout(function setNavi() {
			navigate('/writing/title');
		}, 1800);
	}

	const DojangBlock = styled.div`
		position: fixed;
		width: 638px;
		height: 638px;
		bottom: 70px;
		right: 130px;
		background: url(/img/dojang1.png);
		animation-name: stampani;
		animation-duration: 1.3s;
		animation-iteration-count: 1;
		animation-timing-function: ease;

		@keyframes stampani {
			0% {
				transform: scale(1);
				opacity: 0;
			}
			50% {
				transform: scale(5);
				opacity: 0;
			}
			100% {
				transform: scale(1);
				opacity: 1;
			}
		}
	`;

	return (
		<div>
			<GlobalStyle backColor="purple" />
			<Header
				isProgress
				isLogout
				isImgBtn
				progress={
					<ProgressBar
						progressText={'5.일기완성'}
						progressWidth={'70'}
						progressColor={'#E75244'}
					></ProgressBar>
				}
				backColor="purple"
			/>
			<MainBlock>
				<LeftDoran />
				<div className="question">
					<div className="centercontent">
						<div className="questioncontent">
							축하해요! 이제 거의 다 했어요!
							<br />
							일기 내용을 한 번 확인해볼까요?
						</div>
					</div>
				</div>
				<div className="diarycontents">
					<div className="contents-box">
						<div className="answers">
							<div className="answer">{answer}</div>
						</div>
					</div>
				</div>
				{state ? (
					<DojangBlock>
						<div className="dojang-icon"></div>
					</DojangBlock>
				) : (
					''
				)}
				<NextButton onClick={() => setAnimation()} />
			</MainBlock>
		</div>
	);
}

export default DiaryContentsViewStep1;
