import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Paint from '../components/Paint';
import GlobalStyle from '../components/GlobalStyle';
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
		width: 195px;
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
		display : flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: white;
		margin-left: 5px;
	}
`;


function Step1() {
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
		/>
		<MainBlock>
			<div className="paint">
				<Paint />
			</div>
		</MainBlock>
	</>
);
}

export default Step1;