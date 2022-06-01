import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button';
import GlobalStyle from '../../components/GlobalStyle';
import Header from '../../components/Header';
import LeftDoran from '../../components/LeftDoran';
import NextButton from '../../components/NextButton';
import ProgressBar from '../../components/ProgressBar';
import { useSentenceDispatch, useSentenceNextId, useSentenceState } from './SentenceContext';
import SentencePaint from './SentencePaint';

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
		font-style: normal;
		margin: 0 30px;
		font-weight: 380;
		font-size: 38px;
		justify-content: space-around;
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

	.answer,
	.editbox {
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
		width: 650px;
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
	.mission {
		height: 90px;
		display: flex;
		justify-content: center;
		flex-flow: row nowrap;
		text-align: center;
		align-items: center;
		margin-bottom: 20px;
	}

	.missionimg {
		display: inline-flex;
		width: 258px;
		height: 90px;
		background: url(/img/mission.png);
	}

	.talk {
		display: inline-flex;
		align-items: center;
		font-family: 'Cafe24Syongsyong';
		font-size: 23px;
		padding: 0 10px;
		line-height: 30px;
		/* margin: 10px 0; */
	}
`;

function Step2() {
	const navigate = useNavigate('');
	const step2 = useSentenceState();

	function pagemove() {
		var diaries = '';
		for (var i = 0; i < step2.length; i++) {
			if (step2[i].answer !== '') {
				diaries += step2[i].answer;
			}
		}
		localStorage.setItem('text', diaries);
		navigate('/writing/step2/diary-contents-view');
	}

	return (
		<>
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
				{/* <Step1List nextNotify={nextNotify} prevNotify={prevNotify} levelNotify={levelNotify} /> */}
				<div className="question">
					<div className="centercontent">
						<div className="questioncontent">
							오늘 칭찬하고 싶은 사람은 누군가요?
							<br />왜 그 사람을 칭찬하고 싶나요?
							<br />그 사람의 행동을 봤을 때 어떤 기분이 들었나요?
							<br />그 사람에게 칭찬하는 말을 한 번 남겨볼까요?
							<br />
							방금 칭찬을 하면서 어떤 기분이 들었나요?
						</div>
					</div>
					<div className="mission">
						<div className="missionimg"></div>
						<div className="talk">
							<span>
								<span style={{ backgroundColor: '#5DCB83', color: 'white' }}>대화체</span>를 사용하여
								일기를 써 보세요. <br />
								대화체는 <span style={{ backgroundColor: '#5DCB83', color: 'white' }}>큰따옴표</span>를
								감싸주어야합니다 !
							</span>
						</div>
					</div>
				</div>

				<div className="paint" style={{ paddingLeft: '250px' }}>
					<SentencePaint />
					<NextButton onClick={pagemove} />
				</div>
			</MainBlock>
		</>
	);
}

export default Step2;
