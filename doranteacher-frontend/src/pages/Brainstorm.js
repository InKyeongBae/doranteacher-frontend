import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Paint from '../components/Paint';
import GlobalStyle from '../components/GlobalStyle';
import ImgButton from '../components/ImgButton';
import ProgressBar from '../components/ProgressBar';
import BrainstormList from './BrainstormList';

const MainBlock = styled.div`
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
		width: 195px;
		margin: 20px auto;
	}

	.wordlist {
		display: inline-block;
		padding: 25px 20px;

		background: #f9de4b;
		border: 3px solid #000000;
		box-sizing: border-box;
		border-radius: 32px;

		font-family: 'NeoDunggeunmo';
		font-style: normal;
		font-weight: 400;
		font-size: 40px;
		line-height: 25px;
		text-align: center;
		color: #000000;

		&:after {
			z-index: 5;
			font-family: 'ImcreSoojin OTF';
			font-size: 30px;
			background: #e75244;
			/* width: 50px;
			height: 50px; */
			border-radius: 100%;
			width: 100%;
			padding: 0 11px;
			padding-bottom: 5px;
			content: 'x';
			color: white;
			transform: translate3d(0.2em, 0.15em, 1em);

			margin-left: 10px;
			margin-bottom: 10px;
			transition: transform 0.2s cubic-bezier(0, 0, 0.7, 1);
		}
	}
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

	const onChange = (originId, nextId) => {
		setBrainstormQs(
			brainstormQs.map((brainstormQs) =>
				brainstormQs.id === originId
					? { ...brainstormQs, active: false }
					: brainstormQs.id === nextId
					? { ...brainstormQs, active: true }
					: brainstormQs,
			),
		);
	};

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
			/>
			<MainBlock>
				<BrainstormList brainstormQs={brainstormQs} onChange={onChange} />
			</MainBlock>
		</>
	);
}

export default Brainstorm;
