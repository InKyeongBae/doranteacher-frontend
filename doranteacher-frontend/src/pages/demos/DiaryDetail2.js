import React, { useState, useEffect } from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
import Header from '../../components/Header';
import Button from '../../components/Button';
import GlobalStyle from '../../components/GlobalStyle';
import { Helmet } from 'react-helmet';
import { TypeHangul } from 'type-hangul';

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || '';
// const diary_img = process.env.PUBLIC_URL + `/img/diary_img.jpeg`;
const diary_img =
	'data:image/jpeg;base64,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';
const doran_img = process.env.PUBLIC_URL + `/img/doran_half_1.png`;

const dummyData =
	// 서버로부터 데이터를 받아와야함
	{
		weather: '화창해요',
		date: '2022년 06월 02일',
		diaryType: '요리일기',
		keywords: ['#요리', '#김치볶음밥', '#연필', '#냉장고', '#가족', '#일요일'],
		// 키워드도 json 배열 형태로 넘겨와야함
		title: '우리 김치볶음밥으로 장사해도 되겠다',
		text: '인경이랑 은서네 집에 가서 김치볶음밥을 만들었다. 친구한테 같이 밥 먹자고 전화했는데 집에 와서 요리하자고 했다. 김치랑 밥이랑 스팸을 넣었다. 계란후라이도 올렸다. 만들기는 정말 쉬웠는데 정말 정말 맛있었다! 내일은 내가 잘하는 짜파게티를 해주기로 했다. 맛있겠다!',
		before_text:
			'인경이랑 은서네 집에 가서 김치볶음밥을 만들었다. 친구한테 같이 밥 먹자고 전화했는데 집에 와서 요리하자고 했다. 김치랑 밥이랑 스팸을 넣었다. 계란후라이도 올렸다. 만들기는 정말 쉬웠는데 정말 정말 맛있었다! 내일은 내가 잘하는 짜파게티를 해주기로 했다. 맛있겠다!',
		isPrivate: true,
		comment: '맛이 없든 있든 좋을 것 같아요.',
		wantToCorrect: true,
		hasImage: true,
		// imagePath: "",
		// // 이미지 경로도 있어야함
	};

const MainBlock = styled.div`
	.main-wrapper {
		display: flex;
	}

	.leftside {
		display: flex;
		width: 650px;
		flex-direction: column;
	}
	.mini-header-wrapper {
		margin-top: 10px;
		display: flex;
	}

	.diaryType_button {
		cursor: default;
		pointer-events: none;
		padding-right: 10px;
		padding-left: 10px;
		margin-right: 5px;
		margin-left: 30px;
	}

	.keywords-wrapper {
		display: flex;
	}

	.keyword_button {
		font-size: 20px;
		cursor: default;
		pointer-events: none;
		padding-right: 3px;
		padding-left: 3px;
		margin-right: 5px;
		margin-left: 5px;
	}

	.diarycontents {
		position: relative;
		margin-top: 30px;
		margin-left: 20px;
		margin-right: 20px;
	}

	.correct_button {
		position: absolute;
		cursor: pointer;
		top: 2%;
		left: 70%;
		z-index: 1;
		font-size: 20px;
		line-height: 30px;
		height: 30px;
		border: 0;
		letter-spacing: 1px;
		cursor: pointer;
		padding: 0px 30px;
		font-family: 'Cafe24Syongsyong';
		font-style: normal;
		font-weight: 400;
		border-radius: 25px;
		border: 2px solid black;
	}
	.correct_button_on {
		background-color: #d3d3d3;
		color: #e75244;
		border: 3px solid #e75244;
	}
	.contents-box {
		background-color: white;
		border-radius: 15px;
		display: flex;
		// align-items: center;
		align-self: flex-end;

		box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
			rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
	}

	.answers {
		padding: 40px;
		align-self: flex-end;
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
	.content {
		font-family: 'KOTRAHOPE';
		font-size: 35px;
		text-align: center;
	}

	.rightside {
		display: flex;
		flex-direction: column;
		margin-right: 25px;
	}
	.comment_button {
		font-size: 30px;
		color: white;
		margin-right: 25px;
		cursor: default;
		pointer-events: none;
		border-radius: 30px;
	}
	.comment-wrapper {
		margin-top: 20px;
		margin-bottom: 20px;
	}
	.on {
		background: #e75244;
		transition: all 0.1s cubic-bezier(0, 0, 0.7, 1);
		top: 4px;
		left: 3.5px;
		&:before {
			top: -4px;
			left: -4.7px;
		}
	}

	.comment-title-wrapper {
		margin-top: 50px;
		margin-right: 30px;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}

	.comment-box {
		line-height: 50px;
		text-align: center;
		// margin-top: 20px;
		width: 420px;
		font-size: 25px;
		height: 50px;
		background-color: #f9de4b;
		outline: 0;
		border: 0;
		letter-spacing: 1px;
		// cursor: pointer;
		position: relative;
		padding: 3px 35px;
		font-family: 'Cafe24Syongsyong';
		font-style: normal;
		font-weight: 400;

		border-radius: 20px;
		border: 2px solid black;
		transition: transform 0.2s cubic-bezier(0, 0, 0.7, 1);

		&:before {
			z-index: -1;
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			content: '';
			width: 100%;
			height: 100%;
			position: absolute;
			background: white;
			transform: translate3d(0.2em, 0.15em, 1em);
			border-radius: 20px;
			border: 2px solid black;
			transition: transform 0.2s cubic-bezier(0, 0, 0.7, 1);
			&:active {
				z-index: -1;
			}
		}
	}
	.photo-box {
		text-align: center;
		margin-top: 20px;
		width: 420px;
		font-size: 25px;
		height: 300px;
		background-color: #f9de4b;
		outline: 0;
		border: 0;
		letter-spacing: 1px;
		// cursor: pointer;
		position: relative;
		padding: 3px 35px;
		font-family: 'Cafe24Syongsyong';
		font-style: normal;
		font-weight: 400;

		border-radius: 20px;
		border: 2px solid black;
		transition: transform 0.2s cubic-bezier(0, 0, 0.7, 1);

		&:before {
			z-index: -1;
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			content: '';
			width: 100%;
			height: 100%;
			position: absolute;
			background: white;
			transform: translate3d(0.2em, 0.15em, 1em);
			border-radius: 20px;
			border: 2px solid black;
			transition: transform 0.2s cubic-bezier(0, 0, 0.7, 1);
			&:active {
				z-index: -1;
			}
		}
	}
	.diary_img {
		margin-top: 30px;
		border-radius: 15px;
		transition: all 0.2s linear;
		// box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
		//     rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
		//     rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
	}

	.diary_img:hover {
		transform: scale(1.28);
	}

	.mama {
		color: red;
	}

	#sub {
		font-size: 30px;
		text-decoration: none;
		line-height: 60px;
		border-bottom: 2px solid black;
	}
`;

function DiaryDetail2() {
	// console.log(getStringDate(new Date()));
	const [correct, setCorrect] = useState(false);
	console.log(correct);

	return (
		<>
			<GlobalStyle backColor="yellow" />

			<Header isUndo />

			<MainBlock>
				<div className="main-wrapper">
					<div className="leftside">
						<div className="mini-header-wrapper">
							<div className="diaryType-wrapper">
								<Button
									buttonText={dummyData.diaryType}
									extraClassName="diaryType_button"
									inputColor="purple"
									width="130px;"
								></Button>
							</div>
							<div className="keywords-wrapper">
								{dummyData.keywords.map((it, index) => (
									<div className="key" id={index}>
										<Button
											key={index}
											buttonText={it}
											width="120px;"
											inputColor="green"
											extraClassName="keyword_button"
										></Button>
									</div>
								))}
							</div>
						</div>
						<div className="diarycontents">
							<div className="contents-box">
								<div className="answers">
									<div className="answer" id="sub">
										날짜 | {dummyData.date}
									</div>
									<div className="answer" id="sub">
										날씨 | {dummyData.weather}
									</div>
									<div className="answer" id="sub">
										제목 | {dummyData.title}
									</div>
									{!correct ? (
										<div className="answer">{dummyData.text}</div>
									) : (
										<div className="answer">
											{/* 영화 닥터스트레인지를 봤다. 이 영화가{' '}
											<span className="mama">개봉 하는</span> 날만 계속{' '}
											<span className="mama">기다려따</span>. 주인공이 마법을 하는데 화려한 기술이
											정말 멋있었다. 영화를 보면서 나도 마법을 할 수 있는 상상을 했다.
											닥터스트레인지는 <span className="mama">기대 만큼</span> 재미있었다. 별점
											만점이다. */}
											인경이랑 은서<span className="mama">내</span> 집에 가서{' '}
											<span className="mama">김치보끔밥</span>을 만들었다. 친구한테 같이 밥 먹자고
											전화했는데 집에 와서 요리하자고 했다. 김치랑 밥이랑 스팸을{' '}
											<span className="mama">너었따.</span>. 계란후라이도 올렸다. 만들기는 정말
											쉬웠는데 정말 정말 맛있었다! 내일은 내가 잘하는 짜파게티를 해주기로 했다.
											맛있겠다!
										</div>
									)}
								</div>
								{dummyData.wantToCorrect ? (
									<div
										className={['correct_button', correct === true ? `correct_button_on` : ''].join(
											' ',
										)}
										onClick={() => setCorrect(!correct)}
									>
										맞춤법 비교
									</div>
								) : (
									''
								)}
							</div>
						</div>
					</div>
					<div className="rightside">
						<div className="comment-wrapper">
							<div className="comment-title-wrapper">
								<img src={doran_img} height="140" width="95" alt=""></img>
								<div className="content">
									도란쌤의
									<br />
									코멘트
								</div>
							</div>
							<div className="comment-box" id="target">
								{dummyData.comment}
							</div>
							{/* <div id="target">안녕하세요.</div> */}
							<Helmet>
								<script>TypeHangul.type('#target');</script>
							</Helmet>
						</div>
						<div className="photo-wrapper">
							<div className="content">📷 사진으로 보는 일기 📷</div>
							<div className="photo-box">
								<img className="diary_img" src={diary_img} height="240" width="380" alt="" />
							</div>
						</div>
					</div>
				</div>
			</MainBlock>
		</>
	);
}

export default DiaryDetail2;
