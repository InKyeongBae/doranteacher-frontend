import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import WordPaint from '../components/WordPaint';
import GlobalStyle from '../components/GlobalStyle';
import ProgressBar from '../components/ProgressBar';
import BrainstormList from './BrainstormList';
import LeftDoran from '../components/LeftDoran';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const MainBlock = styled.div`
	.literally {
		width: 562px;
		min-height: 243px;
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

	.questioncontent {
		width: 900px;
	}

	.paint {
		text-align: center;
		width: 562px;
		margin: 0 auto;
		.canvas {
			.literally toolbar-at-top {
				text-align: center;
			}
		}
	}

	.buttonline {
		text-align: center;
		margin: 20px auto;
	}

	.wordlist {
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
		margin: 5px 5px;
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

	.description,
	.word-count {
		font-family: '상상토끼 꽃집막내딸 OTF';
		font-style: normal;
		font-weight: 350;
		font-size: 25px;
		color: white;
		line-height: 35px;
	}

	.word-count {
		margin-left: 10px;
		background-color: white;
		padding: 2px 13px;
		box-sizing: border-box;
		border-radius: 30px;
		color : #e75244;
	}
`;

const NextButtonStyle = styled.div`
	position: fixed;
	bottom: 0;
	padding: 0px 0px 50px 970px;
`;

function Brainstorm() {
	const [brainstormQs, setBrainstormQs] = useState([
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
		},
		{
			id: 6,
			question: '요즘 즐겨하고 있는 활동이 있나요?',
			active: false,
		},
		{
			id: 7,
			question: '오늘 무슨 과목을 공부했나요?',
			active: false,
		},
		{
			id: 8,
			question: '오늘 나를 행복하게 했던 일이나 사람이 있었나요?',
			active: false,
		},
		{
			id: 9,
			question: '오늘 나를 슬프게 했던 일이나 사람이 있었나요?',
			active: false,
		},
		{
			id: 10,
			question: '오늘 나를 화나게 했던 일이나 사람이 있었나요?',
			active: false,
		},
	]);

	function onChange(originId, nextId) {
		setBrainstormQs(
			brainstormQs.map((brainstormQs) =>
				brainstormQs.id === originId
					? { ...brainstormQs, active: false }
					: brainstormQs.id === nextId
					? { ...brainstormQs, active: true }
					: brainstormQs,
			),
		);
	}

	const nowText = brainstormQs.filter((brainstormQs) => brainstormQs.active);

	const navigate = useNavigate('');

	return (
		<>
			<GlobalStyle backColor="red" />
			<Header
				isProgress
				isLogout
				isImgBtn
				progress={
					<ProgressBar
						progressText={'2.글감찾기'}
						progressWidth={'25'}
						progressColor={'#E75244'}
					></ProgressBar>
				}
				backColor="red"
			/>
			<MainBlock>
				<LeftDoran text={nowText} />
				<BrainstormList brainstormQs={brainstormQs} onChange={onChange} />
				<div className="paint">
					<WordPaint />
				</div>
			</MainBlock>
			<NextButtonStyle>
				<Button
					buttonText="다음"
					type="submit"
					outputColor="red"
					className="button"
					onClick={() => navigate('/writing/start')}
				></Button>
			</NextButtonStyle>
		</>
	);
}

export default Brainstorm;
