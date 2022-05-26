import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import Button from '../../components/Button';
import GlobalStyle from '../../components/GlobalStyle';
import Header from '../../components/Header';
import LeftDoran from '../../components/LeftDoran';
import ProgressBar from '../../components/ProgressBar';
import TitlePaint from './TitlePaint';

const MainBlock = styled.div`
	.literally {
		width: 862px;
		min-height: 243px;
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

function Title() {
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
	const NextButtonStyle = styled.div`
		text-align: center;
		padding: 20px 0;
	`;

	const [check, setCheck] = useState('');

	return (
		<div>
			<GlobalStyle backColor="green" />
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
				backColor="green"
			/>
			<MainBlock>
				<LeftDoran />
				<div className="question">
					<div className="centercontent">
						<div className="questioncontent">
							오늘 일기와 가장 어울리는
							<br />
							제목을 써 볼까요?
						</div>
					</div>
				</div>
				<div className="paint" style={{ paddingLeft: '250px' }}>
					<TitlePaint />
					<div className="nextBtn">
						<NextButtonStyle>
							<Button
								buttonText="다음"
								type="submit"
								outputColor="red"
								inputColor="purple"
								className="button"
								// onClick={
								// 	lenWords < 5
								// 		? lessNotify
								// 		: lenWords > 10
								// 		? moreNotify
								// 		: () => navigate('/writing/diary-type')
								// }
							></Button>
						</NextButtonStyle>
					</div>
				</div>
			</MainBlock>
			<StyledContainer>
				<ToastContainer />
			</StyledContainer>
		</div>
	);
}

export default Title;
