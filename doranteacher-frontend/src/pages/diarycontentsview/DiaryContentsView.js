import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../components/GlobalStyle';
import Header from '../../components/Header';
import LeftDoran from '../../components/LeftDoran';
import ProgressBar from '../../components/ProgressBar';
import { useSentenceState } from '../diarycontents/SentenceContext';

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
`;

function DiaryContentsView() {
	const sentences = useSentenceState();
	const answers = sentences.map(s => s.answer);
	console.log(answers);
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
						progressWidth={'50'}
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
				<div className="diarycontents" style={{ paddingLeft: '250px' }}>
					
				</div>
			</MainBlock>
		</div>
	);
}

export default DiaryContentsView;
